import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import WProfile from "./pages/workerProfile";
import WorkerList from "./pages/workerList";
import Home from "./pages/home";
import {Login, Register} from "./login/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/workerList">
            <WorkerList />
          </Route>
          <Route path="/profile">
            <WProfile />
          </Route>

          {/* sign up form  */}
          <Route exact path="/login" render={(routeProps) => <Login />} />
          <Route
            exact
            path="/register/"
            render={(routeProps) => <Register />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
