const Blog = require("../models/blog");

const get_all_blogs = (req,res) => {
    Blog.find()
        .then((result) => {
            res.render("index", { title: "All-Blogs", blogs: result });
        })
        .catch((err) => {
            console.log(err);
        });
}
const create_blog = (req,res) => {
    const blog = new Blog(req.body);

    blog
        .save()
        .then((result) => {
            res.redirect("/blogs");
        })
        .catch((err) => {
            console.log(err);
        });
}
const get_blog = (req,res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render("details", { title: "Detail Blog", blog: result });
        })
        .catch((err) => console.log(err));
}
const delete_blog = (req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((response) => {
            res.json({ redirect: "/blogs" });
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports ={
    get_all_blogs,
    create_blog,
    get_blog,
    delete_blog
}