const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Create a new Comment
router.post('/', async (req, res) => {
    const newComment = new Comment(req.body);
    try {
        const savedComment = await newComment.save();
        res.status(201).send(savedComment);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get Comments by Post ID
router.get('/:postId', async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
