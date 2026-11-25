import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

// TODO: userSchema
//   name:     String, required
//   email:    String, required, unique
//   password: String, required
//   role:     String, enum ["user","admin"], default "user"

export const User = mongoose.model<IUser>("User", /* userSchema */ new mongoose.Schema({}));
