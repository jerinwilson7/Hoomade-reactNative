var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const isBackendConnected = true; // Change this condition as needed

  if (isBackendConnected) {
    // Send a custom message if the backend is connected
    res.json({ message: "Backend is connected successfully" });
  } else {
    res.render("index", { title: "Express" }); // Default behavior if not connected
  }
});

module.exports = router;
