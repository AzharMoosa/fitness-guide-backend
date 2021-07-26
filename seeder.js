import colors from "colors";
import dotenv from "dotenv";
import users from "./data/users.js";
import routines from "./data/routines.js";
import exercises from "./data/exercises.js";
import User from "./models/User.js";
import Routine from "./models/Routine.js";
import Exercise from "./models/Exercise.js";
import Settings from "./models/Settings.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Create Users
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    console.log("Users Created!".cyan.bold);

    // Create Settings For Each User
    await Settings.deleteMany();
    for (let i = 0; i < createdUsers.length; i++) {
      const settings = new Settings({
        user: createdUsers[i]._id,
      });
      await settings.save();
    }

    console.log("Settings Created!".cyan.bold);

    // Create Routines
    await Routine.deleteMany();
    const createdRoutines = [];
    for (let i = 0; i < createdUsers.length; i++) {
      for (let j = 0; j < routines.length; j++) {
        createdRoutines.push({
          ...routines[j],
          user: createdUsers[i],
        });
      }
    }
    await Routine.insertMany(createdRoutines);
    console.log("Routines Created!".cyan.bold);

    // Create Exercises
    await Exercise.deleteMany();
    await Exercise.insertMany(exercises);
    console.log("Exercises Created!".cyan.bold);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const importUsers = async () => {
  try {
    // Create Users
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    console.log("Users Created!".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const importRoutines = async () => {
  try {
    // Create Users
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    console.log("Users Created!".cyan.bold);

    // Create Routines
    await Routine.deleteMany();
    const createdRoutines = [];
    for (let i = 0; i < createdUsers.length; i++) {
      for (let j = 0; j < routines.length; j++) {
        createdRoutines.push({
          ...routines[j],
          user: createdUsers[i],
        });
      }
    }
    await Routine.insertMany(createdRoutines);
    console.log("Routines Created!".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const importExercises = async () => {
  try {
    // Create Exercises
    await Exercise.deleteMany();
    await Exercise.insertMany(exercises);
    console.log("Exercises Created!".green.inverse);
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Routine.deleteMany();
    await Exercise.deleteMany();
    await Settings.deleteMany();

    console.log("Data Destroyed!".red.inverse);

    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else if (process.argv[2] === "-u") {
  importUsers();
} else if (process.argv[2] === "-r") {
  importRoutines();
} else if (process.argv[2] === "-e") {
  importExercises();
} else {
  importData();
}
