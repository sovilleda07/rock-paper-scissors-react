export function MoveButton({ move, onPlay }) {
  return (
    <button
      className='move-button'
      onClick={() => onPlay(move)}
    >
      <img
        src={`/${move}-emoji.png`}
        alt={move}
        className="move-icon" />
    </button>
  )
}