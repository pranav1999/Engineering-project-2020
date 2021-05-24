import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="heading__line">
          Learn experiments virutally with augmented reality.
        </h1>
      </div>

      <div className="home__row">
        <Product
          title=" PHYSICS"
          image={
            "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
        />
         <Product
          title="CHEMISTRY"
          image={
            "https://media.istockphoto.com/photos/laboratory-research-picture-id496442732?s=612x612"
          }
        />
        <Product
          title="BIOLOGY"
          image={
            "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
      </div>

      


    </div>
  );
}

export default Home;
