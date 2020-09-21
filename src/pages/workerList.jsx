import React from "react";
import EachWorker from "../pages/component/eachWorkerInList";
import "./workerList.css";

const WorkerList = function () {
  return (
    <div className="list">
      <h1 className="professionTitle">workerList"{}"</h1>
      <span></span>
      <button className="rating">Rating</button>
      <button className="location">Location</button>
      <button className="trustedWorkers">Trusted Workers</button>

      <EachWorker />
      <button className="back">back</button>
    </div>
  );
};

export default WorkerList;
