const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// get all blogs
router.get("/blogs",blogController.get_all_blogs );

// save new blog
router.post("/create-new-blog", blogController.create_blog);

// get one blog
router.get("/blogs/:id", blogController.get_blog);

// delete one blog
router.delete("/delete-blog/:id", blogController.delete_blog);

module.exports = router;