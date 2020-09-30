import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./WorkerDetails.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./adminPanel.module.css";
import "../../App.scss";

class WorkerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 4,
      workerReviews: this.props.worker.reviews,
      expand: false,
      review: "",
    };

    this.changeStars = this.changeStars.bind(this);
    this.updateReviews = this.updateReviews.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
  }

  changeStars(newRating) {
    this.setState({stars: newRating.rating});
  }

  toggleForm() {
    this.setState({expand: !this.state.expand, review: ""});
  }

  handleReviewChange(e) {
    this.setState({
      review: e.target.value,
    });
  }

  updateReviews(reviewEvent) {
    reviewEvent.preventDefault();

    this.setState({
      workerReviews: [...this.state.workerReviews, this.state.review],
    });
    this.toggleForm();
  }

  render() {
    let {worker} = this.props;

    return (
      <div className="WorkerDetails row justify-content-center mt-5">
        <div className="col-11 col-lg-5">
          <div className="WorkerDetails-card card">
            <img className="card-img-top" src={worker.image} alt="" />
            <div className="card-body">
              <h2 className="card-title">{worker.name}</h2>
              <h3 className="card-subtitle text-muted">057-85472596</h3>
              <h5 className="card-subtitle text-muted">
                <Rater
                  className="worker-stars"
                  rating={this.state.stars}
                  onRate={this.changeStars}
                />
              </h5>
            </div>

            <div className="worker-reviews">Reviews:</div>
            <ul className="list-group list-group-flush">
              {this.state.workerReviews.map((fact, i) => (
                <li className="list-group-item listItems" key={i}>
                  {fact}
                </li>
              ))}
            </ul>

            <div className="card-body">
              {this.state.expand ? (
                <div>
                  <button
                    form="reviewForm"
                    type="submit"
                    className="btn btn-info"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={this.toggleForm}
                  >
                    Close
                  </button>
                  <form
                    id="reviewForm"
                    className="reviewForm"
                    onSubmit={this.updateReviews}
                  >
                    <label htmlFor="task">Add Review:</label>
                    <input
                      className="reviewForm-task"
                      name="review"
                      placeholder="Review"
                      value={this.state.review}
                      onChange={this.handleReviewChange}
                    />
                    <br />
                    <button> Add Review </button>
                  </form>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={this.toggleForm}
                >
                  Add Review
                </button>
              )}
              <Link
                to={`/categories/${this.props.match.params.id}`}
                type="button"
                className="link"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WorkerDetails;
