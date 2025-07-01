function Results({questionsBank, optionsSelected, restartQuiz}) {
  function getScore() {
    let finalScore = 0;
    

    optionsSelected.forEach((answer, index) => {
        if (answer === questionsBank[index].answer) {

            finalScore++;
        }
    });

    return finalScore;
  }



    const score = getScore()

   
  return (
    <div>
        <h2>Quiz Completed !</h2>
        <p> Your Score:{score}/{questionsBank.length}</p>
        <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
     
    </div>
  );
}

export default Results;