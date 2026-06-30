import { useEffect, useState } from 'react'

export type PresentationMode = 'horizontal' | 'vertical'

type UsePresentationModeOptions = {
  mobileBreakpoint?: number
}

export function usePresentationMode({
  mobileBreakpoint = 768,
}: UsePresentationModeOptions = {}): PresentationMode {
  const getMode = () =>
    typeof window !== 'undefined' && window.innerWidth < mobileBreakpoint
      ? 'vertical'
      : 'horizontal'

  const [mode, setMode] = useState<PresentationMode>(getMode)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`)
    const syncMode = () => setMode(mediaQuery.matches ? 'vertical' : 'horizontal')

    syncMode()
    mediaQuery.addEventListener('change', syncMode)

    return () => mediaQuery.removeEventListener('change', syncMode)
  }, [mobileBreakpoint])

  return mode
}
