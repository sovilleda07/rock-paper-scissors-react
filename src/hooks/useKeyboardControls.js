import { useEffect } from "react";

export function useKeyboardControls({
  onPlay,
  onToggleAutoPlay,
  onReset
}) {
  useEffect(() => {
    function handleKeyDown(event) {
      switch (event.key.toLowerCase()) {
        case 'r':
          onPlay('rock');
          break;
        case 'p':
          onPlay('paper');
          break;
        case 's':
          onPlay('scissors');
          break;
        case 'a':
          onToggleAutoPlay();
          break;
        case 'backspace':
          onReset();
          break;
        default:
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onPlay, onToggleAutoPlay, onReset])
}