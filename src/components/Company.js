import React from "react";
import "./Company.css";

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
    </section>
  );
};

export default Company;