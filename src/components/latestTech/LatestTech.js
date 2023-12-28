import React, { useContext } from "react";
import "./style.scss";
import contextValue from "../../context/blogs/BlogContext";
import { useNavigate } from "react-router";

const LatestTech = () => {
  const context = useContext(contextValue);
  const { blogs } = context;

  const navigate = useNavigate();

  const techBlogs = blogs.filter((item) => item.tag === "Technology");

  const lastIndex = techBlogs.length - 1;
  return (
    <>
      <h3 className="fw-bold mb-4">Latest Technology</h3>
      <div className="techCards">
        <div className="row">
          <div
            className="card-left col-md-6"
            onClick={(event) => {
              //preventing unexpected redirect issue
              event.preventDefault();
              navigate(`/blog/${techBlogs[lastIndex]._id}`);
            }}
          >
            <div
              className="card"
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg')",
              }}
            >
              {/* <div className="card-category">City</div> */}
              <div className="card-description">
                <button className="tagName btn-dark">
                  {techBlogs[lastIndex]?.tag
                    ? techBlogs[lastIndex]?.tag
                    : "Tag"}
                </button>
                {/* <button className="tagName btn-dark">Tag2 Here</button> */}
                <h2>
                  {techBlogs[lastIndex]?.title
                    ? techBlogs[lastIndex]?.title
                    : "Title Not Available"}
                </h2>
                <p className="date">
                  {new Date(techBlogs[lastIndex]?.date).toDateString()}
                </p>
              </div>
              {/* <img
              className="card-user avatar avatar-large"
              src="https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww"
              alt="..."
            /> */}
              <a className="card-link" href="/">
                juju
              </a>
            </div>
          </div>
          <div
            className="card-left col-md-6"
            onClick={(event) => {
              //preventing unexpected redirect issue
              event.preventDefault();
              navigate(`/blog/${techBlogs[lastIndex - 1]._id}`);
            }}
          >
            <div
              className="card"
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://cdn.sanity.io/images/7p2whiua/production/cd1880f9e2912a69f775ae517364d9f9f02eb7a5-1024x768.jpg')",
              }}
            >
              {/* <div className="card-category">City</div> */}
              <div className="card-description">
                <button className="tagName btn-dark">
                  {techBlogs[lastIndex - 1]?.tag
                    ? techBlogs[lastIndex - 1]?.tag
                    : "Tag"}
                </button>
                {/* <button className="tagName btn-dark">Tag2 Here</button> */}
                <h2>
                  {techBlogs[lastIndex - 1]?.title
                    ? techBlogs[lastIndex - 1]?.title
                    : "Title Not Available"}
                </h2>
                <p className="date">
                  {new Date(techBlogs[lastIndex - 1]?.date).toDateString()}
                </p>
              </div>
              {/* <img
              className="card-user avatar avatar-large"
              src="https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww"
              alt="..."
            /> */}
              <a className="card-link" href="/">
                juju
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestTech;
