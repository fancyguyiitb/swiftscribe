import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import writeImg from "../../assets/write.png";

const NewBlog = () => {
  return (
    <>
      <div className="callToAction">
        <img src={writeImg} alt="" />
        <div className="callToActionText">
          <h3 className="fw-bold m-0 p-0">Begin Writing a New Blog Now!</h3>

          <p>Got something on your mind? Let's pen it down.</p>
        </div>

        <div className="loginButton">
          <Link to="/writenewblog">
            <button type="button" className="btn btn-outline-dark">
              Create New Blog
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewBlog;
