import React, {Component} from "react";
import {useForm} from "react-hook-form";
import loginpic from "./logini.png";
import {Link} from "react-router-dom";
import Navbar from "../AdminPanel/Navbar";
import "../AdminPanel/adminPanel.module.css";

export function Login(props) {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    if (
      data.email.toLowerCase() === "admin@admin.com" &&
      data.mobile === "0547259369" &&
      data.password === "adminadmin1"
    ) {
      props.history.push("/admin");
    } else {
      props.history.push("/");
    }
  };
  return (
    <div>
      <Navbar />

      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="imageContainer">
            <img src={loginpic}></img>
          </div>

          <form className="_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                ref={register({required: true, pattern: /^\S+@\S+$/i})}
              />
              <div className="errors">
                {errors.email && "email not valid, please check"}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile number</label>
              <input
                type="tel"
                placeholder="Mobile number"
                name="mobile"
                ref={register({required: true, minLength: 6, maxLength: 12})}
              />
              <div className="errors">
                {errors.mobile && "mobile Number not valid"}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                ref={register({required: true, minLength: 8})}
              />
              <div className="errors">
                {errors.password && "password error, please recheck"}
              </div>
            </div>

            <button type="submit" className="btn">
              Login
            </button>
            <br></br>
            <Link to="/register">Not A registered User? register now!</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
