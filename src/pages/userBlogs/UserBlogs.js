import React, { useEffect, useContext } from "react";
import "./style.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import contextValue from "../../context/blogs/BlogContext";
import { useNavigate } from "react-router-dom";

const UserBlogs = () => {
  const context = useContext(contextValue);
  const { getUserBlogs, userOnlyBlogs } = context;
  useEffect(() => {
    getUserBlogs();
    console.log(userOnlyBlogs);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="userBlogs">
        <p className="pageTitle">Your Blogs</p>

        <div className="row">
          {userOnlyBlogs.map((userBlog) => {
            return (
              <div class="col-md-3 col-sm-12 content-card">
                <div class="card-big-shadow">
                  <div
                    class="card card-just-text"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <div className="editLogo">
                      <button>
                        <AiFillEdit />
                      </button>
                      <button>
                        <AiFillDelete />
                      </button>
                    </div>
                    <div class="content">
                      <h6 class="category">{userBlog.tag}</h6>
                      <h4
                        class="title"
                        onClick={(event) => {
                          //preventing unexpected redirect issue
                          event.preventDefault();
                          navigate(`/blog/${userBlog._id}`);
                        }}
                      >
                        {userBlog.title}
                      </h4>
                      <p class="description">
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
