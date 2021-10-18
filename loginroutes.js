const {logIn, logOut} =  require("./Controller/loginController");

const express = require('express');
const Router = express.Router();
Router.post("/login",logIn)
Router.get("/login",logOut)


module.exports = Router;




// const express = require("express");

// const loginRouter = express.Router();

// const loginUser=require("../controller/loginController");

// loginRouter.post("/login", loginUser);

// module.exports=loginRouter;