import React, {Component} from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "../../App.scss";

import {Link} from "react-router-dom";
import "./Navbar.css";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <h1>React Fixers</h1>
          {/* <div className="links"> */}
          <Link exact to="/admin" className="nav-link">
            Fixers
          </Link>
          <Link exact to="/" className="nav-link">
            Home
          </Link>
          {/* </div> */}
        </div>

        <div className="select-container">
          <div className="category-title">{this.props.url}</div>
          {/* <Select>
            <MenuItem value="1">1 - </MenuItem>
            <MenuItem value="2">2 - </MenuItem>
            <MenuItem value="3">3 - </MenuItem>
          </Select> */}
        </div>
      </header>
    );
  }
}

export default Navbar;
