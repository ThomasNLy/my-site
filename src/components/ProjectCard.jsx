import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
function ProjectCard(props) {
  const { imgSrc, imgSrcSet, altText, projectTitle, link } = props;
  return (
    <div>
      <img src={imgSrc} alt={altText} srcSet={imgSrcSet} />
      <h3>{projectTitle}</h3>
      <Link to={link}>View Project</Link>
    </div>
  );
}
export default ProjectCard;
