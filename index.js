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

app.listen(5000, () => {
  console.log("backend is running");
});
