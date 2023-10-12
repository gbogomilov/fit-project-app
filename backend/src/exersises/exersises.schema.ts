import * as mongoose from "mongoose";

export const ExersiesSchema = new mongoose.Schema({
  exercise: String,
  repetitions: Number,
  sets: Number,
  weight: Number,
});
