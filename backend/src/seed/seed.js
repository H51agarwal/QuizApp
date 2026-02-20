import questionsData from "./data/questions.data.js";
import { connectDB } from "../config/db.js";
import { Question } from "../models/Questions.model.js";

await connectDB();

await Question.insertMany(questionsData);

console.log("Initial data inserted");
process.exit();