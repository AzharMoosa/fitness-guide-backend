import colors from "colors";
import dotenv from "dotenv";
import users from "./data/users.js";
import User from "./models/User.js";
import Routine from "./models/Routine.js";
import Exercise from "./models/Exercise.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Routine.deleteMany();
    await Exercise.deleteMany();

    const createdUsers = await User.insertMany(users);

    console.log("Data Imported!".green.inverse);

    process.exit();
  } catch (err) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Routine.deleteMany();
    await Exercise.deleteMany();

    console.log("Data Destroyed!".red.inverse);

    process.exit();
  } catch (err) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
