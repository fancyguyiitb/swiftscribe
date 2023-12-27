const mongoose = require('mongoose');
const { Schema } = mongoose;

//creating user schema
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    //email must be unique
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    //date automatically generated via JS Date.now function
    date:{
        type: Date,
        default: Date.now
    },
});
//exporting thee user schema
const User = mongoose.model('user', userSchema);
//creating indexes to prevent duplicate email entires
User.createIndexes();
module.exports = User;