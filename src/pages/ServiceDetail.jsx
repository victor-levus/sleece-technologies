import { useParams, Link, Navigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/useInView'
import { useSEO } from '@/hooks/useSEO'
import HeroBackground from '@/components/layout/HeroBackground'
import { services } from '@/data/services'
import { CheckCircle2, ArrowRight, ArrowLeft, Phone } from 'lucide-react'

const categoryColors = {
  Technology:     'bg-blue-50 text-blue-700',
  Infrastructure: 'bg-purple-50 text-purple-700',
  Power:          'bg-yellow-50 text-yellow-700',
  Security:       'bg-red-50 text-red-700',
  Consulting:     'bg-green-50 text-green-700',
}

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const service = services.find(s => s.id === serviceId)

  useSEO({
    title: service?.title,
    description: service?.description,
    path: `/services/${serviceId}`,
  })

  const [heroRef, heroInView] = useInView()
  const [contentRef, contentInView] = useInView()
  const [relatedRef, relatedInView] = useInView()

  if (!service) return <Navigate to="/services" replace />

  const Icon = service.icon

  const related = services
    .filter(s => s.id !== serviceId)
    .sort((a, b) => (a.category === service.category ? -1 : 1))
    .slice(0, 3)

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <HeroBackground className="py-24">
        <div ref={heroRef} className="max-w-4xl mx-auto px-6 text-center">

          {/* Breadcrumb */}
          <div className={`flex items-center justify-center gap-2 mb-6 ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <Link to="/services" className="text-white/50 hover:text-white/80 text-sm transition-colors flex items-center gap-1">
              <ArrowLeft size={13} /> All Services
            </Link>
            <span className="text-white/30 text-sm">›</span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[service.category]}`}>
              {service.category}
            </span>
          </div>

          {/* Icon */}
          <div className={`w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-brand-green mx-auto mb-6 ${heroInView ? 'animate-scale-in delay-100' : 'opacity-0'}`}>
            <Icon size={40} />
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 ${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            {service.title}
          </h1>
          <p className={`text-white/70 text-lg max-w-2xl mx-auto leading-relaxed ${heroInView ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
            {service.description}
          </p>
        </div>
      </HeroBackground>

      {/* ── Main Content ── */}
      <section className="py-20 bg-brand-light">
        <div ref={contentRef} className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Sub-services */}
            <div className={`lg:col-span-2 ${contentInView ? 'animate-fade-left delay-100' : 'opacity-0'}`}>
              <h2 className="text-2xl font-bold text-brand-blue mb-7">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.items.map(item => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-200"
                  >
                    <CheckCircle2 size={17} className="text-brand-green mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className={`space-y-5 ${contentInView ? 'animate-fade-right delay-200' : 'opacity-0'}`}>
              <div className="bg-brand-blue rounded-2xl p-7 text-white">
                <h3 className="font-bold text-lg mb-3">Ready to get started?</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Tell us about your project and we'll design the right solution for your organisation.
                </p>
                <Button
                  asChild
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold transition-transform duration-200 hover:scale-[1.02]"
                >
                  <Link to="/contact">Request a Quote <ArrowRight size={16} /></Link>
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-brand-blue mb-3">Call Us Directly</h3>
                <a
                  href="tel:+2348030724271"
                  className="flex items-center gap-2 text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
                >
                  <Phone size={16} />
                  +234 803 0724 271
                </a>
                <p className="text-gray-400 text-sm mt-2">Mon–Fri 8am–6pm · Sat 9am–2pm</p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-brand-blue mb-4">All Service Areas</h3>
                <Button
                  asChild variant="outline"
                  className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <Link to="/services">Browse Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="py-16 bg-white">
        <div ref={relatedRef} className="max-w-6xl mx-auto px-6">
          <h2 className={`text-2xl font-bold text-brand-blue mb-8 ${relatedInView ? 'animate-fade-up' : 'opacity-0'}`}>
            Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((s, i) => {
              const RelatedIcon = s.icon
              return (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className={`group flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${relatedInView ? `animate-fade-up delay-${(i + 1) * 100}` : 'opacity-0'}`}
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors duration-200">
                    <RelatedIcon size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue text-sm leading-snug group-hover:text-brand-green transition-colors duration-200">{s.title}</h4>
                    <span className="text-xs text-gray-400 mt-1 block">{s.category}</span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className={`mt-8 ${relatedInView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
            <Button
              asChild variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
            >
              <Link to="/services">View All Services <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
