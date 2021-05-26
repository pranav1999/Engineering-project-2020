import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="../images/CALTPK.png" alt="logo" />
      </Link>

      <h2 className="header__line">
        COMPUTER AIDED LEARNING TOOL FOR PRACTICAL KNOWLEDGE
      </h2>

      <div className="header__nav">
        <Link to="/createExperiment">
          <p>Create Experiment</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
