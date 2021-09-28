import React from "react";

import "./App.css";
// import Sketch from "react-p5";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <HeroSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
