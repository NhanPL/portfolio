import type { PropsWithChildren } from 'react'
import type { SectionId } from '@/data'
import { FloatingBackground } from '@/components/common'
import { Header } from '@/components/layout/Header'
import { MainContainer } from '@/components/layout/MainContainer'
import { ProgressIndicator } from '@/components/layout/ProgressIndicator'
import { useLanguage } from '@/hooks/useLanguage'

type AppLayoutProps = PropsWithChildren<{
  activeIndex: number
  activeSection: SectionId
  onNavigate: (sectionId: SectionId) => void
  progress: number
}>

export function AppLayout({
  activeIndex,
  activeSection,
  children,
  onNavigate,
  progress,
}: AppLayoutProps) {
  const { t } = useLanguage()

  return (
    <div className="relative isolate h-screen overflow-hidden bg-background text-foreground">
      <a
        className="transition-theme-fast fixed left-4 top-4 z-50 -translate-y-24 rounded-control bg-primary px-4 py-2 text-sm font-semibold text-foreground shadow-glow-primary focus:translate-y-0"
        href="#main-content"
      >
        {t.common.skipToContent}
      </a>
      <FloatingBackground />
      <div className="relative z-10">
        <Header activeSection={activeSection} onNavigate={onNavigate} />
        <MainContainer>{children}</MainContainer>
        <ProgressIndicator activeIndex={activeIndex} onNavigate={onNavigate} progress={progress} />
      </div>
    </div>
  )
}
