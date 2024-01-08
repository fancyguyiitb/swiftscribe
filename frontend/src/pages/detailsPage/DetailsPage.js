import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import contextValue from "../../context/blogs/BlogContext";
import placeholder from "../../assets/placeholder.jpg";

const DetailsPage = () => {
  const context = useContext(contextValue);
  const { blogs } = context;
  //destructuring the url
  const { id } = useParams();

  const detailBlog = blogs.find((item) => item._id === id);

  console.log(detailBlog);
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="titleDiv">
            <h2>
              {detailBlog?.title
                ? detailBlog?.title
                : "Sorry, title not available"}
            </h2>

            <p>
              {detailBlog?.description
                ? detailBlog?.description.slice(0, 180) + "..."
                : "Sorry, description not available"}
            </p>
          </div>
          
        </div>
        <div className="col-md-6">
          <div className="posterDiv">
            <img
              src={detailBlog?.imgUrl ? detailBlog?.imgUrl : placeholder}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="scrollDown">
        <div className="field">
          <div className="scroll"></div>
        </div>
        {/* <p>Read More Below</p> */}
      </div>
      <div className="content">
        <p>
          {detailBlog?.description
            ? detailBlog?.description
            : "Sorry, description not available"}
        </p>
      </div>
    </>
  );
};

export default DetailsPage;
