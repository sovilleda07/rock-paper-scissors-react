export function Score({ score }) {
  return (
    <p className='score'>
      Wins: {score.wins}, Losses: {score.losses}, Ties: {score.ties}
    </p>
  )
}