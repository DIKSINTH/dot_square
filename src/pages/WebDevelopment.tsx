import React from "react";
import CommonForm from "../components/CommonForm.tsx";
import AchievementsSection from "../components/AchievementsSection.tsx";
import WebServicesGrid from "../components/WebServicesGrid.tsx";
import CaptivatingPresenceBanner from "../components/CaptivatingPresenceBanner.tsx";
import BeyondBasicsFeatures from "../components/BeyondBasicsFeatures.tsx";
import TechStackSection from "../components/TechStackSection.tsx";
import DotSquaresAdvantages from "../components/DotSquaresAdvantages.tsx";
import HiringAssistanceSection from "../components/HiringAssistanceSection.tsx";
import AgileDevelopmentProcess from "../components/AgileDevelopmentProcess.tsx";
import NotSureSection from "../components/NotSureSection.tsx";
const WebDevelopment: React.FC = () => {
  return (
    <div>
      <CommonForm />
      <AchievementsSection />
      <WebServicesGrid />
      <CaptivatingPresenceBanner />
      <BeyondBasicsFeatures />
      <TechStackSection />
      <DotSquaresAdvantages />
      <HiringAssistanceSection />
      <AgileDevelopmentProcess />
      <NotSureSection />
    </div>
  );
};

export default WebDevelopment;
