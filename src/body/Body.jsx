import React from "react";
import "./body.css";

const Body = () => {
  return (
    <div className="main-body-container">
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
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
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
            ></svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>
                  We Pull The Strings Of Strategy So You can Dance To The Rhythm
                  of Growth.
                </h1>
                <p className="opacity-75">
                  We help businesses and clients move to the right melody and
                  achieve the harmony to accelerating sustainable and inclusive
                  growth.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/contact">
                    Learn More
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
            ></svg>
            <div className="container">
              <div className="carousel-caption text-start-2">
                <h1>We are a leading Business Development Advocate</h1>
                <p>
                  We develop business ideas that promote business continuity and
                  sustainability
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/contact">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-3-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></svg>
            <div className="container">
              <div className="carousel-caption text-start-3">
                <h1>Reach the Crescendo of Growth and Success.</h1>
                <p>We Pull the Strings of Strategy and Finance</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/contact">
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
        <div className="operations">
          <div className="operations-text">
            <h1 className="operations-h1">Capabilities</h1>
            <p>
              Within the scope of our capacity and skills, we integrate
              sustainable growth as our work philosophy and focus on the
              overarching issue of profitability for all stakeholders in the
              following areas;
            </p>
            <ul>
              <li>Digital Growth</li>
              <li>Marketing & Sales</li>
              <li>Implementation</li>
              <li>Operations</li>
              <li>People & Organizational Performance </li>
              <li>Risk Management & Resilience </li>
              <li>Strategy & Corporate Finance </li>
              <li>Sustainability</li>
              <li>Transformation</li>
            </ul>
            <button className="btn btn-lg btn-primary" href="/contact">
              Learn More
            </button>
          </div>
          <div className="operations-pic"></div>
        </div>
      </div>

      <div className="what-we-offer">
        <h1 className="card-header">How We Help Clients</h1>
        <div className="card-container my-5">
          <div className="card-list-1 my-4">
            <div className="cards">
              <div className="card-image card-image-4"></div>
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
              <div className="card-image card-image-3"></div>
              <h3>Product Design, Development and Marketing</h3>
              <p>
                From ideation to execution, our teams and designers work in
                tandem to understand your product at its core. With technical
                and methodological expertise, our team minimizes the costs of
                production and development of your product to specifications
                with cost, reliability and user experience at top of mind.
              </p>
            </div>
          </div>

          <div className="card-list-2">
            <div className="cards">
              <div className="card-image card-image-1"></div>
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
              <div className="card-image card-image-2"></div>
              <h3>Business and Financial Advisory</h3>
              <p>
                Our financial advisory services consists of six main
                disciplines: Funds Arrangement, Turnaround Management, Corporate
                Finance, Risk Management, Transaction Services, Restructuring,
                Real Estate Advisory and Forensics & Litigation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="operations-container">
        <div className="operations">
          <div className="operations-pic under"></div>
          <div className="operations-text">
            <h1 className="operations-h1">Championing Inclusive Growth</h1>
            <p>
              We’ve always been big champions of the growth potential of our
              clients. Today, we’re privileged to work with companies and
              institutions that are on a new growth journey, one that pursues
              sustainable inclusion, and economic growth, all at the same time.
            </p>
            <button className="btn btn-lg btn-primary" href="/contact">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
