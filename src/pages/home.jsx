import React from "react";
import EachProfission from "../pages/component/eachProfission";
import "./home.css";

const Home = function () {
  return (
    <div className="beyondTitle">
      <h1 className="title">home/Professions</h1>
      <div>
        <button className="News">News</button>
        <button className="Reviews">Reviews</button>
        <button className="trustedWorkers">Trusted Workers</button>
        <br />
        <br />

        <input
          type="search"
          name=""
          placeholder="Search for Professional Worker"
          className="searchProfessional"
        />
        <EachProfission />
        <EachProfission />
        <EachProfission />
        <EachProfission />
        <EachProfission />
        <EachProfission />
      </div>
    </div>
  );
};

export default Home;
