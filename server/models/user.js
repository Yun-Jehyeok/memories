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
  comments: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
      },
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
      },
    },
  ],
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
  address: {
    type: String,
    required: false,
  },
});

const User = mongoose.model('user', UserSchema);

module.exports = { User };
