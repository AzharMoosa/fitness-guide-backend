const mongoose = require("mongoose");

const UserInfoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  routine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "routines",
  },
  setting: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "settings",
  },
});

module.exports = mongoose.model("userinfo", UserInfoSchema);
