import React, { useContext } from "react";
import "./style.scss";
import contextValue from "../../context/blogs/BlogContext";
import { useNavigate } from "react-router";
import placeholder from "../../assets/placeholder.jpg";

const StockMarket = () => {
  const context = useContext(contextValue);
  const { blogs } = context;

  // useEffect(() => {
  //   getAllBlogs();
  // }, []);
  const navigate = useNavigate();

  const stockBlogs = blogs.filter((item) => item.tag === "Stocks");
  const lastIndex = stockBlogs.length - 1;

  return (
    <>
      <h3 className="fw-bold mb-4">Stock Market</h3>

      <div className="stockMarketCards">
        <div className="row">
          <div className="col-md-3 col-sm-12 card-col">
            <div className="card">
              <img
                src={stockBlogs[lastIndex]?.imgUrl
                  ? stockBlogs[lastIndex]?.imgUrl
                  : placeholder}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">
                  {stockBlogs[lastIndex]?.tag
                    ? stockBlogs[lastIndex]?.tag
                    : "Tag"}
                </button>
                <h5 className="card-title fw-bold">
                  {stockBlogs[lastIndex]?.title
                    ? stockBlogs[lastIndex]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                  {stockBlogs[lastIndex]?.description
                    ? stockBlogs[lastIndex]?.description.slice(0,300) + "..."
                    : "Description Not Available"}
                </p>
                <a
                  className="btn btn-outline-dark"
                  onClick={(event) => {
                    //preventing unexpected redirect issue
                    event.preventDefault();
                    navigate(`/blog/${stockBlogs[lastIndex]._id}`);
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
                src={stockBlogs[lastIndex-1]?.imgUrl
                  ? stockBlogs[lastIndex-1]?.imgUrl
                  : placeholder}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">
                  {stockBlogs[lastIndex - 1]?.tag
                    ? stockBlogs[lastIndex - 1]?.tag
                    : "Tag"}
                </button>
                <h5 className="card-title fw-bold">
                  {stockBlogs[lastIndex - 1]?.title
                    ? stockBlogs[lastIndex - 1]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                  {stockBlogs[lastIndex - 1]?.description
                    ? stockBlogs[lastIndex - 1]?.description.slice(0,300) + "..."
                    : "Description Not Available"}
                </p>
                <a
                  href="/"
                  className="btn btn-outline-dark"
                  onClick={(event) => {
                    //preventing unexpected redirect issue
                    event.preventDefault();
                    navigate(`/blog/${stockBlogs[lastIndex - 1]._id}`);
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
                src={stockBlogs[lastIndex-2]?.imgUrl
                  ? stockBlogs[lastIndex-2]?.imgUrl
                  : placeholder}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">
                  {stockBlogs[lastIndex - 2]?.tag
                    ? stockBlogs[lastIndex - 2]?.tag
                    : "Tag"}
                </button>
                <h5 className="card-title fw-bold">
                  {stockBlogs[lastIndex - 2]?.title
                    ? stockBlogs[lastIndex - 2]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                  {stockBlogs[lastIndex - 2]?.description
                    ? stockBlogs[lastIndex - 2]?.description.slice(0,300) + "..."
                    : "Description Not Available"}
                </p>
                <a
                  href="/"
                  className="btn btn-outline-dark"
                  onClick={(event) => {
                    //preventing unexpected redirect issue
                    event.preventDefault();
                    navigate(`/blog/${stockBlogs[lastIndex - 2]._id}`);
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
                src={stockBlogs[lastIndex-3]?.imgUrl
                  ? stockBlogs[lastIndex-3]?.imgUrl
                  : placeholder}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">
                  {stockBlogs[lastIndex - 3]?.tag
                    ? stockBlogs[lastIndex - 3]?.tag
                    : "Tag"}
                </button>
                <h5 className="card-title fw-bold">
                  {stockBlogs[lastIndex - 3]?.title
                    ? stockBlogs[lastIndex - 3]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                  {stockBlogs[lastIndex - 3]?.description
                    ? stockBlogs[lastIndex - 3]?.description.slice(0,300) + "..."
                    : "Description Not Available"}
                </p>
                <a
                  href="/"
                  className="btn btn-outline-dark"
                  onClick={(event) => {
                    //preventing unexpected redirect issue
                    event.preventDefault();
                    navigate(`/blog/${stockBlogs[lastIndex - 3]._id}`);
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

export default StockMarket;
