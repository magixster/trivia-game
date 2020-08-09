import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ShowScoreBoard from './components/ShowScoreBoard';
import ShowPuzzle from './components/ShowPuzzle';
import { LAST_QUESTION_INDEX, API_URL } from '../../constants';

const Game = ({ setInGame, setUser, user }) => {
  const [questions, setQuestions] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswerCount, setCurrentAnswerCount] = useState(0);

  const gameCompleted = currentIndex === LAST_QUESTION_INDEX;

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const data = await fetch(API_URL);
      const { results: questions } = await data.json();
      setQuestions(questions);
    } catch (e) {
      console.log(e);
      toast.error('Connection Error!');
    }
  }

  return gameCompleted ? (<ShowScoreBoard
    correctAnswerCount={correctAnswerCount}
    setInGame={setInGame}
    setUser={setUser}
    user={user} />
  ):
  (<ShowPuzzle
    questions={questions}
    setCurrentIndex={setCurrentIndex}
    setCurrentAnswerCount={setCurrentAnswerCount}
    currentIndex={currentIndex}
  />);
};

export default Game;