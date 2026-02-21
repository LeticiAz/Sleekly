import React from "react";
import SectionCTA from "./SectionCTA";

const Company = () => {
  const advantages = [
    "Equipa Profissional e Certificada",
    "Produtos Premium",
    "Flexibilidade Total",
    "Seguro de Responsabilidade Civil",
  ];

  return (
    <section className="company">
      <h2>Porquê escolher a Sleekly?</h2>

      <div className="company-grid">
        {advantages.map((item, index) => (
          <div key={index} className="company-card">
            {item}
          </div>
        ))}
      </div>
      <SectionCTA />
    </section>
  );
};

export default Company;