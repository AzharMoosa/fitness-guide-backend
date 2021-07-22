import express from "express";
const router = express.Router();
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import User from "../models/User.js";

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

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 31600000,
        },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json("API Error");
    }
  }
);

export default router;
