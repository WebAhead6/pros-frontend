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
      <h1 className="professionTitle">Workers</h1>
      <span></span>
      <div className="WOLI">
        <div className="pages">
          <button className="rating">Rating</button>
          {/* changed the place of the bigger button just like the home page */}
          <button className="trustedWorkers">Trusted Workers</button>
          <button className="location">Location</button>
        </div>
        <div>
          {workers.map((worker) => (
            <Worker worker={worker} handleClick={handleClick} />
          ))}
        </div>
        {/* <Worker handleClick={handleClick} /> */}

        <button className="back">Back</button>
      </div>
    </div>
  );
};

export default WorkerList;
