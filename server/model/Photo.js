const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  name: String,
  url: String
});

module.exports = mongoose.model('Photo', photoSchema);