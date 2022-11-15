const express = require('express');
const users = require('../model/userSchema')
const router = express.Router();

router.post('/register', async (req, res) => {
  const {name, email, age, mobile, work, add, desc} = req.body;

  if(!name || !email || !mobile || !work || !add || !desc) {
    return res.status(404).json("plz fill the data");
  }
  try{
    const preuser = await users.findOne({email: email});
    console.log(preuser);
    if(preuser){
      res.status(404).json("User already Exists");
    } else {
      const addUser = await users({
        name,email,age,mobile,work,add,desc})
        await addUser.save();
        console.log(addUser);

        return res.status(200).json(addUser);
    }
  }catch(e){
    return res.status(404).json(e.message);
  }
})

//get users

router.get('/getdata', async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(200).json(userdata);
  }catch(e){
    res.status(404).json(e.message);
  }
})

//get single user 

router.get('/users/:id', async(req, res) => {
  try{
    const userdata = await users.findById({_id:req.params.id})
    console.log(userdata)
    return res.status(200).json(userdata)
  }catch(err){
    return res.json({status: 404, message: err.message});
  }
})

//delete single user 

router.post('/delete/:id', async(req, res) => {
  try{
    const userDelete = await users.findByIdAndDelete({_id:req.params.id});
    return res.status(200).json("user delete successfully");
  }catch(err){
    return res.status(404).json({status: 404, message: err.message})
  }
})

module.exports = router;