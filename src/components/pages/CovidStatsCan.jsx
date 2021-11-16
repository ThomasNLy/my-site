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
          The purpose of this project was for me to learn how to create a react
          web app along with integrating web APIs into websites. The idea came
          to me as I kept hearing on the news and multiple media outlets how bad
          the COVID-19 pandemic was getting on a daily basis, but I wasn’t able
          to find any concrete statistics in relation to the virus. Examples of
          this being the total amount of active cases/percentage of the
          population infected, the recovery rate for infected individuals and
          mortality rate. With this project I hope to accomplish just that
          through data visualization.
        </p>
        <p>Built with ReactJS, CSS and Open Covid API.</p>
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
          I wanted to present the information in a way that would be easily
          readable for the user rather than just showing pure stats in the form
          of numbers and percentages. Originally the thought of having it purely
          be numbers would suffice but I wanted a point of reference for what
          the numbers were supposed to relate too. By using bars that fill up
          based on the number of cases, recovery rate and mortality rate in
          relation to each provinces’ population it gives a better perspective
          on the severity of the situation through a visual basis. Along with
          that is their respective colour coordination to indicate what each bar
          represents.
        </p>
      </div>
    </article>
  );
}
export default CovidStatsCan;
