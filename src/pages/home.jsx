import React from "react";
import Profission from "./component/Profission";
import "./home.css";
import { getData, API_BASE } from "../utils/data_helpers";
import { useHistory } from "react-router-dom";

const Home = function () {
  const [professions, setProfessions] = React.useState([{ name: "Electric" }]);
  const history = useHistory();
  const handleClick = () => {
    // "/workers/profession/:name" to replace later **
    history.push("/workerList");
  };
  // **** CONNECTION WITH BACKEND ****//
  // React.useEffect(() => {
  //   const url = `${API_BASE}`;
  //   getData(url).then((data) => setProfessions(data));
  // }, []);
  // if (!professions) {
  //   return <h3>...Loading</h3>;
  // }

  return (
    <div className="beyondTitle">
      <h1 className="title">home/Professions</h1>
      <div>
        <button className="News">News</button>
        <button className="Reviews">Reviews</button>
        <button className="trustedWorkers">Trusted Workers</button>
        <br />
        <br />

        <input
          type="search"
          name=""
          placeholder="Search for Professional Worker"
          className="searchProfessional"
        />
        {professions.map((profession) => (
          <Profission profession={profession} handleClick={handleClick} />
        ))}
        {/* DELETE AFTER CONNECTING TO BACKEND */}
        <Profission handleClick={handleClick} />
        <Profission handleClick={handleClick} />
        <Profission handleClick={handleClick} />
        <Profission handleClick={handleClick} />
        <Profission handleClick={handleClick} />
        <br />
      </div>
    </div>
  );
};

export default Home;
