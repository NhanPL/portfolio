import type { LanguageCode, Translation } from '@/data'

export function updateDocumentSeo(language: LanguageCode, seo: Translation['seo']) {
  document.documentElement.lang = language
  document.title = seo.title

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  description?.setAttribute('content', seo.description)
}
