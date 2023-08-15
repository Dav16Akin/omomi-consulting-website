import React from "react";
import "./aboutPage.css";
import cabotaLogo from "./../images/aboutpageLogo/CABOTA.png";
import compassLogo from "./../images/aboutpageLogo/COMPASS.png";
import damtaqLogo from "./../images/aboutpageLogo/DAMTAQ.png";
import dbiLogo from "./../images/aboutpageLogo/DBI.png";
import groLogo from "./../images/aboutpageLogo/GRO.png";
import grocapitaLogo from "./../images/aboutpageLogo/GROCAPITA.png";
import highenergyLogo from "./../images/aboutpageLogo/HIGHLANDENERGY.png";
import irasaLogo from "./../images/aboutpageLogo/IRASA.png";
import ngepLogo from "./../images/aboutpageLogo/NGEP.png";
import nneoLogo from "./../images/aboutpageLogo/NNEO-URBAN.png";
import onehubLogo from "./../images/aboutpageLogo/ONEHUB.png";
import owuLogo from "./../images/aboutpageLogo/OWU.png";
import prividaLogo from "./../images/aboutpageLogo/PRIVIDA.png";
import { TeamPopup } from "./popup/TeamPopup";

const aboutPage = () => {

  return (
    <div className="about-container">
      <div className="about-banner">
        <h3 className="about-header">About</h3>
      </div>

      <div className="about-text-container">
        <div className="about-text">
          <h1>Our History</h1>
          Founded in 2004 Omomi Consulting Ltd facilitates creativity,
          innovation and strategy for the growth and sustainability of
          businesses in Nigeria. We focus on providing strategy, solutions and
          tools for businesses within the following Industries:
          <div className="industries">
            <div className="industry">Agribusiness & Food Security</div>
            <div className="industry">Finance</div>
            <div className="industry">
              Technology, Media & Telecommunications
            </div>
            <div className="industry">Eduction</div>
            <div className="industry">Healthcare</div>
            <div className="industry">Automotive & Assembly</div>
            <div className="industry">Industrials & Electronics</div>
            <div className="industry">Consumer Packaged Goods</div>
            <div className="industry">Electric Power & Natural Gas</div>
            <div className="industry">
              Engineering, Construction & Building Materials
            </div>
            <div className="industry">Metals & Mining</div>
            <div className="industry">Life Sciences</div>
            <div className="industry">Oil & Gas</div>
            <div className="industry">Paper, Forest Products & Packaging</div>
            <div className="industry">Private Equity & Principal Investors</div>
            <div className="industry">Public Sector</div>
            <div className="industry">Real Estate</div>
            <div className="industry">Retail</div>
            <div className="industry">Social Sector</div>
            <div className="industry">Travel, Logistics & Infrastructure</div>
          </div>
        </div>
      </div>

      <div className="fixed-background2"></div>

      <div className="clients-container">
        <h1>Our Clients</h1>
        <div className="logos">
          <div className="slider">
            <img src={onehubLogo} alt="" />
            <img src={damtaqLogo} alt="" />
            <img src={owuLogo} alt="" />
            <img src={dbiLogo} alt="" />
            <img src={ngepLogo} alt="" />
            <img src={nneoLogo} alt="" />
            <img src={cabotaLogo} alt="" />
            <img src={compassLogo} alt="" />
            <img src={groLogo} alt="" />
            <img src={grocapitaLogo} alt="" />
            <img src={highenergyLogo} alt="" />
            <img src={irasaLogo} alt="" />
            <img src={prividaLogo} alt="" />
          </div>
          <div className="slider">
            <img src={onehubLogo} alt="" />
            <img src={damtaqLogo} alt="" />
            <img src={owuLogo} alt="" />
            <img src={dbiLogo} alt="" />
            <img src={ngepLogo} alt="" />
            <img src={nneoLogo} alt="" />
            <img src={cabotaLogo} alt="" />
            <img src={compassLogo} alt="" />
            <img src={groLogo} alt="" />
            <img src={grocapitaLogo} alt="" />
            <img src={highenergyLogo} alt="" />
            <img src={irasaLogo} alt="" />
            <img src={prividaLogo} alt="" />
          </div>
        </div>
      </div>

      <TeamPopup/>

      
    </div>
  );
};

export default aboutPage;
