import { LanguageSwitcher } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="app-container flex min-h-[var(--app-header-height)] items-center justify-between py-4">
      <a
        className="transition-theme-fast rounded-control text-sm font-semibold tracking-wide text-foreground hover:text-primary-hover focus-visible:outline-none"
        href="#hero"
        aria-label={t.common.openProfile}
      >
        {commonData.brand}
      </a>

      <nav className="hidden items-center gap-5 lg:flex" aria-label={t.navigation.ariaLabel}>
        {commonData.sections.map((section) => (
          <a
            className="transition-theme-fast rounded-control text-sm font-medium text-foreground-muted hover:text-foreground focus-visible:outline-none"
            href={section.href}
            key={section.id}
          >
            {t.navigation.items[section.id]}
          </a>
        ))}
      </nav>

      <LanguageSwitcher />
    </header>
  )
}
