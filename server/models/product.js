const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    goods: {
      type: Number,
      default: 1,
    },
    images: {
      type: Array,
      default: [],
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = { Product };
