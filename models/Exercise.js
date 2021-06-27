const mongoose = require("mongoose");

const ExerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    min: 0,
  },
  repitions: {
    type: Number,
    min: 0,
  },
});

module.exports = mongoose.model("exercise", ExerciseSchema);