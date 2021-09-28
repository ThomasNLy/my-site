import React from "react";
import P5Sketch from "./P5Sketch";
import "./HeroSection.css";
function HeroSection() {
  return (
    <section>
      <div className="content-wrapper">
        <P5Sketch styling="p5-canvas" />
        <p>Thomas Nguyen Ly</p>
        <p>Web Developer</p>
        <p>Interactive Designer</p>
        <a href="#">Explore</a>
      </div>
    </section>
  );
}

export default HeroSection;
