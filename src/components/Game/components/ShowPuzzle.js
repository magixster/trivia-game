import React from 'react';
import Question from './Question';
import Loading from '../../shared/Loading';

const ShowPuzzle = ({ questions, currentIndex, setCurrentIndex, setCurrentAnswerCount, correctAnswerCount }) => {
  return (questions ? <Question
    setCurrentIndex={setCurrentIndex}
    currentQuestion={questions[currentIndex]}
    setCurrentAnswerCount={setCurrentAnswerCount}
    correctAnswerCount={correctAnswerCount}
    /> : <Loading />)
};

export default ShowPuzzle;