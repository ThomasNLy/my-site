import React from "react";
import "./SkillsSection.css";
function SkillsSection() {
  return (
    <section>
      <h2 className="section-header">SKILLS</h2>
      <div className="skills">
        <div className="skill-set">
          <h3 className="">PROGRAMMING</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skill-set">
          <h3>FRAMEWORKS</h3>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill-set">
          <h3>DESIGN</h3>
          <ul>
            <li>Adobe XD</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default SkillsSection;
