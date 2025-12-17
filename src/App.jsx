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

  const [result, setResult] = useState('');
  const [moves, setMoves] = useState(null);

  function pickComputerMove() {
    return MOVES[Math.floor(Math.random() * 3)];
  }

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let gameResult = '';

    if (playerMove === computerMove) gameResult = 'Tie.';
    else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissors' && computerMove === 'paper')
    ) gameResult = 'You win.';
    else gameResult = 'You lose.';

    setResult(gameResult);

    setMoves({ playerMove, computerMove });

    setScore(prev => ({
      wins: prev.wins + (gameResult === 'You win.' ? 1 : 0),
      losses: prev.losses + (gameResult === 'You lose.' ? 1 : 0),
      ties: prev.ties + (gameResult === 'Tie.' ? 1 : 0)
    }));
  }

  function resetScore() {
    setScore({ wins: 0, losses: 0, ties: 0 });
    setResult('');
    setMoves(null);
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

      <p className={`${result.includes('win') ? 'win' : result.includes('lose') ? 'lose' : 'tie'}`}>
        {result}
      </p>

      {moves && (
        <p>
          You
          <img src={`/${moves.playerMove}-emoji.png`} alt={moves.playerMove} />
          <img src={`/${moves.computerMove}-emoji.png`} alt={moves.computerMove} />
          Computer
        </p>
      )}

      <p>
        Wins: {score.wins}, Losses: {score.losses}, Ties: {score.ties}
      </p>

      <button onClick={resetScore}>Reset Score</button>
    </div>
  )
}

export default App
