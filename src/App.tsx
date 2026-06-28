import { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout, HorizontalScroller, type HorizontalSection } from '@/components/layout'
import {
  AboutSection,
  CertificatesSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from '@/components/sections'
import { commonData } from '@/data/common'
import { useSectionNavigation } from '@/hooks/useSectionNavigation'

function App() {
  const sectionIds = useMemo(() => commonData.sections.map((section) => section.id), [])
  const navigation = useSectionNavigation({ sectionIds })

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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout
            activeIndex={navigation.activeIndex}
            activeSection={navigation.activeSection}
            onNavigate={navigation.goToSection}
            progress={navigation.progress}
          >
            <HorizontalScroller
              activeIndex={navigation.activeIndex}
              completeTransition={navigation.completeTransition}
              first={navigation.first}
              isAnimating={navigation.isAnimating}
              last={navigation.last}
              next={navigation.next}
              previous={navigation.previous}
              sections={sections}
            />
          </AppLayout>
        }
      />
    </Routes>
  )
}

export default App
