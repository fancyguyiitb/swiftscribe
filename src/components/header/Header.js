import React from "react";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ContentWrapper>
      <div className="topRow">
        <div className="topHeading">
          <h1>SWIFTSCRIBE</h1>
        </div>
        <div className="loginButton">
          <button type="button" className="btn btn-outline-dark">
            Login/Sign Up
          </button>
        </div>

        <div className="Navbar">
          <nav className="navbar navbar-expand-sm navbar-light">

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar1">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Technology
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Education
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Personal
                    </Link>
                  </li>
                </ul>
              </div>

          </nav>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Header;
