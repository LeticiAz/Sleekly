import React from "react";
import SectionCTA from "./SectionCTA";

const Feedback = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      text: "Serviço impecável. Atenção ao detalhe incrível.",
    },
    {
      name: "Miguel Costa",
      text: "Profissionais, rápidos e muito organizados.",
    },
  ];

  return (
    <section className="feedback">
      <h2>O que dizem os nossos clientes</h2>

      <div className="feedback-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="feedback-card">
            <p>"{item.text}"</p>
            <span>- {item.name}</span>
          </div>
        ))}
      </div>
      <SectionCTA />
    </section>
  );
};

export default Feedback;