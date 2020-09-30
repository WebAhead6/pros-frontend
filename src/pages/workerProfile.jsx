import React from "react";
import WorkerProfile from "./component/Profile";
import Worker from "./component/worker";
import "./workerProfile.css";
import { getData } from "../utils/data_helpers";

const WProfile = function () {
  const [profiles, setProfiles] = React.useState([{ name: "Mervat" }]);

  React.useEffect(() => {
    const name = localStorage.getItem("WorkerName2");

    const url = `/workers/${name}`;
    getData(url).then(({ data }) => setProfiles(data));
  }, []);

  if (!profiles) {
    return <h3>...Loading</h3>;
  }
  return (
    <div className="workerProfile-container">
      <h1 className="title">Worker' Name</h1>

      {profiles.map((workerProfile) => (
        <WorkerProfile
          profPic={workerProfile.picture}
          setRating={workerProfile.rating}
          setWorkerName={workerProfile.fullname}
          setDiscription={workerProfile.description}
          setAvillability={workerProfile.avilability}
          setWorkArea={workerProfile.location}
          setCall={workerProfile.phone}
        // setReviews={workerProfile.phone}
        />
      ))}
    </div>
  );
};

export default WProfile;
