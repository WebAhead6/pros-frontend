import React, {Component} from "react";
import "./WorkerBox.css";
import {Link} from "react-router-dom";
import "./adminPanel.module.css";
import "../../App.scss";

export class WrokerBox extends Component {
  constructor(props) {
    super(props);
    this.state = {accessed: false};
  }
  render() {
    //classes is baiscally what the styles above indicates
    const {name, id, background} = this.props;

    // temp img template
    const backgroundtemp = "https://www.w3schools.com/howto/img_avatar.png";
    return (
      <div
        style={{backgroundImage: `url(${background})`}}
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
export default WrokerBox;
