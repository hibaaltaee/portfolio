import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'

export default function Contact() {
  const { ref, inView } = useInView()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens mail client with pre-filled message
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`)
    setSent(true)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`px-8 md:px-16 py-24 bg-bg grid md:grid-cols-2 gap-16 md:gap-24 items-start transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Left */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-accent" />
          <span className="font-mono text-accent text-[10px] tracking-[0.2em] uppercase">Contact</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          Let's build<br />
          <span className="text-stroke">something.</span>
        </h2>
        <p className="text-muted leading-relaxed text-sm mb-10 max-w-sm">
          Open to freelance work, full-time positions, and interesting collaborations.
          Let's talk about your project.
        </p>

        <div className="space-y-0 border border-white/5">
          {[
            { icon: '✉', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
            
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-4 border-b border-white/5 last:border-b-0 hover:bg-surface2 group transition-colors duration-200"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-surface2 text-accent text-sm shrink-0">
                {link.icon}
              </div>
              <div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-widest">{link.label}</div>
                <div className="text-sm text-white/80 group-hover:text-accent transition-colors duration-200">
                  {link.value}
                </div>
              </div>
              <span className="ml-auto text-muted group-hover:text-accent transition-colors">→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Right — form */}
     
    </section>
  )
}
