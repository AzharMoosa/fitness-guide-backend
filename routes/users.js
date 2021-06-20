const express = require("express");
const router = express.Router();

// @route       POST api/users
// @desc        Registers New User
// @access      Public
router.post("/", (req, res) => {
  res.send("Registers User");
});

module.exports = router;
