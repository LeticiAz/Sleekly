import React from "react";
import "./Footer.css";
import logo from "../resources/sleekly.png";


const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Sleekly Logo" className="hero-logo" />

      <div className="footer-info">
        <p>+351 912 345 678</p>
        <p>geral@sleekly.pt</p>
        <a href="https://instagram.com/sleekly.pt" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;