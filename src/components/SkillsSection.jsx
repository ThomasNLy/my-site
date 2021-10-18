import React from "react";
import "./SkillsSection.css";
import styles from "./css-modules/Sections.module.css";
function SkillsSection() {
  return (
    <section id="skills-section">
      <h2 className={styles.sectionH2Header}>SKILLS</h2>
      <div className="skills-container">
        <div className="skill-set">
          <h3 className={styles.sectionH3Header}>PROGRAMMING</h3>
          <ul className="subskills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skill-set">
          <h3 className={styles.sectionH3Header}>FRAMEWORKS</h3>
          <ul className="subskills">
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill-set">
          <h3 className={styles.sectionH3Header}>DESIGN</h3>
          <ul className="subskills">
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
