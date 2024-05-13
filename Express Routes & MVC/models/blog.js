// creating a schema for blog collection and then wrapping the model around it so that we can use it to perfom crud operations on the collevtion

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : {
        type: String,
        required :true,
    },
    snippet : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    }
}, {timestamps:true})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;