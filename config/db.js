import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
const db = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected".yellow.inverse);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
