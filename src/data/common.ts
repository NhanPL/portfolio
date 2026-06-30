import avatar from '@/assets/hero.png'
import type { CommonData, LanguageOption } from '@/data/types'

export const languageOptions = [
  { code: 'vi', label: 'VI', name: 'Vietnamese' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ja', label: 'JA', name: 'Japanese' },
] as const satisfies ReadonlyArray<LanguageOption>

export const commonData = {
  brand: 'My Profile',
  avatar,
  site: {
    name: 'My Profile',
    url: 'https://nhanpl.github.io/portfolio/',
    themeColor: '#020617',
    ogImage: 'og-image.png',
    ogImageAlt: 'My Profile portfolio preview',
    localeByLanguage: {
      vi: 'vi_VN',
      en: 'en_US',
      ja: 'ja_JP',
    },
  },
  sections: [
    { id: 'hero', href: '#hero' },
    { id: 'about', href: '#about' },
    { id: 'skills', href: '#skills' },
    { id: 'experience', href: '#experience' },
    { id: 'projects', href: '#projects' },
    { id: 'certificates', href: '#certificates' },
    { id: 'contact', href: '#contact' },
  ],
  contact: {
    email: 'hello@example.com',
    phone: '+84 000 000 000',
    location: 'Ho Chi Minh City, Vietnam',
  },
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    email: 'mailto:hello@example.com',
  },
  socialLinks: [
    { label: 'GitHub', platform: 'github', href: 'https://github.com/' },
    { label: 'LinkedIn', platform: 'linkedin', href: 'https://www.linkedin.com/' },
    { label: 'Facebook', platform: 'facebook', href: 'https://www.facebook.com/' },
    { label: 'Email', platform: 'email', href: 'mailto:hello@example.com' },
  ],
  cv: {
    vi: '/cv/cv-vi.pdf',
    en: '/cv/cv-en.pdf',
    ja: '/cv/cv-ja.pdf',
  },
  projectAssets: {
    portfolio: {
      image: avatar,
      github: 'https://github.com/',
      demo: 'https://example.com/',
    },
    dashboard: {
      image: avatar,
      github: 'https://github.com/',
      demo: 'https://example.com/',
    },
    commerce: {
      image: avatar,
      github: 'https://github.com/',
      demo: 'https://example.com/',
    },
  },
  certificateAssets: {
    'aws-foundations': {
      image: avatar,
      verifyUrl: 'https://example.com/',
    },
    'react-advanced': {
      image: avatar,
      verifyUrl: 'https://example.com/',
    },
    'scrum-master': {
      image: avatar,
      verifyUrl: 'https://example.com/',
    },
  },
} as const satisfies CommonData
