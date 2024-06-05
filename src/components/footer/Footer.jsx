import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title"></h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a href="https://www.github.com" className="footer-social-link" target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="https://www.linkedin.com" className="footer-social-link" target="_blank">
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://www.instagram.com" className="footer-social-link" target="_blank">
            <i className="uil uil-instagram"></i>
          </a>
        </div>
        <span className="footer-copy">&#169; Custom website built by BL</span>
      </div>
    </footer>
  );
};

export default Footer;
