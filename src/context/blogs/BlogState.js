import React, { useState } from "react";
import BlogContext from "./BlogContext";

const BlogState = (props) => {
  const host = "http://localhost:5000";
  const blogsInitial = [];

  const [blogs, setBlogs] = useState(blogsInitial);

  //CRUD functions

  //Get all blogs
  const getAllBlogs = async () => {
    //API Call
    const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MjFjNjNiNjcwYmJkMWY0MDk3M2I0In0sImlhdCI6MTcwMzAyNTc2M30.RT1mvygdafEfm4d9xyAeg-dSwqiqX7XTtdwkGSPweLc",
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    // console.log(json);
    setBlogs(json);
    // console.log(blogs);
  };

  //Add a new blog
  const addBlog = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/blogs/newblog`, {
      method: "POST",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MjFjNjNiNjcwYmJkMWY0MDk3M2I0In0sImlhdCI6MTcwMzAyNTc2M30.RT1mvygdafEfm4d9xyAeg-dSwqiqX7XTtdwkGSPweLc",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    //   const json = response.json();
    console.log("Adding note...");
    const newBlog = {
      _id: "658803a3e8d02e0b9f39f9ac",
      user: "65821c63b670bbd1f40973b4",
      title: title,
      description: description,
      tag: tag,
      date: "2023-12-24T10:10:43.409Z",
      __v: 0,
    };
    //adding the new blog to existing array of blogs
    await setBlogs(blogs.concat(newBlog));
    console.log(blogs);
  };

  //Edit a blog
  const editBlog = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/blogs/editblog/${id}`, {
      method: "POST",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MjFjNjNiNjcwYmJkMWY0MDk3M2I0In0sImlhdCI6MTcwMzAyNTc2M30.RT1mvygdafEfm4d9xyAeg-dSwqiqX7XTtdwkGSPweLc",
        "Content-Type": "application/json",
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

  //Add a new blog
  const deleteBlog = async (id) => {
    console.log("Deleting blog with id: " + id);
    const newBlogs = blogs.filter((item) => {
      return item._id !== id;
    });
    setBlogs(newBlogs);
  };
  return (
    <BlogContext.Provider
      value={{ blogs, getAllBlogs, addBlog, editBlog, deleteBlog }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
