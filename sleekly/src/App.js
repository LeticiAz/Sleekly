import React from "react";
import Hero from "./components/Hero";
import AskButton from "./components/AskButton";
import Company from "./components/Company";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Hero />
        <Company />
        <AskButton />
        <Services />
        <AskButton />
        <Feedback />
        <AskButton />
        <Gallery />
        <AskButton />
        <Footer />
    </>
  );
}

export default App;