import { useEffect, useState } from 'react';
import { MoveButton } from './components/MoveButton';
import { Moves } from './components/Moves';
import './App.css';

const MOVES = ['rock', 'paper', 'scissors'];

function App() {
  const [score, setScore] = useState(() => {
    return JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };
  });

  const [result, setResult] = useState('');
  const [moves, setMoves] = useState(null);
  const [isResettingScore, setIsRessetingScore] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const id = setInterval(() => {
      playGame(pickComputerMove())
    }, 1000);

    return () => clearInterval(id);
  }, [isAutoPlaying]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'r') playGame('rock');
      if (e.key === 'p') playGame('paper');
      if (e.key === 's') playGame('scissors');
      if (e.key === 'a') setIsAutoPlaying(p => !p);
      if (e.key === 'Backspace') resetScore();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    setIsRessetingScore(false);

    localStorage.removeItem('score');
  }

  return (
    <div className='game-container'>
      <h1>Rock Paper Scissors</h1>

      <div className='moves-container'>
        {MOVES.map(move => (
          <MoveButton key={move} move={move} onPlay={playGame} />
        ))}
      </div>

      <p className={`result ${result.includes('win') ? 'win' : result.includes('lose') ? 'lose' : 'tie'}`}>
        {result}
      </p>

      {moves && (
        <Moves
          playerMove={moves.playerMove}
          computerMove={moves.computerMove}
        />
      )}

      <p className='score'>
        Wins: {score.wins}, Losses: {score.losses}, Ties: {score.ties}
      </p>

      <div className='buttons-container'>
        <button className='reset-score-button' onClick={() => setIsRessetingScore(r => !r)}>Reset Score</button>
        <button className='auto-play-button' onClick={() => setIsAutoPlaying(p => !p)}>
          {isAutoPlaying ? 'Stop Playing' : 'Auto Play'}
        </button>
      </div>

      <p className='instructions'>
        Controls:<br />
        - Press <strong>P</strong> to play Paper <br />
        - Press <strong>R</strong> to play Rock <br />
        - Press <strong>S</strong> to play Scissors <br />
        - Press <strong>A</strong> for Auto Play <br />
        - Press <strong>Backspace</strong> to reset score <br />
      </p>

      {isResettingScore && (
        <>
          <p className='confirm-reset-score'>
            Are you sure you want to reset the score?
          </p>
          <div className="buttons-container">
            <button className="reset-confirm-button" onClick={resetScore}>Yes</button>
            <button className="reset-confirm-button" onClick={() => setIsRessetingScore(r => !r)}>No</button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
