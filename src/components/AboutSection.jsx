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
        creating interactive media and video game development.
      </p>
      <a
        className={`cv-link ${linkStyles.animatedLinkBlue}`}
        href="https://docs.google.com/document/d/18ANrP7eHyplLL9P2I0maKEOk4HFeu61G/edit?usp=sharing&ouid=117781079038070538627&rtpof=true&sd=true"
        target="_blank"
        rel="noreferrer"
      >
        CV/Resume
      </a>
    </section>
  );
}
export default AboutSection;
