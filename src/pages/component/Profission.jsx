import React from "react";
import "./Profission.css";

const Profission = ({ profIcon, setProfissionName }) => (
  <div className="profission">
    Icon
    <img className="profissionIcon" src={profIcon} />
    <div className="name">Name Of Profission {setProfissionName} </div>
  </div>
);
export default Profission;
