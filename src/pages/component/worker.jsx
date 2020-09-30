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
  setProName,
  handleClick,
}) => (
    <div className="worker" onClick={() => handleClick(setWorkerName)}>
      <span></span>
      <div className="firstColW">
        <div className="picW">
          <h5>{profPic}</h5>
          <img className="profissionIcon" src={profPic} />
        </div>
        <div className="ratingW">
          <h5>{setRating}</h5>
        </div>
      </div>
      <div className="secColW">
        <div className="nameW">
          <h5>{setWorkerName}</h5>{" "}
        </div>
        <div className="disciprtionW">
          <h5>{setDiscription}</h5>
        </div>
        <div className="lastRowW">
          <div className="avillabilityW">
            <h5>{setAvillability}</h5>
          </div>
          <div className="workAreaW">
            <h5>{setWorkArea}</h5>
          </div>
        </div>
      </div>
      <div className="callW">
        <h5>☎</h5> {setCall}
      </div>
    </div>
  );
export default Worker;
