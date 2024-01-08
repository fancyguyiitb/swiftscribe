import React, { useContext } from "react";
import "./style.scss";
import contextValue from "../../context/blogs/BlogContext";
import { useNavigate } from "react-router";
import placeholder from "../../assets/placeholder.jpg";

const HomeCards = () => {
  const context = useContext(contextValue);
  const { blogs } = context;
  const lastIndex = blogs.length - 1;

  // useEffect(() => {
  //   getAllBlogs();
  // }, []);

  const navigate = useNavigate();

  return (
    <div className="homeCards">
      <div className="row">
        {/* left big card */}
        <div
          className="card-left col-md-4"
          onClick={(event) => {
            //preventing unexpected redirect issue
            event.preventDefault();
            navigate(`/blog/${blogs[lastIndex]._id}`);
          }}
        >
          <div
            className="card"
            style={{
              background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${
                blogs[lastIndex]?.imgUrl
                  ? blogs[lastIndex]?.imgUrl
                  : placeholder
              }')`,
            }}
          >
            {/* <div className="card-category">City</div> */}
            <div className="card-description">
              <button className="tagName btn-dark">
                {blogs[lastIndex]?.tag ? blogs[lastIndex]?.tag : "N/A"}
              </button>
              {/* <button className="tagName btn-dark">Tag2 Here</button> */}
              <h2>
                {blogs[lastIndex]?.title
                  ? blogs[lastIndex]?.title
                  : "Title Not Available"}
              </h2>
              <p className="date">
                {new Date(blogs[lastIndex]?.date).toDateString()}
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
          className="card-left col-md-4"
          onClick={(event) => {
            //preventing unexpected redirect issue
            event.preventDefault();
            navigate(`/blog/${blogs[lastIndex - 1]._id}`);
          }}
        >
          <div
            className="card"
            style={{
              background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${
                blogs[lastIndex-1]?.imgUrl
                  ? blogs[lastIndex-1]?.imgUrl
                  : placeholder
              }')`,
            }}
          >
            {/* <div className="card-category">City</div> */}
            <div className="card-description">
              <button className="tagName btn-dark">
                {blogs[lastIndex - 1]?.tag ? blogs[lastIndex - 1]?.tag : "N/A"}
              </button>
              {/* <button className="tagName btn-dark">Tag2 Here</button> */}
              <h2>
                {blogs[lastIndex - 1]?.title
                  ? blogs[lastIndex - 1]?.title
                  : "Title Not Available"}
              </h2>
              <p className="date">
                {new Date(blogs[lastIndex - 1]?.date).toDateString()}
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
          className="card-left col col-sm-12 col-md-4"
          onClick={(event) => {
            //preventing unexpected redirect issue
            event.preventDefault();
            navigate(`/blog/${blogs[lastIndex - 2]._id}`);
          }}
        >
          <div
            className="card"
            style={{
              background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${
                blogs[lastIndex-2]?.imgUrl
                  ? blogs[lastIndex-2]?.imgUrl
                  : placeholder
              }')`,
            }}
          >
            {/* <div className="card-category">City</div> */}
            <div className="card-description">
              <button className="tagName btn-dark">
                {blogs[lastIndex - 2]?.tag ? blogs[lastIndex - 2]?.tag : "N/A"}
              </button>
              {/* <button className="tagName btn-dark">Tag2 Here</button> */}
              <h2>
                {blogs[lastIndex - 2]?.title
                  ? blogs[lastIndex - 2]?.title
                  : "Title Not Available"}
              </h2>
              <p className="date">
                {new Date(blogs[lastIndex - 2]?.date).toDateString()}
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

        {/* <div className="card-right col col-sm-12 col-md-6">
          <div className="row">
            <div className="col-12">
              <div className="card float-right">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="d-block w-100"
                      src="https://picsum.photos/150?image=641"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-block">
                      <button className="tagName btn-dark">Tag1 Here</button>
                      <button className="tagName btn-dark">Tag2 Here</button>
                      <h5 className="fw-bold">
                        Change around the content for awsomenes Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Debitis,
                        totam?
                      </h5>
                      <br />
                      <p className="date">Dec 21, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeCards;
