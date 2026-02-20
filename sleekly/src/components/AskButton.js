import React from "react";
import "./AskButton.css";

const AskButton = () => {
  return (
    <a
      href="mailto:geral@sleekly.pt?subject=Pedido de Orçamento"
      className="ask-button"
    >
      Pedir Orçamento
    </a>
  );
};

export default AskButton;