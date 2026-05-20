import React from 'react'
import { LanguageProvider, useLanguage} from '../context/LanguageContext'
import translations from '../translation'

const LANGUAGES = Object.keys(translations);
console.log(LANGUAGES)

export default function LanguageSwitch() {
    const { lang, setLang, t } = useLanguage();
  return (
    <div className="switcher">
      <span className="switcher-label"> Language:</span>

      {LANGUAGES.map((key) => {
        const { flag, langName } = translations[key];
        const isActive = key === lang;

        return (
          <button
            key={key}
            className={`lang-btn ${isActive ? "active" : ""}`}
            onClick={() => setLang(key)}
            aria-pressed={isActive}
          >
            <span>{flag}</span>
            <span className="lang-label">{langName}</span>
          </button>
        );
      })}
    </div>
  )
}
