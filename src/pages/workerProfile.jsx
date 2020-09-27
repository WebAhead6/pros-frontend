import React from "react";
import WorkerProfile from "./component/Profile";
import "./workerProfile.css";
import { getData } from "../utils/data_helpers";

const WProfile = function () {
  const [profiles, setProfiles] = React.useState([{ name: "Mervat" }]);
  React.useEffect(() => {
    const url = `/workers`;
    getData(url).then(({ data }) => setProfiles(data));
  }, []);
  if (!profiles) {
    return <h3>...Loading</h3>;
  }
  return (
    <div className="beyondTitle">
      <h1 className="title">Worker' Name</h1>
      <span></span>

      {profiles.map((WorkerProfile) => (
        <WorkerProfile
          profPic={WorkerProfile.picture}
          setRating={WorkerProfile.rating}
          setWorkerName={WorkerProfile.fullname}
          setDiscription={WorkerProfile.description}
          setAvillability={WorkerProfile.avilability}
          setWorkArea={WorkerProfile.location}
          setCall={WorkerProfile.phone}
          setReviews={WorkerProfile.phone}
        />
      ))}
    </div>
  );
};

export default WProfile;
