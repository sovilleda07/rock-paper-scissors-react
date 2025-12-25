import { useTranslation } from "react-i18next";

export function Result({ result }) {
  const { t } = useTranslation();

  if (!result) return null;

  const resultKeys = {
    'You win.': 'you_win',
    'You lose.': 'you_lose',
    'Tie.': 'tie'
  }

  const statusClass =
    result === 'You win.'
      ? 'win'
      : result === 'You lose.'
        ? 'lose'
        : 'tie';

  return <p className={`result ${statusClass}`}>{t(resultKeys[result])}</p>;
}