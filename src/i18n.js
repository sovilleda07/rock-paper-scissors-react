import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const savedLanguage = localStorage.getItem('lang') || 'es';

const resources = {
  en: {
    translation: {
      "name": "Rock Paper Scissors",
      "move_player": "You",
      "move_computer": "Computer",
      "vs": "VS",
      "you_win": "You win",
      "you_lose": "You lose",
      "tie": "Tie",
      "score_summary": "Wins: {{wins}}, Losses: {{losses}}, Ties: {{ties}}",
      "reset_score": "Reset Score",
      "auto_play": "Auto Play",
      "stop_auto_play": "Stop Auto Play",
      "confirm_reset_score": "Are you sure you want to reset the score?",
      "yes": "Yes",
      "no": "No",
      "instructions": "Instructions",
      "press": "Press",
      "to_play": "to play",
      "rock": "rock",
      "paper": "paper",
      "scissors": "scissors",
      "for_auto": "for Auto play",
      "to_reset": "to Reset score",
      "backspace": "Backspace"
    }
  },
  es: {
    translation: {
      "name": "Piedra Papel Tijera",
      "move_player": "Tú",
      "move_computer": "Computadora",
      "vs": "VS",
      "you_win": "Ganaste",
      "you_lose": "Perdiste",
      "tie": "Empate",
      "score_summary": "Victorias: {{wins}}, Derrotas: {{losses}}, Empates: {{ties}}",
      "reset_score": "Reiniciar",
      "auto_play": "Auto Juego",
      "stop_auto_play": "Detener Auto",
      "confirm_reset_score": "¿Estás seguro de reiniciar la puntuación?",
      "yes": "Si",
      "no": "No",
      "press": "Presiona",
      "instructions": "Instrucciones",
      "to_play": 'para jugar',
      "rock": "piedra",
      "paper": "papel",
      "scissors": "tijera",
      "for_auto": "para Auto Juego",
      "to_reset": "para Reiniciar",
      "backspace": "Retroceso"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;