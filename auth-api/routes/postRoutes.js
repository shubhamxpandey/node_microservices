const express = require("express");
const router = express.Router();

const controller = require("../controllers/postController");

const validate = require("../middleware/validate");

const schema = require("../schemas/postSchema");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", authMiddleware, validate(schema.createPost), controller.createPost);

// router.post("/like", authMiddleware, validate(schema.likePost), controller.likePost);

// router.post("/comment", authMiddleware, validate(schema.commentPost), controller.commentPost);


module.exports = router;