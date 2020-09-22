import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WProfile from "./pages/workerProfile";
import WorkerList from "./pages/workerList";
import Home from "./pages/home";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
