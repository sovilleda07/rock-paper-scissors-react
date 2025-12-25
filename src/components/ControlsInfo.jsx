import { useTranslation } from "react-i18next";

export function ControlsInfo() {
  const { t } = useTranslation();

  return (
    <div className="instructions">
      <p>{t('instructions')}:</p>
      <ul className="controls-instructions">
        <li>- {t('press')} <strong>P</strong> {t('to_play')} {t('paper')}</li>
        <li>- {t('press')} <strong>R</strong> {t('to_play')} {t('paper')}</li>
        <li>- {t('press')} <strong>S</strong> {t('to_play')} {t('scissors')}</li>
        <li>- {t('press')} <strong>A</strong> {t('for_auto')} </li>
        <li>- {t('press')} <strong>{t('backspace')}</strong> {t('to_reset')} </li>
      </ul>
    </div>
  )
}