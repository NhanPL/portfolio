import type { PropsWithChildren } from 'react'
import type { PresentationMode } from '@/hooks/usePresentationMode'

type MainContainerProps = PropsWithChildren<{
  layoutMode: PresentationMode
}>

export function MainContainer({ children, layoutMode }: MainContainerProps) {
  return (
    <main
      className={`${layoutMode === 'horizontal' ? 'h-screen overflow-hidden' : 'min-h-screen overflow-x-hidden pt-[var(--app-header-height)]'} outline-none`}
      id="main-content"
      tabIndex={-1}
    >
      {children}
    </main>
  )
}
