import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="px-8 md:px-16 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} — <span className="text-accent">{personal.name}</span>
      </p>
      <p className="font-mono text-xs text-muted/50">
        React · Vite · Tailwind CSS
      </p>
    </footer>
  )
}
