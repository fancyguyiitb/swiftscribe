const express = require("express");
//importing express router
const router = express.Router();
//importing user module
const User = require("../models/User");
//importing express validator, to add data validation
const { body, validationResult } = require("express-validator");
//importing bcrypt js for password hashing
const bcrypt = require("bcryptjs");
//importing JWT
const jwt = require("jsonwebtoken");
//importing fetchuser middleware
const fetchuser = require("../middleware/FetchUser");

//creating secret for JWT; store it in config/env_variable file
const JWT_SECRET = "1-thequickbr0wnf0xjumped2004-1";

//---------------------------------ROUTE 1------------------------------------
//create a user using: POST "/api/auth/createuser". Doesn't require LOGIN
router.post(
  "/createuser",
  [
    //adding data validation layer
    body("name", "Name must be at least 1 character").isLength({ min: 3 }),
    body("email", "Please enter valid email address").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //displaying errors if any
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //if validation successful, we crate the user
    //Checking whether the user with the email exists already
    // let newUser = User.findOne({ email: req.body.email });
    // //if user already exists with the email, return bad request
    // if (newUser) {
    //   return res
    //     .status(400)
    //     .json({ error: "Sorry, a user already exist with this email!" });
    // }
    // newUser = await User.create({
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: req.body.password,
    // });

    //generating salt
    const salt = await bcrypt.genSalt(10); //promise => use await
    //generating secure password using hash function of bcrypt
    const secPassword = await bcrypt.hash(req.body.password, salt); //promise => use await
    try {
      //await the creation of user
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      }).then((user) => {
        // console.log(user._id.toString());
        //converting user id to JWT data
        const data = { user: { id: user._id.toString() } };
        //generating Auth Token
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        //sending over thr auth token
        res.json({ authToken });
      });
    } catch (err) {
      //catching any errors, also the duplicate key error
      console.log(err);
      res.status(500).send({
        error: "Internal server error",
        message: err.message,
      });
    }
  }
);

//---------------------------------ROUTE 2------------------------------------
//create a user using: POST "/api/auth/login". Doesn't require LOGIN
router.post(
  "/login",
  [
    //adding data validation layer
    body("email", "Please enter valid email address").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //displaying errors if any
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //destructuring email and password from request body
    const { email, password } = req.body;

    try {
      //wait and find if a user wth email exists
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please login with correct credentials" });
      }

      //use bcrypt js to compare password hashes
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please login with correct credentials" });
      }

      //generating auth token
      const data = { user: { id: user._id.toString() } };
      const authToken = jwt.sign(data, JWT_SECRET);
      //sending over thr auth token
      res.json({ authToken });
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

//---------------------------------ROUTE 3------------------------------------
//create a user using: POST "/api/auth/getuser". Require LOGIN
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    //show all fields EXCEPT the password hash
    const user = await User.findById(userId).select("-password");
    //sending over the user as response
    res.send(user);
  } catch (error) {
    //catching any errors, also the duplicate key error
    console.log(error);
    res.status(500).send({
      error: "Internal server error",
      message: error.message,
    });
  }
});

module.exports = router;
