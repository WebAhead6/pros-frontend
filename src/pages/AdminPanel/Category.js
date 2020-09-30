import React, {Component} from "react";
import WorkerBox from "./WrokerBox";
import "./Category.css";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import "./adminPanel.module.css";
import "../../App.scss";

export class Category extends Component {
  render() {
    console.log(this.props);
    const WorkerBoxes = this.props.workers.map((worker) => (
      <Link to={`${this.props.location.pathname}/${worker.name}`}>
        <WorkerBox
          background={worker.image}
          name={worker.name}
          //   category={this.props.id}
          key={worker.name}
        />
        {/*categoryId={this.props.categoryId}}*/}
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
