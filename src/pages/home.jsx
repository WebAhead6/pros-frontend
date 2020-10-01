import React, { useEffect, useState, useRef } from "react";
import Profission from "./component/Profission";
import "./home.css";
import { getData, API_BASE } from "../utils/data_helpers";
import { useHistory } from "react-router-dom";
// import ComboBox from "./component/autoComplete";

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
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
          {display && (
            <div className="autoContainer">
              {professions
                .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
                .map((profession) => {
                  return (
                    <div
                      className="option"
                      tabIndex="0"
                      onClick={() => setProfeDex(profession.name)}
                      //onClick = {handleClick}?
                    >
                      <span> {profession.name}</span>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        {professions.map((profession) => (
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
