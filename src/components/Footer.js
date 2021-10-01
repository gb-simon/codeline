import React, { Component } from "react";
import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-statement">My Networks </div>
        <div className="social-links">
          <div className="social">
            <a
              href="https://www.linkedin.com/in/gonzalo-simon-aguilar/?locale=en_US/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="social">
            <a
              href="https://www.github.com/gb-simon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="social">
            <a
              href="mailto:aguilarsimon01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              e-mail
            </a>
          </div>
          <div className="social-last">
            <a
              href="https://gonzalosimon.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Blog
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
