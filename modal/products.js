const mongoose = require("mongoose");
const productsSchema = mongoose.Schema({
    name: String,
    thumbnail: String,
    product_gallery: [],
    Description: String,
    baseprice:Number,
    saleprice:Number,
    category_name:String,
    tags:[],
    additional_info:String

  });
  
  const productsModal = mongoose.model("products", productsSchema);
  
  module.exports = productsModal;