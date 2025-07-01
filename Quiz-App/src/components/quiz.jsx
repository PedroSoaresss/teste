import React, { useState } from "react";
import Results from "./results";

function Quiz() {
  const questionsBank = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
  ];

  const initialAnswers = Array(questionsBank.length).fill(null);
  const [optionsSelected, setOptionsSelected] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  function handleOptionClick(option) {
    const newAnswers = [...optionsSelected];
    newAnswers[currentQuestion] = option;
    setOptionsSelected(newAnswers);
  }

  function goToNext() {
    if (currentQuestion === questionsBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function goToPrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function restartQuiz() {
    setOptionsSelected(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  if (isQuizFinished) {
    return (
      <Results
        optionsSelected={optionsSelected}
        questionsBank={questionsBank}
        restartQuiz={restartQuiz}
      />
    );
  }

  const selectedAnswer = optionsSelected[currentQuestion];

  return (
    <>
      <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p className="question">{questionsBank[currentQuestion].question}</p>
        {questionsBank[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedAnswer === option ? "selected" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="nav-buttons">
        <button onClick={goToPrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === questionsBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </>
  );
}

export default Quiz;
