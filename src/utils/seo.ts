import { commonData } from '@/data/common'
import type { LanguageCode, Translation } from '@/data'

const robotsContent = 'index, follow'
const twitterCard = 'summary_large_image'

const createManagedMeta = (attribute: 'name' | 'property', key: string) => {
  const selector = `meta[${attribute}="${key}"]`
  const existingElement = document.head.querySelector<HTMLMetaElement>(selector)

  if (existingElement) {
    return existingElement
  }

  const metaElement = document.createElement('meta')
  metaElement.setAttribute(attribute, key)
  document.head.append(metaElement)

  return metaElement
}

const createManagedLink = (rel: string) => {
  const selector = `link[rel="${rel}"]`
  const existingElement = document.head.querySelector<HTMLLinkElement>(selector)

  if (existingElement) {
    return existingElement
  }

  const linkElement = document.createElement('link')
  linkElement.setAttribute('rel', rel)
  document.head.append(linkElement)

  return linkElement
}

const resolveAbsoluteUrl = (path: string, fallbackBase: string) => {
  const normalizedPath = path.replace(/^\//, '')

  return new URL(normalizedPath, fallbackBase).toString()
}

export function updateDocumentSeo(language: LanguageCode, seo: Translation['seo']) {
  const pageUrl = commonData.site.url
  const ogImageUrl = resolveAbsoluteUrl(commonData.site.ogImage, commonData.site.url)

  document.documentElement.lang = language
  document.title = seo.title

  createManagedMeta('name', 'description').setAttribute('content', seo.description)
  createManagedMeta('name', 'robots').setAttribute('content', robotsContent)
  createManagedMeta('name', 'theme-color').setAttribute('content', commonData.site.themeColor)
  createManagedMeta('property', 'og:type').setAttribute('content', 'website')
  createManagedMeta('property', 'og:site_name').setAttribute('content', commonData.site.name)
  createManagedMeta('property', 'og:locale').setAttribute(
    'content',
    commonData.site.localeByLanguage[language],
  )
  createManagedMeta('property', 'og:title').setAttribute('content', seo.title)
  createManagedMeta('property', 'og:description').setAttribute('content', seo.description)
  createManagedMeta('property', 'og:url').setAttribute('content', pageUrl)
  createManagedMeta('property', 'og:image').setAttribute('content', ogImageUrl)
  createManagedMeta('property', 'og:image:alt').setAttribute('content', commonData.site.ogImageAlt)
  createManagedMeta('name', 'twitter:card').setAttribute('content', twitterCard)
  createManagedMeta('name', 'twitter:title').setAttribute('content', seo.title)
  createManagedMeta('name', 'twitter:description').setAttribute('content', seo.description)
  createManagedMeta('name', 'twitter:image').setAttribute('content', ogImageUrl)
  createManagedMeta('name', 'twitter:image:alt').setAttribute('content', commonData.site.ogImageAlt)
  createManagedLink('canonical').setAttribute('href', pageUrl)
}
