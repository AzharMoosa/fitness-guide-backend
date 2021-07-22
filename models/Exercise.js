import mongoose from "mongoose";

const ExerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  info: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = mongoose.model("exercise", ExerciseSchema);

export default Exercise;
