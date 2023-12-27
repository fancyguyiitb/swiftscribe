import React, { useContext } from "react";
import "./style.scss";
import contextValue from "../../context/blogs/BlogContext";

const Politics = () => {
  const context = useContext(contextValue);
  const { blogs } = context;

  const poltBlogs = blogs.filter((item) => item.tag === "Politics");

  return (
    <>
      <h3 className="fw-bold mb-4">Politics</h3>

      <div className="stockMarketCards">
        <div className="row">
          <div className="col-md-3 col-sm-12 card-col">
            <div className="card">
              <img
                src="https://cdn-eaekd.nitrocdn.com/CxTeoSPKdjdqTSxLEEGaKiGroHlKASqH/assets/mobile/optimized/rev-d765668/_pADGnJ4aLJKJRUEC0XWC7oI1MMIteokOL4BRQx05NqcUbDxyAsgNBPDj71zlOLr67HnmSkBIi6lkujtYuuQoQ6eDZLUC70KNW5ToZerVWOkQyQ9JPFa9okcNqbClJfcEnuzPjoByseg6bWEiKZw_84"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">{poltBlogs[0]?.tag
                    ? poltBlogs[0]?.tag
                    : "Tag"}</button>
                <h5 className="card-title fw-bold">
                {poltBlogs[0]?.title
                    ? poltBlogs[0]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                {poltBlogs[0]?.description
                    ? poltBlogs[0]?.description
                    : "Description Not Available"}
                </p>
                <a href="/" className="btn btn-outline-dark">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 card-col">
            <div className="card">
              <img
                src="https://cdn-eaekd.nitrocdn.com/CxTeoSPKdjdqTSxLEEGaKiGroHlKASqH/assets/mobile/optimized/rev-d765668/_pADGnJ4aLJKJRUEC0XWC7oI1MMIteokOL4BRQx05NqcUbDxyAsgNBPDj71zlOLr67HnmSkBIi6lkujtYuuQoQ6eDZLUC70KNW5ToZerVWOkQyQ9JPFa9okcNqbClJfcEnuzPjoByseg6bWEiKZw_84"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">{poltBlogs[1]?.tag
                    ? poltBlogs[1]?.tag
                    : "Tag"}</button>
                <h5 className="card-title fw-bold">
                {poltBlogs[1]?.title
                    ? poltBlogs[1]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                {poltBlogs[1]?.description
                    ? poltBlogs[1]?.description
                    : "Description Not Available"}
                </p>
                <a href="/" className="btn btn-outline-dark">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 card-col">
            <div className="card">
              <img
                src="https://cdn-eaekd.nitrocdn.com/CxTeoSPKdjdqTSxLEEGaKiGroHlKASqH/assets/mobile/optimized/rev-d765668/_pADGnJ4aLJKJRUEC0XWC7oI1MMIteokOL4BRQx05NqcUbDxyAsgNBPDj71zlOLr67HnmSkBIi6lkujtYuuQoQ6eDZLUC70KNW5ToZerVWOkQyQ9JPFa9okcNqbClJfcEnuzPjoByseg6bWEiKZw_84"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">{poltBlogs[2]?.tag
                    ? poltBlogs[2]?.tag
                    : "Tag"}</button>
                <h5 className="card-title fw-bold">
                {poltBlogs[2]?.title
                    ? poltBlogs[2]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                {poltBlogs[2]?.description
                    ? poltBlogs[2]?.description
                    : "Description Not Available"}
                </p>
                <a href="/" className="btn btn-outline-dark">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 card-col">
            <div className="card">
              <img
                src="https://cdn-eaekd.nitrocdn.com/CxTeoSPKdjdqTSxLEEGaKiGroHlKASqH/assets/mobile/optimized/rev-d765668/_pADGnJ4aLJKJRUEC0XWC7oI1MMIteokOL4BRQx05NqcUbDxyAsgNBPDj71zlOLr67HnmSkBIi6lkujtYuuQoQ6eDZLUC70KNW5ToZerVWOkQyQ9JPFa9okcNqbClJfcEnuzPjoByseg6bWEiKZw_84"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <button className="tagName btn-dark">{poltBlogs[3]?.tag
                    ? poltBlogs[3]?.tag
                    : "Tag"}</button>
                <h5 className="card-title fw-bold">
                {poltBlogs[3]?.title
                    ? poltBlogs[3]?.title
                    : "Title Not Available"}
                </h5>
                <p className="card-text">
                {poltBlogs[3]?.description
                    ? poltBlogs[3]?.description
                    : "Description Not Available"}
                </p>
                <a href="/" className="btn btn-outline-dark">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Politics