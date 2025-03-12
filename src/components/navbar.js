import React, { useState } from "react";
import logo from "../assets/images/main-logo.png";
import Page from "./page";
import Media from "./media";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo logo" alt="Eilia Tour" />
          <button type="button" className="nav-toggle" id="nav-toggle" onClick={handleToggle}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className={`nav-items ${isMenuOpen ? "show-links" : ""}`}>
          <Page parentClass="nav-links" itemClass="nav-link" onClick={handleCloseMenu} />
          <div className="nav-icons-container">
            <Media parentClass="nav-icons" itemClass="nav-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
