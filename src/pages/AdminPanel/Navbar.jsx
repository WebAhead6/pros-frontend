import React, { Component } from "react";
import "../../App.scss";

import { Link } from "react-router-dom";
import "./Navbar.css";

export default () => (
  <header className="Navbar">
    <div className="logo">
      <h1>React Fixers</h1>
      <Link exact to="/admin" className="nav-link">
        Fixers
          </Link>
      <Link exact to="/" className="nav-link">
        Home
          </Link>
    </div>

    <div className="select-container">
      {this.props.url && (
        <div className="category-title">{this.props.url}</div>
      )}
    </div>
  </header>
);
