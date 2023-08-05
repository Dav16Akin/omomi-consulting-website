import React from "react";
import "./navbar.css";
import logo from "./../images/fulllogo.jpeg";

const Navbar = () => {
  return (
    <>
    <div className="fixed-top">
    <nav className="top-nav navbar navbar-expand-lg">
        <div className="container-fluid top-navv">
          <div className="">info@omomiconsulting.com</div>
          <div className="">+ 234 (0) 705 755 5556 </div>
        </div>
      </nav>


      <nav className="navbar navbar-expand-lg second-nav">
        <div className="container-fluid d-flex justify-space-between">
          <img
            className="ms-5"
            src={logo}
            alt="Omomi Consulting"
            style={{ width: "200px", height: "auto" }}
          ></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse ms-2 me-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href='/'>
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="/about">
                About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="*">
                Services
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="*">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
