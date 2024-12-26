require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

app.get("/", (req, res) => {
  send("inspa-app: this is home gape");
});

mongoose.connect(MONGO_URL).then(() => {
  app.listen(PORT, () => console.log(`server started ${PORT} on port...`)
  )
})
