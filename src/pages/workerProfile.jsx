import React from "react";
import Profile from "./component/Profile";
import "./workerProfile.css";

const WProfile = function () {
  const [workers, setWorkers] = React.useState([{ name: "Mervat" }]);
  return (
    <div className="beyondTitle">
      <h1 className="title">workerProfile</h1>
      <span></span>
      <Profile />
      <button className="back">back</button>
    </div>
  );
};

export default WProfile;
