import React from "react";

import "./App.css";
// import Sketch from "react-p5";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <ProjectSection />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
