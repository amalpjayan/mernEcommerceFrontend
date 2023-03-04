import React from "react";
import './Footer.css'
import playstore from '../../../images/playstore.png'
import appstore from '../../../images/appstore.png'

function Footer() {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download app for android and IOS mobile phone</p>
        <img src={playstore}  alt="playstore" />
        <img src={appstore}  alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1>Ecommerce app</h1>
        <p>High quality is our first priority</p>
        <p>Copyright 2023 &copy; Amal P Jayan</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="/">Instagram</a>
        <a href="/">Youtube</a>
        <a href="/">Facebook</a>
      </div>
    </footer>
  );
}

export default Footer;
