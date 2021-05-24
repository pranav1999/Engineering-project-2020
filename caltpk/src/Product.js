import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ id, title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <h2>{title}</h2>
      </div>

      <img src={image} alt="" />

      <Link to="/experimentlist">
        <p className="button">Experiments</p>
      </Link>
    </div>
  );
}

export default Product;
