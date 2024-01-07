import React from "react";
import "./style.scss";
import registerImg from '../../assets/registration-1.png'
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="callToAction">
        <img src={registerImg} alt="" />
        <div className="callToActionText">
          <h4 className="fw-bold">Your posts will be the next!</h4>

          <p>
            Sign-Up now and pen down your thoughts so the world knows their
            might!
          </p>
        </div>

        <div className="loginButton">
          <button type="button" className="btn btn-outline-dark" onClick={()=>navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
