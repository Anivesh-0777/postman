const express = require("express");

const Router = express.Router();

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./Controller/cartsController");


Router.get("/carts", getUsers);
Router.post("/carts", storeUser);
Router.get("/carts/:id", getuserDetail);
Router.put("/carts/:id", updateuser);
Router.delete("/carts/:id", deleteUser);

module.exports = Router;