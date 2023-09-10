var express = require("express");
var router = express.Router();
const USER = require("../model/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");

  run();
  async function run() {
    const user = await USER.create({ name: "jerin", age: 21 });
    console.log(user._id);
  }
});

module.exports = router;
