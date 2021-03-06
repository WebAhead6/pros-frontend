import React from "react";
import "./Profission.css";

const Profission = ({profIcon, setProfissionName, handleClick}) => (
  <div className="profission" onClick={() => handleClick(setProfissionName)}>
    <div className="imgP">
      <img className="profissionIcon" src={profIcon} alt="" />
    </div>
    <div className="nameP">
      <h4>{setProfissionName}</h4>
    </div>
    <div className="imgP">
      <img className="profissionIcon" src={profIcon} alt="" />
    </div>
  </div>
);

export default Profission;
