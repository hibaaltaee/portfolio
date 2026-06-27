import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-ink py-20 text-white transition-all duration-700 sm:py-24 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="section-shell grid min-w-0 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/50">Contact</p>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
            Have a project or role in mind?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
            I am open to backend internships, junior developer roles, and focused collaborations.
          </p>
        </div>

        <a
          href={`mailto:${personal.email}`}
          className="break-anywhere inline-flex max-w-full justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-extrabold text-ink transition-transform hover:-translate-y-0.5 sm:px-6"
        >
          {personal.email}
        </a>
      </div>
    </section>
  )
}
