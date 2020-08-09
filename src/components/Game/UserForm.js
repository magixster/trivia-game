import React from 'react';
import CasinoImg from '../../img/casino-bg.jpg';


const invalidUserError = (errorString) => (<div className="text-red-700 px-2 py-3" role="alert">
<span className="block sm:inline">{errorString}</span>
</div>);

export const UserForm = ({
  setUser,
  setFormError,
  formError,
  startGame,
  user,
}) => (<React.Fragment>
<div className="mx-auto w-2/3 lg:w-1/3 rounded overflow-hidden shadow-lg bg-white">
<img className="w-full" src={CasinoImg} alt="Sunset in the mountains" />
<div className="px-6 py-4">
  <div className="text-gray-700 text-lg lg:text-2xl mb-2 font-light">Enter your name</div>
    <div>
    <input className="h-10 w-full border p-1" type='text' onChange={({ target }) => {
      const user = target.value.trim();
      setUser(user);
      setFormError(false);
    }} value={user}/>
    {formError && invalidUserError('Please enter user name')}
    <button className="text-md lg:text-xl uppercase text-white h-12 w-full lg:w-1/2 bg-red-600 mr-auto mt-4 rounded focus:outline-none" onClick={startGame}> Start Game </button>
    </div>
</div>
</div>
  </React.Fragment>)