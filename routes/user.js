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

module.exports = router;