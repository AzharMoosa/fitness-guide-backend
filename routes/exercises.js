import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import User from "../models/User.js";
import Exercise from "../models/Exercise.js";
import { check, validationResult } from "express-validator";

// @route       GET api/exercises
// @desc        Get All Exercises
// @access      Private
router.get("/", auth, async (req, res) => {
  try {
    // Find All Exercises
    let exercises = await Exercise.find();
    // Output Exercises
    res.json(exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       GET api/exercises
// @desc        Get Exercise By ID
// @access      Private
router.get("/:id", auth, async (req, res) => {
  try {
    // Find Exercise
    let exercise = await Exercise.findById(req.params.id);
    // Output Exercise
    res.json(exercise);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       POST api/exercises
// @desc        Create Exercise
// @access      Private
router.post(
  "/",
  [
    auth,
    check("name", "Name is Required").not().isEmpty(),
    check("sets", "Set Number Must Be Numerical").isNumeric(),
    check("repetitions", "Repetition Number Must Be Numerical").isNumeric(),
  ],
  async (req, res) => {
    // Error Handling
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract Exercise Data
    const { name, sets, repetitions } = req.body;

    try {
      // Check If Exercise Exists
      let exercise = await Exercise.findOne({ name });
      if (exercise) {
        return res.status(400).json({ msg: "Exercise Already Exists" });
      }

      // Create New Exercise
      exercise = new Exercise({
        name,
        sets,
        repetitions,
      });

      // Save Exercise To DB
      await exercise.save();

      // Output Exercise
      res.json(exercise);
    } catch (err) {
      console.error(err.message);
      res.status(500).json("API Error");
    }
  }
);

// @route       PUT api/exercises
// @desc        Update Exercise By ID
// @access      Private
router.put("/:id", auth, async (req, res) => {
  const { name, sets, repetitions } = req.body;
  const updatedExercise = {};

  try {
    // Find Exercise
    let exercise = await Exercise.findById(req.params.id);

    // Checks If Exercise Exists
    if (!exercise) {
      return res.status(400).json({ msg: "Exercise Does Not Exists" });
    }

    // Create Updated Exercise
    if (name) {
      updatedExercise.name = name;
    }

    if (sets) {
      updatedExercise.sets = sets;
    }

    if (repetitions) {
      updatedExercise.repetitions = repetitions;
    }

    // Update Exercise
    exercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      { $set: updatedExercise },
      { new: true }
    );

    // Output Updated Exercise
    res.json(exercise);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       DELETE api/exercises
// @desc        Delete Exercise By ID
// @access      Private
router.delete("/:id", auth, async (req, res) => {
  try {
    // Find Exercise
    let exercise = await Exercise.findById(req.params.id);

    // Checks If Exercise Exists
    if (!exercise) {
      return res.status(400).json({ msg: "Exercise Does Not Exists" });
    }

    // Delete Exercise
    await Exercise.findByIdAndDelete(req.params.id);

    // Outputs Confirmation Message
    res.json({ msg: "Exercise Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

module.exports = router;
