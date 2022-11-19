require("dotenv").config();
const express = require("express");
const app = express();
require('./db/conn');
const cors = require('cors');
const user = require('./routes/user')
const port = 8003;

app.use(cors());
app.use(express.json());

app.use(user)

app.get('/', (req, res) => {
  res.send("Welcome!!")
})


app.listen(port || process.env.PORT, ()=>{
  console.log(`server is started at ${port}`);
})