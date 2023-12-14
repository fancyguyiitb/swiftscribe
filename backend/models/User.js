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
//exporting tje user schema
module.exports = mongoose.model('user', userSchema);