export function Moves({ playerMove, computerMove }) {
  return (
    <div className="round-moves">
      <div className="player">
        <img src={`/${playerMove}-emoji.png`} alt={playerMove} className='move-icon' />
        <span className="move-player">You</span>
      </div>
      <span className="vs">VS</span>

      <div className="player">
        <img src={`/${computerMove}-emoji.png`} alt={computerMove} className='move-icon' />
        <span className="move-player">Computer</span>
      </div>
    </div>
  )
}