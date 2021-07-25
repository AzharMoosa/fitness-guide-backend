import express from "express";
const router = express.Router();
import User from "../models/User.js";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import auth from "../middleware/auth.js";
import generateToken from "../utils/generateToken.js";

// @route       GET api/auth
// @desc        Gets Current User
// @access      Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("API Error");
  }
});

// @route       POST api/auth
// @desc        Login
// @access      Public
router.post(
  "/",
  [
    check("email", "Email Is Not Valid").isEmail(),
    check("password", "Password Is Required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Email Or Password Not Valid" });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(400).json({ msg: "Email Or Password Not Valid" });
      }

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json("API Error");
    }
  }
);

export default router;
