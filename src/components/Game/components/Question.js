import React from 'react';
import { toast } from 'react-toastify';
import { decodeHTML } from '../../../utils';

const Question = ({ currentQuestion, setCurrentIndex, setCurrentAnswerCount, correctAnswerCount }) => {
  const { incorrect_answers, correct_answer, question} = currentQuestion;
  const allOptions = [...incorrect_answers, correct_answer];

  const handleOptionClick = (option) => {
    setCurrentIndex((currentIndex) => currentIndex + 1);
    if (option === correct_answer) {
      setCurrentAnswerCount((correctAnswerCount) => correctAnswerCount + 1)
      toast.success('Awesome, You are correct!');
    } else {
      toast.error('You got it wrong!');
    }
  }
  return (<React.Fragment>
    <div className="w-2/3  border rounded shadow mx-auto bg-white md:w-1/2 lg:w-1/2 h-auto p-4">
    <p className="text-md uppercase text-gray-600">Question: </p>
    <div className="text-light pb-4 text-lg lg:text-2xl">{decodeHTML(question)}</div>
    <p className="text-md uppercase text-gray-600">Options: </p>
    {allOptions.map((option) => <p className="border cursor-pointer m-1 p-2 text-lg lg:text-lg hover:bg-gray-400 active:bg-gray-600" onClick={() => {
      handleOptionClick(option);
    }
    }>{option}</p>)}
    <p>{correctAnswerCount}</p>
    </div>
    </React.Fragment>
  );
}

export default Question;