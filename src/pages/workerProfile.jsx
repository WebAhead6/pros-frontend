import React from "react";
import WorkerProfile from "./component/Profile";
import Worker from "./component/worker";
import "./workerProfile.css";
import { getData } from "../utils/data_helpers";

const WProfile = function () {
  const [profiles, setProfiles] = React.useState([{ name: "Mervat" }]);
  React.useEffect(() => {
    const name = localStorage.getItem("WorkerName2");
    console.log(name, "local storage name");
    const url = `/workers/${name}`;
    getData(url).then(({ data }) => setProfiles(data));
  }, []);
  if (!profiles) {
    return <h3>...Loading</h3>;
  }
  // const {
  //   fullname,
  //   picture,
  //   rating,
  //   description,
  //   avilability,
  //   location,
  //   phone,
  // } = profiles;
  return (
    <div className="beyondTitle">
      <h1 className="title">Worker' Name</h1>
      <span></span>

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
      {/* {fullname ? <Worker setWorkerName={fullname} /> : null} */}
    </div>
  );
};

export default WProfile;
