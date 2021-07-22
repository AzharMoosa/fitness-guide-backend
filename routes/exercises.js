import express from "express";
const router = express.Router();
import Exercise from "../models/Exercise.js";
import { check, validationResult } from "express-validator";

// @route       GET api/exercises
// @desc        Get All Exercises
// @access      Public
router.get("/", async (req, res) => {
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

// @route       GET api/exercises/id
// @desc        Get Exercise By ID
// @access      Public
router.get("/:id", async (req, res) => {
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

// @route       GET api/exercises/type/:type
// @desc        Get Exercise By Type
// @access      Public
router.get("/type/:type", async (req, res) => {
  try {
    // Find Exercises
    let exercises = await Exercise.find({ type: req.params.type });
    // Output Exercise
    res.json(exercises);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       POST api/exercises
// @desc        Create Exercise
// @access      Public
router.post(
  "/",
  [
    check("name", "Name is Required").not().isEmpty(),
    check("type", "Type is Required").not().isEmpty(),
  ],
  async (req, res) => {
    // Error Handling
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract Exercise Data
    const { name, type, description, info } = req.body;

    try {
      // Check If Exercise Exists
      let exercise = await Exercise.findOne({ name });
      if (exercise) {
        return res.status(400).json({ msg: "Exercise Already Exists" });
      }

      // Create New Exercise
      exercise = new Exercise({
        name,
        type,
        description,
        info,
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
// @access      Public
router.put("/:id", async (req, res) => {
  const { name, type, description, info } = req.body;
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

    if (type) {
      updatedExercise.type = type;
    }

    if (description) {
      updatedExercise.description = description;
    }

    if (info) {
      updatedExercise.info = info;
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
// @access      Public
router.delete("/:id", async (req, res) => {
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

export default router;
