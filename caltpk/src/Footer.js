import React from "react";
import "./Footer.css";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__box"></div>
      </div>
      <div className="footer__bottom">
        <p className="copyright">CALTPK © {year}  All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
