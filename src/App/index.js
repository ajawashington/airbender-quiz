import React, { useState, useEffect } from 'react';
import './App.scss';
import getQuestions from '../helpers/data/avatarData';

function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    getQuestions()
      .then((questions) => {
        setAllQuestions(questions);
        setSingleQuestion(questions[Math.floor(Math.random() * questions.length)]);
      });
  }, []);

  const handleClick = () => {
    if (showAnswer) {
      setShowAnswer(false);
      setSingleQuestion(allQuestions[Math.floor(Math.random() * allQuestions.length)]);
    } else {
      setShowAnswer(true);
    }
  };

  return (
    <div className='App'>
      <h1>{singleQuestion.question}</h1>
      <p>{showAnswer && singleQuestion.correctAnswer}</p>
      <button onClick={handleClick}>
        {showAnswer ? 'Get Another Question' : 'Get Answer'}
      </button>
    </div>
  );
}

export default App;
