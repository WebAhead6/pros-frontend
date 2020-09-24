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
    <div className="firstColW">
      <div className="picW">
        <h5>ProfilePic</h5>
        <img className="profissionIcon" src={profPic} />
      </div>
      <div className="ratingW">
        <h5>7.2♥</h5> {setRating}
      </div>
    </div>
    <div className="secColW">
      <div className="nameW">
        <h5>Worker Name</h5> {setWorkerName}{" "}
      </div>
      <div className="disciprtionW">
        <h5>Discription</h5> {setDiscription}
      </div>
      <div className="lastRowW">
        <div className="avillabilityW">
          <h5>Avillability</h5> {setAvillability}
        </div>
        <div className="workAreaW">
          <h5>Work Area</h5> {setWorkArea}
        </div>
      </div>
    </div>
    <div className="callW">
      <h5>☎</h5> {setCall}
    </div>
  </div>
);
export default Worker;
