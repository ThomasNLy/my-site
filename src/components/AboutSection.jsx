import React from "react";
import "./AboutSection.css";
import styles from "./css-modules/Sections.module.css";
import linkStyles from "./css-modules/AnimatedLinks.module.css";
function AboutSection() {
  return (
    <section id="about-section">
      <h2 className={styles.sectionH2Header}>ABOUT</h2>
      <p>
        Hi! And welcome to my website. My name is Thomas and I am an aspiring
        Web Developer/Front End Developer. I graduated with a degree in Digital
        Media and some of my interests are UI/UX design, creative coding,
        creating interactive media and watching Korean dramas.
      </p>
      <a className={`cv-link ${linkStyles.animatedLinkBlue}`} href="#">
        CV/Resume
      </a>
    </section>
  );
}
export default AboutSection;
