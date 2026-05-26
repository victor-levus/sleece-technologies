import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useInView } from '@/hooks/useInView'
import { services, categories } from '@/data/services'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const categoryColors = {
  Technology:    'bg-blue-50 text-blue-700 border-blue-200',
  Infrastructure:'bg-purple-50 text-purple-700 border-purple-200',
  Power:         'bg-yellow-50 text-yellow-700 border-yellow-200',
  Security:      'bg-red-50 text-red-700 border-red-200',
  Consulting:    'bg-green-50 text-green-700 border-green-200',
}

function ServiceCard({ service, index, inView }) {
  const delay = `delay-${Math.min((index % 3) * 100 + 100, 600)}`
  const Icon = service.icon

  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}
    >
      {/* Card header */}
      <div className="p-7 pb-5">
        <div className="flex items-start justify-between mb-5">
          <div className="w-14 h-14 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
            <Icon size={28} />
          </div>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[service.category]}`}>
            {service.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-brand-blue mb-3 leading-snug">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Divider */}
      <div className="mx-7 border-t border-gray-100" />

      {/* Sub-services list */}
      <div className="p-7 pt-5 flex-1">
        <ul className="space-y-2.5">
          {service.items.map(item => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="text-brand-green mt-0.5 shrink-0" />
              <span className="text-gray-600 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [heroRef, heroInView] = useInView()
  const [filterRef, filterInView] = useInView()
  const [gridRef, gridInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  const filtered = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory)

  return (
    <div className="min-h-screen">

      {/* ── Page Hero ── */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#000066' }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#000066] to-transparent" />

        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
            What We Offer
          </span>
          <h1 className={`text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6 leading-tight ${heroInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            Our Services
          </h1>
          <p className={`text-white/70 text-lg max-w-2xl mx-auto leading-relaxed ${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            From software development to power installations and advanced security systems —
            we provide end-to-end technology and engineering solutions tailored to your needs.
          </p>

          {/* Stats */}
          <div className={`mt-12 flex flex-wrap justify-center gap-8 ${heroInView ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
            {[
              { value: '9', label: 'Service Areas' },
              { value: '50+', label: 'Sub-Services' },
              { value: '10+', label: 'Sectors Served' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold text-brand-green">{value}</div>
                <div className="text-white/60 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-40">
        <div ref={filterRef} className="max-w-7xl mx-auto px-6 py-4">
          <div className={`flex flex-wrap gap-2 justify-center ${filterInView ? 'animate-fade-in' : 'opacity-0'}`}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-white border-brand-blue'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-white/70' : 'text-gray-400'}`}>
                    ({services.filter(s => s.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">

          {/* Active category heading */}
          <div ref={gridRef} className="mb-10 text-center">
            <h2 className={`text-2xl font-bold text-brand-blue ${gridInView ? 'animate-fade-up' : 'opacity-0'}`}>
              {activeCategory === 'All' ? 'All Services' : `${activeCategory} Services`}
              <span className="ml-3 text-lg font-normal text-gray-400">({filtered.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                inView={gridInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Sleece ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-brand-blue rounded-2xl p-10 md:p-14 text-center">
            <div ref={ctaRef}>
              <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${ctaInView ? 'animate-fade-in' : 'opacity-0'}`}>
                One Partner, Every Layer
              </span>
              <h2 className={`text-3xl sm:text-4xl font-bold text-white mt-3 mb-5 ${ctaInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
                Ready to Get Started?
              </h2>
              <p className={`text-white/70 text-lg max-w-2xl mx-auto mb-8 ${ctaInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                Tell us what you need and our team will design the right solution for your
                organisation — on time, on budget, and built to last.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center ${ctaInView ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
                <Button
                  asChild size="lg"
                  className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 transition-transform duration-200 hover:scale-105"
                >
                  <Link to="/contact">Request a Quote <ArrowRight size={18} /></Link>
                </Button>
                <Button
                  asChild size="lg" variant="outline"
                  className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white font-semibold px-8 transition-transform duration-200 hover:scale-105"
                >
                  <Link to="/about">About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
