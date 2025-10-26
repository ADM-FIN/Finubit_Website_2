import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { ModernMouseEffects } from './components/ModernMouseEffects'
import { Footer } from './components/Footer'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { ScrollIndicator } from './components/ScrollIndicator'
import { useScrollEffects } from './hooks/useScrollEffects'

// Pages
import { Home } from './pages/Home'
import { BankManager } from './pages/BankManager'
import { BankBuilder } from './pages/BankBuilder'
import { CommunicationLayer } from './pages/CommunicationLayer'
import { BusinessProcess } from './pages/BusinessProcess'
import { Core } from './pages/Core'
import { TeamPage } from './pages/TeamPage'
import { CareersPage } from './pages/CareersPage'

import './App.css'

function AppContent() {
  const location = useLocation()
  useScrollEffects()

  // Only show scroll components on pages with substantial content
  const showScrollComponents = ['/', '/team', '/careers', '/bank-builder', '/bank-manager', '/communication-layer', '/business-process', '/core'].includes(location.pathname)

  return (
    <div className="App">
      <ModernMouseEffects />
      {showScrollComponents && (
        <>
          <ScrollProgressBar />
          <ScrollIndicator />
        </>
      )}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bank-manager" element={<BankManager />} />
        <Route path="/bank-builder" element={<BankBuilder />} />
        <Route path="/communication-layer" element={<CommunicationLayer />} />
        <Route path="/business-process" element={<BusinessProcess />} />
        <Route path="/core" element={<Core />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
