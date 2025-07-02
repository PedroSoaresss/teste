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
    if (score >= 8) {
      return (
        <div className="centralizar">
          <img src="../src/assets/feliz.jpeg" />
        </div>
      );
    } else if (score >= 6) {
      return <img src="../src/assets/tentativa.jpeg" />;
    } else if (score <= 5) {
      return <img src="../src/assets/emoji triste.jpeg" />;
    }
  };

  return (
    <div>
      <h2>Quiz Completo !</h2>
      <p>
        {questionComponent()} Sua Pontuação:{score}/{questionsBank.length}
      </p>
      <button className="restart-button" onClick={restartQuiz}>
        Recomeçar
      </button>
    </div>
  );
}

export default Results;
