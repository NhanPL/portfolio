import { useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { languageOptions } from '@/data/common'
import { translations, type LanguageCode } from '@/data'
import { LanguageContext } from '@/i18n/languageContext'
import { updateDocumentSeo } from '@/utils/seo'

const storageKey = 'portfolio-language'

const isLanguageCode = (value: string | null): value is LanguageCode =>
  value === 'vi' || value === 'en' || value === 'ja'

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window === 'undefined') {
      return 'vi'
    }

    const savedLanguage = window.localStorage.getItem(storageKey)

    return isLanguageCode(savedLanguage) ? savedLanguage : 'vi'
  })

  const setLanguage = (nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem(storageKey, nextLanguage)
  }

  const t = translations[language]

  useEffect(() => {
    updateDocumentSeo(language, t.seo)
  }, [language, t.seo])

  const value = useMemo(
    () => ({
      language,
      languages: languageOptions,
      setLanguage,
      t,
    }),
    [language, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
