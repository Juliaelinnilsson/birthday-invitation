const mongoose = require('mongoose');

const RsvpSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  allergy: String,
  other: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Rsvp', RsvpSchema);