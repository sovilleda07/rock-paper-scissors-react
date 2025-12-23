import { useTranslation } from 'react-i18next';

export function Controls({
  isAutoPlaying,
  onToggleAutoPlay,
  onReset
}) {
  const { t } = useTranslation();

  return (
    <div className="buttons-container">
      <button
        className='reset-score-button'
        onClick={onReset}
      >
        {t('reset_score')}
      </button>

      <button
        className='auto-play-button'
        onClick={onToggleAutoPlay}
      >
        {isAutoPlaying ? t('stop_auto_play') : t('auto_play')}
      </button>
    </div>
  );
}
