import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import "./style.scss";
import contextValue from "../../context/blogs/BlogContext";
import placeholder from "../../assets/placeholder.jpg";

const CategoryPage = () => {
  const context = useContext(contextValue);
  const { blogs } = context;
  //   const lastIndex = blogs.length - 1;

  //destructuring the url
  const { category } = useParams();

  const categoryBlogs = blogs.filter((item) => item.tag === category);
  //   categoryBlogs = categoryBlogs.reverse();

  const navigate = useNavigate();

  //   console.log(categoryBlogs);
  return (
    <>
    <div className="detailsHeading">
        <p>{category} Blogs</p>
    </div>
      <div className="row">
        {categoryBlogs.length===0 && "No Blogs to display..."}
        {categoryBlogs.reverse().map((blog) => {
          return (
            <div
              className="card-left col-md-4"
              key={blog._id}
              onClick={(event) => {
                //preventing unexpected redirect issue
                event.preventDefault();
                navigate(`/blog/${blog._id}`);
              }}
            >
              <div
                className="card"
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${
                    blog?.imgUrl ? blog?.imgUrl : placeholder
                  }')`,
                }}
              >
                {/* <div className="card-category">City</div> */}
                <div className="card-description">
                  <button className="tagName btn-dark">
                    {blog?.tag ? blog?.tag : "N/A"}
                  </button>
                  {/* <button className="tagName btn-dark">Tag2 Here</button> */}
                  <h2>{blog.title ? blog.title : "Title Not Available"}</h2>
                  <p className="date">{new Date(blog?.date).toDateString()}</p>
                </div>
                {/* <img
              className="card-user avatar avatar-large"
              src="https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww"
              alt="..."
            /> */}
                <a className="card-link" href="/"></a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryPage;
