import React from "react";
import "./Profile.css";
// import { useHistory } from "react-router-dom";
// let history = useHistory();
// function onClickGoBackArrow() {
//   history.goBack();
// }

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
        <h5>{setRating} ♥</h5>
      </div>
      <div className="name">
        <h5>{setWorkerName}</h5>
      </div>
      <div className="discription">
        <h5>“{setDiscription}”</h5>
      </div>
      <div className="moreInfo">
        <div className="avillability">
          <h5>Avillability: {setAvillability}</h5>
        </div>
        <div className="workArea">
          <h5>Work Area: {setWorkArea}</h5>
        </div>
      </div>
      <div className="reviews">
        <h5>{setReviews}</h5>
      </div>
      <div className="lastLine">
        <div className="call">
          <h5>{setCall}</h5>
        </div>
        <button className="back2">
          <h5>Back</h5>
        </button>
      </div>
    </div>
  );
export default Profile;
