
import React from 'react';
import './index.css';
import Quiz from './components/quiz'
import Results from './components/results';


function App() {
  return <div className="app-container">
    {''}
    <h1>Quiz App</h1>
    <Quiz />
    {/* <Results 
      questionsBank={[{ question: "Sample Question", answers: ["Answer1", "Answer2"] }]} 
      optionsSelected={["Answer1"]} 
      restartQuiz={() => console.log("Quiz restarted")} 
    />
     */}
  </div>
}
 


export default App
