import { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

export function ResetConfirmModal({ onConfirm, onCancel }) {
  const { t } = useTranslation();

  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    modalRef.current?.focus();

    document.body.style.overflow = 'hidden';

    return () => {
      previousFocusRef.current?.focus();
      document.body.style.overflow = '';
    }
  });

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onCancel();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCancel]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-title"
        tabIndex={-1}
        ref={modalRef}
      >
        <h2 id="reset-title">{t('reset_score')}</h2>
        <p>{t('confirm_reset_score')}</p>

        <div className="buttons-container">
          <button className="reset-confirm-button" onClick={onConfirm}>
            {t('yes')}
          </button>
          <button className="reset-confirm-button" onClick={onCancel}>
            {t('no')}
          </button>
        </div>
      </div>
    </div>
  );
}
