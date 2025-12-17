export function Moves({ playerMove, computerMove }) {
  return (
    <p className='moves'>
      You
      <img src={`/${playerMove}-emoji.png`} alt={playerMove} className='move-icon' />
      <img src={`/${computerMove}-emoji.png`} alt={computerMove} className='move-icon' />
      Computer
    </p>
  )
}