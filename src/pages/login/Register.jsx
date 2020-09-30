import React, {Component} from "react";
import {useForm} from "react-hook-form";
import loginpic from "./logini.png";
import {Link} from "react-router-dom";
import Navbar from "../AdminPanel/Navbar";
import "../AdminPanel/adminPanel.module.css";

export function Register(props) {
  const [worker, setWorker] = React.useState(false);
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    // data.preventDefault();
    console.log(data);
    props.history.push("/");
    // props.history.push("/thank-you");
  };

  return (
    <div className="extendedfooter">
      <Navbar />

      <div className="base-container">
        {/* <Navbar /> */}

        <div className="header">Register</div>
        <div className="content">
          <div className="imageContainer">
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
              <div className="errors">
                {errors.firstname && "first name is required."}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                ref={register({required: true, maxLength: 100})}
              />
              <div className="errors">
                {errors.lastname && "Last name is required."}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                ref={register({required: true, pattern: /^\S+@\S+$/i})}
              />
              <div className="errors">{errors.email && "email not valid"}</div>
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
                {errors.mobile && "mobile number is required."}
              </div>
            </div>
            <label className="avatarlabel">Select Avatar:</label>
            <div class="cc-selector">
              <input id="avatar1" type="radio" name="credit-card" value="1" />
              <label class="drinkcard-cc avatar1" for="avatar1">
                1
              </label>
              <input id="avatar2" type="radio" name="credit-card" value="2" />
              <label class="drinkcard-cc avatar2" for="avatar2">
                2
              </label>
              <input id="avatar3" type="radio" name="credit-card" value="3" />
              <label class="drinkcard-cc avatar3" for="avatar3">
                3
              </label>
              <input id="avatar4" type="radio" name="credit-card" value="4" />
              <label class="drinkcard-cc avatar4" for="avatar4">
                4
              </label>
              <input id="avatar5" type="radio" name="credit-card" value="5" />
              <label class="drinkcard-cc avatar5" for="avatar5">
                5
              </label>
            </div>

            <div className="form-group radioSection">
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
                <div className="errors"></div>
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
              <div className="errors">
                {errors.password && "password must be at least 8 chars long"}
              </div>
            </div>

            <button type="submit" className="btn">
              Register
            </button>
            <br></br>
            <Link to="/login">Already Registered? Login now!</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
