import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  // const currentLang = i18n.language;
  const currentLang = i18n.language.split('-')[0];

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <div className="language-switcher">
      <button
        className={currentLang === 'es' ? 'active' : ''}
        onClick={() => changeLang('es')}
      >
        ES
      </button>
      <button
        className={currentLang === 'en' ? 'active' : ''}
        onClick={() => changeLang('en')}
      >
        EN
      </button>
    </div>
  )
}