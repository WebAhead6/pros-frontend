import React, {Component} from "react";
import {useForm} from "react-hook-form";
import loginpic from "../login/logini.png";
import {Link} from "react-router-dom";

export function Register() {
  const [worker, setWorker] = React.useState(false);
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginpic}></img>
        </div>

        <form className="_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              ref={register({required: true, maxLength: 80})}
            />
            {errors.firstname && "first name is required."}
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              ref={register({required: true, maxLength: 100})}
            />
            {errors.lastname && "Last name is required."}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              ref={register({required: true, pattern: /^\S+@\S+$/i})}
            />
            {errors.email && "email not valid"}
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile number</label>
            <input
              type="tel"
              placeholder="Mobile number"
              name="mobile"
              ref={register({required: true, minLength: 6, maxLength: 12})}
            />
            {errors.mobile && "mobile number is required."}
          </div>
          <div className="form-group radio">
            <label>Worker?</label>

            <label htmlFor="worker">
              <input
                name="worker"
                type="radio"
                value="yes"
                ref={register({required: true})}
                onChange={() => setWorker(true)}
              />
              <span>Yes</span>
            </label>

            <label htmlFor="worker">
              <input
                placeholder="No"
                name="worker"
                type="radio"
                value="no"
                ref={register({required: true})}
                onChange={() => setWorker(false)}
              />
              <span>No</span>
            </label>
          </div>
          {worker && (
            <div className="form-group workerForm">
              <label htmlFor="title">Title</label>
              <select name="title" ref={register({required: true})}>
                <option value="electrician">Electrician</option>
                <option value="mechanic">Mechanic</option>
                <option value="engineer">Engineer</option>
                <option value="plumber">Plumber</option>
                <option value="painter">Painter</option>
                <option value="designer">Designer</option>
              </select>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              ref={register({required: true, minLength: 8})}
            />
            {errors.password &&
              "password is required. must be at least 8 chars long"}
          </div>

          <button type="submit" className="btn">
            Register
          </button>
          <Link to="/login">Already Registered? Login now!</Link>
        </form>
      </div>
    </div>
  );
}
