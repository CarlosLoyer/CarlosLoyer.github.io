import React, { createContext, useContext, useState } from 'react'
import type { Language, Translations } from '../i18n/translations'
import { translations } from '../i18n/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  tr: Translations
}

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es')
  const tr = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
