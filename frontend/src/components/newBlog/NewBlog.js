import React from "react";
import "./style.scss";
import writeImg from "../../assets/write.png";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="callToActionContainer">
      <div className="row">
        <div className="col-md-4 col-sm-3">
          <div className="registerImg">
            <img src={writeImg} alt="" />
          </div>
        </div>
        <div className="col-md-4 col-sm-3">
          <div className="callToActionText">
            <h4>Got something on mind?</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-3">
          <div className="signUpBtn">
            <button
              className="btn btn-outline-dark "
              onClick={() => navigate("/writenewblog")}
            >
              Write New Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
