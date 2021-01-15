const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  firstname:{
    type: String,
    required: true,
    min:3,
    max: 80,
  },
  lastname:{
    type: String,
    required: true,
    min:3,
    max: 80,
  },
  email: {
    type: String,
    required: true,
    min: 8,
    max: 2000
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 2000
  },
  date: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean, default: true 
  }
});

module.exports = mongoose.model('Admin', adminSchema);