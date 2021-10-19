import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <h2>Thomas Nguyen Ly</h2>
      <ul>
        <li>
          <a href="mailto:thomas.nguyen47@gmail.com">Contact</a>
        </li>
        {/* <li>
          <a href="#">Resume/CV</a>
        </li> */}
        <li>
          <a
            href="https://www.linkedin.com/in/thomas-nguyen-ly-09a3351b2/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ThomasNLy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
