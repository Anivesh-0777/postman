const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema({
    first_name: String,
    slug: String,
    image: String,
    Description: String,
  });
  
  const categoriesModal = mongoose.model("categories", categoriesSchema);
  
  module.exports = categoriesModal;