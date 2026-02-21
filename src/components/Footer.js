import React from "react";
import "./Footer.css";
import logo from "../resources/sleekly.png";


const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Sleekly Logo" className="hero-logo" />

      <div className="footer-info">
        <p>+351 914 315 428</p>
        <p>geral@sleekly.pt</p>
        <a href="https://www.instagram.com/sleeklyclean/" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;