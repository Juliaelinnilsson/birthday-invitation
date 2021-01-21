const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  url: String
});

module.exports = mongoose.model('Photo', photoSchema);