const mongoose = require("mongoose");

const SettingsSchema = mongoose.Schema({});

module.exports = mongoose.model("settings", SettingsSchema);
