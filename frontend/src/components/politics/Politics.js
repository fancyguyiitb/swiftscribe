import React, { useContext } from "react";
import "./style.scss";
import contextValue from "../../context/blogs/BlogContext";
import { useNavigate } from "react-router";
import placeholder from "../../assets/placeholder.jpg";

const Politics = () => {
  const context = useContext(contextValue);
  const { blogs } = context;

  const navigate = useNavigate();

  const poltBlogs = blogs.filter((item) => item.tag === "Politics");
  const lastIndex = poltBlogs.length - 1;

  return (
    <>
      <h3 className="fw-bold mb-4">Politics</h3>

      <div className="stockMarketCards">
        <div className="row">
          <div className="col-md-3 col-sm-12 card-col">
            <div className="card">
              <img
                src={poltBlogs[lastIndex]?.imgUrl
                  ? poltBlogs[lastIndex]?.imgUrl
                  : placeholder}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">
                  {poltBlogs[lastIndex]?.tag
                    ? poltBlogs[lastIndex]?.tag
                    : "Tag"}
                </button>
                <h5 className="card-title fw-bold">
                  {poltBlogs[lastIndex]?.title
                    ? poltBlogs[lastIndex]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                  {poltBlogs[lastIndex]?.description
                    ? poltBlogs[lastIndex]?.description.slice(0,300) + "..."
                    : "Description Not Available"}
                </p>
                <a
                  className="btn btn-outline-dark"
                  onClick={(event) => {
                    //preventing unexpected redirect issue
                    event.preventDefault();
                    navigate(`/blog/${poltBlogs[lastIndex]._id}`);
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 card-col">
            <div className="card">
              <img
                src={poltBlogs[lastIndex-1]?.imgUrl
                  ? poltBlogs[lastIndex-1]?.imgUrl
                  : placeholder}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">
                  {poltBlogs[lastIndex - 1]?.tag
                    ? poltBlogs[lastIndex - 1]?.tag
                    : "Tag"}
                </button>
                <h5 className="card-title fw-bold">
                  {poltBlogs[lastIndex - 1]?.title
                    ? poltBlogs[lastIndex - 1]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                  {poltBlogs[lastIndex - 1]?.description
                    ? poltBlogs[lastIndex - 1]?.description.slice(0,300) + "..."
                    : "Description Not Available"}
                </p>
                <a
                  className="btn btn-outline-dark"
                  onClick={(event) => {
                    //preventing unexpected redirect issue
                    event.preventDefault();
                    navigate(`/blog/${poltBlogs[lastIndex - 1]._id}`);
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 card-col">
            <div className="card">
              <img
                src={poltBlogs[lastIndex-2]?.imgUrl
                  ? poltBlogs[lastIndex-2]?.imgUrl
                  : placeholder}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">
                  {poltBlogs[lastIndex - 2]?.tag
                    ? poltBlogs[lastIndex - 2]?.tag
                    : "Tag"}
                </button>
                <h5 className="card-title fw-bold">
                  {poltBlogs[lastIndex - 2]?.title
                    ? poltBlogs[lastIndex - 2]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                  {poltBlogs[lastIndex - 2]?.description
                    ? poltBlogs[lastIndex - 2]?.description.slice(0,300) + "..."
                    : "Description Not Available"}
                </p>
                <a
                  className="btn btn-outline-dark"
                  onClick={(event) => {
                    //preventing unexpected redirect issue
                    event.preventDefault();
                    navigate(`/blog/${poltBlogs[lastIndex - 2]._id}`);
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 card-col">
            <div className="card">
              <img
                src={poltBlogs[lastIndex-3]?.imgUrl
                  ? poltBlogs[lastIndex-3]?.imgUrl
                  : placeholder}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">
                  {poltBlogs[lastIndex - 3]?.tag
                    ? poltBlogs[lastIndex - 3]?.tag
                    : "Tag"}
                </button>
                <h5 className="card-title fw-bold">
                  {poltBlogs[lastIndex - 3]?.title
                    ? poltBlogs[lastIndex - 3]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                  {poltBlogs[lastIndex - 3]?.description
                    ? poltBlogs[lastIndex - 3]?.description.slice(0,300) + "..."
                    : "Description Not Available"}
                </p>
                <a
                  href="/"
                  className="btn btn-outline-dark"
                  onClick={(event) => {
                    //preventing unexpected redirect issue
                    event.preventDefault();
                    navigate(`/blog/${poltBlogs[lastIndex - 3]._id}`);
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Politics;
