const mongoose = require("mongoose");
const cartsSchema = mongoose.Schema({
    first_name: String,
    user: String,
    product_qty: String,
    baseprice: Number,
    saleprice:Number,
    totalprice:Number

  });
  
  const cartsModal = mongoose.model("carts", cartsSchema);
  
  module.exports = cartsModal;