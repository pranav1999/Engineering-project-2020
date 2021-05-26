import React from "react";
import "./Experiment.css";

function Experiment({ title, image, description,videolink,explink,theory }) {
  return (
    <div class="experiment">
      <h3>{title}</h3>
      <div className="experiment__imgdescription">
        <img src={image} alt="expimg" />
        <p>{description}</p>
        <div className="experiment__action">
           <a href={theory} target="_blank" rel="noreferrer"><p className="action">Theory</p></a>
           <a href={videolink} target="_blank" rel="noreferrer"><p className="action">Video</p></a>
           <a href={explink} target="_blank" rel="noreferrer"><p className="action">Experiment</p></a> 
      </div>
      </div>
    </div>
  );
}

export default Experiment;
