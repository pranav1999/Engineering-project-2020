import React from "react";
import "./Footer.css";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer__top">
        <p></p>
      </div>
      <div className="footer__bottom">
        <p>CALTPK © {year}  All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
