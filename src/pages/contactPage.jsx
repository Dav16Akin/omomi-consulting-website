import React from "react";
import "./contactpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const contactPage = () => {
  return (
    <div className="contact-main-container">
      <div className="contact-banner">
        <div className="contact-header">Contact Us</div>
      </div>
      <div className="contact-form">
        <div className="contact-form-text">
          <h1>Get in Touch</h1>
          <p>Thank you for your intrest. Please fill out the form</p>
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
        <div>
          <form className="form">
            <div className="form-name">
              <div className="nameBox">
                <div className="form-text">First Name</div>
                <input type="text" />
              </div>
              <div className="nameBox">
                <div className="form-text">Last Name</div>
                <input type="text" />
              </div>
            </div>
            <div className="emailBox">
              <div className="form-text">Email</div>
              <input type="email" />
            </div>
            <div className="msgBox"> 
              <div className="form-text">Message</div>
              <input type="text" />
            </div>
            <button type="submit" className="btn btn-lg btn-primary" href="*">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
