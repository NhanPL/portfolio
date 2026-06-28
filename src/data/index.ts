import { en } from '@/data/en'
import { ja } from '@/data/ja'
import type { LanguageCode, SectionId, Translation } from '@/data/types'
import { vi } from '@/data/vi'

export const translations: Record<LanguageCode, Translation> = {
  vi,
  en,
  ja,
}

export type { LanguageCode, SectionId, Translation }
