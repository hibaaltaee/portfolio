import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'

const terminalLines = [
  { type: 'comment', text: '# whoami' },
  { type: 'out', text: 'Hiba Altaee — CE & Fullstack Dev' },
  { type: 'spacer' },
  { type: 'cmd', text: '$ cat skills.json' },
  { type: 'out', text: '{' },
  { type: 'key-val', key: '"backend"', val: '["Node.js", "Express", "Django"],' },
  { type: 'key-val', key: '"database"', val: '["PostgreSQL"],' },
  { type: 'key-val', key: '"frontend"', val: '["React", "Vite", "Tailwind"],' },
  { type: 'key-val', key: '"hardware"', val: '["RPi", "Python", "Linux"],' },
  { type: 'key-val', key: '"security"', val: '["CEH", "Networking"]' },
  { type: 'out', text: '}' },
  { type: 'spacer' },
  { type: 'cmd', text: '$ echo $STATUS' },
  { type: 'result', text: 'Open to opportunities ✓' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className={`px-8 md:px-16 py-24 grid md:grid-cols-2 gap-16 md:gap-24 items-start transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Left — text */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-accent" />
          <span className="font-mono text-accent text-[10px] tracking-[0.2em] uppercase">About me</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8">
          Engineer by training,<br />
          <span className="text-stroke">builder by nature.</span>
        </h2>

        <div className="space-y-4">
          {personal.bio.map((para, i) => (
            <p key={i} className="text-muted leading-relaxed text-[15px]">{para}</p>
          ))}
        </div>

        {/* CEH Card */}
        <div className="mt-8 flex items-center gap-5 p-5 bg-surface2 border border-white/5">
          <div className="w-12 h-12 flex items-center justify-center text-2xl border border-accent2/30 bg-accent2/10 shrink-0">
            🛡
          </div>
          <div>
            <h4 className="text-accent2 font-bold text-sm">CEH — Certified Ethical Hacker</h4>
            <p className="font-mono text-xs text-muted mt-0.5">Cisco Certification · Networking & Cybersecurity</p>
          </div>
        </div>
      </div>

      {/* Right — terminal */}
      <div className="bg-[#0d1117] border border-white/5 h-full min-h-[320px] p-5">
        <div className="flex gap-1.5 mb-5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>

        <div className="font-mono text-xs leading-loose">
          {terminalLines.map((line, i) => {
            if (line.type === 'spacer') return <div key={i} className="h-2" />
            if (line.type === 'comment') return <p key={i} className="text-muted/50">{line.text}</p>
            if (line.type === 'cmd') return <p key={i} className="text-muted">{line.text}</p>
            if (line.type === 'out') return <p key={i} className="text-gray-400">{line.text}</p>
            if (line.type === 'result') return <p key={i} className="text-accent">{line.text}</p>
            if (line.type === 'key-val') return (
              <p key={i} className="text-gray-400">
                &nbsp;&nbsp;<span className="text-accent2">{line.key}</span>: {line.val}
              </p>
            )
            return null
          })}
        </div>
      </div>
    </section>
  )
}
