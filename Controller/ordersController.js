const ordersModale = require("../modal/orders");

const storeUser = async (req, res) => {
  try {
    const user = await new ordersModale({...req.body});
    console.log(user)
    user.save();
    res.status(201 ).send(user);
  } catch (error) {console.log(error)}
};

const getUsers = async (req, res) => {
  try {
    const rs = await ordersModale.find({});
    res.status(200).send(rs);
  } catch (error) {}
};
const getuserDetail = async (req, res) => {
  try {
    const _id=req.params.id;
    console.log(_id)

    const us = await ordersModale.findById(_id);
    res.status(200).send(us);
  } catch (error) {console.log(error)}

};

const updateuser = async (req, res) => {
  try {
    const _id=req.params.id;
    console.log(_id)

    const dataa = await ordersModale.findByIdAndUpdate(_id,req.body);
    res.status(200).send(dataa);
    
  } catch (error) {console.log(error)
    
  }



};

const deleteUser = async (req, res) => {
  try {
    const _id=req.params.id;
    console.log(_id)

    const da = await ordersModale.findByIdAndDelete(_id);
    res.status(200).send(da);
    
  } catch (error) {console.log(error)
    
  }

};

module.exports = {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
};