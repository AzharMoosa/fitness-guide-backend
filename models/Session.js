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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("session", SessionSchema);
