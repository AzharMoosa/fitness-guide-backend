const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const Routine = require("../models/Routine");

// @route       GET api/routines
// @desc        Get All Users Routines
// @access      Private
router.get("/", auth, async (req, res) => {
  res.json({ msg: "TODO: Get All Users Routines" });
});

// @route       GET api/routines
// @desc        Get Routine By ID
// @access      Private
router.get("/:id", auth, async (req, res) => {
  res.json({ msg: "TODO: Get Routine By ID" });
});

// @route       POST api/routines
// @desc        Create Routine
// @access      Private
router.post("/", auth, async (req, res) => {
  res.json({ msg: "TODO: Create Routine" });
});

// @route       PUT api/routines
// @desc        Update Routine By ID
// @access      Private
router.put("/:id", auth, async (req, res) => {
  res.json({ msg: "TODO: Update Routine By ID" });
});

// @route       DELETE api/routines
// @desc        Delete Routine By ID
// @access      Private
router.delete("/:id", auth, async (req, res) => {
  res.json({ msg: "TODO: Delete Routine By ID" });
});

module.exports = router;
