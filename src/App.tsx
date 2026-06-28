import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/layout'
import {
  AboutSection,
  CertificatesSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from '@/components/sections'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <CertificatesSection />
            <ContactSection />
          </AppLayout>
        }
      />
    </Routes>
  )
}

export default App
