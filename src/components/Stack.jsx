import { useInView } from '../hooks/useInView'
import { stack } from '../data/portfolio'

export default function Stack() {
  const { ref, inView } = useInView()

  return (
    <section
      id="stack"
      ref={ref}
      className={`bg-surface py-20 transition-all duration-700 sm:py-24 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="section-shell">
        <div className="mb-12 min-w-0 max-w-2xl">
          <p className="section-label mb-4">Tech Stack</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Tools I use to ship reliable products.
          </h2>
        </div>

        <div className="grid min-w-0 gap-4 md:grid-cols-2">
          {stack.map((cat) => (
            <section key={cat.category} className="min-w-0 rounded-[1.5rem] border border-ink/10 bg-bg p-5 sm:p-6 md:p-8">
              <h3 className="mb-6 text-sm font-extrabold uppercase tracking-[0.14em] text-ink">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className="break-anywhere rounded-full border border-ink/10 bg-surface px-3 py-2 text-sm font-medium text-muted"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
