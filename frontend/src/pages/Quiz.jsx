import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Quiz() {
  const { slug } = useParams();

  // Dummy questions (later you can fetch from API or JSON)
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Multi Language",
        "None of these",
      ],
      answer: 0,
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: 2,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const handleOptionClick = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 10);
    } else {
      setLives(lives - 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-purple-600 text-white text-center py-4 text-xl font-semibold">
        Quiz Category: {slug}
      </div>

      {/* Progress Bar */}
      <div className="px-10 mt-4">
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className="bg-purple-600 h-3 rounded-full"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
        <p className="text-right text-sm mt-1 text-purple-600">
          {currentQuestion + 1} / {questions.length}
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex gap-6 px-10 py-6">
        {/* Quiz Section */}
        <div className="flex-1 bg-gradient-to-r from-purple-400 to-purple-200 rounded-xl p-6">
          <div className="flex justify-between text-sm mb-4">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full">
              100 Points
            </span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full">
              ⏱ 00:00
            </span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full">
              Easy
            </span>
          </div>

          <h2 className="text-xl font-semibold mb-6">
            {questions[currentQuestion].question}
          </h2>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className="bg-white hover:bg-purple-100 transition rounded-lg p-4 text-left font-medium"
              >
                {option}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg">
              Skip
            </button>
            <button
              onClick={nextQuestion}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg"
            >
              Next Question
            </button>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="w-64 bg-white rounded-xl p-4 shadow">
          <h3 className="text-lg font-semibold text-purple-600 mb-4">
            Quiz Stats
          </h3>

          <div className="space-y-3">
            <div className="bg-purple-200 p-3 rounded-lg text-center">
              <p className="font-semibold">Score</p>
              <p>{score}</p>
            </div>

            <div className="bg-purple-200 p-3 rounded-lg text-center">
              <p className="font-semibold">Lives</p>
              <p>{"❤️".repeat(lives)}</p>
            </div>

            <div className="bg-purple-200 p-3 rounded-lg text-center">
              <p className="font-semibold">Progress</p>
              <p>
                {currentQuestion + 1}/{questions.length}
              </p>
            </div>

            <div className="bg-purple-200 p-3 rounded-lg text-center">
              <p className="font-semibold">Position</p>
              <p>2nd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;