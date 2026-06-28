import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { SectionId } from '@/data'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { SectionWrapper } from '@/components/layout/SectionWrapper'

export type HorizontalSection = {
  id: SectionId
  labelledBy: string
  node: ReactNode
}

type HorizontalScrollerProps = {
  activeIndex: number
  completeTransition: () => void
  enabled: boolean
  first: () => void
  isAnimating: boolean
  last: () => void
  next: () => void
  previous: () => void
  sections: ReadonlyArray<HorizontalSection>
}

export function HorizontalScroller({
  activeIndex,
  completeTransition,
  enabled,
  first,
  isAnimating,
  last,
  next,
  previous,
  sections,
}: HorizontalScrollerProps) {
  const prefersReducedMotion = useReducedMotion()

  useHorizontalScroll({
    enabled,
    first,
    isAnimating,
    last,
    next,
    previous,
  })

  return (
    <div className="h-screen w-screen overflow-hidden">
      <motion.div
        animate={{ x: `-${activeIndex * 100}vw` }}
        className="flex h-screen will-change-transform"
        onAnimationComplete={completeTransition}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: 0.62,
                ease: 'easeInOut',
              }
        }
      >
        {sections.map((section, index) => (
          <SectionWrapper
            id={section.id}
            isActive={index === activeIndex}
            key={section.id}
            labelledBy={section.labelledBy}
          >
            {section.node}
          </SectionWrapper>
        ))}
      </motion.div>
    </div>
  )
}
