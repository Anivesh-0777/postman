const express = require("express");

const Router = express.Router();

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./Controller/ordersController");

Router.get("/orders", getUsers);
Router.post("/orders", storeUser);
Router.get("/orders/:id", getuserDetail);
Router.put("/orders/:id", updateuser);
Router.delete("/orders/:id", deleteUser);

module.exports = Router;
