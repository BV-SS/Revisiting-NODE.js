const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

// connect to mongodb and listen for requests when connected to db

const dbURI =
  "mongodb+srv://<user>:<pass>@node-tuts.4fyd3ob.mongodb.net/Node?retryWrites=true&w=majority&appName=Node-tuts";

mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(3000, () => {
      console.log("Connected to Mongodb");
      console.log("listining to port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// register ejs
app.set("view engine", "ejs");

// custom middleware to log req info middleware
app.use((req, res, next) => {
  console.log("path :", req.path);
  console.log("hostname :", req.hostname);
  console.log("method :", req.method);
  next(); // next function is used to tell node to move on to next bit of code explicitly as node by default doesn't continue executing with custom middleware like this
});

// middleware for static files - static fun is used to make express understand where the static files are and then express can look into the folders and make them public for us to use
app.use(express.static("public"));

// middleware to get access to form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// Blog routes

// get all blogs
app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "All-Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// save new blog
app.post("/create-new-blog", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

// get one blog
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "Detail Blog", blog: result });
    })
    .catch((err) => console.log(err));
});

// delete one blog
app.delete("/delete-blog/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((response) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use((req, res) => {
  res.status(404).render("error", { title: "404" });
});
