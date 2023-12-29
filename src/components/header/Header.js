import React from "react";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

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
      </div>
    </ContentWrapper>
  );
};

export default Header;
