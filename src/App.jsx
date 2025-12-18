import { useCallback, useEffect, useState } from 'react';
import { useKeyboardControls } from './hooks/useKeyboardControls';
import { MoveButton } from './components/MoveButton';
import { Moves } from './components/Moves';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { Result } from './components/Result';
import { Score } from './components/Score';
import { Controls } from './components/Controls';
import { MOVES, getGameResult, pickComputerMove } from './utils/gameLogic';
import './App.css';

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
  const [isResettingScore, setIsResetingScore] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  const playGame = useCallback((playerMove) => {
    const computerMove = pickComputerMove();
    const gameResult = getGameResult(playerMove, computerMove);

    setResult(gameResult);
    setMoves({ playerMove, computerMove });

    setScore(prev => ({
      wins: prev.wins + (gameResult === 'You win.' ? 1 : 0),
      losses: prev.losses + (gameResult === 'You lose.' ? 1 : 0),
      ties: prev.ties + (gameResult === 'Tie.' ? 1 : 0)
    }));
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const id = setInterval(() => {
      playGame(pickComputerMove());
    }, 1000);

    return () => clearInterval(id);
  }, [isAutoPlaying, playGame]);


  useKeyboardControls({
    onPlay: playGame,
    onToggleAutoPlay: () => setIsAutoPlaying(true),
    onReset: () => setIsResetingScore(true)
  })

  function resetScore() {
    setIsAutoPlaying(false);
    setScore({ wins: 0, losses: 0, ties: 0 });
    setResult('');
    setMoves(null);
    setIsResetingScore(false);

    localStorage.removeItem('score');
  }

  return (
    <div className='app-layout'>
      <div className='game-container'>
        <h1>Rock Paper Scissors</h1>

        <div className='moves-container'>
          {MOVES.map(move => (
            <MoveButton key={move} move={move} onPlay={playGame} />
          ))}
        </div>

        <Result result={result} />

        {moves && (
          <Moves
            playerMove={moves.playerMove}
            computerMove={moves.computerMove}
          />
        )}

        <Score score={score} />

        <Controls
          isAutoPlaying={isAutoPlaying}
          onReset={() => setIsResetingScore(true)}
          onToggleAutoPlay={() => setIsAutoPlaying(p => !p)}
        />

        <p className='instructions'>
          Controls:<br />
          - Press <strong>P</strong> to play Paper <br />
          - Press <strong>R</strong> to play Rock <br />
          - Press <strong>S</strong> to play Scissors <br />
          - Press <strong>A</strong> for Auto play <br />
          - Press <strong>Backspace</strong> to Reset score <br />
        </p>

      </div>
      {isResettingScore && (
        <ResetConfirmModal
          onConfirm={resetScore}
          onCancel={() => setIsResetingScore(false)}
        />
      )}
    </div>
  )
}

export default App
