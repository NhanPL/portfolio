import { useLayoutEffect, type PropsWithChildren } from 'react'
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

  useLayoutEffect(() => {
    const html = document.documentElement
    const body = document.body
    const appRoot = document.getElementById('root')
    const isVertical = layoutMode === 'vertical'

    html.dataset.layoutMode = layoutMode
    html.style.height = isVertical ? 'auto' : ''
    html.style.overflowX = isVertical ? 'hidden' : ''
    html.style.overflowY = isVertical ? 'auto' : ''
    html.style.overscrollBehaviorY = isVertical ? 'auto' : ''

    body.style.height = isVertical ? 'auto' : ''
    body.style.minHeight = isVertical ? '100%' : ''
    body.style.overflowX = isVertical ? 'hidden' : ''
    body.style.overflowY = isVertical ? 'auto' : ''
    body.style.overscrollBehaviorY = isVertical ? 'auto' : ''
    body.style.touchAction = isVertical ? 'pan-y' : ''
    if (isVertical) {
      body.style.setProperty('-webkit-overflow-scrolling', 'touch')
    } else {
      body.style.removeProperty('-webkit-overflow-scrolling')
    }

    if (appRoot) {
      appRoot.style.height = isVertical ? 'auto' : ''
      appRoot.style.minHeight = isVertical ? '100%' : ''
      appRoot.style.overflowX = isVertical ? 'hidden' : ''
      appRoot.style.overflowY = isVertical ? 'visible' : ''
    }

    return () => {
      delete html.dataset.layoutMode
      html.style.height = ''
      html.style.overflowX = ''
      html.style.overflowY = ''
      html.style.overscrollBehaviorY = ''

      body.style.height = ''
      body.style.minHeight = ''
      body.style.overflowX = ''
      body.style.overflowY = ''
      body.style.overscrollBehaviorY = ''
      body.style.touchAction = ''
      body.style.removeProperty('-webkit-overflow-scrolling')

      if (appRoot) {
        appRoot.style.height = ''
        appRoot.style.minHeight = ''
        appRoot.style.overflowX = ''
        appRoot.style.overflowY = ''
      }
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
