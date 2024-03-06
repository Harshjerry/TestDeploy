const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const promptRouter = require('./routes/promptRoute');
const cors = require('cors');
dotenv.config();

mongoose.connect(process.env.CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("db connection successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/prompt", promptRouter);
app.use("/",(req,res)=>{
  return res.status(200).json(
    {success:true,
    message:" ia am working fine"}
  )
})  
app.listen(process.env.PORT, () => {
  console.log("backend is running");
});

