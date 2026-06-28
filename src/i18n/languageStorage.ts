import type { LanguageCode } from '@/data'

export const defaultLanguage: LanguageCode = 'vi'
export const languageStorageKey = 'portfolio-language'

export const isLanguageCode = (value: string | null): value is LanguageCode =>
  value === 'vi' || value === 'en' || value === 'ja'

export function readStoredLanguage(): LanguageCode {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey)

    return isLanguageCode(storedLanguage) ? storedLanguage : defaultLanguage
  } catch {
    return defaultLanguage
  }
}

export function saveStoredLanguage(language: LanguageCode) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(languageStorageKey, language)
  } catch {
    // localStorage can be unavailable in restricted browser contexts.
  }
}
