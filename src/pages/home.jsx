import React, { useEffect, useState, useRef } from "react";
import Profission from "./component/Profission";
import "./home.css";
import { getData, API_BASE } from "../utils/data_helpers";
import { useHistory } from "react-router-dom";

const Home = function () {
  const [professions, setProfessions] = useState([
    { name: "Electric", identifyLet: "" },
  ]);
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  const history = useHistory();
  const handleClick = (profession) => {
    // "/workers/profession/:name" to replace later **
    localStorage.setItem("profesName2", profession);
    history.push("/workerList");
  };

  useEffect(() => {
    const url = `/professions`;

    getData(url).then(({ data }) => setProfessions(data));
  }, []);

  if (!professions) {
    return <h3>...Loading</h3>;
  }
  // localStorage.setItem("profs", professions);

  const handleClickOutSide = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const setProfeDex = (profe) => {
    setSearch(profe);
    setDisplay(false);
  };

  return (
    <div className="allH">
      <h1 className="title">Home/Professions</h1>
      <div className="beyondTitle">
        <div className="pagesH">
          <button className="NewsH"> News</button>
          <button className="trustedWorkersH">Trusted Workers</button>
          <button className="ReviewsH">Reviews</button>
        </div>

        {/* in order to have the search icon just like in the design we need a wrapper 
        element (the div) to be relatic and the icon absolute */}
        <div className="icon-input-wrapper" ref={wrapperRef}>
          <img src="/search.svg" className="input-icon" alt="" />
          <input
            type="search"
            name=""
            placeholder="Search for Professional Worker"
            className="searchProfessional"
            onClick={() => setDisplay(!display)}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {professions
          .filter(({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) > -1)
          .map((profession) => (
            <Profission
              setProfissionName={profession.name}
              profIcon={profession.icon}
              handleClick={handleClick}
            />
          ))}

        <br />
      </div>
    </div>
  );
};

export default Home;
