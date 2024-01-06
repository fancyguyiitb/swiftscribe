import React from "react";
import "./style.scss";
import { useNavigate } from "react-router";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <ContentWrapper>
      <div className="topRow">
        <div className="topHeading">
          <h1>SWIFTSCRIBE</h1>
        </div>
        <div className="loginButton">
          {!localStorage.getItem("token") ? (
            <>
              <button
                type="button"
                className="btn btn-outline-dark mx-2"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-dark mx-2"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-outline-dark mx-2"
                onClick={() => navigate("/userBlogs")}
              >
                All My Blogs
              </button>
              <button
                type="button"
                className="btn btn-outline-dark mx-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Header;
