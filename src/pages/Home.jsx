import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useInView } from '@/hooks/useInView'
import {
  Code2, Wifi, Zap, ShieldCheck, Cloud, Phone,
  Network, Lightbulb, Award, Clock, ThumbsUp,
  ArrowRight, ChevronRight,
} from 'lucide-react'

const verticals = [
  {
    icon: <Code2 size={36} />,
    title: 'Technology & ICT',
    description:
      'Software development, enterprise applications, cloud & DevOps, VoIP, and complete ICT infrastructure deployment tailored to your operations.',
  },
  {
    icon: <Zap size={36} />,
    title: 'Power Solutions',
    description:
      'Solar energy systems, inverter installations, heavy-duty generators, electrical wiring, and integrated backup power for any environment.',
  },
  {
    icon: <ShieldCheck size={36} />,
    title: 'Security Systems',
    description:
      'Bollard systems, under-vehicle scanners, baggage scanners, walk-through detectors, CCTV, and access control for critical facilities.',
  },
]

const services = [
  { icon: <Code2 size={24} />, title: 'Software Development', desc: 'Custom enterprise applications and digital solutions.' },
  { icon: <Phone size={24} />, title: 'VoIP & Unified Communications', desc: 'Modern voice and communication infrastructure.' },
  { icon: <Cloud size={24} />, title: 'Cloud & DevOps', desc: 'Scalable cloud solutions and deployment pipelines.' },
  { icon: <Network size={24} />, title: 'Networking & Connectivity', desc: 'Routers, switches, fiber optic, and data center setup.' },
  { icon: <Zap size={24} />, title: 'Power Installation', desc: 'Solar, inverters, generators, and electrical wiring.' },
  { icon: <Wifi size={24} />, title: 'ICT Infrastructure', desc: 'End-to-end infrastructure planning and deployment.' },
]

const values = [
  { icon: <Award size={32} />, title: 'Deep Expertise', desc: 'Multidisciplinary engineers across software, telecom, power, and networking bring proven know-how to every project.' },
  { icon: <Lightbulb size={32} />, title: 'Innovation-Driven', desc: 'We stay ahead of technology trends to deliver future-ready solutions that give your organisation a lasting edge.' },
  { icon: <Clock size={32} />, title: 'Reliable Delivery', desc: 'Structured project management and rigorous quality checks ensure on-time, on-budget delivery every time.' },
  { icon: <ThumbsUp size={32} />, title: 'Customer First', desc: 'From consultation to post-deployment support, your satisfaction and operational success drive everything we do.' },
]

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Clients Served' },
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Sectors Covered' },
]

const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']

export default function Home() {
  const [verticalsRef, verticalsInView] = useInView()
  const [servicesRef, servicesInView] = useInView()
  const [valuesRef, valuesInView] = useInView()
  const [ctaRef, ctaInView] = useInView()
  const [statsRef, statsInView] = useInView()

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#000066' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000066] to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="animate-fade-in delay-100 inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            Nigeria's Trusted ICT & Engineering Partner
          </div>

          <h1 className="animate-fade-up delay-200 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Powering{' '}
            <span className="text-brand-green">Digital Transformation</span>
            <br />for Every Organisation
          </h1>

          <p className="animate-fade-up delay-300 text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Sleece Technologies Limited delivers cutting-edge ICT infrastructure, power solutions,
            networking, and security systems — end-to-end, built to last.
          </p>

          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild size="lg"
              className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 text-base transition-transform duration-200 hover:scale-105"
            >
              <Link to="/services">Explore Our Services <ArrowRight size={18} /></Link>
            </Button>
            <Button
              asChild size="lg" variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white font-semibold px-8 text-base transition-transform duration-200 hover:scale-105"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-12">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`text-center ${statsInView ? `animate-fade-up ${delays[i]}` : 'opacity-0'}`}
              >
                <div className="text-3xl font-extrabold text-brand-green">{value}</div>
                <div className="text-white/60 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={verticalsRef} className="text-center mb-14">
            <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${verticalsInView ? 'animate-fade-in' : 'opacity-0'}`}>
              What We Do
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold text-brand-blue mt-2 ${verticalsInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
              Three Pillars of Excellence
            </h2>
            <p className={`text-gray-500 mt-4 max-w-xl mx-auto ${verticalsInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              Our multidisciplinary approach spans technology, power, and security —
              giving you a single trusted partner for all your infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {verticals.map(({ icon, title, description }, i) => (
              <Card
                key={title}
                className={`border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${verticalsInView ? `animate-fade-up ${delays[i + 2]}` : 'opacity-0'}`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3">{title}</h3>
                  <p className="text-gray-500 leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Snapshot ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={servicesRef} className="text-center mb-14">
            <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${servicesInView ? 'animate-fade-in' : 'opacity-0'}`}>
              Our Services
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold text-brand-blue mt-2 ${servicesInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
              End-to-End Solutions
            </h2>
            <p className={`text-gray-500 mt-4 max-w-xl mx-auto ${servicesInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              From initial consultation to full deployment and ongoing support — we cover every layer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex items-start gap-4 p-6 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${servicesInView ? `animate-fade-up ${delays[i]}` : 'opacity-0'}`}
              >
                <div className="w-11 h-11 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {icon}
                </div>
                <div>
                  <h4 className="font-semibold text-brand-blue mb-1">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-10 ${servicesInView ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
            <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-transform duration-200 hover:scale-105">
              <Link to="/services">View All Services <ChevronRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={valuesRef} className="text-center mb-14">
            <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${valuesInView ? 'animate-fade-in' : 'opacity-0'}`}>
              Why Choose Us
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold text-brand-blue mt-2 ${valuesInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
              Built on Trust &amp; Results
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`text-center p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 ${valuesInView ? `animate-scale-in ${delays[i]}` : 'opacity-0'}`}
              >
                <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-white mx-auto mb-5 transition-transform duration-300 hover:scale-110">
                  {icon}
                </div>
                <h4 className="font-bold text-brand-blue text-lg mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-brand-blue">
        <div ref={ctaRef} className="max-w-3xl mx-auto px-6 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-4 ${ctaInView ? 'animate-fade-up' : 'opacity-0'}`}>
            Ready to Transform Your Organisation?
          </h2>
          <p className={`text-white/70 text-lg mb-8 ${ctaInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            Let's discuss how Sleece Technologies can help you achieve operational excellence,
            improve connectivity, and accelerate your digital journey.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${ctaInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            <Button
              asChild size="lg"
              className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 transition-transform duration-200 hover:scale-105"
            >
              <Link to="/contact">Get In Touch <ArrowRight size={18} /></Link>
            </Button>
            <Button
              asChild size="lg" variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white font-semibold px-8 transition-transform duration-200 hover:scale-105"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
