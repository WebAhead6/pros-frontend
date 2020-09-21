import React from "react";

const EachWorkerProfile = ({
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
    <div>Worker Name {setWorkerName} </div>
    <div>Rating {setRating}</div>
    <div>Discription {setDiscription}</div>
    <div>Avillability {setAvillability}</div>
    <div>Work Area {setWorkArea}</div>
    <div>Call {setCall}</div>
    <div>Reviews {setReviews}</div>
  </div>
);
export default EachWorkerProfile;
