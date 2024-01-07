import React, { useEffect, useContext, useState } from "react";
import "./style.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import contextValue from "../../context/blogs/BlogContext";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const UserBlogs = () => {
  const context = useContext(contextValue);
  const { getUserBlogs, userOnlyBlogs, deleteBlog } = context;
  useEffect(() => {
    getUserBlogs();
    console.log(userOnlyBlogs);
  }, []);

  const navigate = useNavigate();

  //   const [blogToAdd, setBlogToAdd] = useState({
  //     title: "",
  //     description: "",
  //     tag: "",
  //     imgUrl: "",
  //   });

  const handleDeleteBlog = async (id) => {
    await deleteBlog(id);
    //redirecting to homepage after adding the blog
    // navigate("/")
  };

  const submit = (id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure to delete this blog?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {handleDeleteBlog(id)},
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  //whenever any field updated, overwrite that field into the new temporary blog, and let the other things be as it is from before
  //   const onChange = (event) => {
  //     setBlogToAdd({ ...blogToAdd, [event.target.name]: event.target.value });
  //     // console.log(blogToAdd);
  //   };

  return (
    <>
      <div className="userBlogs">
        <p className="pageTitle">Your Blogs</p>

        <div className="row">
          {userOnlyBlogs.map((userBlog) => {
            return (
              <div
                className="col-md-3 col-sm-12 content-card"
                key={userBlog._id}
              >
                <div className="card-big-shadow">
                  <div
                    className="card card-just-text"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <div className="editLogo">
                      <button>
                        <AiFillEdit />
                      </button>
                      {/* <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteBlog(userBlog._id);
                        }}
                      >
                        <AiFillDelete />
                      </button> */}

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          submit(userBlog._id);
                        }}
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                    <div className="content">
                      <h6 className="category">{userBlog.tag}</h6>
                      <h4
                        className="title"
                        onClick={(event) => {
                          //preventing unexpected redirect issue
                          event.preventDefault();
                          navigate(`/blog/${userBlog._id}`);
                        }}
                      >
                        {userBlog.title}
                      </h4>
                      <p className="description">
                        {userBlog.description.slice(0, 200) + "..."}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* {userOnlyBlogs.map((userBlog) => {
        return (
            <div>{userBlog.tag}</div>
        );
      })} */}
    </>
  );
};

export default UserBlogs;
