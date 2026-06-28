import { ArrowUp } from 'lucide-react'
import { SocialIcons } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'

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
          <div className="mt-3">
            <SocialIcons links={commonData.socialLinks} />
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
