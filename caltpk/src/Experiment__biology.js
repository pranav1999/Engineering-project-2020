import React from "react";
import "./Experiments.css";
import Experiment from "./Experiment.js";
import {useState} from "react";
import {class9,class10,class11,class12} from "./SubBiology";



function createExperiment(exp){
    return <Experiment
        key = {exp.id}
        title={exp.title}
        image = {exp.img}
        description = {exp.description}
        videolink = {exp.videolink}
        explink = {exp.explink}
     />
}


function Experiments(){

    const [active,setactive] = useState("class9");
    const [activetag,setactivetag] = useState(1);



    return(
        <div className="experiments">
            <h1 className="pageheading">BIOLOGY</h1>
            <div className="experiments__selectClass">
                <img onClick={()=>{
                    setactive("class9");
                    setactivetag(1);
                }} className={activetag===1?"classtagactive":"classtag"} src="https://media.istockphoto.com/photos/number-9-picture-id917358932?k=6&m=917358932&s=612x612&w=0&h=Qgm-WcZ1eRDPCG-GjxWdr2J1tW7OPXs-x-Hzc_r2k4w=" alt="" />
                <img onClick={()=>{
                    setactive("class10");
                    setactivetag(2);
                }} className={activetag===2?"classtagactive":"classtag"} src="https://images.pexels.com/photos/1339845/pexels-photo-1339845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <img onClick={()=>{
                    setactive("class11");
                    setactivetag(3);
                }} className={activetag===3?"classtagactive":"classtag"} src="https://media.istockphoto.com/photos/number-11-made-with-sparklers-picture-id607606848?k=6&m=607606848&s=612x612&w=0&h=J4Ed09QPfVocY32th90yHeee7J7z_oKjMm0j-UcebFw=" alt="" />
                <img onClick={()=>{
                    setactive("class12");
                    setactivetag(4);
                }} className={activetag===4?"classtagactive":"classtag"} src="https://media.istockphoto.com/photos/number-twelve-picture-id484546390?k=6&m=484546390&s=612x612&w=0&h=bUIhRSa_gAIl70ld7rQRJ3WIVNfeVjGUasyfiTDae54=" alt="" />
            </div>


            <div className="experiments__selectExperiment">
                <h1>Experiment List</h1>
                <div className="experiments__experimentList">
                {active==="class9" && class9.map(createExperiment)}
                {active==="class10" && class10.map(createExperiment)}
                {active==="class11" && class11.map(createExperiment)}
                {active==="class12" && class12.map(createExperiment)}
                
                </div>
            </div>
        </div>
    );
}

export default Experiments;