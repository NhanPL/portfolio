import { startTransition, useEffect, useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import {
  AppLayout,
  Footer,
  HorizontalScroller,
  type HorizontalSection,
  VerticalSections,
  type VerticalSection,
} from '@/components/layout'
import {
  AboutSection,
  CertificatesSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from '@/components/sections'
import type { SectionId } from '@/data'
import { commonData } from '@/data/common'
import { useActiveSection, usePresentationMode, useSectionNavigation } from '@/hooks'

function App() {
  const sectionIds = useMemo(() => commonData.sections.map((section) => section.id), [])
  const layoutMode = usePresentationMode()
  const prefersReducedMotion = useReducedMotion()
  const navigation = useSectionNavigation({ sectionIds })
  const activeVerticalSection = useActiveSection(sectionIds, {
    enabled: layoutMode === 'vertical',
  })

  const sections: ReadonlyArray<HorizontalSection> = useMemo(
    () => [
      { id: 'hero', labelledBy: 'hero-title', node: <HeroSection /> },
      { id: 'about', labelledBy: 'about-title', node: <AboutSection /> },
      { id: 'skills', labelledBy: 'skills-title', node: <SkillsSection /> },
      { id: 'experience', labelledBy: 'experience-title', node: <ExperienceSection /> },
      { id: 'projects', labelledBy: 'projects-title', node: <ProjectsSection /> },
      { id: 'certificates', labelledBy: 'certificates-title', node: <CertificatesSection /> },
      { id: 'contact', labelledBy: 'contact-title', node: <ContactSection /> },
    ],
    [],
  )

  const verticalSections: ReadonlyArray<VerticalSection> = sections

  const activeSection =
    layoutMode === 'horizontal' ? navigation.activeSection : activeVerticalSection
  const activeIndex = Math.max(0, sectionIds.indexOf(activeSection))
  const progress =
    sectionIds.length > 1 ? (activeIndex / Math.max(sectionIds.length - 1, 1)) * 100 : 100

  const handleNavigate = (sectionId: SectionId) => {
    if (layoutMode === 'horizontal') {
      navigation.goToSection(sectionId)
      return
    }

    const targetSection = document.getElementById(sectionId)
    if (!targetSection) {
      return
    }

    startTransition(() => {
      targetSection.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    })
  }

  useEffect(() => {
    if (layoutMode !== 'vertical') {
      return
    }

    navigation.completeTransition()
  }, [layoutMode, navigation])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout
            activeIndex={activeIndex}
            activeSection={activeSection}
            layoutMode={layoutMode}
            onNavigate={handleNavigate}
            progress={progress}
          >
            {layoutMode === 'horizontal' ? (
              <HorizontalScroller
                activeIndex={navigation.activeIndex}
                completeTransition={navigation.completeTransition}
                enabled={layoutMode === 'horizontal'}
                first={navigation.first}
                isAnimating={navigation.isAnimating}
                last={navigation.last}
                next={navigation.next}
                previous={navigation.previous}
                sections={sections}
              />
            ) : (
              <>
                <VerticalSections sections={verticalSections} />
                <Footer />
              </>
            )}
          </AppLayout>
        }
      />
    </Routes>
  )
}

export default App
