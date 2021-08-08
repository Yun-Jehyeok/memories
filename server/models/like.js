const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'product',
  },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = { Like };
