import { Schema, model } from "mongoose";
import { type UserStructure } from "../types";

const userSchema = new Schema<UserStructure>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 4,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = model("User", userSchema, "user");

export default User;
