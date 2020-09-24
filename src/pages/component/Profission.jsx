import React from "react";
import "./Profission.css";

const Profission = ({ profIcon, setProfissionName, handleClick }) => (
  <div className="profission" onClick={handleClick}>
    <div className="imgP">
      <h4>Icon</h4>
      <img className="profissionIcon" src={profIcon} />
    </div>
    <div className="nameP">
      <h4>Name Of Profission</h4> {setProfissionName}
    </div>
    <div className="imgP">
      <h4>Icon</h4>
      <img className="profissionIcon" src={profIcon} />
    </div>
  </div>
);
export default Profission;
//handleClick
