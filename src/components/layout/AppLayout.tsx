import { useEffect, type PropsWithChildren } from 'react'
import type { SectionId } from '@/data'
import { FloatingBackground } from '@/components/common'
import type { PresentationMode } from '@/hooks/usePresentationMode'
import { Header } from '@/components/layout/Header'
import { MainContainer } from '@/components/layout/MainContainer'
import { ProgressIndicator } from '@/components/layout/ProgressIndicator'
import { useLanguage } from '@/hooks/useLanguage'

type AppLayoutProps = PropsWithChildren<{
  activeIndex: number
  activeSection: SectionId
  layoutMode: PresentationMode
  onNavigate: (sectionId: SectionId) => void
  progress: number
}>

export function AppLayout({
  activeIndex,
  activeSection,
  children,
  layoutMode,
  onNavigate,
  progress,
}: AppLayoutProps) {
  const { t } = useLanguage()

  useEffect(() => {
    document.documentElement.dataset.layoutMode = layoutMode

    return () => {
      delete document.documentElement.dataset.layoutMode
    }
  }, [layoutMode])

  return (
    <div
      className={`relative isolate bg-background text-foreground ${layoutMode === 'horizontal' ? 'h-screen overflow-hidden' : 'min-h-screen overflow-x-hidden overflow-y-visible'}`}
    >
      <a
        className="transition-theme-fast fixed left-4 top-4 z-50 -translate-y-24 rounded-control bg-primary px-4 py-2 text-sm font-semibold text-foreground shadow-glow-primary focus:translate-y-0"
        href="#main-content"
      >
        {t.common.skipToContent}
      </a>
      <FloatingBackground />
      <div className="relative z-10">
        <Header activeSection={activeSection} onNavigate={onNavigate} />
        <MainContainer layoutMode={layoutMode}>{children}</MainContainer>
        {layoutMode === 'horizontal' ? (
          <ProgressIndicator
            activeIndex={activeIndex}
            onNavigate={onNavigate}
            progress={progress}
          />
        ) : null}
      </div>
    </div>
  )
}
