import React, { useState } from "react";
import Popup from "./Popup";
import "./teampopup.css";

export const TeamPopup = () => {
  const [popupInfo, setPopupInfo] = useState({
    isOpen: false,
    content: null,
  });

  const openPopup = (content) => {
    setPopupInfo({
      isOpen: true,
      content: content,
    });
  };

  const closePopup = () => {
    setPopupInfo({
      isOpen: false,
      content: null,
    });
  };

  return (
    <>
      <div className="team-container">
        <h1>Our Team</h1>
        <p className="p">
          Our Team is a leadership body with over 100 years combined experience
          that is geared to accelerates the delivery of our client service and
          people mission. The team connects leaders and key capabilities, such
          as Finance, Risk & Resilience, Turn Around Management, Technology
          Innovation and Banking to support our firm’s performance and health.
        </p>
        <div className="teams">
          <div className="team-media-scroller">
            <div
              onClick={() =>
                openPopup(
                  <div className="modal-content">
                    <button className="close-button" onClick={closePopup}>
                      close
                    </button>
                    <h1>Akinwale Oluwaleye</h1>
                    <p>
                      Akinwale Oluwaleye attended Christs School Ado
                      Ekiti -1977-1883 (WASC) Oshogbo Grammar School- 1983-1985
                      (HSC) and graduated from the University of Ibadan in 1988
                      with a B.Sc Hons Degree in Geography. In 1991 he started
                      his working career at a frontline Nigerian Ad Agency- Pal
                      Advertising as a Copy Writer from where he joined SAAL
                      Advertising In 1992 as a Senior Copywriter and was
                      promoted to a Group Head of the Creative Department in
                      1993. He left SAAL Advertising In 1993 and worked as an
                      independent creative executive when he was given the
                      opportunity to design and print the manifesto of the
                      presidential candidate of the Social Democratic Party
                      (SDP), Chief M.K. O Abiola’s – Hope 93, Farewell to
                      Poverty. In 1994 he pioneered the creation of a midsized
                      indigenous advertising Agency, Campaign and Concepts
                      Limited as the Founding Managing Director /CEO. In 2004 he
                      left the management of Campaign and Concepts Ltd to found
                      a Strategy, Innovation and Creativity Company – Omomi
                      Consulting Ltd. He holds the position of Founder & Chief
                      Innovation Officer till date. Between 2008 -2015 he had
                      various experiences in the Public Sector where he held
                      various positions among which are Senior Special Assistant
                      to the Governor Branding and Communications. Managing
                      Director of Ikun Dairy, Director of Ire Clay Products
                      Limited, member of the “State Think Tank” on Agriculture,
                      Director General of the State Signage and Advertising
                      Agency, Senior Executive Assistant in Charge of MDA’s,
                      Head Business Development and later  Managing Director of
                      the state owned Investment Company- Fountain Holdings Ltd.
                      In 2017, Akin led the Omomi Consulting team to takeover
                      and turn around a moribund payment service company-
                      Paymaster Limited. In 2018 and in May 2019 created a one
                      stop digital transactions technology company – One Hub
                      Technology Partnerships Limited. Akin Manages the interest
                      of the consortium in all these entities to date. Akin has
                      attended many courses in Nigeria and overseas. He is a
                      Member of Advertising Practitioners Council of Nigeria
                      (APCON), a Fellow of the Institute of Strategic Management
                      Nigeria (ISMN). Being an all-round Sports enthusiast. Akin
                      plays golf and exercises regularly. Born on May 22nd 1967,
                      Akin is married and is blessed with 4 wonderful Children.
                    </p>
                  </div>
                )
              }
              className="team"
            >
              <div className="team-pic team-1"></div>
              <div className="team-text">
                <h5> Akinwale Oluwaleye </h5>
                <p>Managing Partner/ CEO</p>
              </div>
            </div>

            <div
              className="team"
              onClick={() =>
                openPopup(
                  <div className="modal-content">
                    <button className="close-button" onClick={closePopup}>
                      close
                    </button>
                    <h1>Lanre Adediran</h1>
                    <p>
                      Lanre Adediran graduated with a second-class upper degree
                      in accounting in 1988 from the prestigious university of
                      Lagos business school. He qualified as a chartered
                      accountant in May 1991(ACA) and became a fellow of the
                      institute of chartered accountants of Nigeria (FCA) in
                      2004. Lanre professional career spanned 30 plus years as
                      Financial Analyst in the then Volkswagen of Nigeria,
                      Internal Auditor in Mobil Oil Marketing Company, Treasurer
                      in Michelin Nigeria Limited and Director of Finance in
                      Wabeco Petroleum Limited, an oil marketing Company. He has
                      attended many managerial courses in and outside Nigeria.
                      He is currently the Managing Director of Stellar Edge
                      Solutions Limited, a Project Management Consultant and
                      provides solutions in accounting process evaluation, Fixed
                      asset management and transaction modelling. We are equally
                      in collaboration with a Tax advisory firm to provide
                      proactive solutions to corporate tax management. Lanre is
                      on the interim board of Benin Electrity Distribution
                      Company(BEDC) and Wabeco Petroleum Limited as a
                      Non-executive Director.
                    </p>
                  </div>
                )
              }
            >
              <div className="team-pic team-2"></div>
              <div className="team-text">
                <h5> Lanre Adediran</h5>
                <p>Partner, Taxation, Finance & Accounting Management</p>
              </div>
            </div>
            <div
              className="team"
              onClick={() =>
                openPopup(
                  <div className="modal-content">
                    <button className="close-button" onClick={closePopup}>
                      close
                    </button>
                    <h1>Babatunde Ayeni</h1>
                    <p>
                      Babatunde (“Tunde”) Ayeni holds a Bachelor’s Degree in
                      Industrial Chemistry and an MBA, obtained from the
                      University of Ilorin, Ilorin in 1986 and 1992,
                      respectively. He is an alumnus of the Executive Education
                      training programs of, Lagos Business School, Harvard
                      Business School, Chicago Booth School of Business and
                      London Business School. He has also undertaken training in
                      Financial Modeling in India. His working experience
                      consists of stints in manufacturing as; Senior Production
                      Chemist with The Nigerian Paper Mill Limited, Jebba and as
                      Sales Representative Industrial Paints with CAP Plc,
                      Ikeja, before a major career change to the Financial
                      Service Sector in 1992. He qualified as a Stockbroker with
                      CSL Stockbrokers Limited, in December 1994 and rose to the
                      post of Assistant Manager, Stock broking /Capital Markets.
                      He moved to assume responsibility for the Operations and
                      Corporate Finance desk of MBC Securities Limited in 1998,
                      as a pioneer staff, rising to the position of Chief
                      Operating Officer in September 2000. His significant
                      contributions accounted for the rapid growth of MBC
                      Securities Limited and he won several staff awards
                      including “Knowledge-Seeker Award” and “Staff of the Year”
                      awards of the (defunct) Merchant Banking Corporation group
                      before his exit in May 2001, to join the Corporate
                      Treasury Unit of the Commercial & Finance Division of
                      Shell Petroleum Development Company Limited. Mr. Ayeni was
                      Head, Funding & Investment Unit of Shell Petroleum
                      Development Company (Nigeria) Treasury with responsibility
                      for; Money Market Dealing, FX sales, Economic Intelligence
                      & Exposure Management amongst others. His leadership
                      qualities earned him membership/leadership on various
                      project teams in the Company. He joined ESL Securities
                      Limited (a subsidiary of the Ecobank Group) Management
                      team, and was responsible for a major transformation of
                      the Registrar/Stockbroking business of ESL; developing and
                      implementing a re-engineering of operational processes,
                      successfully prospecting for new businesses/mandates both
                      as Stockbroker/Registrar and improving human capital
                      capacity. Mr. Tunde Ayeni later served as the Managing
                      Director/Chief Executive/Registrar of Union Registrars
                      Limited; the premier Share Registration Company in Nigeria
                      with responsibility for maintaining share registers of
                      more than thirty (30) publicly quoted companies. He has
                      varied boardroom experience in the; financial services,
                      logistics/courier, waste management and agricultural
                      sectors. He is currently engaged in Consulting and
                      Investment Advisory services where his multi-disciplinary
                      background and experience provide unique perspectives to
                      select clients.
                    </p>
                  </div>
                )
              }
            >
              <div className="team-pic team-4"></div>
              <div className="team-text">
                <h5>Tunde Ayeni</h5>
                <p>Partner, Operations & Turnaround Management</p>
              </div>
            </div>
            <div className="team">
              <div className="team-pic team-3 "></div>
              <div className="team-text">
                <h5>Femi Niyi </h5>
                <p>
                  {" "}
                  Partner, Technology Innovation, Banking & Risk Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popup
        isOpen={popupInfo.isOpen}
        onClose={closePopup}
        content={popupInfo.content}
      />
    </>
  );
};
