import { useEffect, useRef } from "react";

export function ResetConfirmModal({ onConfirm, onCancel }) {
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
        <h2 id="reset-title">Reset score</h2>
        <p>Are you sure you want to reset the score?</p>

        <div className="buttons-container">
          <button className="reset-confirm-button" onClick={onConfirm}>
            Yes
          </button>
          <button className="reset-confirm-button" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
