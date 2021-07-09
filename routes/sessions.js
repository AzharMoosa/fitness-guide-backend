const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const Session = require("../models/Session");
const { check, validationResult } = require("express-validator");

// @route       GET api/sessions
// @desc        Get All Users Sessions
// @access      Private
router.get("/", auth, async (req, res) => {
  try {
    // Find All Sessions
    let sessions = await Session.find({ user: req.user.id });
    // Output Sessions
    res.json(sessions);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       GET api/sessions
// @desc        Get Session By ID
// @access      Private
router.get("/:id", auth, async (req, res) => {
  try {
    // Find Session
    let session = await Session.findById(req.params.id);
    // Output Session
    res.json(session);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       POST api/sessions
// @desc        Create Session
// @access      Private
router.post(
  "/",
  [auth, check("day", "Day is Required").not().isEmpty()],
  async (req, res) => {
    // Error Handling
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract Session Data
    const { day, exercises } = req.body;

    try {
      // Create New Session
      const session = new Session({
        day,
        exercises,
        user: req.user.id,
      });

      // Save Session To DB
      await session.save();

      // Output Session
      res.json(session);
    } catch (err) {
      console.error(err.message);
      res.status(500).json("API Error");
    }
  }
);

// @route       PUT api/sessions
// @desc        Update Session By ID
// @access      Private
router.put("/:id", auth, async (req, res) => {
  const { exercise } = req.body;
  const updatedSession = {};

  try {
    // Find Session
    let session = await Session.findById(req.params.id);

    // Checks If Session Exists
    if (!session) {
      return res.status(400).json({ msg: "Session Does Not Exists" });
    }

    // Create Updated Session
    if (exercise) {
      updatedSession.exercises = [exercise.id, ...session.exercises];
    }

    // Update Session
    session = await Session.findByIdAndUpdate(
      req.params.id,
      { $set: updatedSession },
      { new: true }
    );

    // Output Updated Session
    res.json(session);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       DELETE api/sessions
// @desc        Delete Session By ID
// @access      Private
router.delete("/:id", auth, async (req, res) => {
  try {
    // Find Session
    let session = await Session.findById(req.params.id);

    // Checks If Session Exists
    if (!session) {
      return res.status(400).json({ msg: "Session Does Not Exists" });
    }

    // Delete Session
    await Session.findByIdAndDelete(req.params.id);

    // Outputs Confirmation Message
    res.json({ msg: "Session Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

module.exports = router;
