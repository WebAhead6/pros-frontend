import React from "react";
import "./Profission.css";

const Profission = ({ profIcon, setProfissionName, handleClick }) => (
  <div className="profission" onClick={handleClick}>
    Icon
    <img className="profissionIcon" src={profIcon} />
    <div className="name">Name Of Profission {setProfissionName}</div>
    
  </div>
);
export default Profission;
//handleClick
