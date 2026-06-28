import { useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from '@/components/common'
import { commonData } from '@/data/common'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'

export function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sectionIds = useMemo(() => commonData.sections.map((section) => section.id), [])
  const activeSection = useActiveSection(sectionIds)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="app-container flex min-h-[var(--app-header-height)] items-center justify-between py-3">
        <a
          className="transition-theme-fast rounded-control text-lg font-bold tracking-wide text-foreground hover:text-primary-hover focus-visible:outline-none"
          href="#hero"
          aria-label={t.common.openProfile}
          onClick={closeMenu}
        >
          {commonData.brand}
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label={t.navigation.ariaLabel}>
          {commonData.sections.map((section) => (
            <a
              className={cn(
                'transition-theme-fast rounded-control text-sm font-medium hover:text-foreground focus-visible:outline-none',
                activeSection === section.id ? 'text-primary-hover' : 'text-foreground-muted',
              )}
              href={section.href}
              key={section.id}
            >
              {t.navigation.items[section.id]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
        </div>

        <button
          aria-expanded={isMenuOpen}
          aria-label={t.navigation.menuToggle}
          className="transition-theme-fast rounded-control border border-border p-2 text-foreground-muted hover:border-primary-hover hover:text-foreground focus-visible:outline-none lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="app-container border-t border-border py-4 lg:hidden">
          <nav className="grid gap-2" aria-label={t.navigation.ariaLabel}>
            {commonData.sections.map((section) => (
              <a
                className={cn(
                  'transition-theme-fast rounded-control px-3 py-2 text-sm font-medium focus-visible:outline-none',
                  activeSection === section.id
                    ? 'bg-primary-soft text-primary-hover'
                    : 'text-foreground-muted hover:bg-background-soft hover:text-foreground',
                )}
                href={section.href}
                key={section.id}
                onClick={closeMenu}
              >
                {t.navigation.items[section.id]}
              </a>
            ))}
          </nav>
          <div className="mt-4 border-t border-border pt-4">
            <LanguageSwitcher />
          </div>
        </div>
      ) : null}
    </header>
  )
}
