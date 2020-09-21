import React from "react";

const EachWorker = ({
  profPic,
  setWorkerName,
  setRating,
  setDiscription,
  setAvillability,
  setWorkArea,
  setCall,
}) => (
  <div>
    <h1>Each worker in that Profission</h1>
    <span></span>
    ProfilePic
    <img className="profissionIcon" src={profPic} />
    <div>Worker Name {setWorkerName} </div>
    <div>Rating {setRating}</div>
    <div>Discription {setDiscription}</div>
    <div>Avillability {setAvillability}</div>
    <div>Work Area {setWorkArea}</div>
    <div>Call {setCall}</div>
  </div>
);
export default EachWorker;
