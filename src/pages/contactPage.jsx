import React from "react";
import "./contactpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ContactForm } from "../shared/ContactForm";


const contactPage = () => {
  return (
    <div className="contact-main-container">
      <div className="contact-banner">
        <div className="contact-header">Contact Us</div>
      </div>
      <div className="contact-form">
        <div className="contact-form-text">
          <h1>Get in Touch</h1>
          <p>Thank you for your interest. Please fill out the form</p>
          <div className="social-links">
            <a href="*">
              <FontAwesomeIcon size={"1x"} icon={faFacebookF} />
            </a>
            <a href="*">
              <FontAwesomeIcon size={"1x"} icon={faTwitter} />
            </a>
            <a href="*">
              <FontAwesomeIcon size={"1x"} icon={faInstagram} />
            </a>
            <a href="*">
              <FontAwesomeIcon size={"1x"} icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
