import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PartnerLogoCarousel from "./components/PartnerLogoCarousel.tsx";
import DrivingSuccess from "./components/DrivingSuccess";
import "./components/ServicesSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";
import AboutSection from "./components/AboutSection.tsx";
import AISolutionsSection from "./components/AISolutionsSection.tsx";
import CodeToSuccessSection from "./components/CodeToSuccessSection.tsx";
import TechnologyStack from "./components/TechnologyStack.tsx";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PartnerLogoCarousel />
      <DrivingSuccess />
      <ServicesSection />
      <AISolutionsSection />
      <CodeToSuccessSection />
      <AboutSection />
      <TechnologyStack />
    </div>
  );
}

export default App;
