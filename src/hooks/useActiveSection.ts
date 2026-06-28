import { useEffect, useState } from 'react'
import type { SectionId } from '@/data'

export function useActiveSection(sectionIds: ReadonlyArray<SectionId>) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0] ?? 'hero')

  useEffect(() => {
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
  }, [sectionIds])

  return activeSection
}
