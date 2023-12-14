const express = require('express');
//importing express router
const router = express.Router();
//importing user module
const User = require('../models/User');
//importing express validator, to add data validation
const {body, validationResult} = require('express-validator');

//create a user using: POST "/api/auth". Doesn't require auth
router.post('/', (req, res)=>{
    console.log(req.body);
    res.send(req.body);
    //creating a new user, using the request body
    const user = User(req.body);
    //saving the new user
    user.save();
});

module.exports = router;