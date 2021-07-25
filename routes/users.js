import express from "express";
const router = express.Router();
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import User from "../models/User.js";
import auth from "../middleware/auth.js";
import generateToken from "../utils/generateToken.js";

// @route       POST api/users
// @desc        Registers New User
// @access      Public
router.post(
  "/",
  [
    check("name", "Name is Required").not().isEmpty(),
    check("email", "Email Is Not Valid").isEmail(),
    check("password", "Password Must Be 8 or More Characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check User Does Not Exist
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User Already Registered" });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      const createdUser = await user.save();

      res.json({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        token: generateToken(createdUser._id),
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json("API Error");
    }
  }
);

// @route       PUT api/users/:id
// @desc        Updates User
// @access      Private
router.put("/:id", [auth], async (req, res) => {
  try {
    // Check User Exists
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ msg: "User Does Not Exist" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

export default router;
