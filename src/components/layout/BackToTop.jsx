import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-50 w-11 h-11 rounded-full bg-brand-blue text-white shadow-lg flex items-center justify-center hover:bg-brand-blue/80 hover:scale-110 hover:shadow-xl transition-all duration-200"
    >
      <ArrowUp size={20} />
    </button>
  )
}
