const mongoose = require("mongoose");

const SettingsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("settings", SettingsSchema);
