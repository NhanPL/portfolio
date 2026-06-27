import avatar from '@/assets/hero.png'
import type { LanguageCode } from '@/data/types'

export const languageOptions: ReadonlyArray<{ code: LanguageCode; label: string }> = [
  { code: 'vi', label: 'VI' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: 'JA' },
]

export const commonData = {
  brand: 'My Profile',
  avatar,
  contact: {
    email: 'hello@example.com',
    phone: '+84 000 000 000',
  },
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
  },
  cv: {
    vi: '/cv/cv-vi.pdf',
    en: '/cv/cv-en.pdf',
    ja: '/cv/cv-ja.pdf',
  } satisfies Record<LanguageCode, string>,
} as const
