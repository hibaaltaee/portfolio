import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'

const ROLES = [
  'Fullstack Developer',
  'Backend Engineer',
  'React Developer',
  'API Architect',
  'Ethical Hacker',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-16 pt-28 pb-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Glow */}
      <div
        className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full">
        

        <h1 className="font-sans font-extrabold leading-none tracking-tight mb-4" style={{ fontSize: 'clamp(2rem,5vw,4.5rem)' }}>
          Hiba
          <br />
          <span >Altaee</span>
        </h1>

        <div className="flex items-center gap-3 mb-6 mt-6">
          <span className="font-mono text-sm md:text-base text-accent2">
            {displayed}
            <span className="animate-blink">▋</span>
          </span>
        </div>

        <p className="text-muted leading-relaxed mb-10 max-w-xl text-base md:text-lg">
          Computer Engineer building robust fullstack applications — secure REST APIs,
          React frontends, embedded AI, and more.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#projects"
            className="font-mono text-xs tracking-widest px-8 py-3.5 bg-accent text-bg font-bold hover:shadow-[0_8px_30px_rgba(0,229,160,0.3)] hover:-translate-y-0.5 transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="font-mono text-xs tracking-widest px-8 py-3.5 border border-white/15 text-white hover:border-accent hover:text-accent transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-12">
          {personal.stats.map((s) => (
            <div key={s.label}>
              <div className="font-mono text-3xl font-bold text-white leading-none">
                {s.value}
                <span className="text-accent">.</span>
              </div>
              <div className="font-mono text-xs text-muted uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-mono text-muted text-[10px] tracking-widest uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
