const mongoose = require('mongoose');
const { Schema } = mongoose;

//creating user schema
const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default: "General"
    },
    //date automatically generated via JS Date.now function
    date:{
        type: Date,
        default: Date.now
    },
});
//exporting tje user schema
module.exports = mongoose.model('blog', blogSchema);