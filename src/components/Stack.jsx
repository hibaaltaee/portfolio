import { useInView } from '../hooks/useInView'
import { stack } from '../data/portfolio'

const dotColors = {
  accent: 'bg-accent',
  accent2: 'bg-accent2',
  accent3: 'bg-accent3',
}

const labelColors = {
  accent: 'text-accent',
  accent2: 'text-accent2',
  accent3: 'text-accent3',
}

export default function Stack() {
  const { ref, inView } = useInView()

  return (
    <section
      id="stack"
      ref={ref}
      className={`bg-surface px-8 md:px-16 py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-6 h-px bg-accent" />
        <span className="font-mono text-accent text-[10px] tracking-[0.2em] uppercase">Tech Stack</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">
        Tools I build with.
      </h2>

      <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
        {stack.map((cat) => (
          <div key={cat.category} className="bg-bg p-8">
            <h3 className={`font-mono text-[11px] tracking-[0.18em] uppercase mb-6 ${labelColors[cat.color]}`}>
              // {cat.category}
            </h3>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[cat.color]}`} />
                    <span className="text-sm text-white/90">{item.name}</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted/60 shrink-0">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
