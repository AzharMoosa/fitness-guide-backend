const mongoose = require("mongoose");

const SessionSchema = mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  exercises: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("session", SessionSchema);
