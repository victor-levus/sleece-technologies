import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useSEO } from '@/hooks/useSEO'
import HeroBackground from '@/components/layout/HeroBackground'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  useSEO({ title: 'Page Not Found' })

  return (
    <HeroBackground className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="text-center max-w-xl mx-auto px-6 animate-fade-up">
        <div className="text-9xl font-extrabold text-brand-green mb-2 leading-none">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild size="lg"
            className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 transition-transform duration-200 hover:scale-105"
          >
            <Link to="/"><Home size={18} /> Go Home</Link>
          </Button>
          <Button
            asChild size="lg" variant="outline"
            className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white font-semibold px-8 transition-transform duration-200 hover:scale-105"
          >
            <Link to="/services"><ArrowLeft size={18} /> Our Services</Link>
          </Button>
        </div>
      </div>
    </HeroBackground>
  )
}
