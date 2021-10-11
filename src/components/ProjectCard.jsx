import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import styles from "./css-modules/Sections.module.css";
function ProjectCard(props) {
  const { imgSrc, imgSrcSet, altText, projectTitle, link } = props;
  return (
    <div>
      <img src={imgSrc} alt={altText} srcSet={imgSrcSet} />
      <h3 className={styles.sectionH3Header}>{projectTitle}</h3>
      <Link to={link} className="project-link">
        View Project
      </Link>
    </div>
  );
}
export default ProjectCard;
