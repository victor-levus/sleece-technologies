import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/useInView'
import { useSEO } from '@/hooks/useSEO'
import HeroBackground from '@/components/layout/HeroBackground'
import { team } from '@/data/team'
import { Linkedin, Twitter, ArrowRight } from 'lucide-react'

const avatarColors = [
  { bg: 'bg-brand-blue',  text: 'text-white' },
  { bg: 'bg-brand-green', text: 'text-white' },
  { bg: 'bg-indigo-700',  text: 'text-white' },
  { bg: 'bg-purple-700',  text: 'text-white' },
]

function TeamCard({ member, index, inView }) {
  const delay = `delay-${Math.min((index % 3 + 1) * 100, 600)}`
  const color = avatarColors[index % avatarColors.length]

  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-blue to-brand-green" />

      <div className="p-8">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className={`w-24 h-24 rounded-full ${color.bg} ${color.text} flex items-center justify-center text-3xl font-extrabold tracking-tight shadow-lg ring-4 ring-white group-hover:ring-brand-green/20 transition-all duration-300`}>
            {member.initials}
          </div>
        </div>

        {/* Info */}
        <div className="text-center mb-5">
          <h3 className="text-xl font-bold text-brand-blue">{member.name}</h3>
          <span className="inline-block mt-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold tracking-wide">
            {member.role}
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-500 text-sm leading-relaxed text-center mb-6">
          {member.bio}
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-3">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              aria-label={`${member.name} on LinkedIn`}
              className="w-9 h-9 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-200"
            >
              <Linkedin size={16} />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              aria-label={`${member.name} on Twitter`}
              className="w-9 h-9 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-200"
            >
              <Twitter size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  useSEO({
    title: 'Our Team',
    description:
      'Meet the leadership team at Sleece Technologies Limited — experienced professionals driving ICT, power, and engineering excellence across Nigeria.',
    path: '/team',
  })

  const [heroRef, heroInView] = useInView()
  const [teamRef, teamInView] = useInView()
  const [valuesRef, valuesInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  return (
    <div className="min-h-screen">

      {/* ── Page Hero ── */}
      <HeroBackground className="py-24">
        <div ref={heroRef} className="max-w-4xl mx-auto px-6 text-center">
          <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
            The People Behind the Work
          </span>
          <h1 className={`text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6 leading-tight ${heroInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            Meet Our Team
          </h1>
          <p className={`text-white/70 text-lg max-w-2xl mx-auto leading-relaxed ${heroInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            Driven by expertise, guided by integrity, and united by a passion for
            delivering technology solutions that make a real difference.
          </p>
        </div>
      </HeroBackground>

      {/* ── Leadership Team ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={teamRef} className="text-center mb-14">
            <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${teamInView ? 'animate-fade-in' : 'opacity-0'}`}>
              Leadership
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold text-brand-blue mt-2 ${teamInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
              Our Leadership Team
            </h2>
            <p className={`text-gray-500 mt-4 max-w-xl mx-auto ${teamInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              Experienced leaders committed to innovation, professionalism, and delivering
              exceptional results for every client.
            </p>
          </div>

          {/* Team grid — centred for 2 members, scales for more */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto`}>
            {team.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} inView={teamInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture strip ── */}
      <section className="py-16 bg-brand-blue">
        <div ref={valuesRef} className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: 'Innovation', desc: 'We stay ahead of the curve so our clients always have access to the best technology.' },
              { value: 'Integrity',  desc: 'We operate with transparency and honesty in every engagement and relationship.' },
              { value: 'Excellence', desc: 'We hold ourselves to the highest standards — from planning to post-deployment support.' },
            ].map(({ value, desc }, i) => (
              <div key={value} className={`${valuesInView ? `animate-scale-in delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                <div className="text-brand-green font-extrabold text-2xl mb-2">{value}</div>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join us / CTA ── */}
      <section className="py-20 bg-white">
        <div ref={ctaRef} className="max-w-3xl mx-auto px-6 text-center">
          <span className={`text-brand-green text-sm font-semibold uppercase tracking-widest ${ctaInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Grow With Us
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-brand-blue mt-2 mb-4 ${ctaInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            Want to Join the Team?
          </h2>
          <p className={`text-gray-500 text-lg mb-8 leading-relaxed ${ctaInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            We're always looking for talented engineers, consultants, and technology enthusiasts
            to join our growing team. Reach out and let's start a conversation.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${ctaInView ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
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
              <Link to="/about">About Sleece</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
