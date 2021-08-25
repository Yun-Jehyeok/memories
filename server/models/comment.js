const mongoose = require('mongoose');
const moment = require('moment');

const CommentSchema = new mongoose.Schema({
  contents: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: moment().format('MMMM DD, YYYY'),
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  creatorName: { type: String },
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = { Comment };
