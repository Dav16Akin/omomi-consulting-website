import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="*">about us</a>
              </li>
              <li>
                <a href="*">our services</a>
              </li>
              <li>
                <a href="*">privacy policy</a>
              </li>
              <li>
                <a href="*">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <p>+ 234 (0) 705 755 5556</p>
              </li>
              <li>
                <p>+234 1 632 8695</p>
              </li>
              <li>
                <p>info@omomiconsulting.com</p>
              </li>
              <li>
                <p>www.omomiconsulting.com</p>
              </li>
              <li>
                Omomi Consulting Ltd
                <p>
                  35 Moloney Street, Obalende, Lagos Island, Lagos State,
                  Nigeria
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="*">
                <FontAwesomeIcon size={"1.5x"} icon={faFacebookF} />
              </a>
              <a href="*">
                <FontAwesomeIcon size={"1.5x"} icon={faTwitter} />
              </a>
              <a href="*">
                <FontAwesomeIcon size={"1.5x"} icon={faInstagram} />
              </a>
              <a href="*">
                <FontAwesomeIcon size={"1.5x"} icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
