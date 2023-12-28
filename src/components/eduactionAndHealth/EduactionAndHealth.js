import React, { useContext } from "react";
import "./style.scss";
import contextValue from "../../context/blogs/BlogContext";
import { useNavigate } from "react-router";
import placeholder from "../../assets/placeholder.jpg";

const EduactionAndHealth = () => {
  const context = useContext(contextValue);
  const { blogs } = context;

  const navigate = useNavigate();

  const educationBlogs = blogs.filter((item) => item.tag === "Education");
  const lastEducationIndex = educationBlogs.length - 1;
  const healthBlogs = blogs.filter((item) => item.tag === "Health");
  const lastHealthIndex = healthBlogs.length - 1;
  return (
    <>
      <div className="row">
        <div className="education col-md-6">
          <h3 className="fw-bold mb-4">Education</h3>
          <div className="educationCards">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="card-left"
                  onClick={(event) => {
                    //preventing unexpected redirect issue
                    event.preventDefault();
                    navigate(`/blog/${educationBlogs[lastEducationIndex]._id}`);
                  }}
                >
                  <div
                    className="card"
                    style={{
                      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${
                        educationBlogs[lastEducationIndex]?.imgUrl
                          ? educationBlogs[lastEducationIndex]?.imgUrl
                          : placeholder
                      }')`,
                    }}
                  >
                    {/* <div className="card-category">City</div> */}
                    <div className="card-description">
                      <button className="tagName btn-dark">
                        {educationBlogs[lastEducationIndex]?.tag
                          ? educationBlogs[lastEducationIndex]?.tag
                          : "Tag"}
                      </button>
                      {/* <button className="tagName btn-dark">Tag2 Here</button> */}
                      <h2>
                        {educationBlogs[lastEducationIndex]?.title
                          ? educationBlogs[lastEducationIndex]?.title
                          : "Title Not Available"}
                      </h2>
                      <p className="date">
                        {new Date(
                          educationBlogs[lastEducationIndex]?.date
                        ).toDateString()}
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

                <div className="row">
                  <div className="card-bottom col-md-6 col-sm-12 card-col">
                    <div className="card">
                      <img
                        src={
                          educationBlogs[lastEducationIndex - 1]?.imgUrl
                            ? educationBlogs[lastEducationIndex - 1]?.imgUrl
                            : placeholder
                        }
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <button className="tagName btn-dark">
                          {educationBlogs[lastEducationIndex - 1]?.tag
                            ? educationBlogs[lastEducationIndex - 1]?.tag
                            : "Tag"}
                        </button>
                        <h5 className="card-title fw-bold">
                          {educationBlogs[lastEducationIndex - 1]?.title
                            ? educationBlogs[lastEducationIndex - 1]?.title
                            : "Title Not Available"}
                        </h5>
                        <p className="card-text">
                          {educationBlogs[lastEducationIndex - 1]?.description
                            ? educationBlogs[
                                lastEducationIndex - 1
                              ]?.description.slice(0, 300) + "..."
                            : "Description Not Available"}
                        </p>
                        <a
                          className="btn btn-outline-dark"
                          onClick={(event) => {
                            //preventing unexpected redirect issue
                            event.preventDefault();
                            navigate(
                              `/blog/${
                                educationBlogs[lastEducationIndex - 1]._id
                              }`
                            );
                          }}
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="card-bottom col-md-6 col-sm-12 card-col">
                    <div className="card">
                      <img
                        src={
                          educationBlogs[lastEducationIndex - 2]?.imgUrl
                            ? educationBlogs[lastEducationIndex - 2]?.imgUrl
                            : placeholder
                        }
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <button className="tagName btn-dark">
                          {educationBlogs[lastEducationIndex - 2]?.tag
                            ? educationBlogs[lastEducationIndex - 2]?.tag
                            : "Tag"}
                        </button>
                        <h5 className="card-title fw-bold">
                          {educationBlogs[lastEducationIndex - 2]?.title
                            ? educationBlogs[lastEducationIndex - 2]?.title
                            : "Title Not Available"}
                        </h5>
                        <p className="card-text">
                          {educationBlogs[lastEducationIndex - 2]?.description
                            ? educationBlogs[
                                lastEducationIndex - 2
                              ]?.description.slice(0, 300) + "..."
                            : "Description Not Available"}
                        </p>
                        <a
                          className="btn btn-outline-dark"
                          onClick={(event) => {
                            //preventing unexpected redirect issue
                            event.preventDefault();
                            navigate(
                              `/blog/${
                                educationBlogs[lastEducationIndex - 2]._id
                              }`
                            );
                          }}
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <hr/> */}

        <div className="health col-md-6">
          <h3 className="fw-bold mb-4">Health</h3>
          <div className="educationCards">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="card-left"
                  onClick={(event) => {
                    //preventing unexpected redirect issue
                    event.preventDefault();
                    navigate(`/blog/${healthBlogs[lastHealthIndex]._id}`);
                  }}
                >
                  <div
                    className="card"
                    style={{
                      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${
                        healthBlogs[lastHealthIndex]?.imgUrl
                          ? healthBlogs[lastHealthIndex]?.imgUrl
                          : placeholder
                      }')`,
                    }}
                  >
                    {/* <div className="card-category">City</div> */}
                    <div className="card-description">
                      <button className="tagName btn-dark">
                        {healthBlogs[lastHealthIndex]?.tag
                          ? healthBlogs[lastHealthIndex]?.tag
                          : "Tag"}
                      </button>
                      {/* <button className="tagName btn-dark">Tag2 Here</button> */}
                      <h2>
                        {healthBlogs[lastHealthIndex]?.title
                          ? healthBlogs[lastHealthIndex]?.title
                          : "Title Not Available"}
                      </h2>
                      <p className="date">
                        {new Date(
                          healthBlogs[lastHealthIndex]?.date
                        ).toDateString()}
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

                <div className="row">
                  <div className="card-bottom col-md-6 col-sm-6 card-col">
                    <div className="card">
                      <img
                        src={
                          healthBlogs[lastHealthIndex - 1]?.imgUrl
                            ? healthBlogs[lastHealthIndex - 1]?.imgUrl
                            : placeholder
                        }
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <button className="tagName btn-dark">
                          {healthBlogs[lastHealthIndex - 1]?.tag
                            ? healthBlogs[lastHealthIndex - 1]?.tag
                            : "Tag"}
                        </button>
                        <h5 className="card-title fw-bold">
                          {healthBlogs[lastHealthIndex - 1]?.title
                            ? healthBlogs[lastHealthIndex - 1]?.title
                            : "Title Not Available"}
                        </h5>
                        <p className="card-text">
                          {healthBlogs[lastHealthIndex - 1]?.description
                            ? healthBlogs[lastHealthIndex - 1]?.description.slice(0,300) + "..."
                            : "Description Not Available"}
                        </p>
                        <a
                          className="btn btn-outline-dark"
                          onClick={(event) => {
                            //preventing unexpected redirect issue
                            event.preventDefault();
                            navigate(
                              `/blog/${healthBlogs[lastHealthIndex - 1]._id}`
                            );
                          }}
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="card-bottom col-md-6 col-sm-6 card-col">
                    <div className="card">
                      <img
                        src={
                          healthBlogs[lastHealthIndex - 2]?.imgUrl
                            ? healthBlogs[lastHealthIndex - 2]?.imgUrl
                            : placeholder
                        }
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <button className="tagName btn-dark">
                          {healthBlogs[lastHealthIndex - 2]?.tag
                            ? healthBlogs[lastHealthIndex - 2]?.tag
                            : "Tag"}
                        </button>
                        <h5 className="card-title fw-bold">
                          {healthBlogs[lastHealthIndex - 2]?.title
                            ? healthBlogs[lastHealthIndex - 2]?.title
                            : "Title Not Available"}
                        </h5>
                        <p className="card-text">
                          {healthBlogs[lastHealthIndex - 2]?.description
                            ? healthBlogs[lastHealthIndex - 2]?.description.slice(0,300) + "..."
                            : "Description Not Available"}
                        </p>
                        <a
                          className="btn btn-outline-dark"
                          onClick={(event) => {
                            //preventing unexpected redirect issue
                            event.preventDefault();
                            navigate(
                              `/blog/${healthBlogs[lastHealthIndex - 2]._id}`
                            );
                          }}
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EduactionAndHealth;
