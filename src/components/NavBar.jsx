import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function menuButtonClick() {
    setShowMenu(!showMenu);
  }
  function closeMenu() {
    setShowMenu(false);
  }
  return (
    <div>
      <nav className="nav-bar">
        <div className="menu-button " onClick={menuButtonClick}>
          {showMenu ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
        <a className="navbar-logo" href="#">
          THOMAS NGUYEN
        </a>
        <div className={showMenu ? "nav-menu nav-menu-open" : "nav-menu"}>
          <ul className="nav-menu-content">
            <li>
              <a className="nav-menu-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-menu-item" href="#">
                Skills
              </a>
            </li>
            <li>
              <a className="nav-menu-item" href="#">
                About
              </a>
            </li>
            <li>
              <a className="nav-menu-item" href="#">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
