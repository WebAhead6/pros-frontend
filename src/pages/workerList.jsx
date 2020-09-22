import React from "react";
import Worker from "./component/worker";
import "./workerList.css";
import { useHistory } from "react-router-dom";

const WorkerList = function () {
  const [workers, setWorkers] = React.useState([{ name: "Mervat" }]);
  const history = useHistory();
  const handleClick = () => {
    history.push("/profile");
  };
  return (
    <div className="list">
      <h1 className="professionTitle">workerList"{}"</h1>
      <span></span>
      <button className="rating">Rating</button>
      <button className="location">Location</button>
      <button className="trustedWorkers">Trusted Workers</button>
      <div>
        {workers.map((worker) => (
          <Worker worker={worker} handleClick={handleClick} />
        ))}
      </div>
      <Worker handleClick={handleClick} />
      <Worker handleClick={handleClick} />
      <Worker handleClick={handleClick} />
      <button className="back">back</button>
    </div>
  );
};

export default WorkerList;
