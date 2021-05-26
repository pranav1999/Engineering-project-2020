import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="heading__line">
          Learn experiments virutally with online simulations.
        </h1>
      </div>

      <div className="home__row">
        <Product
          title=" PHYSICS"
          image={
            "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          page="/experimentlist"
        />
         <Product
          title="CHEMISTRY"
          image={
            "https://media.istockphoto.com/photos/laboratory-research-picture-id496442732?s=612x612"
          }
          page="/experimentlist_chemistry"
        />
        <Product
          title="BIOLOGY"
          image={
            "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          page="/experimentlist_biology"
        />
      </div>

      


    </div>
  );
}

export default Home;
