const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desscripton: {
    type: String,
    required: false
  },
  date: {
    type: Date, 
    default: Date.now
  }
});

module.exports = mongoose.model('Posts', postSchema);