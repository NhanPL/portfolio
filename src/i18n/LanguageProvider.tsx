import { useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { languageOptions } from '@/data/common'
import { translations, type LanguageCode, type Translation } from '@/data'
import { LanguageContext } from '@/i18n/languageContext'

type LanguageContextValue = {
  language: LanguageCode
  languages: typeof languageOptions
  setLanguage: (language: LanguageCode) => void
  t: Translation
}

export type { LanguageContextValue }

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
    document.documentElement.lang = language
    document.title = t.seo.title

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    description?.setAttribute('content', t.seo.description)
  }, [language, t.seo.description, t.seo.title])

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
