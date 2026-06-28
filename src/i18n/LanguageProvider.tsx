import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { commonData, languageOptions } from '@/data/common'
import { translations, type LanguageCode } from '@/data'
import { LanguageContext } from '@/i18n/languageContext'
import {
  defaultLanguage,
  isLanguageCode,
  languageStorageKey,
  readStoredLanguage,
  saveStoredLanguage,
} from '@/i18n/languageStorage'
import { updateDocumentSeo } from '@/utils/seo'

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<LanguageCode>(readStoredLanguage)

  const setLanguage = useCallback((nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage)
    saveStoredLanguage(nextLanguage)
  }, [])

  const t = translations[language]
  const cvUrl = commonData.cv[language]

  useEffect(() => {
    updateDocumentSeo(language, t.seo)
  }, [language, t.seo])

  useEffect(() => {
    const handleLanguageStorage = (event: StorageEvent) => {
      if (event.key !== languageStorageKey) {
        return
      }

      setLanguageState(isLanguageCode(event.newValue) ? event.newValue : defaultLanguage)
    }

    window.addEventListener('storage', handleLanguageStorage)

    return () => window.removeEventListener('storage', handleLanguageStorage)
  }, [])

  const value = useMemo(
    () => ({
      language,
      languages: languageOptions,
      cvUrl,
      setLanguage,
      t,
    }),
    [cvUrl, language, setLanguage, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
