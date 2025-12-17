export function Result({ result }) {
  if (!result) return null;

  const className =
    result === 'You win.'
      ? 'result win'
      : result === 'You lose.'
        ? 'result lose'
        : 'result tie';

  return <p className={className}>{result}</p>;
}