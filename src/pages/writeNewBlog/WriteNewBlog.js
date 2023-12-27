import React, { useContext, useState } from "react";
import "./style.scss";
import contextValue from "../../context/blogs/BlogContext";
import { useNavigate } from "react-router-dom";

const WriteNewBlog = () => {
  const context = useContext(contextValue);
  const { addBlog } = context;

  const [blogToAdd, setBlogToAdd] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleAddBlog = async (event) => {
    //to prevent page from reloading
    event.preventDefault();

    await addBlog(blogToAdd.title, blogToAdd.description, blogToAdd.tag);
    //redirecting to homepage after adding the blog
    navigate("/")
  };

  //whenever any field updated, overwrite that field into the new temporary blog, and let the other things be as it is from before
  const onChange = (event) => {
    setBlogToAdd({ ...blogToAdd, [event.target.name]: event.target.value });
    // console.log(blogToAdd);
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="writeNewBlog">
        <div className="blogForm">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Blog title here..."
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imgUrl" className="form-label">
              Thumbnail URL
            </label>
            <input
              type="text"
              className="form-control"
              id="imgUrl"
              name="imgUrl"
              placeholder="https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="5"
              placeholder="Blog description here..."
              onChange={onChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDataList" className="form-label">
              Tags
            </label>
            <input
              className="form-control"
              list="datalistOptions"
              id="tag"
              name="tag"
              onChange={onChange}
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="Health" />
              <option value="Education" />
              <option value="Stocks" />
              <option value="Technology" />
              <option value="Must Read" />
              <option value="Politics" />
            </datalist>
          </div>

          <div className="loginButton">
            <button
              type="button"
              className="btn btn-dark publish"
              onClick={handleAddBlog}
            >
              Publish Now!
            </button>
            <button
              type="button"
              className="btn btn-outline-dark discard"
              onClick={() => navigate("/")}
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteNewBlog;
