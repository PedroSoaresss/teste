function Results({ questionsBank, optionsSelected, restartQuiz }) {
  function getScore() {
    let finalScore = 0;

    optionsSelected.forEach((answer, index) => {
      if (answer === questionsBank[index].answer) {
        finalScore++;
      }
    });

    return finalScore;
  }

  const score = getScore();
  const questionComponent = () => {
    if (score >= 7) {
        return <p className="sucesso">Parabéns ! Você foi muito bem.</p>;}
        else if (score <= 6){
            return <p className="error"> Horrivél ! Tente novamente amigo.</p> 
        } 
  }
 

  return (
    <div>
      <h2>Quiz Completo !</h2>
      <p>
        {questionComponent()}
        {" "}
        Sua Pontuação:{score}/{questionsBank.length}
      </p>
      <button className="restart-button" onClick={restartQuiz}>
       Recomeçar 
      </button>
    </div>
  );
}

export default Results;
