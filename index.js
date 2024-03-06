const express = require("express");
const app = express();
const promptRouter = require('./routes/promptRoute');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");  //require dotenv package
dotenv.config({ path: "./config.env" }); 


const db = process.env.MONGO_URL || 'test'   
const connectDB =  async ()=>{
  try{
      const conn = await mongoose.connect(db,{
          //must add in order to not get any error masseges:
          useUnifiedTopology:true,
          useNewUrlParser: true
      })
      console.log(`mongo database is connected!!! ${conn.connection.host} `)
  }catch(error){
      console.error(`Error: ${error} `)
      process.exit(1) //passing 1 - will exit the proccess with error
  }

}

connectDB();
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

