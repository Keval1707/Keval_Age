const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/view"));
app.use(bodyParser.urlencoded({ extended: true }));

const router = require("./routes/router");

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
