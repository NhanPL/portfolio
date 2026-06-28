import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/layout'
import { HeroSection } from '@/components/sections'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <HeroSection />
          </AppLayout>
        }
      />
    </Routes>
  )
}

export default App
