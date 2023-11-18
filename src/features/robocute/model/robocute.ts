import { Schema, model } from "mongoose";
import type { RoboCuteStructure } from "../types";

const robocuteSchema = new Schema<RoboCuteStructure>({
  name: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: true,
  },
  planet: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  endurance: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
});

const Robocute = model("Robocute", robocuteSchema, "robocute");

export default Robocute;
