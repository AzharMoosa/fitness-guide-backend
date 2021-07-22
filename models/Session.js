import mongoose from "mongoose";

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

const Session = mongoose.model("session", SessionSchema);

export default Session;
