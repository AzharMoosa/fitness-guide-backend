const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @route       GET api/auth
// @desc        Gets Current User
// @access      Private
router.get("/", (req, res) => {
  res.send("Get Current User");
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
      res.status(500).send("API Error");
    }
  }
);

module.exports = router;
