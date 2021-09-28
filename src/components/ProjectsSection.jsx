import React from "react";
import ProjectCard from "./ProjectCard";
import covidStatThumbnail from "../images/covid_stats_thumbnail.png";
import covidStatThumbnailMobile from "../images/covid_stats_thumbnail_mobile.png";
import loginSystemThumbnail from "../images/login_system_thumbnail.png";
import loginSystemThumbnailMobile from "../images/login_system_thumbnail_mobile.png";
import phostopThumbnail from "../images/phostop_thumbnail.png";
import phostopThumbnailMobile from "../images/phostop_thumbnail_mobile.png";
function ProjectSection() {
  return (
    <section>
      <ProjectCard
        imgSrc={covidStatThumbnailMobile}
        imgSrcSet={`${covidStatThumbnailMobile} 400w, ${covidStatThumbnail} 800w`}
        altText="thumbnail of COVID STATS CAN's landing page"
        projectTitle="COVID STATS CAN"
        link="#"
      />
      <ProjectCard
        imgSrc={loginSystemThumbnailMobile}
        imgSrcSet={`${loginSystemThumbnailMobile} 400w, ${loginSystemThumbnail} 800w`}
        altText="thumbnail of Login System's landing page"
        projectTitle="LOGIN SYSTEM"
        link="#"
      />
      <ProjectCard
        imgSrc={phostopThumbnail}
        imgSrcSet={`${phostopThumbnailMobile} 400w, ${phostopThumbnail} 800w`}
        altText="thumbnail of PhoStop's landing page"
        projectTitle="PHOSTOP"
        link="#"
      />
    </section>
  );
}

export default ProjectSection;
