require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server started ${PORT} on port...`)
)
// const MONGO_URL = process.env || MONGO_URL;

app.get((req, res) => {
  send("new project: this is home page");
});



// mongoose.connect(MONGO_URL).then(() => {
//   app.listen(PORT, () => console.log(`server started ${PORT} on port...`)
//   )
// })
