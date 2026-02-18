import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "../config/db.js";
import { Question } from "../models/Questions.model.js";

await connectDB();

await Question.insertMany([
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris", difficulty: "easy", category: "general" }
]);

console.log("Initial data inserted");
process.exit();