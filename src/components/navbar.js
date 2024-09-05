import React from "react";
import logo from "../assets/images/main-logo.png";
import Page from "./page";
import Media from "./media";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo logo" alt="Eilia Tour" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <Page parentClass="nav-links" itemClass="nav-link" />
        <Media parentClass={"nav-icons"} itemClass={"nav-icon"} />
      </div>
    </nav>
  );
};

export default Navbar;
