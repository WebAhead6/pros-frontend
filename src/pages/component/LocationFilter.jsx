import React from "react";
import "./LocationFilter.css";

const categories = ["all", "north", "south", "east", "west", "there"];

const LocationFilter = (props) => (
  <section className="LocFilter">
    <form>
      <fieldset>
        <legend>Location</legend>
        {categories.map((Loc) => {
          return (
            <div>
              <label htmlFor={Loc}>{Loc}</label>
              <input
                type="radio"
                id={Loc}
                name="Location
                Filter"
                value={Loc}
                onChange={(event) => props.setLocFilter(event.target.value)}
              ></input>
            </div>
          );
        })}
      </fieldset>
    </form>
  </section>
);

export default LocationFilter;
