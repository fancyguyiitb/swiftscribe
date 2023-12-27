import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerHeading">
          <div className="brand">
            <h3>SWIFTSCRIBE</h3>
          </div>
          <div className="content">
            <p>Home</p>
            <p>Stock Market</p>
            <p>Technology</p>
            <p>Education</p>
            <p>Politics</p>
          </div>
        </div>
        <hr />

        <div className="footerBody">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h5 className="fw-bold">About</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, corporis. Sapiente dolores explicabo vero soluta ut tenetur nostrum vitae incidunt?</p>
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
                <p>Copyright 2023: Sarthak Niranjan</p>
                <p>Click to view Source Code</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
