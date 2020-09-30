import React, { Component } from "react";
import WorkerBox from "./WorkerBox";
import "./Category.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./adminPanel.module.css";
import "../../App.scss";

export class Category extends Component {

  render() {

    const WorkerBoxes = this.props.workers.map((worker) => (
      <Link to={`${this.props.location.pathname}/${worker.name}`}>
        <WorkerBox
          background={worker.image}
          name={worker.name}
          key={worker.name}
        />
      </Link>
    ));

    return (
      <div className="Category">
        {/* navbar goes here */}
        <Navbar url={this.props.categoryName} />
        <div className="Category-workers">
          {/* workers boxes */}
          {WorkerBoxes}
        </div>
      </div>
    );
  }
}

export default Category;
