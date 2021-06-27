const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const Exercise = require("../models/Exercise");

// @route       GET api/exercises
// @desc        Get All Exercises
// @access      Private
router.get("/", auth, async (req, res) => {
  res.json({ msg: "TODO: Get All Exercises" });
});

// @route       GET api/exercises
// @desc        Get Exercise By ID
// @access      Private
router.get("/:id", auth, async (req, res) => {
  res.json({ msg: "TODO: Get Exercise By ID" });
});

// @route       POST api/exercises
// @desc        Create Exercise
// @access      Private
router.post("/", auth, async (req, res) => {
  res.json({ msg: "TODO: Create Exercise" });
});

// @route       PUT api/exercises
// @desc        Update Exercise By ID
// @access      Private
router.put("/:id", auth, async (req, res) => {
  res.json({ msg: "TODO: Update Exercise By ID" });
});

// @route       DELETE api/exercises
// @desc        Delete Exercise By ID
// @access      Private
router.delete("/:id", auth, async (req, res) => {
  res.json({ msg: "TODO: Delete Exercise By ID" });
});

module.exports = router;
