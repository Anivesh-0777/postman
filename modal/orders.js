const mongoose = require("mongoose");
const ordersSchema = mongoose.Schema({
   user_id:Number,
   total_items:Number,
   products:[],
   Billing_add:String,
   shipping_add:String,
   transaction_state:String,
   payment_mode:String,
   payment_status:String,
   order_status:String
  });
  
  const ordersModal = mongoose.model("orders", ordersSchema);
  
  module.exports = ordersModal;