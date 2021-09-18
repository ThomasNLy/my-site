import React from "react";
import P5Sketch from "./P5Sketch";
import "./HeroSection.css";
function HeroSection() {
  return (
    <section>
      <div className="wrapper">
        <P5Sketch styling="p5-canvas" /> <p>hello how are you</p>
      </div>
    </section>
  );
}

export default HeroSection;
