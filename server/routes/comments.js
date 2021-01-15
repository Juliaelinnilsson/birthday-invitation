const express = require('express');
const router = express.Router();
const Comment = require('../model/Comment');

// Get back all the comment
router.get('/', async (req,res) => {
  try {
    const comment = await Comment.find();
    res.json(comment)
  } catch (err) {
    res.json({ message: err });
  }
});

// Post a photo
router.post('/', async (req,res) => {
  const comment = new Comment({
    comment: req.body.comment,
  });
  try { 
  const savedComment = await comment.save();
  res.json(savedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

// Specific comment
router.get('/:commentId', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    res.json(comment);
  } catch (err) {
    res.json({ message:err });
  }
});

// Delete comment
router.delete('/:commentId', async (req, res) => {
  try {
    const removedComment = await Comment.remove({ _id: req.params.commentId });
    res.json(removedComment);
  } catch (err) {
    res.json({ message:err });
  }
});

module.exports = router;