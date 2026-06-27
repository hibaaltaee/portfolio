import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-ink py-8 text-white">
      <div className="section-shell flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {personal.name}</p>
        <div className="flex flex-wrap gap-5">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
