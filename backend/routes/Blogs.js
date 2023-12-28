const express = require("express");
const router = express.Router();
//importing fetchuser middleware
const fetchuser = require("../middleware/FetchUser");
//importing Blog module
const Blog = require("../models/Blog");
//importing express validator, to add data validation
const { body, validationResult } = require("express-validator");

//---------------------------------ROUTE 1------------------------------------
//get all blogs using: GET "/api/blogs/fetchallblogs". Require LOGIN
router.get("/fetchallblogs", fetchuser, async (req, res) => {
  const blogs = await Blog.find();
  await res.send(blogs);
});

//---------------------------------ROUTE 2------------------------------------
//get all USER specific blogs using: GET "/api/blogs/fetchalluserblogs". Require LOGIN
router.get("/fetchalluserblogs", fetchuser, async (req, res) => {
  //only send those notes that match user ID
  // const userBlogs = await Blog.find({user: req.user});
  // res.json(userBlogs);

  try {
    const userBlogs = await Blog.find({ user: req.user.id });
    res.json(userBlogs);
  } catch (error) {
    //catching and dealing with errors
    console.error(error.message);
    res.status(500).send("Internal server error occurred");
  }
});

//---------------------------------ROUTE 3------------------------------------
//create new blog using: POST "/api/blogs/newblog". Require LOGIN
router.post(
  "/newblog",
  fetchuser,
  [
    //adding data validation layer
    body("title", "Title must be at least 10 characters").isLength({ min: 2 }),
    body("description", "Description must be at least 10 characters").isLength({
      min: 2,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag, imgUrl } = req.body;
      const errors = validationResult(req);
      //displaying errors if any
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const blog = new Blog({
        title,
        description,
        tag,
        imgUrl,
        user: req.user.id,
      });

      const savedBlog = await blog.save();
      res.json(savedBlog);
    } catch (error) {
      //catching any errors, also the duplicate key error
      console.log(error);
      res.status(500).send({
        error: "Internal server error",
        message: error.message,
      });
    }
  }
);

//---------------------------------ROUTE 4------------------------------------
//update neUSER ONLYw blog using: PUT "/api/blogs/editblog". Require LOGIN
router.put("/editblog/:id", fetchuser, async (req, res) => {
  try {
    //destructuring new details from request body
    const { title, description, tag } = req.body;

    //create a new blog object
    const newBlog = {};
    //if title has been passed to be updates, add it to newBlog object
    if (title) {
      newBlog.title = title;
    }
    //if description has been passed to be updates, add it to newBlog object
    if (description) {
      newBlog.description = description;
    }
    //if tag has been passed to be updates, add it to newBlog object
    if (tag) {
      newBlog.tag = tag;
    }

    //looking for the Blog to be updated, using id sent in the req itself
    let existingBlog = await Blog.findById(req.params.id);
    //if blog doesn't exist, throw 404 error
    if (!existingBlog) {
      return res.status(404).send("Blog not found.");
    }
    //if user tries accessing other notes, throw unauthorized error
    if (existingBlog.user.toString() !== req.user.id) {
      return res.status(401).send("Blog not found.");
    }
    //if no errors till now, update the note
    existingBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: newBlog },
      //if any new content, write it
      { new: true }
    );

    res.json({ existingBlog });
  } catch (error) {
    //catching any errors, also the duplicate key error
    console.log(error);
    res.status(500).send({
      error: "Internal server error",
      message: error.message,
    });
  }
});

//---------------------------------ROUTE 5------------------------------------
//delete USER ONLY blog using: DELETE "/api/blogs/deleteblog". Require LOGIN
router.delete("/deleteblog/:id", fetchuser, async (req, res) => {
  try {
    //looking for the Blog to be updated, using id sent in the req itself
    let existingBlog = await Blog.findById(req.params.id);
    //if blog doesn't exist, throw 404 error
    if (!existingBlog) {
      return res.status(404).send("Blog not found.");
    }
    //if user tries accessing other notes, throw unauthorized error
    if (existingBlog.user.toString() !== req.user.id) {
      return res.status(401).send("Blog not found.");
    }
    //if no errors till now, update the note
    existingBlog = await Blog.findByIdAndDelete(req.params.id);

    res.json({
      Success: "Blog has been deleted successfully.",
      existingBlog: existingBlog,
    });
  } catch (error) {
    //catching any errors, also the duplicate key error
    console.log(error);
    res.status(500).send({
      error: "Internal server error",
      message: error.message,
    });
  }
});

//---------------------------------ROUTE 6------------------------------------
//category wise blogs using: GET "/api/blogs/:category". Require LOGIN
// router.get("/deleteblog/:id", fetchuser, async (req, res) => {
//   try {
//     //looking for the Blog to be updated, using id sent in the req itself
//     let existingBlog = await Blog.findById(req.params.id);
//     //if blog doesn't exist, throw 404 error
//     if (!existingBlog) {
//       return res.status(404).send("Blog not found.");
//     }
//     //if user tries accessing other notes, throw unauthorized error
//     if (existingBlog.user.toString() !== req.user.id) {
//       return res.status(401).send("Blog not found.");
//     }
//     //if no errors till now, update the note
//     existingBlog = await Blog.findByIdAndDelete(req.params.id);

//     res.json({
//       Success: "Blog has been deleted successfully.",
//       existingBlog: existingBlog,
//     });
//   } catch (error) {
//     //catching any errors, also the duplicate key error
//     console.log(error);
//     res.status(500).send({
//       error: "Internal server error",
//       message: error.message,
//     });
//   }
// });
module.exports = router;
