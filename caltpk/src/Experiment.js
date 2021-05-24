import React from "react";
import "./Experiment.css";

function Experiment({ title, image, description }) {
  return (
    <div class="experiment">
      <h3>{title}</h3>
      <div className="experiment__imgdescription">
        <img src={image} alt="expimg" />
        <p>{description}</p>
        <div className="experiment__action">
           <p className="action">Video</p>
           <p className="action">Experiment</p> 
      </div>
      </div>
    </div>
  );
}

export default Experiment;
