import mongoose from "mongoose";

const HealthInformationSchema = mongoose.Schema({
  date_of_birth: {
    type: Date,
  },
  gender: {
    type: String,
  },
  height: {
    type: String,
  },
  weight: {
    type: Number,
  },
});

const ChatSettingsSchema = mongoose.Schema({
  custom_name: {
    type: String,
  },
  isVisible: {
    type: Boolean,
  },
});

const SettingsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  health_information: [HealthInformationSchema],
  chat_settings: [ChatSettingsSchema],
});

const Settings = mongoose.model("settings", SettingsSchema);

export default Settings;
