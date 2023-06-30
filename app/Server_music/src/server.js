const express = require("express");
const app = express();
const port = 4000;
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const path = require("path");
const route = require("./routers");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// CORS------
app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
});

// Router init
route(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../home.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
