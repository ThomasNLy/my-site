import React from "react";
import styles from "../css-modules/ProjectArticle.module.css";
import loginSystemThumbnail from "../../images/login_system_thumbnail.png";
import loginSystemForgotpasswordPic from "../../images/login_system_forgotpassword.png";
import loginSystemProfilePic from "../../images/login_system_profile.png";
function LoginSystem() {
  return (
    <article>
      <h1 className={styles.projectTitle}>Login System</h1>
      <figure>
        <img
          className={styles.articleImage}
          src={loginSystemThumbnail}
          alt="The login webpage's landing page"
        />
        <figcaption className={styles.imageCaption}>Website</figcaption>
      </figure>
      <div className={styles.articleDescription}>
        <p>
          The login page for a web service or app that allows users to sign up,
          login in or delete their account.
        </p>
        <p>
          My approach to this project was to create something that allowed me to
          utilize my knowledge of CSS animation and JavaScript along with its
          Object Oriented Programing (OOP) paradigm.
        </p>
        <p>
          On the home page a user is able to login by entering their user name
          and password and clicking the sign in button. They may also click on
          the <b>Forgot Password</b> link which will redirect them to the Forgot
          Password page in order to retrieve their password. In the event they
          don’t have an account they may click on the <b>Join Us</b> link to
          sign up for an account.
        </p>
        <p>
          In order for a user to login in I had to have a back end database for
          the webpage to interact with to verify that the username and password
          entered was correct, however I wanted to focus on front end for this
          project. My solution to this problem was to utilize the browser’s
          storage to cache the information and act as my database. A default
          account setup has also been setup with the username and password being
          admin.
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
      <div className={styles.multiImageContainer}>
        <img
          className={styles.articleImage}
          src={loginSystemForgotpasswordPic}
          alt="The forgot password page"
        />
        <img
          className={styles.articleImage}
          src={loginSystemProfilePic}
          alt="The account page with a module asking  if the user wants to delete their account"
        />
      </div>
      <div className={styles.articleDescription}>
        <p>
          One of the most important things I wanted to focus on with this
          project was the UI and UX. I wanted to ensure that feedback was given
          whenever a user interacted with the website. Such as implementing a
          banner to scroll down on the forgot password page to let them know an
          email has been sent to reset their password. Along with that was
          having a modal pop up if they chose to delete their account to focus
          their attention on the decision they were about to make.{" "}
        </p>
      </div>
    </article>
  );
}
export default LoginSystem;
