import React, { useState } from "react";
import BlogContext from "./BlogContext";

const BlogState = (props) => {
  const host = "http://localhost:5000";
  const blogsInitial = [];

  const [blogs, setBlogs] = useState(blogsInitial);
  const [userOnlyBlogs, setUserOnlyBlogs] = useState(blogsInitial);

  //CRUD functions

  //Get all blogs
  const getAllBlogs = async () => {
    //API Call
    const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json);
    setBlogs(json);
    // console.log(blogs);
  };

  //Get all USER blogs
  const getUserBlogs = async () => {
    //API Call
    const res = await fetch(`${host}/api/blogs/fetchalluserblogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await res.json();
    // console.log(json);
    setUserOnlyBlogs(json);
    // console.log(userOnlyBlogs);
  };

  //Add a new blog
  const addBlog = async (title, description, tag, imgUrl) => {
    //API Call
    const response = await fetch(`${host}/api/blogs/newblog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag, imgUrl }),
    });
    //   const json = response.json();
    console.log("Adding note...");
    // const newBlog = {
    //   _id: "658803a3e8d02e0b9f39f9ac",
    //   user: "65821c63b670bbd1f40973b4",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   imgUrl: imgUrl,
    //   date: "2023-12-24T10:10:43.409Z",
    //   __v: 0,
    // };
    const newBlog = await response.json();
    //adding the new blog to existing array of blogs
    await setBlogs(blogs.concat(newBlog));
    // console.log(blogs);
  };

  //Edit a blog
  const editBlog = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/blogs/editblog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = await response.json();

    //Logic to edit in client side
    for (let index = 0; index < blogs.length; index++) {
      const element = blogs[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  //Delete a blog
  const deleteBlog = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/blogs/deleteblog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json);
    // setBlogs(json);

    console.log("Deleting blog with id: " + id);
    const newBlogs = await userOnlyBlogs.filter((item) => {
      return item._id !== id;
    });
    setUserOnlyBlogs(newBlogs);
  };
  return (
    <BlogContext.Provider
      value={{
        blogs,
        userOnlyBlogs,
        getAllBlogs,
        addBlog,
        editBlog,
        deleteBlog,
        getUserBlogs,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
