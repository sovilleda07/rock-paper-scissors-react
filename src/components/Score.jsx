import { useTranslation } from "react-i18next";

export function Score({ score }) {
  const { t } = useTranslation();

  return (
    <p className='score'>
      {t('score_summary', {
        wins: score.wins,
        losses: score.losses,
        ties: score.ties
      })}
    </p>
  )
}