import React from "react";
import "./style.scss";
import registerImg from "../../assets/registration-1.png";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <div className="callToActionContainer">
      <div className="row">
        <div className="col-md-4 col-sm-3">
          <div className="registerImg">
            <img src={registerImg} alt="" />
          </div>
        </div>
        <div className="col-md-4 col-sm-3">
          <div className="callToActionText">
            <h4>Your thoughts will be next!</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-3">
          <div className="signUpBtn">
            <button className="btn btn-outline-dark " onClick={()=>navigate("/signup")}>Sign Up Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
