import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import User from "../models/User.js";
import Routine from "../models/Routine.js";
import { check, validationResult } from "express-validator";

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

// @route       GET api/routines/active
// @desc        Get Active Routine
// @access      Private
router.get("/active", auth, async (req, res) => {
  try {
    // Find Active Routine
    let routine = await Routine.find({ user: req.user.id, isActive: true });
    // Output Routine
    res.json(routine);
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

      // Set All Routines To Not Active
      if (isActive) {
        const routines = await Routine.find({ user: req.user.id });

        for (let i = 0; i < routines.length; i++) {
          // Update Routine
          await Routine.findByIdAndUpdate(
            routines[i]._id,
            { $set: { isActive: false } },
            { new: true }
          );
        }
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
  const { name, routines, isActive } = req.body;
  const updatedRoutine = {};

  try {
    // Find Routine
    let routine = await Routine.findById(req.params.id);

    // Checks If Routine Exists
    if (!routine) {
      return res.status(400).json({ msg: "Routine Does Not Exists" });
    }

    // Create Updated Routine
    if (routines) {
      updatedRoutine.routines = routines;
    }

    if (name) {
      updatedRoutine.name = name;
    }

    if (isActive) {
      const routines = await Routine.find({ user: req.user.id });

      for (let i = 0; i < routines.length; i++) {
        // Update Routine
        await Routine.findByIdAndUpdate(
          routines[i]._id,
          { $set: { isActive: false } },
          { new: true }
        );
      }
      updatedRoutine.isActive = true;
    } else {
      updatedRoutine.isActive = false;
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

export default router;
