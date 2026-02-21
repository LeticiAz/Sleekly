import React from "react";
import "./AskButton.css";

const AskButton = () => {
  const phoneNumber = "351914315428";
  const message = "Olá! Gostaria de pedir um orçamento para um serviço Sleekly.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="ask-button"
    >
      Pedir Orçamento
    </a>
  );
};

export default AskButton;