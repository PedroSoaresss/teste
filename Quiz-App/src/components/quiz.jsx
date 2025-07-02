import React, { useState } from "react";
import Results from "./results";
import { questions } from "../utils/question";

function Quiz() {
  const initialAnswers = Array(questions.length).fill(null);
  const [optionsSelected, setOptionsSelected] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const isLastQuestion = currentQuestion === questions.length - 1;

  function handleOptionClick(option) {
    const newAnswers = [...optionsSelected];
    newAnswers[currentQuestion] = option;
    setOptionsSelected(newAnswers);
  }

  function goToNext() {
    if (isLastQuestion) {
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
        questionsBank={questions}
        restartQuiz={restartQuiz}
      />
    );
  }

  const selectedAnswer = optionsSelected[currentQuestion];

  return (
    <>
      <div>
        <h2>Questão {currentQuestion + 1}</h2>
        <p className="question">{questions[currentQuestion].question}</p>
        {questions[currentQuestion].options.map((option, index) => (
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
          Anterior
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {isLastQuestion ? "Finalizar Quiz" : "Próximo"}
        </button>
      </div>
    </>
  );
}

export default Quiz;
