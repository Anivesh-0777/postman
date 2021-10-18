const express = require("express");

const Router = express.Router();

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./Controller/categoriesController");


Router.get("/categories", getUsers);
Router.post("/categories", storeUser);
Router.get("/categories/:id", getuserDetail);
Router.put("/categories/:id", updateuser);
Router.delete("/categories/:id", deleteUser);

module.exports = Router;