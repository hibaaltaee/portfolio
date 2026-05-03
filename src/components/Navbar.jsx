import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#security', label: 'Security' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <a href="#" className="font-mono text-accent text-sm tracking-widest">
        HA<span className="text-muted">://</span>dev
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${personal.email}`}
        className="hidden md:inline font-mono text-xs border border-white/10 hover:border-accent text-muted hover:text-accent px-4 py-2 transition-all duration-200"
      >
        
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-muted hover:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-white/5 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block font-mono text-xs tracking-widest uppercase text-muted hover:text-accent px-8 py-4 border-b border-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
