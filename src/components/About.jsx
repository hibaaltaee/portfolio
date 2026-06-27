import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className={`section-shell py-20 transition-all duration-700 sm:py-24 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="grid min-w-0 gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div className="min-w-0">
          <p className="section-label mb-4">About</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Engineer by training, builder by practice.
          </h2>
        </div>

        <div className="min-w-0 space-y-5 text-base leading-8 text-muted">
          {personal.bio.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
