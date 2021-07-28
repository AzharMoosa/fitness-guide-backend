import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import Settings from "../models/Settings.js";
import { check, validationResult } from "express-validator";

// @route       GET api/settings
// @desc        Get All Users Settings
// @access      Private
router.get("/", auth, async (req, res) => {
  try {
    // Find All Settings
    let settings = await Settings.findOne({ user: req.user.id });
    // Output Settings
    res.json(settings);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       GET api/settings
// @desc        Get Setting By ID
// @access      Private
router.get("/:id", auth, async (req, res) => {
  try {
    // Find Setting
    let setting = await Settings.findById(req.params.id);
    // Output Setting
    res.json(setting);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       POST api/settings
// @desc        Create Setting
// @access      Private
router.post("/", auth, async (req, res) => {
  try {
    // Create New Setting
    const settings = new Settings({
      user: req.user.id,
    });

    // Save Setting To DB
    await settings.save();

    // Output Setting
    res.json(settings);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       PUT api/settings
// @desc        Update Setting By ID
// @access      Private
router.put("/:id", auth, async (req, res) => {
  const { date_of_birth, gender, height, weight, custom_name, isVisible } =
    req.body;
  const updatedSettings = {
    health_information: {},
    chat_settings: {},
  };

  try {
    // Find Setting
    let settings = await Settings.findById(req.params.id);

    // Checks If Setting Exists
    if (!settings) {
      return res.status(400).json({ msg: "Settings Does Not Exists" });
    }

    const { health_information: health, chat_settings: chat } = settings;

    // Create Updated Settings
    updatedSettings.health_information.date_of_birth =
      date_of_birth || health.date_of_birth;
    if (date_of_birth == "") {
      updatedSettings.health_information.date_of_birth = "";
    }
    updatedSettings.health_information.gender = gender || health.gender;
    if (gender == "") {
      updatedSettings.health_information.gender = "";
    }
    updatedSettings.health_information.height = height || health.height;
    if (height == "") {
      updatedSettings.health_information.height = "";
    }
    updatedSettings.health_information.weight = weight || health.weight;
    if (weight == "") {
      updatedSettings.health_information.weight = "";
    }
    updatedSettings.chat_settings.custom_name = custom_name || chat.custom_name;
    if (custom_name == "") {
      updatedSettings.chat_settings.custom_name = "";
    }

    updatedSettings.chat_settings.isVisible = isVisible ? true : false;

    // Update Setting
    settings = await Settings.findByIdAndUpdate(
      req.params.id,
      { $set: updatedSettings },
      { new: true }
    );

    // Output Updated Setting
    res.json(settings);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       DELETE api/settings
// @desc        Delete Setting By ID
// @access      Private
router.delete("/:id", auth, async (req, res) => {
  try {
    // Find Settings
    let setting = await Settings.findById(req.params.id);

    // Checks If Settings Exists
    if (!setting) {
      return res.status(400).json({ msg: "Settings Does Not Exists" });
    }

    // Delete Settings
    await Settings.findByIdAndDelete(req.params.id);

    // Outputs Confirmation Message
    res.json({ msg: "Settings Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

export default router;
