import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerHeading">
          <div className="brand">
            <h3>SWIFTSCRIBE</h3>
          </div>
          {/* <div className="content">
            <p>Home</p>
            <p>Stock Market</p>
            <p>Technology</p>
            <p>Education</p>
            <p>Politics</p>
          </div> */}
        </div>
        <hr />

        <div className="footerBody">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <h5 className="fw-bold">About</h5>
              <p>
                Welcome to SwiftScribe, your premier destination for engaging
                and insightful content powered by the robust MERN (MongoDB,
                Express.js, React, Node.js) stack. At SwiftScribe, we're
                passionate about fostering a vibrant community of writers. Join
                us on SwiftScribe as we embark on a journey of discovery and
                learning together.
              </p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h5 className="fw-bold">Company</h5>
              <p>Contact Us</p>
              <p>About Us</p>
              <p>Our Staff</p>
              <p>Advertise</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h5 className="fw-bold">Legal</h5>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Extra Crunch Terms</p>
              <p>Code of Conduct</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h5 className="fw-bold">Follow Us</h5>
              <p>Facebook</p>
              <p>Youtube</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
          </div>
          <div className="row text-center mt-5">
            <p className="fw-bold mb-3">Copyright 2023: Sarthak Niranjan</p>
            <div className="socialIcons">
              <span className="icon">
                <Link
                  to="https://www.instagram.com/fancy.guy_iitb/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </span>
              <span className="icon">
                <Link to="https://github.com/fancyguyiitb/" target="_blank">
                  <FaGithub />
                </Link>
              </span>
              <span className="icon">
                <Link
                  to="https://www.linkedin.com/in/sarthak-niranjan-abba821a9/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </span>
            </div>

            <p className="sourceCode px-2 py-2">
              <a
                // ref="noreferrer"
                href="https://github.com/fancyguyiitb/swiftscribe"
                target="_blank"
              >
                View Source Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
