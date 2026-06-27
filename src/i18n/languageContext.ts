import { createContext } from 'react'
import type { LanguageContextValue } from '@/i18n/LanguageProvider'

export const LanguageContext = createContext<LanguageContextValue | null>(null)
