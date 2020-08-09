import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { UserForm } from './components/Game/UserForm';
import Game from './components/Game/Game';
import logo from './img/logo.png';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [formError, setFormError] = useState(false);
  const [inGame, setInGame] = useState(false);

  const startGame = () => {
    // validation
    if (!user) {
      setFormError(true);
      return;
    }
    setInGame(true);
  }
  return (
    <div className="h-screen bg-gradient">
    <p className="text-4xl uppercase text-center text-red-500 shadow p-4 font-bold">
      <img src={logo} className="h-16" alt="guess trivia" />
    </p>
      {inGame ? <Game user={user} setInGame={setInGame} setUser={setUser} /> :
        <UserForm user={user} formError={formError} setUser={setUser} setFormError={setFormError} startGame={startGame} />}
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
