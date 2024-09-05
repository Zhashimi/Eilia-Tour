import React from "react";
import Page from "./page";
import Media from "./media";
const Footer = () => {
  return (
    <footer className="section footer">
      <Page parentClass="footer-links" itemClass="footer-link" />
      <Media parentClass={"footer-icons"} itemClass={"footer-icon"} />
      <p className="copyright">
        copyright &copy; Eilia travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
