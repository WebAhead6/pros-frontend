import React from "react";
import "./worker.css";
const Worker = ({
  profPic,
  setWorkerName,
  setRating,
  setDiscription,
  setAvillability,
  setWorkArea,
  setCall,
  handleClick,
}) => (
  <div className="worker" onClick={handleClick}>
    <span></span>
    ProfilePic
    <img className="profissionIcon" src={profPic} />
    <div onClick={handleClick}>Worker Name {setWorkerName} </div>
    <div>Rating {setRating}</div>
    <div>Discription {setDiscription}</div>
    <div>Avillability {setAvillability}</div>
    <div>Work Area {setWorkArea}</div>
    <div>Call {setCall}</div>
  </div>
);
export default Worker;
