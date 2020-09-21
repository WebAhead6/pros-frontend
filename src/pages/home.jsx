import React from "react";
import Profission from "./component/Profission";
import "./home.css";
import { getData, API_BASE } from "../utils/data_helpers";

const Home = function () {
  const [professions, setProfessions] = React.useState([{ name: "Electric" }]);
  React.useEffect(() => {
    const url = `${API_BASE}`;
    getData(url).then((data) => setProfessions(data));
  }, []);
  if (!professions) {
    return <h3>...Loading</h3>;
  }

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
          <Profission profession={profession} />
        ))}
        <Profission />
        <Profission />
        <Profission />
        <Profission />
        <Profission />
      </div>
    </div>
  );
};

export default Home;
