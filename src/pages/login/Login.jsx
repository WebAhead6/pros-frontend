import React, {Component} from "react";
import {useForm} from "react-hook-form";
import loginpic from "./logini.png";
import {Link} from "react-router-dom";
import Navbar from "../AdminPanel/Navbar";
import "../AdminPanel/adminPanel.module.css";

export function Login() {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="base-container">
      <Navbar />
      <div className="header">Login</div>
      <div className="content">
        <div className="imageContainer">
          <img src={loginpic}></img>
        </div>

        <form className="_form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              ref={register({required: true, pattern: /^\S+@\S+$/i})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile number</label>
            <input
              type="tel"
              placeholder="Mobile number"
              name="mobile"
              ref={register({required: true, minLength: 6, maxLength: 12})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              ref={register({required: true, minLength: 8})}
            />
          </div>

          <button type="submit" className="btn">
            Login
          </button>
          <Link to="/register">Not A registered User? register now!</Link>
        </form>
      </div>
    </div>
  );
}
