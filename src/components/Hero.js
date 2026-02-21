import React from "react";
import "./Hero.css";
import AskButton from "./AskButton";
import logo from "../resources/sleekly.png";
import filipa from "../resources/Filipa.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
      <img src={logo} alt="Sleekly Logo" className="hero-logo" />

        <h1>
          Limpeza e Cuidado com padrão Premium.
        </h1>

        <p>
          Transformamos espaços com rigor, detalhe e confiança.
        </p>

        <AskButton />
      </div>

      <div className="hero-right">
        {/* Podes trocar por <video> se quiseres */}
        <img src={filipa} alt="Sleekly CEO" />
      </div>
    </section>
  );
};

export default Hero;