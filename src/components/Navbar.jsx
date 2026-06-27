import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="section-shell flex h-14 items-center justify-between gap-3">
        <a href="#" className="min-w-0 truncate text-sm font-bold tracking-tight text-ink">
          {personal.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${personal.email}`}
          className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Email me
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-lg leading-none">{menuOpen ? 'x' : '+'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-ink/10 bg-bg/95 px-4 py-2 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm font-semibold text-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
