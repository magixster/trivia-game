import React from 'react';

const ShowScoreBoard = ({ correctAnswerCount, setInGame, setUser, user }) => {
  return (<div className="flex items-center pt-4 flex-col mx-auto">
    <p className="text-4xl text-red-500">{user}'s Score</p>
    <p className="text-3xl text-gray-600 mt-5"> {correctAnswerCount} / 5</p>
    <button
      className="w-auto mt-40 mx-auto p-2 text-xl uppercase text-white h-12 bg-red-600 mr-auto mt-4 rounded focus:outline-none"
      onClick={() => {
        setInGame(false);
        setUser('');
      }}
      > Re-Start Game </button>
    </div>);
};

export default ShowScoreBoard;