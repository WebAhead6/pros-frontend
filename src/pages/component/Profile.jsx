import React from "react";
import "./Profile.css";
const WorkerProfile = ({
  profPic,
  setWorkerName,
  setRating,
  setDiscription,
  setAvillability,
  setWorkArea,
  setCall,
  setReviews,
}) => (
  <div>
    <span></span>
    ProfilePic
    <img className="profissionIcon" src={profPic} />
    <div className="name">Worker Name {setWorkerName} </div>
    <div className="Rating">Rating {setRating}</div>
    <div className="discription">Discription {setDiscription}</div>
    <div className="avillability">Avillability {setAvillability}</div>
    <div className="workArea">Work Area {setWorkArea}</div>
    <div className="reviews">Reviews {setReviews}</div>
    <div className="call">Call {setCall}</div>
  </div>
);
export default WorkerProfile;
