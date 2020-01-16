const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const db = require("./config/keys").mongoURI;
const user = require("./routes/user")
// bodyParser
app.use(bodyParser.json());


// config database connection
mongoose
  .connect(db)
  .then(() => console.log("connect to database"))
  .then(err => console.log(err));




// api router
app.use('/api/user',user);
// start server

const PORT =process.env.PORT || 1000
app.listen(PORT, () => {
  console.log(`server start ${PORT}`);
});
