import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useInView } from '@/hooks/useInView'
import {
  Lightbulb, ShieldCheck, Users, Star,
  Target, Eye, ArrowRight,
  CheckCircle2, Globe, Cpu, Zap,
} from 'lucide-react'

const values = [
  {
    icon: <Lightbulb size={28} />,
    title: 'Innovation',
    desc: 'We continuously explore and adopt emerging technologies to deliver forward-thinking solutions that keep our clients ahead.',
  },
  {
    icon: <Star size={28} />,
    title: 'Professionalism',
    desc: 'Every engagement is handled with discipline, integrity, and a commitment to the highest standards of technical excellence.',
  },
  {
    icon: <Users size={28} />,
    title: 'Customer Satisfaction',
    desc: 'Client success is our success. We listen, adapt, and go the extra mile to ensure every solution exceeds expectations.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Reliability',
    desc: 'Our systems are built to last. We stand behind every deployment with ongoing support and dependable service.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Impact',
    desc: 'We measure our success by the operational improvements, efficiency gains, and growth we enable for our clients.',
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: 'Quality',
    desc: 'Rigorous quality checks at every project phase guarantee that what we deliver is robust, secure, and scalable.',
  },
]

const stats = [
  { value: '5+', label: 'Years in Operation' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Clients Served' },
  { value: '10+', label: 'Sectors Covered' },
]

const expertise = [
  { icon: <Cpu size={20} />, label: 'Software Engineering' },
  { icon: <Globe size={20} />, label: 'Telecommunications' },
  { icon: <Zap size={20} />, label: 'Electrical & Power Systems' },
  { icon: <ShieldCheck size={20} />, label: 'Security Technology' },
  { icon: <Users size={20} />, label: 'ICT Consulting & Training' },
  { icon: <Lightbulb size={20} />, label: 'Digital Transformation' },
]

const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']

export default function About() {
  const [heroRef, heroInView] = useInView()
  const [storyRef, storyInView] = useInView()
  const [mvRef, mvInView] = useInView()
  const [statsRef, statsInView] = useInView()
  const [valuesRef, valuesInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

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
            Who We Are
          </span>
          <h1 className={`text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6 leading-tight ${heroInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            About Sleece Technologies
          </h1>
          <p className={`text-white/70 text-lg max-w-2xl mx-auto leading-relaxed ${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            An innovative technology, telecommunications, and engineering solutions company
            committed to powering digital transformation across Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* ── Company Story ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${storyInView ? 'animate-fade-in' : 'opacity-0'}`}>
                Our Story
              </span>
              <h2 className={`text-3xl sm:text-4xl font-bold text-brand-blue mt-2 mb-6 ${storyInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
                Built on Expertise,<br />Driven by Innovation
              </h2>
              <div className={`space-y-4 text-gray-600 leading-relaxed ${storyInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
                <p>
                  Sleece Technologies Limited is an innovative technology, telecommunications, and
                  engineering solutions company focused on delivering cutting-edge digital
                  transformation services, ICT infrastructure, power solutions, networking systems,
                  and enterprise technology services for businesses, government institutions, and
                  organisations across multiple sectors.
                </p>
                <p>
                  With a multidisciplinary approach, we combine expertise in software engineering,
                  telecommunications, electrical systems, networking, and infrastructure deployment
                  to provide comprehensive end-to-end solutions tailored to each client's
                  operational needs.
                </p>
                <p>
                  Driven by innovation, professionalism, and customer satisfaction, Sleece
                  Technologies is committed to delivering high-quality, future-ready solutions that
                  empower organisations to achieve operational excellence and accelerate sustainable
                  digital transformation.
                </p>
              </div>
            </div>

            {/* Expertise chips */}
            <div className={`${storyInView ? 'animate-fade-right delay-300' : 'opacity-0'}`}>
              <div className="bg-brand-light rounded-2xl p-8">
                <h3 className="text-brand-blue font-bold text-lg mb-6">Areas of Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {expertise.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 hover:border-brand-green/40 hover:shadow-md transition-all duration-200"
                    >
                      <span className="text-brand-green shrink-0">{icon}</span>
                      <span className="text-brand-blue font-medium text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="py-16 bg-brand-blue">
        <div ref={statsRef} className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`text-center ${statsInView ? `animate-scale-in ${delays[i]}` : 'opacity-0'}`}
              >
                <div className="text-4xl font-extrabold text-brand-green mb-1">{value}</div>
                <div className="text-white/70 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={mvRef} className="text-center mb-14">
            <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${mvInView ? 'animate-fade-in' : 'opacity-0'}`}>
              Purpose & Direction
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold text-brand-blue mt-2 ${mvInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
              Mission &amp; Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className={`border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${mvInView ? 'animate-fade-left delay-200' : 'opacity-0'}`}>
              <CardContent className="p-0">
                <div className="h-2 bg-brand-green" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-5">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To design, deploy, and maintain scalable and reliable technology systems that
                    improve operational efficiency, communication, automation, security, and digital
                    service delivery — providing comprehensive end-to-end solutions tailored to our
                    clients' needs across every sector.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className={`border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${mvInView ? 'animate-fade-right delay-300' : 'opacity-0'}`}>
              <CardContent className="p-0">
                <div className="h-2 bg-brand-blue" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-5">
                    <Eye size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading technology and engineering solutions company in Nigeria and
                    across Africa — empowering organisations to achieve operational excellence,
                    improve connectivity, strengthen security, and accelerate sustainable digital
                    transformation through innovation and world-class service delivery.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={valuesRef} className="text-center mb-14">
            <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${valuesInView ? 'animate-fade-in' : 'opacity-0'}`}>
              What Guides Us
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold text-brand-blue mt-2 ${valuesInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`p-6 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group ${valuesInView ? `animate-fade-up ${delays[i]}` : 'opacity-0'}`}
              >
                <div className="w-12 h-12 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  {icon}
                </div>
                <h4 className="font-bold text-brand-blue text-lg mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-brand-light">
        <div ref={ctaRef} className="max-w-3xl mx-auto px-6 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold text-brand-blue mb-4 ${ctaInView ? 'animate-fade-up' : 'opacity-0'}`}>
            Let's Work Together
          </h2>
          <p className={`text-gray-500 text-lg mb-8 ${ctaInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            Whether you need ICT infrastructure, power solutions, or security systems —
            Sleece Technologies has the expertise to deliver.
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
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 transition-transform duration-200 hover:scale-105"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
