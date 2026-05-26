import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BackToTop from '@/components/layout/BackToTop'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import ServiceDetail from '@/pages/ServiceDetail'
import Contact from '@/pages/Contact'
import Team from '@/pages/Team'
import NotFound from '@/pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="animate-page-fade">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
