import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function menuButtonClick() {
    setShowMenu(!showMenu);
  }
  function closeMenu() {
    setShowMenu(false);
  }

  function scrollWithOffset(el) {
    const yCoordiante = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    window.scrollTo({ top: yCoordiante + yOffset });
  }
  return (
    <div>
      <nav className="navbar">
        <div className="menu-button " onClick={menuButtonClick}>
          {showMenu ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
        <Link className="navbar-logo" to="/">
          THOMAS NGUYEN
        </Link>
        <div className={showMenu ? "nav-menu nav-menu-open" : "nav-menu"}>
          <ul className="nav-menu-content">
            <li>
              <Link to="/" className="nav-menu-item" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <HashLink
                to="/#skills-section"
                scroll={(el) => scrollWithOffset(el)}
                className="nav-menu-item"
                onClick={closeMenu}
              >
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#about-section"
                scroll={(el) => scrollWithOffset(el)}
                className="nav-menu-item"
                onClick={closeMenu}
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#projects-section"
                scroll={(el) => scrollWithOffset(el)}
                className="nav-menu-item"
                onClick={closeMenu}
              >
                Projects
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
