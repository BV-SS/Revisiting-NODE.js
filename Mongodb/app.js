const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

// connect to mongodb and listen for requests when connected to db

const dbURI =
  "mongodb+srv://<username>:<password>@node-tuts.4fyd3ob.mongodb.net/<db_collection>?retryWrites=true&w=majority&appName=Node-tuts";

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

// mongoose and mongo snadbox routes
// app.get("/add-blog", (req, res) => {
//     const blog = new Blog({
//         title: "Art and Nature",
//         snippet: "Explore the intersection of art and nature, featuring works that celebrate the beauty of the natural world and inspire creativity.",
//         desc: "Nature-Inspired Art is a creative expression that draws inspiration from the natural world, often using natural materials and forms to create unique and thought-provoking pieces. This art form seeks to connect us with our beautiful earth and its rhythms, encouraging us to appreciate the beauty and wonder of the natural world."
//     })

//     blog.save().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     })

// })

// get all blogs
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// find one blog
// app.get("/single-blog", (req, res) => {
//     Blog.findById('663e090ba6e30d6abacdc24c')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

app.get("/", (req, res) => {
  // const blogs = [
  //     {
  //         title: "Hoshi finds plants",
  //         snippet: "Lorem ipsum dolor sit amet consectetur",
  //     },
  //     {
  //         title: "Kookie finds stars",
  //         snippet: "Lorem ipsum dolor sit amet consectetur",
  //     },
  //     {
  //         title: "How to defeat bowser",
  //         snippet: "Lorem ipsum dolor sit amet consectetur",
  //     },
  // ];
  // res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render('index',{title:'All-Blogs', blogs:result});
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

app.use((req, res) => {
  res.status(404).render("error", { title: "404" });
});
