import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PartnerLogoCarousel from "./components/PartnerLogoCarousel.tsx";
import DrivingSuccess from "./components/DrivingSuccess";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PartnerLogoCarousel />
      <DrivingSuccess />
    </div>
  );
}

export default App;
