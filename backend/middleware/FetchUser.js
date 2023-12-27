// a middleware to fetch user details from JWT ath token header.
const jwt = require("jsonwebtoken");

//creating secret for JWT; store it in config/env_variable file
const JWT_SECRET = "1-thequickbr0wnf0xjumped2004-1";

const fetchuser = (req, res, next) => {
  //get user from jwt auth token and add id to request object

  //reading auth token from auth token
  const token = req.header("auth-token");
  //throw error if no token
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;

    //firing the next function
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
