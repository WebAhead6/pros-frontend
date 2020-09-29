import React from "react";
import Worker from "./component/worker";
import Profission from "./component/Profission";
import { getData } from "../utils/data_helpers";
import "./workerList.css";
import { useHistory } from "react-router-dom";

// function onClickGoBackArrow() {
//   history.goBack();
// }

const WorkerList = function () {
  const [workers, setWorkers] = React.useState([
    { professionName: "Electricians" },
  ]);

  // const {
  //   picture,
  //   rating,
  //   fullname,
  //   description,
  //   avilability,
  //   location,
  //   phone,
  //   professionName,
  // } = workers;
  // const { professionName } = workers;
  const history = useHistory();
  const handleClick = (workerName) => {
    localStorage.setItem("WorkerName2", workerName);
    history.push("/profile");
  };
  React.useEffect(() => {
    const name = localStorage.getItem("profesName2");
    console.log(name, "local storage name");
    const url = `/workers/profession/${name}`;
    // const url = `/workers`;
    getData(url).then(({ data }) => setWorkers(data));
  }, []);
  if (!workers) {
    return <h3>...Loading</h3>;
  }

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
            ))}{" "}
            ;
          </div>
          <div>
            {/* {workers.map((worker) => (  */}
            {/* {professionName ? (
              <Profission setProfissionName={professionName} />
            ) : null} */}
            {/* ))} */}
          </div>
        </div>
        {/* <Worker handleClick={handleClick} /> */}

        <button className="back">Back</button>
      </div>
    </div>
  );
};

export default WorkerList;
