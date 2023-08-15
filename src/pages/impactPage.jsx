import React from "react";
import "./impactPage.css";
import globalpng from "./GLOBALLOGOS.png";
import casepng from "./case.png";
import one from "./partnerLogo/1.png";
import two from "./partnerLogo/2.png";
import three from "./partnerLogo/3.png";
import four from "./partnerLogo/4.png";
import five from "./partnerLogo/5.png";
import six from "./partnerLogo/6.png";
import seven from "./partnerLogo/7.png";
import eight from "./partnerLogo/8.png";

const impactPage = () => {
  return (
    <div className="impact-main-container">
      <div className="impact-banner">
        <div className="banner-header">Impact</div>
      </div>
      <div className="impact-body">
        <div className="impact-text">
          Omomi helps businesses deploy best-in-class thinking for maximum
          impact across their project’s portfolios and project delivery value
          chain. Our network of experts challenges traditional approaches to
          capital productivity and partner with industry leaders, including
          owners, operators, and investors to align capital, strategy,
          portfolios, and transform project development and optimize delivery
          across all asset classes.
        </div>

        <div className="product-container">
          <h1>Product Development and Delivery</h1>
          <p>
            We help deliver products and projects through a disciplined
            execution rhythm to improve safety outcomes, maintain quality, and
            reduce costs. This end-to-end value assurance and optimization
            support, tailored to all our major projects and is further enhanced
            by full-time support from Omomi experts.
          </p>

          <div className="product-img">
            <img src={globalpng} alt="" />
          </div>
        </div>

        <div className="case-container">
          <h1>Case Study</h1>
          <p>Transforming strategy into lasting success</p>

          <div className="case-img">
            <img src={casepng} alt="" />
          </div>
        </div>

        <div className="partner-container">
          <h1>Our Partners</h1>
          <p>
            Partnerships embodies our purpose of building trust and solving
            important problems. Our purpose also brings us a responsibility to
            share our innovation experience, insights and knowledge as widely as
            we can for the benefit of all stakeholders.
          </p>
          <div className="logos">
            <div className="slider sli-partner">
              <img src={one} alt="" />
              <img src={two} alt="" />
              <img src={three} alt="" />
              <img src={four} alt="" />
              <img src={five} alt="" />
              <img src={six} alt="" />
              <img src={seven} alt="" />
              <img src={eight} alt="" />
            </div>
            <div className="slider sli-partner">
              <img src={one} alt="" />
              <img src={two} alt="" />
              <img src={three} alt="" />
              <img src={four} alt="" />
              <img src={five} alt="" />
              <img src={six} alt="" />
              <img src={seven} alt="" />
              <img src={eight} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default impactPage;
