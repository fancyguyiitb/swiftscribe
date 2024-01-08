import React, { useContext } from "react";
import "./style.scss";
import contextValue from "../../context/blogs/BlogContext";
import { useNavigate } from "react-router";
import placeholder from "../../assets/placeholder.jpg";

const MustRead = () => {
  const context = useContext(contextValue);
  const { blogs } = context;

  // useEffect(() => {
  //   getAllBlogs();
  // }, []);

  const navigate = useNavigate();

  const mustReadBlogs = blogs.filter((item) => item.tag === "Must Read");
  // console.log("Stocks: " + blogs);
  const lastIndex = mustReadBlogs.length - 1;
  return (
    <>
      <div className="mustRead">
        <h3>Must Read</h3>

        <div className="mustReadCards">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="card float-right">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="d-block w-100"
                      src={mustReadBlogs[lastIndex]?.imgUrl
                        ? mustReadBlogs[lastIndex]?.imgUrl
                        : placeholder}
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-block">
                      {/* <button className="tagName btn-dark">
                        {mustReadBlogs[lastIndex]?.tag
                          ? mustReadBlogs[lastIndex]?.tag
                          : "Tag"}
                      </button> */}
                      <h5 className="fw-bold">
                        {mustReadBlogs[lastIndex]?.title
                          ? mustReadBlogs[lastIndex]?.title
                          : "Title Not Available"}
                      </h5>
                      {/* <p>
                        {mustReadBlogs[lastIndex]?.description
                          ? mustReadBlogs[lastIndex]?.description.slice(0,300) + "..."
                          : "Description Not Available"}
                      </p> */}
                      <div className="readMore">
                        <a
                          className="btn btn-outline-dark"
                          onClick={(event) => {
                            //preventing unexpected redirect issue
                            event.preventDefault();
                            navigate(`/blog/${mustReadBlogs[lastIndex]._id}`);
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
            <div className="col-md-6 col-sm-12">
              <div className="card float-right">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="d-block w-100"
                      src={mustReadBlogs[lastIndex-1]?.imgUrl
                        ? mustReadBlogs[lastIndex]?.imgUrl
                        : placeholder}
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-block">
                      {/* <button className="tagName btn-dark">
                        {mustReadBlogs[lastIndex - 1]?.tag
                          ? mustReadBlogs[lastIndex - 1]?.tag
                          : "Tag"}
                      </button> */}
                      <h5 className="fw-bold">
                        {mustReadBlogs[lastIndex - 1]?.title
                          ? mustReadBlogs[lastIndex - 1]?.title
                          : "Title Not Available"}
                      </h5>
                      {/* <p>
                        {mustReadBlogs[lastIndex - 1]?.description
                          ? mustReadBlogs[lastIndex - 1]?.description.slice(0,300) + "..."
                          : "Description Not Available"}
                      </p> */}
                      <div className="readMore">
                        <a
                          className="btn btn-outline-dark"
                          onClick={(event) => {
                            //preventing unexpected redirect issue
                            event.preventDefault();
                            navigate(`/blog/${mustReadBlogs[lastIndex-1]._id}`);
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
            <div className="col-md-6 col-sm-12">
              <div className="card float-right">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="d-block w-100"
                       src={mustReadBlogs[lastIndex-2]?.imgUrl
                        ? mustReadBlogs[lastIndex-2]?.imgUrl
                        : placeholder}
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-block">
                      {/* <button className="tagName btn-dark">
                        {mustReadBlogs[lastIndex - 2]?.tag
                          ? mustReadBlogs[lastIndex - 2]?.tag
                          : "Tag"}
                      </button> */}
                      <h5 className="fw-bold">
                        {mustReadBlogs[lastIndex - 2]?.title
                          ? mustReadBlogs[lastIndex - 2]?.title
                          : "Title Not Available"}
                      </h5>
                      {/* <p>
                        {mustReadBlogs[lastIndex - 2]?.description
                          ? mustReadBlogs[lastIndex - 2]?.description.slice(0,300) + "..."
                          : "Description Not Available"}
                      </p> */}
                      <div className="readMore">
                        <a
                          className="btn btn-outline-dark"
                          onClick={(event) => {
                            //preventing unexpected redirect issue
                            event.preventDefault();
                            navigate(`/blog/${mustReadBlogs[lastIndex-2]._id}`);
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
            <div className="col-md-6 col-sm-12">
              <div className="card float-right">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="d-block w-100"
                       src={mustReadBlogs[lastIndex-3]?.imgUrl
                        ? mustReadBlogs[lastIndex-3]?.imgUrl
                        : placeholder}
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-block">
                      {/* <button className="tagName btn-dark">
                        {mustReadBlogs[lastIndex - 3]?.tag
                          ? mustReadBlogs[lastIndex - 3]?.tag
                          : "Tag"}
                      </button> */}
                      <h5 className="fw-bold">
                        {mustReadBlogs[lastIndex - 3]?.title
                          ? mustReadBlogs[lastIndex - 3]?.title
                          : "Title Not Available"}
                      </h5>
                      {/* <p>
                        {mustReadBlogs[lastIndex - 3]?.description
                          ? mustReadBlogs[lastIndex - 3]?.description.slice(0,300) + "..."
                          : "Description Not Available"}
                      </p> */}
                      <div className="readMore">
                        <a
                          className="btn btn-outline-dark"
                          onClick={(event) => {
                            //preventing unexpected redirect issue
                            event.preventDefault();
                            navigate(`/blog/${mustReadBlogs[lastIndex-3]._id}`);
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
            <div className="col-md-6 col-sm-12">
              <div className="card float-right">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="d-block w-100"
                       src={mustReadBlogs[lastIndex-4]?.imgUrl
                        ? mustReadBlogs[lastIndex-4]?.imgUrl
                        : placeholder}
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-block">
                      {/* <button className="tagName btn-dark">
                        {mustReadBlogs[lastIndex - 4]?.tag
                          ? mustReadBlogs[lastIndex - 4]?.tag
                          : "Tag"}
                      </button> */}
                      <h5 className="fw-bold">
                        {mustReadBlogs[lastIndex - 4]?.title
                          ? mustReadBlogs[lastIndex - 4]?.title
                          : "Title Not Available"}
                      </h5>
                      {/* <p>
                        {mustReadBlogs[lastIndex - 4]?.description
                          ? mustReadBlogs[lastIndex - 4]?.description.slice(0,300) + "..."
                          : "Description Not Available"}
                      </p> */}
                      <div className="readMore">
                        <a
                          className="btn btn-outline-dark"
                          onClick={(event) => {
                            //preventing unexpected redirect issue
                            event.preventDefault();
                            navigate(`/blog/${mustReadBlogs[lastIndex-4]._id}`);
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
            <div className="col-md-6 col-sm-12">
              <div className="card float-right">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="d-block w-100"
                       src={mustReadBlogs[lastIndex-5]?.imgUrl
                        ? mustReadBlogs[lastIndex-5]?.imgUrl
                        : placeholder}
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-block">
                      {/* <button className="tagName btn-dark">
                        {mustReadBlogs[lastIndex - 5]?.tag
                          ? mustReadBlogs[lastIndex - 5]?.tag
                          : "Tag"}
                      </button> */}
                      <h5 className="fw-bold">
                        {mustReadBlogs[lastIndex - 5]?.title
                          ? mustReadBlogs[lastIndex - 5]?.title
                          : "Title Not Available"}
                      </h5>
                      {/* <p>
                        {mustReadBlogs[lastIndex - 5]?.description
                          ? mustReadBlogs[lastIndex - 5]?.description.slice(0,300) + "..."
                          : "Description Not Available"}
                      </p> */}
                      <div className="readMore">
                        <a
                          className="btn btn-outline-dark"
                          onClick={(event) => {
                            //preventing unexpected redirect issue
                            event.preventDefault();
                            navigate(`/blog/${mustReadBlogs[lastIndex-5]._id}`);
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

export default MustRead;
