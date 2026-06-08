import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'

const statusColors = {
  accent: 'bg-accent/10 text-accent border-accent/30',
  accent2: 'bg-accent2/10 text-accent2 border-accent2/30',
}

function ProjectCard({ project, idx }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`bg-bg border border-white/5 p-8 md:p-10 group hover:border-white/10 hover:bg-surface2 transition-all duration-300 ${
        project.featured ? 'md:col-span-2' : ''
      } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      <div className={project.featured ? 'md:grid md:grid-cols-2 md:gap-12 items-start' : ''}>
        {/* Info side */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-muted text-xs tracking-widest">{project.id}</span>
            <span className={`font-mono text-[10px] px-2.5 py-1 border rounded-sm tracking-widest uppercase ${statusColors[project.statusColor]}`}>
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-1 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-muted mb-4">{project.subtitle}</p>

          <p className="text-muted text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-white/70">
                <span className="text-accent mt-0.5 text-xs">✓</span>
                {h}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-widest uppercase border border-white/8 text-muted px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-accent hover:gap-2 flex items-center gap-1.5 transition-all duration-200 group/link"
              >
                <span>Live Demo</span>
                <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted hover:text-white flex items-center gap-1.5 transition-colors duration-200"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>

        {/* Terminal mock (featured only) */}
        {project.featured && (
          <div className="hidden md:block mt-8 md:mt-0">
            <div className="bg-[#0d1117] border border-white/5 p-5 h-full min-h-[260px]">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="font-mono text-xs leading-loose text-gray-400">
                <p className="text-muted">GET <span className="text-white">/api/menu/items</span></p>
                <p className="text-green-500/70 text-[10px]">→ 200 OK · 12ms</p>
                <div className="h-2" />
                <p>[{'{'}</p>
                <p>&nbsp;&nbsp;<span className="text-accent2">"id"</span>: 1,</p>
                <p>&nbsp;&nbsp;<span className="text-accent2">"name"</span>: <span className="text-orange-300">"Margherita"</span>,</p>
                <p>&nbsp;&nbsp;<span className="text-accent2">"category"</span>: <span className="text-orange-300">"Pizza"</span>,</p>
                <p>&nbsp;&nbsp;<span className="text-accent2">"price"</span>: 12.99,</p>
                <p>&nbsp;&nbsp;<span className="text-accent2">"lang"</span>: <span className="text-orange-300">"ar/en"</span>,</p>
                <p>&nbsp;&nbsp;<span className="text-accent2">"role"</span>: <span className="text-orange-300">"admin"</span></p>
                <p>{'}]'}</p>
                <div className="h-2" />
                <p className="text-muted/50"># Dockerized · Auto-deploy on push ✓</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="px-8 md:px-16 py-24 bg-bg">
      <div
        ref={ref}
        className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-accent" />
          <span className="font-mono text-accent text-[10px] tracking-[0.2em] uppercase">Projects</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">
          Projects I've built.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}

        {/* Placeholder */}
        <div className="bg-bg p-10 flex flex-col items-center justify-center min-h-[280px] border border-dashed border-white/5">
          <p className="font-mono text-[10px] tracking-widest text-muted/40 uppercase">// next project</p>
          <p className="text-white/15 text-sm mt-2">Currently in the works...</p>
        </div>
      </div>
    </section>
  )
}
