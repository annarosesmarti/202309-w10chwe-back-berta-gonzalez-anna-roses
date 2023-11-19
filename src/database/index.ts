import chalk from "chalk";
import mongoose from "mongoose";

const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", false);
    console.log(chalk.bgGreen("Connected to database"));
  } catch {
    console.log(chalk.bgRed("Error connecting to DDBB"));
  }
};

export default connectToDatabase;
