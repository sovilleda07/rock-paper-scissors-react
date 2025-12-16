import { useState } from 'react';

const MOVES = ['rock', 'paper', 'scissors'];

function App() {
  const [score, setScore] = useState(() => {
    return {
      wins: 0,
      losses: 0,
      ties: 0
    };
  });

  function pickComputerMove() {
    return MOVES[Math.floor(Math.random() * 3)];
  }

  function playGame(playerMove) {
    console.log(playerMove);
  }

  return (
    <div className='game-container'>
      <h1>Rock Paper Scissors</h1>

      <div className='moves-container'>
        {MOVES.map(move => (
          <button key={move} onClick={() => playGame(move)}>
            <img src={`/${move}-emoji.png`} alt={move} />
          </button>
        ))}
      </div>

      <p>
        Wins: {score.wins}, Losses: {score.losses}, Ties: {score.ties}
      </p>
    </div>
  )
}

export default App
