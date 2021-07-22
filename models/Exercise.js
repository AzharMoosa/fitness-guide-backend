import mongoose from "mongoose";

const ExerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Exercise = mongoose.model("exercise", ExerciseSchema);

export default Exercise;
