const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductScema = new Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 255 },
  description: { type: String, required: true },
  price: {
    type: Number,
    required: function () {
      return this.available;
    },
  },
  available: { type: Boolean, require: true },
  image: { type: String },
});

module.exports = mongoose.model("Product", ProductScema);
