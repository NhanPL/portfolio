import { useEffect, useState } from 'react'
import type { SectionId } from '@/data'

type UseActiveSectionOptions = {
  enabled?: boolean
}

const readHeaderOffset = () => {
  const rootStyle = window.getComputedStyle(document.documentElement)
  const headerHeight = rootStyle.getPropertyValue('--app-header-height').trim()
  const rootFontSize = Number.parseFloat(rootStyle.fontSize) || 16
  const numericValue = Number.parseFloat(headerHeight)

  if (Number.isNaN(numericValue)) {
    return 0
  }

  return headerHeight.endsWith('rem') ? numericValue * rootFontSize : numericValue
}

export function useActiveSection(
  sectionIds: ReadonlyArray<SectionId>,
  { enabled = true }: UseActiveSectionOptions = {},
) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0] ?? 'hero')

  useEffect(() => {
    if (!enabled) {
      return
    }

    let frameId = 0

    const syncActiveSection = () => {
      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id)

          return element ? { element, id } : null
        })
        .filter((section): section is { element: HTMLElement; id: SectionId } => section !== null)

      if (!sections.length) {
        return
      }

      const scrollTop = window.scrollY
      const viewportHeight = window.innerHeight
      const headerOffset = readHeaderOffset()
      const viewportAnchor = scrollTop + headerOffset + Math.max(viewportHeight * 0.18, 24)
      const documentHeight = document.documentElement.scrollHeight

      if (scrollTop + viewportHeight >= documentHeight - 4) {
        const lastSection = sections.at(-1)

        if (lastSection) {
          setActiveSection((current) => (current === lastSection.id ? current : lastSection.id))
        }

        return
      }

      let nextActiveSection = sections[0].id

      for (const section of sections) {
        if (section.element.offsetTop <= viewportAnchor) {
          nextActiveSection = section.id
          continue
        }

        break
      }

      setActiveSection((current) => (current === nextActiveSection ? current : nextActiveSection))
    }

    const requestSync = () => {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(syncActiveSection)
    }

    syncActiveSection()
    window.addEventListener('scroll', requestSync, { passive: true })
    window.addEventListener('resize', requestSync)
    window.addEventListener('orientationchange', requestSync)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestSync)
      window.removeEventListener('resize', requestSync)
      window.removeEventListener('orientationchange', requestSync)
    }
  }, [enabled, sectionIds])

  return activeSection
}
