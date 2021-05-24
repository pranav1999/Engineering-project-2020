import React from "react";
import "./App.css";
import Nav from "./Nav.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import Experiments from "./Experiments.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/experimentlist">
            <Experiments />
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
