const moment = require('moment');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  cart: {
    type: Array,
    default: [],
  },
  history: {
    type: Array,
    default: [],
  },
  register_date: {
    type: Date,
    default: moment().format('MMMM DD, YYYY'),
  },
});

const User = mongoose.model('user', UserSchema);

module.exports = { User };
