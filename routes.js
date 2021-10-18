// const express = require("express");
// const Router = express.Router();
// Router.get("/users",(req,res)=>{
//     res.send({
//         "name":"thats the response"
//     })
// })

// module.exports=Router;  

const express = require("express");

const Router = express.Router();

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./Controller/UserController");

Router.get("/users", getUsers);
Router.post("/users", storeUser);
Router.get("/users/:id", getuserDetail);
Router.put("/users/:id", updateuser);
Router.delete("/users/:id", deleteUser);

module.exports = Router;

