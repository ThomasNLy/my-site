import React from "react";
import styles from "../css-modules/ProjectArticle.module.css";
import loginSystemThumbnailMobile from "../../images/login_system_thumbnail_mobile.png";
import loginSystemThumbnail from "../../images/login_system_thumbnail.png";
import loginSystemForgotpasswordPic from "../../images/login_system_forgotpassword.png";
function LoginSystem() {
  return (
    <article>
      <h1 className={styles.projectTitle}>Login System</h1>
      <figure>
        <img
          className={styles.articleImage}
          src={loginSystemThumbnailMobile}
          alt="The login webpage's landing page"
          srcSet={`${loginSystemThumbnailMobile} 400w ${loginSystemThumbnail} 800w`}
        />
        <figcaption className={styles.imageCaption}>Website</figcaption>
      </figure>
      <div className={styles.articleDescription}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          voluptatem aperiam rerum fugit tempora delectus architecto asperiores
          placeat ipsum eos.
        </p>
        <p>Built with HTML, CSS and JavaScript.</p>
        <a
          href="https://github.com/ThomasNLy/project_2_login_page"
          rel="noreferrer"
          className={styles.projectLink}
        >
          Source Code
        </a>
        <a
          href="https://thomasnly.github.io/project_2_login_page/"
          rel="noreferrer"
          className={styles.projectLink}
        >
          Go to website
        </a>
      </div>
      <img
        className={styles.articleImage}
        src={loginSystemForgotpasswordPic}
        alt=""
      />
      <div className={styles.articleDescription}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum
          obcaecati quibusdam architecto laudantium, doloribus veniam similique
          asperiores repellat molestiae nemo vel saepe dolores dicta vero
          nostrum, laboriosam temporibus et?
        </p>
      </div>
    </article>
  );
}
export default LoginSystem;
