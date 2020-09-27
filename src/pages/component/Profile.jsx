import React from "react";
import "./Profile.css";
const Profile = ({
  profPic,
  setWorkerName,
  setRating,
  setDiscription,
  setAvillability,
  setWorkArea,
  setCall,
  setReviews,
}) => (
  <div className="workerProfile">
    <span></span>
    <div className="image">
      <img className="profissionIcon" src={profPic} alt="" />
    </div>
    <div className="Rating">
      <h5>7.2 ♥</h5> {setRating}
    </div>
    <div className="name">
      <h5>Worker Name</h5> {setWorkerName}
    </div>
    <div className="discription">
      <h5>
        “Fixing AC’s for 10 years. Degree from Ort Braude as AC Technician.”
      </h5>
      {setDiscription}
    </div>
    <div className="moreInfo">
      <div className="avillability">
        <h5>Avillability </h5>
        {setAvillability}
      </div>
      <div className="workArea">
        <h5>Work Area</h5> {setWorkArea}
      </div>
    </div>
    <div className="reviews">
      <h5>Reviews</h5> {setReviews}
    </div>
    <div className="lastLine">
      <div className="call">
        <h5>Call</h5>
        {setCall}
      </div>
      <button className="back2">
        <h5>back</h5>
      </button>
    </div>
  </div>
);
export default Profile;
