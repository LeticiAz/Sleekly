import React, { useState } from "react";
import AskButton from "./AskButton";

const Services = () => {
  const [activeTab, setActiveTab] = useState("Clean");

  const content = {
    Clean: "Serviços de limpeza residencial, empresarial e pós-obra.",
    Care: "Engomadoria, organização e manutenção regular.",
    Confort: "Têxteis, sofás, colchões e higienização profunda.",
  };

  return (
    <section className="services">
      <h2>Os nossos serviços</h2>

      <div className="tabs">
        {["Clean", "Care", "Confort"].map((tab) => (
          <button
            key={tab}
            className={
              activeTab === tab
                ? `active ${tab.toLowerCase()}`
                : tab.toLowerCase()
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <p>{content[activeTab]}</p>
        <AskButton />
      </div>
    </section>
  );
};

export default Services;