import React from "react";
import "./ProjectCard.css";
function ProjectCard(props) {
  const { imgSrc, imgSrcSet, altText, projectTitle, link } = props;
  return (
    <div>
      <img src={imgSrc} alt={altText} srcset={imgSrcSet} />
      <h3>{projectTitle}</h3>
      <a href={link}>View Project</a>
    </div>
  );
}
export default ProjectCard;
