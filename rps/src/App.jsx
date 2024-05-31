import React, { useState } from 'react';
import './App.sass';

const App = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const chooseRock = () => {
    setPlayerChoice('rock');
    const computerChoice = getComputerChoice();
    setComputerChoice(computerChoice);
    determineResult('rock', computerChoice);
  };

  const choosePaper = () => {
    setPlayerChoice('paper');
    const computerChoice = getComputerChoice();
    setComputerChoice(computerChoice);
    determineResult('paper', computerChoice);
  };

  const chooseScissors = () => {
    setPlayerChoice('scissors');
    const computerChoice = getComputerChoice();
    setComputerChoice(computerChoice);
    determineResult('scissors', computerChoice);
  };

  const determineResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setResult('Its a tie!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <div>
        <h1>RPS?</h1>
        <button onClick={chooseRock}>Rock</button>
        <button onClick={choosePaper}>Paper</button>
        <button onClick={chooseScissors}>Scissors</button>
      </div>
      <div>
        <p>Computer Choice: {computerChoice}</p>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default App;