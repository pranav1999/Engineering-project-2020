import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ title, image, page }) {
  return (
    <div className="product">
      <div className="product__info">
        <h2>{title}</h2>
      </div>

      <img src={image} alt="" />

      <Link to={page}>
        <p className="button">Experiments</p>
      </Link>
    </div>
  );
}

export default Product;
