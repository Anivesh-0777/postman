const express = require("express");

const Router = express.Router();

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./Controller/rolesController");

Router.get("/roles", getUsers);
Router.post("/roles", storeUser);
Router.get("/roles/:id", getuserDetail);
Router.put("/roles/:id", updateuser);
Router.delete("/roles/:id", deleteUser);

module.exports = Router;
