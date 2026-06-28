import type { PropsWithChildren } from 'react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { MainContainer } from '@/components/layout/MainContainer'
import { useLanguage } from '@/hooks/useLanguage'

export function AppLayout({ children }: PropsWithChildren) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <a
        className="transition-theme-fast fixed left-4 top-4 z-50 -translate-y-24 rounded-control bg-primary px-4 py-2 text-sm font-semibold text-foreground shadow-glow-primary focus:translate-y-0"
        href="#main-content"
      >
        {t.common.skipToContent}
      </a>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </div>
  )
}
