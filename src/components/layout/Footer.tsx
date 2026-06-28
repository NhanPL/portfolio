import { ArrowUp, BriefcaseBusiness, Code2, Mail, Users } from 'lucide-react'
import { commonData } from '@/data/common'
import type { SocialLink } from '@/data/types'
import { useLanguage } from '@/hooks/useLanguage'

const socialIconMap = {
  github: Code2,
  linkedin: BriefcaseBusiness,
  facebook: Users,
  email: Mail,
} satisfies Record<SocialLink['platform'], typeof Mail>

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background-soft/40">
      <div className="app-container grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold text-foreground">{commonData.brand}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-foreground-muted">
            {t.layout.footerTagline}
          </p>
        </div>

        <nav aria-label={t.layout.quickLinksTitle}>
          <p className="text-sm font-semibold text-foreground">{t.layout.quickLinksTitle}</p>
          <div className="mt-3 grid gap-2">
            {commonData.sections.map((section) => (
              <a
                className="transition-theme-fast rounded-control text-sm text-foreground-muted hover:text-foreground focus-visible:outline-none"
                href={section.href}
                key={section.id}
              >
                {t.navigation.items[section.id]}
              </a>
            ))}
          </div>
        </nav>

        <div>
          <p className="text-sm font-semibold text-foreground">{t.layout.socialTitle}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {commonData.socialLinks.map((item) => {
              const Icon = socialIconMap[item.platform]
              const isExternalLink = item.href.startsWith('http')

              return (
                <a
                  aria-label={item.label}
                  className="transition-theme-fast rounded-control border border-border p-2 text-foreground-muted hover:border-primary-hover hover:text-foreground focus-visible:outline-none"
                  href={item.href}
                  key={item.platform}
                  rel={isExternalLink ? 'noreferrer' : undefined}
                  target={isExternalLink ? '_blank' : undefined}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="app-container flex flex-col gap-4 border-t border-border py-5 text-sm text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {currentYear} {commonData.brand}. {t.layout.copyright}
        </p>
        <a
          className="transition-theme-fast inline-flex items-center gap-2 rounded-control text-foreground-muted hover:text-foreground focus-visible:outline-none"
          href="#hero"
        >
          {t.layout.backToTop}
          <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
