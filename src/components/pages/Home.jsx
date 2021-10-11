import React from "react";
import HeroSection from "../HeroSection";
import SkillsSection from "../SkillsSection";
import AboutSection from "../../AboutSection";
import ProjectSection from "../ProjectsSection";

function Home() {
  return (
    <div className="container">
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
export default Home;
