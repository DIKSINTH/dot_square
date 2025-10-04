import React from "react";
import Hero from "../components/Hero";
import PartnerLogoCarousel from "../components/PartnerLogoCarousel";
import DrivingSuccess from "../components/DrivingSuccess";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import AISolutionsSection from "../components/AISolutionsSection";
import CodeToSuccessSection from "../components/CodeToSuccessSection";
import TechnologyStack from "../components/TechnologyStack";
import PartnersSection from "../components/PartnersSection";
import SolutionsSection from "../components/SolutionsSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ContactSection from "../components/ContactSection";
import LatestArticlesSection from "../components/LatestArticlesSection";
import FAQSection from "../components/FAQSection";
import IndustrySlider from "../components/IndustrySlider"; // Remove .jsx or .tsx

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <PartnerLogoCarousel />
      <DrivingSuccess />
      <ServicesSection />
      <AISolutionsSection />
      <CodeToSuccessSection />
      <AboutSection />
      <PartnersSection />
      <TechnologyStack />
      <IndustrySlider />
      <SolutionsSection />
      <CaseStudiesSection />
      <ContactSection />
      <LatestArticlesSection />
      <FAQSection />
    </div>
  );
};

export default Home;
