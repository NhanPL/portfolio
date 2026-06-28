import type { PropsWithChildren } from 'react'
import { LanguageSwitcher } from '@/components/common'
import { commonData } from '@/data/common'
import { useLanguage } from '@/hooks/useLanguage'

export function AppLayout({ children }: PropsWithChildren) {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between">
          <a
            className="text-sm font-semibold tracking-wide text-white outline-none transition focus-visible:ring-2 focus-visible:ring-fuchsia-400"
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
