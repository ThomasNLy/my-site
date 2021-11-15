import React from "react";
import styles from "../css-modules/ProjectArticle.module.css";
import covidStatsThumbnail from "../../images/covid_stats_thumbnail.png";
import covidStatsStatusBar from "../../images/covid_stats_statusBar.png";
function CovidStatsCan() {
  return (
    <article>
      <h1 className={styles.projectTitle}>COVID STATS CAN</h1>
      <figure>
        <img
          className={styles.articleImage}
          src={covidStatsThumbnail}
          alt="The Covid Stats Can webpage's landing page"
        />
        <figcaption className={styles.imageCaption}>Website</figcaption>
      </figure>
      <div className={styles.articleDescription}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          molestias placeat doloremque a quae rerum minus vitae illo nemo
          doloribus?
        </p>
        <p>Built with HTML, CSS and JavaScript.</p>
        <a
          href="https://github.com/ThomasNLy/project_3_covid_stat_website"
          rel="noreferrer"
          className={styles.projectLink}
        >
          Source Code
        </a>
        <a
          href="https://thomasnly.github.io/project_3_covid_stat_website/"
          rel="noreferrer"
          className={styles.projectLink}
        >
          Go to website
        </a>
      </div>
      <img
        className={styles.articleImage}
        src={covidStatsStatusBar}
        alt="A figure displaying the various status bars and their different meanings: number of cases, recovered and mortality rate"
      />
      <div className={styles.articleDescription}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          officia ipsam maiores pariatur ad in consequatur minima libero placeat
          aperiam.
        </p>
      </div>
    </article>
  );
}
export default CovidStatsCan;
