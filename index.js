const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const db = mongoose.connection;
const router = require("./routes");
const tagrouter = require("./tagroutes");
const rolesrouter = require("./rolesrouter");
const categoriesrouter = require("./Categoriesroutes");
const cartrout = require("./cartsroutes");
const orderrout = require("./ordersroute");
const productrout = require("./productsroute");
const loginroute=require("./loginroutes")





app.use(express.json()); 

app.use(
  express.urlencoded({
    extended:true,
  })
  )

app.get("/", (req, res) => res.send("Hello World!"));
app.use(router);
app.use(tagrouter)
app.use(rolesrouter)
app.use(categoriesrouter)
app.use(cartrout)
app.use(productrout)
app.use(orderrout)
app.use(loginroute)
// app.listen(port,()=> console.log("its listening to ${port} port",port))
app.listen(port, () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/node-express");
    db.on("error", () => console.log(`Database connection error`));
    db.once("open", function () {
      console.log("Mongodb connected.");
    });
  } catch (error) {
    console.log(`someting went worng ${error}`);
  }
  console.log(`Example app listening on ${port} port!`);
});
