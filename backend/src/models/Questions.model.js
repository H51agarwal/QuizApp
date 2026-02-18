import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    answer: String,
    difficulty: String,
    category: String,
}, { timestamps: true });

export const Question = mongoose.model("Question", questionSchema);