export function Controls({
  isAutoPlaying,
  onToggleAutoPlay,
  onReset
}) {
  return (
    <div className="buttons-container">
      <button
        className='reset-score-button'
        onClick={onReset}
      >
        Reset Score
      </button>

      <button
        className='auto-play-button'
        onClick={onToggleAutoPlay}
      >
        {isAutoPlaying ? 'Stop Playing' : 'Auto Play'}
      </button>
    </div>
  );
}
