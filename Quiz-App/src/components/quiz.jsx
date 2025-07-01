

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
  const initialAnswers = [null, null, null];

  const [optionsSelected, setOptionSelected] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const selectedAnswer = optionsSelected[currentQuestion];

  function handleOptionClick(option) {
  const newUserAnswers = [...optionsSelected];  
  newUserAnswers[currentQuestion] = option;

  setOptionSelected(newUserAnswers)
}

function goToNext() {   
 if(currentQuestion === questionsBank.length - 1) {
  setIsQuizFinished(true);} 
  else { 
    setCurrentQuestion(currentQuestion + 1);
  }

}

function goToPrevious() {
  if (currentQuestion > 0) {
    setCurrentQuestion(currentQuestion - 1);  
  }
  // function restartQuiz() {
  //   setOptionSelected(initialAnswers);
  //   setCurrentQuestion(0);
  //   setIsQuizFinished(false);
  // }
  if (isQuizFinished) {
    return <Results/>;
  }

    
}
  return (
    <>
      <div>
        {""}
        <h2> Question {currentQuestion+1}</h2>
        <p className="question">{questionsBank[currentQuestion].question}</p>
        {questionsBank[currentQuestion].options.map((option) => (
          <button className={"option selected" + (selectedAnswer=== option ? "selected":"")} onClick={() => handleOptionClick(option)}>
            {" "}
            {option}
            
          </button>
        ))}
        <p>Option Selected: {optionsSelected}</p>
      </div>
      <div className="nav-buttons">
        <button onClick={goToPrevious} disabled={currentQuestion === 0}> Previous </button>

        <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === questionsBank.length - 1 ? "Finish Quiz" : "Next"}
         

          </button>
      </div>
    </>
  );
}

export default Quiz;
