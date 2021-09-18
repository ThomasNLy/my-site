import React from "react";
import Sketch from "react-p5";

let canvasWidth;
let canvasHeight;
let particleSystem = [];

function P5Sketch(props) {
  const styling = props.styling;
  const setup = (p5, canvasParentRef) => {
    //adds a css class in order to manipulate the styling with a stylesheet
    canvasParentRef.classList.add(styling);

    //changes the size of the p5 sketch canvas to match that of the parent's size
    canvasWidth = canvasParentRef.offsetWidth;
    canvasHeight = canvasParentRef.offsetHeight;
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.background("#214976");
    for (let i = 0; i < 5000; i++) {
      particleSystem.push(
        new Particle(
          p5.createVector(
            p5.random(0, canvasWidth),
            p5.random(canvasHeight / 1.25)
          ),
          p5
        )
      );
    }
  };

  const draw = (p5) => {
    p5.frameRate(20);
    p5.background("#214976");

    particleSystem.forEach((p) => {
      p.run();
      wrap(p);
    });

    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
  };

  function wrap(p) {
    if (p.loc.x < 0) p.loc.x = canvasWidth;
    if (p.loc.x > canvasWidth) p.loc.x = 0;
    if (p.loc.y < 0) p.loc.y = canvasHeight;
    if (p.loc.y > canvasHeight) p.loc.y = 0;
  }

  class Particle {
    constructor(loc, p5) {
      this.loc = loc;
      this.theta = p5.noise(loc.x * 0.005, loc.y * 0.02) * p5.TWO_PI;
      this.vel = p5.createVector(
        p5.cos(this.theta) * 2,
        p5.sin(this.theta) * 2
      );
      this.accel = 1;
      this.opacity = 255;
      this.p5 = p5;
    }
    run() {
      this.update();
      this.display();
    }
    update() {
      this.vel.mult(this.accel);
      this.loc.add(this.vel);
    }
    display() {
      this.p5.fill(255, 255, this.p5.random(240, 255), this.opacity);
      this.p5.noStroke();
      this.p5.ellipse(this.loc.x, this.loc.y, 5, 5);
    }
  }
  return <Sketch setup={setup} draw={draw} />;
}

export default P5Sketch;
