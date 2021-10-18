const express = require("express");

const Router = express.Router();

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./Controller/tagController");

Router.get("/tags", getUsers);
Router.post("/tags", storeUser);
Router.get("/tags/:id", getuserDetail);
Router.put("/tags/:id", updateuser);
Router.delete("/tags/:id", deleteUser);

module.exports = Router;
