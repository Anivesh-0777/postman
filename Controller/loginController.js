



const userModal = require("../modal/Users");
// const ordersModale = require("../modal/orders");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const logIn =  async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("please input both");
    }
    const user = await userModal.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ user_id: user._id, email },process.env.JWT_SECRET,{ expiresIn: "2h" } );
      res.cookie("jwt",token,{
        expires:new Date(Date.now()+900000),
        httpOnly:true
    });
      user.token = token;
      res.status(200).send("Logged in");
    }
    res.status(400).send("Please input valid");
  } catch (err) {
    res.status(400).send("Something Wrong");
  }
}



const logOut = async(req,res)=>{
  try {
    res.clearCookie("jwt");
    res.send("logged out");
  } catch (error) {
    
  }
}



module.exports = {
    logIn,
    logOut
  };