import { useEffect, useState } from 'react'
import type { SectionId } from '@/data'

type UseActiveSectionOptions = {
  enabled?: boolean
}

export function useActiveSection(
  sectionIds: ReadonlyArray<SectionId>,
  { enabled = true }: UseActiveSectionOptions = {},
) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0] ?? 'hero')

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id as SectionId)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [enabled, sectionIds])

  return activeSection
}
