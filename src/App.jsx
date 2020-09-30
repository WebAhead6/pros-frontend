import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import WProfile from "./pages/workerProfile";
import WorkerList from "./pages/workerList";
import Home from "./pages/home";
import {Login, Register} from "./login/Index";
import Category from "./pages/AdminPanel/Category";
import seedWorkers from "./pages/AdminPanel/seedWorkers";
import WorkerDetails from "./pages/AdminPanel/WorkerDetails";
import CategoryList from "./pages/AdminPanel/CategoryList";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  findCategory(id) {
    return seedWorkers.find((category) => {
      return category.id == id;
    });
  }

  getWorker = (props) => {
    let name = props.match.params.name;
    // getting the worker list based on the URL vv
    // console.log(
    //   "gettttWORKKEEERRR",
    //   this.findCategory(props.match.params.id).workers
    // );
    let currentWorker = this.findCategory(props.match.params.id).workers.find(
      (worker) => worker.name.toLowerCase() === name.toLowerCase()
    );
    // console.log(currentWorker);
    return <WorkerDetails {...props} worker={currentWorker} />;
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/admin"
              render={(routeProps) => (
                <CategoryList categories={seedWorkers} {...routeProps} />
              )}
            />

            <Route
              exact
              path="/categories/:id/"
              render={(routeProps) => (
                <Category
                  {...this.findCategory(routeProps.match.params.id)}
                  {...routeProps}
                />
              )}
            />

            <Route
              exact
              path="/categories/:id/:name/"
              render={this.getWorker}
            />

            <Route exact path="/login" render={(routeProps) => <Login />} />
            <Route
              exact
              path="/register/"
              render={(routeProps) => <Register />}
            />

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/workerList">
              <WorkerList />
            </Route>
            <Route exact path="/profile">
              <WProfile />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
