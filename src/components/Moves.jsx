import { useTranslation } from 'react-i18next';

export function Moves({ playerMove, computerMove }) {
  const { t } = useTranslation();

  return (
    <div className="round-moves">
      <div className="player">
        <img src={`/${playerMove}-emoji.png`} alt={playerMove} className='move-icon' />
        <span className="move-player">{t('move_player')}</span>
      </div>
      <span className="vs">{t('vs')}</span>

      <div className="player">
        <img src={`/${computerMove}-emoji.png`} alt={computerMove} className='move-icon' />
        <span className="move-player">{t('move_computer')}</span>
      </div>
    </div>
  )
}