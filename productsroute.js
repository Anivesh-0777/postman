const express = require("express");

const Router = express.Router();

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./Controller/productsController");

Router.get("/products", getUsers);
Router.post("/products", storeUser);
Router.get("/products/:id", getuserDetail);
Router.put("/products/:id", updateuser);
Router.delete("/products/:id", deleteUser);

module.exports = Router;
