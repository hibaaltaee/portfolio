import { personal } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="section-shell flex min-h-screen items-center pt-20 sm:pt-24">
      <div className="grid min-w-0 w-full gap-8 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="min-w-0">
          <p className="section-label mb-5">Backend Developer</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
            Building secure, useful web systems.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            I am Hiba Altaee, a Computer Engineer focused on backend applications, REST APIs,
            database-backed products, and practical security-minded engineering.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex justify-center rounded-full border border-ink/15 bg-surface px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-ink/30"
            >
              Get in touch
            </a>
          </div>
        </div>

        
      </div>
    </section>
  )
}
