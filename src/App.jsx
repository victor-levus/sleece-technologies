import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<div className="p-8">Team — coming soon</div>} />
          <Route path="/contact" element={<div className="p-8">Contact — coming soon</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
