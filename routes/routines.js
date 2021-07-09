const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const Routine = require("../models/Routine");
const { check, validationResult } = require("express-validator");

// @route       GET api/routines
// @desc        Get All Users Routines
// @access      Private
router.get("/", auth, async (req, res) => {
  try {
    // Find All Routines
    let routines = await Routine.find({ user: req.user.id });
    // Output Routines
    res.json(routines);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       GET api/routines
// @desc        Get Routine By ID
// @access      Private
router.get("/:id", auth, async (req, res) => {
  try {
    // Find Routine
    let routine = await Routine.findById(req.params.id);
    // Output Routine
    res.json(routine);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       POST api/routines
// @desc        Create Routine
// @access      Private
router.post(
  "/",
  [auth, check("name", "Name is Required").not().isEmpty()],
  async (req, res) => {
    // Error Handling
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract Routine Data
    const { name, isActive, routines } = req.body;

    try {
      // Check If Routine Exists
      let routine = await Routine.findOne({ name });
      if (routine) {
        return res.status(400).json({ msg: "Routine Already Exists" });
      }

      // Create New Routine
      routine = new Routine({
        name,
        isActive,
        routines,
        user: req.user.id,
      });

      // Save Routine To DB
      await routine.save();

      // Output Routine
      res.json(routine);
    } catch (err) {
      console.error(err.message);
      res.status(500).json("API Error");
    }
  }
);

// @route       PUT api/routines
// @desc        Update Routine By ID
// @access      Private
router.put("/:id", auth, async (req, res) => {
  const { name, session, isActive } = req.body;
  const updatedRoutine = {};

  try {
    // Find Routine
    let routine = await Routine.findById(req.params.id);

    // Checks If Routine Exists
    if (!routine) {
      return res.status(400).json({ msg: "Routine Does Not Exists" });
    }

    // Create Updated Routine
    if (session) {
      updatedRoutine.routines = [session.id, ...routine.routines];
    }

    if (name) {
      updatedRoutine.name = name;
    }

    if (isActive) {
      updatedRoutine.isActive = isActive;
    }

    // Update Routine
    routine = await Routine.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRoutine },
      { new: true }
    );

    // Output Updated Routine
    res.json(routine);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       DELETE api/routines
// @desc        Delete Routine By ID
// @access      Private
router.delete("/:id", auth, async (req, res) => {
  try {
    // Find Routine
    let routine = await Routine.findById(req.params.id);

    // Checks If Routine Exists
    if (!routine) {
      return res.status(400).json({ msg: "Routine Does Not Exists" });
    }

    // Delete Routine
    await Routine.findByIdAndDelete(req.params.id);

    // Outputs Confirmation Message
    res.json({ msg: "Routine Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

module.exports = router;
