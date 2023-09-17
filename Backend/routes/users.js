var express = require("express");
var router = express.Router();
const USER = require("../model/User");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  res.send("GET request received");
});
module.exports = router;
