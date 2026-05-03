import { useInView } from '../hooks/useInView'
import { security } from '../data/portfolio'

export default function Security() {
  const { ref, inView } = useInView()

  return (
    <section
      id="security"
      ref={ref}
      className={`bg-surface px-8 md:px-16 py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-6 h-px bg-accent" />
        <span className="font-mono text-accent text-[10px] tracking-[0.2em] uppercase">Security & Networking</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">
        Beyond the code.
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {security.map((item, i) => (
          <div
            key={item.title}
            className="bg-bg border border-white/5 p-8 hover:border-white/10 transition-colors duration-200"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="text-3xl block mb-5">{item.icon}</span>
            <h3 className="font-bold text-base mb-3">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
