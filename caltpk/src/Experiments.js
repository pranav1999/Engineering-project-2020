import React from "react";
import "./Experiments.css";
import Experiment from "./Experiment";


function Experiments(){
    return(
        <div className="experiments">
            <div className="experiments__selectClass">
                <img className="classtag" src="https://media.istockphoto.com/photos/number-9-picture-id917358932?k=6&m=917358932&s=612x612&w=0&h=Qgm-WcZ1eRDPCG-GjxWdr2J1tW7OPXs-x-Hzc_r2k4w=" alt="" />
                <img className="classtag" src="https://images.pexels.com/photos/1339845/pexels-photo-1339845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img className="classtag" src="https://media.istockphoto.com/photos/number-11-made-with-sparklers-picture-id607606848?k=6&m=607606848&s=612x612&w=0&h=J4Ed09QPfVocY32th90yHeee7J7z_oKjMm0j-UcebFw=" alt="" />
                <img className="classtag" src="https://media.istockphoto.com/photos/number-twelve-picture-id484546390?k=6&m=484546390&s=612x612&w=0&h=bUIhRSa_gAIl70ld7rQRJ3WIVNfeVjGUasyfiTDae54=" alt="" />
            </div>
            <div className="experiments__selectExperiment">
                <h1>Experiment List</h1>
                <div className="experiments__experimentList">
                    <Experiment
                        title = "Experiment 1"
                        image={"https://images.pexels.com/photos/62600/pexels-photo-62600.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
                        description="ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
                    />
                    <Experiment
                        title = "Experiment 2"
                        image={"https://images.pexels.com/photos/35160/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
                        description="ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
                    />
                    <Experiment
                        title = "Experiment 3"
                        image={"https://images.pexels.com/photos/789534/pexels-photo-789534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
                        description="ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
                    />
                </div>
            </div>
        </div>
    );
}

export default Experiments;