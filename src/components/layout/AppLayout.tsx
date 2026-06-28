import type { PropsWithChildren } from 'react'
import { LanguageSwitcher } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'

export function AppLayout({ children }: PropsWithChildren) {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="app-container flex min-h-section flex-col py-6">
        <header className="flex items-center justify-between">
          <a
            className="rounded-app text-sm font-semibold tracking-wide text-foreground transition hover:text-primary-hover focus-visible:outline-none"
            href={commonData.social.github}
            aria-label={t.common.openProfile}
          >
            {commonData.brand}
          </a>
          <LanguageSwitcher />
        </header>

        {children}
      </section>
    </main>
  )
}
