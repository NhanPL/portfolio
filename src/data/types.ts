export type LanguageCode = 'vi' | 'en' | 'ja'

export type Translation = {
  common: {
    language: string
    openProfile: string
  }
  hero: {
    greeting: string
    name: string
    role: string
    description: string
    downloadCv: string
    contact: string
    avatarAlt: string
  }
  seo: {
    title: string
    description: string
  }
}
