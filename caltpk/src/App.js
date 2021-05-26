import React from "react";
import "./App.css";
import Nav from "./Nav.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import Experiments from "./Experiments.js";
import ExperimentBiology from "./Experiment__biology.js";
import ExperimentChemistry from "./Experiment__chemistry.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
        <Route path="/experimentlist_chemistry">
            <ExperimentChemistry />
          </Route>
        <Route path="/experimentlist_biology">
            <ExperimentBiology />
          </Route>
          <Route path="/experimentlist">
            <Experiments />
          </Route>
          <Route path="/createExperiment">
            <h1>createExperiment</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
