import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'

const statusColors = {
  accent: 'bg-accent/10 text-accent border-accent/20',
  accent2: 'bg-accent2/10 text-accent2 border-accent2/20',
}

function ProjectCard({ project, idx }) {
  const { ref, inView } = useInView()
  const featurePreview = project.featurePreview

  return (
    <article
      ref={ref}
      className={`min-w-0 rounded-[1.5rem] border border-ink/10 bg-surface p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-6 md:p-8 ${
        project.featured ? 'lg:col-span-2' : ''
      } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${idx * 90}ms` }}
    >
      <div className={project.featured && featurePreview ? 'grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-8' : 'min-w-0'}>
        <div className="min-w-0">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs font-bold text-muted">{project.id}</span>
            <span className={`rounded-full border px-3 py-1 text-xs font-bold ${statusColors[project.statusColor]}`}>
              {project.status}
            </span>
          </div>

          <h3 className="break-anywhere text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            {project.title}
          </h3>
          {project.subtitle && <p className="mt-2 text-sm font-semibold text-accent">{project.subtitle}</p>}

          <p className="mt-5 text-sm leading-7 text-muted">{project.description}</p>

          <ul className="mt-6 space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-6 text-ink/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-bg px-3 py-1.5 text-xs font-semibold text-muted">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-ink px-4 py-2 text-sm font-bold text-white"
              >
                Live demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-ink/15 px-4 py-2 text-sm font-bold text-ink"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {project.featured && featurePreview && (
          <aside className="min-w-0 rounded-[1.5rem] bg-ink p-5 text-white sm:p-6">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="break-anywhere font-mono text-xs text-white/60">{featurePreview.request}</span>
              <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">
                {featurePreview.response}
              </span>
            </div>

            <dl className="space-y-4">
              {featurePreview.items.map(([key, value]) => (
                <div key={key} className="flex flex-col gap-1 border-b border-white/10 pb-3 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                  <dt className="text-xs uppercase tracking-[0.12em] text-white/50">{key}</dt>
                  <dd className="break-anywhere font-mono text-xs text-white sm:text-right">{value.replaceAll('"', '')}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-xs leading-6 text-white/50">{featurePreview.note.replace('# ', '')}</p>
          </aside>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="section-shell py-24">
      <div
        ref={ref}
        className={`mb-12 min-w-0 max-w-2xl transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        
        <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
           Projects 
        </h2>
      </div>

      <div className="grid min-w-0 gap-5 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </div>
    </section>
  )
}
