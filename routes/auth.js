const express = require("express");
const router = express.Router();

// @route       GET api/auth
// @desc        Gets Current User
// @access      Private
router.get("/", (req, res) => {
  res.send("Get Current User");
});

// @route       POST api/auth
// @desc        Login
// @access      Public
router.post("/", (req, res) => {
  res.send("Login");
});

module.exports = router;
