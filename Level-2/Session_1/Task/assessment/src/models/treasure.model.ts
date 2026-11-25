import mongoose, { Document } from "mongoose";

export interface ITreasure extends Document {
  name: string;
  category: string;
  value: number;
  description?: string;
}

// TODO: treasureSchema
//   name:        String, required
//   category:    String, required
//   value:       Number, required
//   description: String, optional

export const Treasure = mongoose.model<ITreasure>("Treasure", /* treasureSchema */ new mongoose.Schema({}));
