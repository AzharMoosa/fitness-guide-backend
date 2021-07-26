import mongoose from "mongoose";

const SettingsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  health_information: {
    date_of_birth: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    height: {
      type: Number,
      default: 0,
    },
    weight: {
      type: Number,
      default: 0,
    },
  },
  chat_settings: {
    custom_name: {
      type: String,
      default: "",
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
});

const Settings = mongoose.model("settings", SettingsSchema);

export default Settings;
