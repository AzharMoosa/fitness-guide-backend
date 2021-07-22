import mongoose from "mongoose";

const SettingsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const Settings = mongoose.model("settings", SettingsSchema);

export default Settings;
