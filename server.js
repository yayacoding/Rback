const express = require("express");
const http = require("http");
const { verifyToken } = require("./middleware/jwt");
const app = express();
require("dotenv").config();

app.use(express.json());
const server = http.createServer(app);
const PORT = process.env.PORT || 500;
server.listen(PORT, (err) => {
  if (err) {
    console.log("TCL: err", err);
  }
  console.log("Server start on port", PORT);
});

app.use("/", require("./route"));
