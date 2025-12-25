import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useKeyboardControls } from './hooks/useKeyboardControls';
import { Controls } from './components/Controls';
import { ControlsInfo } from './components/ControlsInfo';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { MoveButton } from './components/MoveButton';
import { Moves } from './components/Moves';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { Result } from './components/Result';
import { Score } from './components/Score';
import { ThemeToggle } from './components/ThemeToggle';
import { MOVES, getGameResult, pickComputerMove } from './utils/gameLogic';
import './App.css';

function App() {
  const { t } = useTranslation();

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
    onToggleAutoPlay: () => setIsAutoPlaying(p => !p),
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
      <div className="top-controls">
        <ThemeToggle />
        <span className="controls-separator" />
        <LanguageSwitcher />
      </div>
      <div className='game-container'>
        <h1>{t('name')}</h1>

        <div className='moves-container'>
          {MOVES.map(move => (
            <MoveButton key={move} move={move} onPlay={playGame} />
          ))}
        </div>

        {moves && (
          <div className='round-result'>
            <Moves
              playerMove={moves.playerMove}
              computerMove={moves.computerMove}
            />
            <Result result={result} />
          </div>
        )}

        <Score score={score} />

        <Controls
          isAutoPlaying={isAutoPlaying}
          onReset={() => setIsResetingScore(true)}
          onToggleAutoPlay={() => setIsAutoPlaying(p => !p)}
        />

        <ControlsInfo />

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
