import { useCallback, useMemo, useRef, useState } from 'react'
import type { SectionId } from '@/data'

type UseSectionNavigationOptions = {
  sectionIds: ReadonlyArray<SectionId>
}

export function useSectionNavigation({ sectionIds }: UseSectionNavigationOptions) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const activeIndexRef = useRef(0)
  const isAnimatingRef = useRef(false)

  const lastIndex = sectionIds.length - 1

  const goToIndex = useCallback(
    (nextIndex: number) => {
      if (isAnimatingRef.current) {
        return
      }

      const clampedIndex = Math.min(Math.max(nextIndex, 0), lastIndex)

      if (clampedIndex === activeIndexRef.current) {
        return
      }

      activeIndexRef.current = clampedIndex
      isAnimatingRef.current = true
      setIsAnimating(true)
      setActiveIndex(clampedIndex)
    },
    [lastIndex],
  )

  const goToSection = useCallback(
    (sectionId: SectionId) => {
      const nextIndex = sectionIds.indexOf(sectionId)

      if (nextIndex >= 0) {
        goToIndex(nextIndex)
      }
    },
    [goToIndex, sectionIds],
  )

  const completeTransition = useCallback(() => {
    isAnimatingRef.current = false
    setIsAnimating(false)
  }, [])

  const next = useCallback(() => goToIndex(activeIndexRef.current + 1), [goToIndex])
  const previous = useCallback(() => goToIndex(activeIndexRef.current - 1), [goToIndex])
  const first = useCallback(() => goToIndex(0), [goToIndex])
  const last = useCallback(() => goToIndex(lastIndex), [goToIndex, lastIndex])

  return useMemo(
    () => ({
      activeIndex,
      activeSection: sectionIds[activeIndex] ?? sectionIds[0] ?? 'hero',
      completeTransition,
      first,
      goToIndex,
      goToSection,
      isAnimating,
      last,
      next,
      previous,
      progress: lastIndex > 0 ? (activeIndex / lastIndex) * 100 : 100,
    }),
    [
      activeIndex,
      completeTransition,
      first,
      goToIndex,
      goToSection,
      isAnimating,
      last,
      lastIndex,
      next,
      previous,
      sectionIds,
    ],
  )
}
