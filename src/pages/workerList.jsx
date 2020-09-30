import React from "react";
import Worker from "./component/worker";
import LocationFilter from "./component/LocationFilter";

import Profission from "./component/Profission";
import {getData} from "../utils/data_helpers";
import "./workerList.css";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


const WorkerList = function () {
  const [workers, setWorkers] = React.useState([
    {professionName: "Electricians"},
  ]);
  const history = useHistory();

  const handleClick = (workerName) => {
    localStorage.setItem("WorkerName2", workerName);
    history.push("/profile");
  };

  React.useEffect(() => {
    const name = localStorage.getItem("profesName2");

    const url = `/workers/profession/${name}`;

    // getData(url).then(({ data }) => setWorkers(data));
  }, []);

  if (!workers) {
    return <h3>...Loading</h3>;
  }

  return (
    <div className="list">
      <h1 className="professionTitle">Workers</h1>
      <div className="WOLI">
        <div className="pages">
          <button className="rating">Rating</button>
          <button className="trustedWorkers">Trusted Workers</button>
          <button className="location">Location</button>
        </div>
        <div>
          {workers.map((worker) => (
            <Worker
              profPic={worker.picture}
              setRating={worker.rating}
              setWorkerName={worker.fullname}
              setDiscription={worker.description}
              setAvillability={worker.avilability}
              setWorkArea={worker.location}
              setCall={worker.phone}
              setProName={worker.professionName}
              handleClick={handleClick}
            />
          ))}
        </div>

        <button className="back">Back</button>
      </div>
    </div>
  );
};

export default WorkerList;
