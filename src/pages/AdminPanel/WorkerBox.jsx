import React, { Component } from "react";
import "./WorkerBox.css";
import "./adminPanel.module.css";
import "../../App.scss";

export class WorkerBox extends Component {
  constructor(props) {
    super();

    this.state = { accessed: false };
  }
  render() {
    //classes is baiscally what the styles above indicates
    const { name, id, background } = this.props;

    return (
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="WorkerBox"
      >
        <div className="box-content">
          <span className="worker-name"> {name} </span>
        </div>
        <div className="details">Details</div>

        <div className="white"></div>
      </div>
    );
  }
}
export default WorkerBox;
