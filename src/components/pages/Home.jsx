import React from "react";
import HeroSection from "../HeroSection";
import SkillsSection from "../SkillsSection";
import AboutSection from "../AboutSection";
import ProjectSection from "../ProjectsSection";

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectSection />
    </React.Fragment>
  );
}
export default Home;
