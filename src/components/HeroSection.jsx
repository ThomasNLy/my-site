import React from "react";
import P5Sketch from "./P5Sketch";
import "./HeroSection.css";
function HeroSection() {
  return (
    <section>
      <div className="content-wrapper">
        <P5Sketch styling="p5-canvas" />
        <div className="hero-text">
          <p>Thomas Nguyen Ly</p>
          <p>Web Developer</p>
          <p>Interactive Designer</p>
        </div>
        <div className="explore-indicator">
          <p>Explore</p>
          <i className="fas fa-caret-down"></i>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
