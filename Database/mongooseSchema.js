const mongoose = require("mongoose");

// PRODUCT SCHEMA

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: String,
  imageUrl: String,
  stock: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const register = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});



const order = mongoose.Schema({
  author : {type:mongoose.Schema.Types.ObjectId ,ref:"userData"},
  qty: { type: Number },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },

});


// PRODUCT SCHEMA

const Product = mongoose.model("Product", productSchema);
const Order = mongoose.model("Order", order);
const userData = mongoose.model("userData", register);
module.exports = { Product, userData,Order };
