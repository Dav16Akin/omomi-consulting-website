import React from "react";
import "./body.css";

const Body = () => {
  return (
    <div className="main-body-container">
      {/* <div className="banner">
        <h1 className="main-text">
          Consulting with the art of design thinki ng.
        </h1>
      </div> */}

      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
        data-bs-theme="light"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg
              className="bd-1-img"
              width="100%"
              height="100%"
              xmlns=""
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              {/* <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              /> */}
            </svg>
            <div className="cont">
              <div className="carousel-caption text-start">
                <h1>
                  We Pull The Strings Of Strategy So You can Dance To The Rythm
                  of Growth.
                </h1>
                <p className="opacity-75">
                  We operate a policy that creates the right framework and
                  conditions for our businesses and clients to thrive and
                  prosper
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="*">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-2-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              {/* <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              /> */}
            </svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>We are a leading Business Development Advocate</h1>
                <p>
                  We develop and promote business ideas that promote business
                  continuity and sustainability
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="*">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="operations-container">
        <div className="d-flex justify-content-around">
          <div className="operations-text">
            <h1 className="operations-h1">Our Operations</h1>
            <p>
              Within the scope of our capacity and skills, we provide platforms
              for our clients to explore sustainable development, share
              knowledge, experiences and best practices, and to advocate
              business positions on these issues in a variety of forums, working
              with governments, non-governmental, intergovernmental
              organizations and other successful businesses. We integrate
              sustainable development as our work philosophy while we do not
              loose our focus on the overarching issue of profitability for all
              stakeholders.
            </p>
            <a className="btn btn-lg btn-primary" href="*">
              Sign up today
            </a>
          </div>
          <div className="operations-pic"></div>
        </div>
      </div>

      <div className="what-we-offer">
        <h1 className="card-header">What We Offer</h1>
        <div className="card-container my-5">
          <div className="card-list-1  d-flex justify-content-around my-4">
            <div className="cards">
              <div className="card-image"></div>
              <h3>Strategy Development And Implementation</h3>
              <p>
                In an era of disruption, strategy is more important than ever.
                We offer creative solutions that have helped thousands of
                companies across all geographies and sectors develop and execute
                winning strategies. Join the elite ranks of sustained value
                creators
              </p>
            </div>
            <div className="cards">
              <div className="card-image"></div>
              <h3>Product Design And Development</h3>
              <p>
                From ideation to execution, our teams and designers work in
                tandem to understand your product at its core. With technical
                and methodological expertise, our team minimizes the costs of
                production and development of your product to specifications
                with cost, reliability and user experience at top of mind.
              </p>
            </div>
            <div className="cards">
              <div className="card-image"></div>
              <h3>Sales And Marketing</h3>
              <p>
                Our team of experts help you achieve sustainable, organic growth
                by focusing on three critical building blocks: an outside-in
                approach that puts customers first, a uniquely great customer
                experience and internal capabilities that ensure you deliver
                optimal customer interactions at every touchpoint
              </p>
            </div>
          </div>

          <div className="card-list-2 d-flex  justify-content-around my-4">
            <div className="cards">
              <div className="card-image"></div>
              <h3>Digital Transformation</h3>
              <p>
                Reinvent your business. Stay ahead of the competition. The era
                of the standalone digital project is over. We have the experts
                in data science, smart automation, prototyping, digital
                marketing, enterprise technology and related disciplines,
                enabling us to take a digital-first approach to every
                engagement. We deliver a platform that unites the people,
                processes, technologies and support services you need to win in
                the digital age.
              </p>
            </div>
            <div className="cards">
              <div className="card-image"></div>
              <h3>Financial Advisory</h3>
              <p>
                Our financial advisory services consists of six main
                disciplines: Corporate Finance, Risk Management, Transaction
                Services, Restructuring, Real Estate Advisory and Forensics &
                Litigation.
              </p>
            </div>
            <div className="cards">
              <div className="card-image"></div>
              <h3>Learning Platforms</h3>
              <p>
                When it comes to talent, leaders agree on two things: It’s
                precious, and it’s scarce. That’s why we created EduNation. We
                have developed a unique leadership training platform that equips
                next-generation leaders and institutions with the toolkits that
                can be customized to meet the needs of their particular market
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-background"></div>

      <div className="team-container d-flex justify-content-around">
        <div className="teams">
          <div className="team-media-scroller">
            <div className="team">
              <div className="team-pic"></div>
              <div className="team-text">
                <h5>Founder / Chairman</h5>
                <p> Akin Oluwaleye (B.Sc., ARP, FSMIN)</p>
              </div>
            </div>
            <div className="team">
              <div className="team-pic"></div>
              <div className="team-text">
                <h5>CEO</h5>
                <p> Leye Faleye (B.A., M.Sc.)</p>
              </div>
            </div>
            <div className="team">
              <div className="team-pic"></div>
              <div className="team-text">
                <h5>Financial Advisory Services</h5>
                <p>Mr. Tunde Ayeni</p>
              </div>
            </div>
            <div className="team">
              <div className="team-pic"></div>
              <div className="team-text">
                <h5>Veterinary Services</h5>
                <p> Dr. Ayodele Tinubu (DVM)</p>
              </div>
            </div>
            <div className="team">
              <div className="team-pic"></div>
              <div className="team-text">
                <h5>Digital Financial Services</h5>
                <p> Mr. Tobi Madariola</p>
              </div>
            </div>
          </div>
        </div>
        <div className="team-header-container">
          <h1>Meet Our Team</h1>
          <a className="btn btn-lg btn-primary" href="*">
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
