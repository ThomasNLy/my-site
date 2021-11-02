import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import styles from "./css-modules/Sections.module.css";
import linkStyles from "./css-modules/AnimatedLinks.module.css";
function ProjectCard(props) {
  const { imgSrc, imgSrcSet, altText, projectTitle, link } = props;
  return (
    <div className="card">
      <img src={imgSrc} alt={altText} srcSet={imgSrcSet} />
      <div className="card-content">
        <h3 className={styles.sectionH3Header}>{projectTitle}</h3>
        <Link
          to={link}
          className={`project-link ${linkStyles.animatedLinkBlue}`}
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
export default ProjectCard;
