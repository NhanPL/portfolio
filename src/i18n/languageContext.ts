import { createContext } from 'react'
import { languageOptions } from '@/data/common'
import type { LanguageCode, Translation } from '@/data'

export type LanguageContextValue = {
  language: LanguageCode
  languages: typeof languageOptions
  setLanguage: (language: LanguageCode) => void
  t: Translation
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
