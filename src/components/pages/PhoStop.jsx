import React from "react";
import styles from "../css-modules/ProjectArticle.module.css";
import phostopThumbnailMobile from "../../images/phostop_thumbnail_mobile.png";
import phostopThumbnnail from "../../images/phostop_thumbnail.png";
import phostopHomepage from "../../images/phostop_homepage.png";
function PhoStop() {
  return (
    <article>
      <h1 className={styles.projectTitle}>PHOSTOP</h1>
      <figure>
        <img
          className={styles.articleImage}
          src={phostopThumbnailMobile}
          alt="The PhoStop's landing page hero section"
          srcSet={`${phostopThumbnailMobile} 400w, ${phostopThumbnnail} 800w`}
        />
        <figcaption className={styles.imageCaption}>Website</figcaption>
      </figure>
      <div className={styles.articleDescription}>
        <p>
          PhoStop is a website for a Vietnamese restaurant that focuses on
          incorporating fresh local ingredients into traditional recipes to
          create top tier delicious meals.
        </p>
        <p>Built with HTML, CSS and JavaScript.</p>
        <a
          href="https://github.com/ThomasNLy/project_1_restaurant"
          target="_blank"
          rel="noreferrer"
          className={styles.projectLink}
        >
          Source Code
        </a>
        <a
          href="https://thomasnly.github.io/project_1_restaurant/"
          target="_blank"
          rel="noreferrer"
          className={styles.projectLink}
        >
          Go to website
        </a>
      </div>
      <img
        className={styles.articleImage}
        src={phostopHomepage}
        alt="The entire homepage of Phostop's website"
      />
      <div className={styles.articleDescription}>
        <p>
          For this project I wanted to create something connected to my cultural
          roots. To me food was a way for me to reconnect with my heritage
          growing up in a western society. I remember growing up having very
          fond memories of visiting the local family owned pho shops once a week
          in order to take part and enjoy the foods my parents grew up on before
          moving to North America.
        </p>
        <p>
          I wanted to change the perception of how Vietnamese food was viewed
          especially on social media. I noticed online rarely would I ever see
          any of my friends or people I know would talk about or post photos of
          the meal they had on a night out involving Vietnamese food. When it
          came to designing the website I wanted to elevate the status of
          Vietnamese food by making the restaurant social media worthy.
        </p>
      </div>
    </article>
  );
}
export default PhoStop;
