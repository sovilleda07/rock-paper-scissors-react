export const MOVES = ['rock', 'paper', 'scissors'];

export function getGameResult(playerMove, computerMove) {
  if (playerMove === computerMove) return 'Tie.';

  if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    return 'You win.';
  }

  return 'You lose.';
}

export function pickComputerMove() {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}