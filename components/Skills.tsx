'use client'

import { motion } from 'framer-motion'
import { BarChart3, Code2, Database, Layers } from 'lucide-react'

/* ── Core skills — shown prominently at top ── */
const coreSkills = [
  { name: 'Python', context: 'Automation & AI systems', color: 'sky' },
  { name: 'SQL',    context: 'Data extraction & analysis', color: 'emerald' },
  { name: 'Power BI', context: 'Business dashboards', color: 'violet' },
  { name: 'Excel',  context: 'Advanced analysis & modeling', color: 'amber' },
]

/* ── Category cards — supporting skills ── */
const categories = [
  {
    title: 'Programming & Automation',
    icon: Code2,
    color: 'sky',
    skills: ['Flask', 'Streamlit', 'Pandas', 'NumPy', 'REST APIs', 'HTML / CSS'],
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    color: 'emerald',
    skills: ['Data Modeling', 'ETL', 'Statistical Analysis', 'KPI Design'],
  },
  {
    title: 'BI & Visualization',
    icon: Layers,
    color: 'violet',
    skills: ['Dashboard Design', 'DAX', 'Drill-through Reports', 'Data Storytelling'],
  },
  {
    title: 'Tools & Methods',
    icon: BarChart3,
    color: 'amber',
    skills: ['Excel Solver', 'Linear Programming', 'Gemini API', 'Git'],
  },
]

const coreColorMap: Record<string, { bg: string; border: string; text: string; sub: string; ring: string }> = {
  sky:     { bg: 'bg-sky-500/10',     border: 'border-sky-500/25',     text: 'text-sky-300',     sub: 'text-sky-500/70',     ring: 'ring-sky-500/20' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', text: 'text-emerald-300', sub: 'text-emerald-500/70', ring: 'ring-emerald-500/20' },
  violet:  { bg: 'bg-violet-500/10',  border: 'border-violet-500/25',  text: 'text-violet-300',  sub: 'text-violet-500/70',  ring: 'ring-violet-500/20' },
  amber:   { bg: 'bg-amber-500/10',   border: 'border-amber-500/25',   text: 'text-amber-300',   sub: 'text-amber-500/70',   ring: 'ring-amber-500/20' },
}

const catColorMap: Record<string, { icon: string; tag: string; border: string }> = {
  sky:     { icon: 'text-sky-400 bg-sky-500/10 border-sky-500/20',     tag: 'bg-sky-500/10 text-sky-300 border-sky-500/20',     border: 'hover:border-sky-500/30' },
  emerald: { icon: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', border: 'hover:border-emerald-500/30' },
  violet:  { icon: 'text-violet-400 bg-violet-500/10 border-violet-500/20',    tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',    border: 'hover:border-violet-500/30' },
  amber:   { icon: 'text-amber-400 bg-amber-500/10 border-amber-500/20',       tag: 'bg-amber-500/10 text-amber-300 border-amber-500/20',       border: 'hover:border-amber-500/30' },
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute top-0 inset-x-0 h-px glow-line" />

      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            What I work with.
          </h2>
        </motion.div>

        {/* ── Core skills row ── */}
        <motion.div {...fadeUp(0.05)} className="mb-4">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-sky-500/70 mb-4">
            Core Skills
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {coreSkills.map((s, i) => {
              const c = coreColorMap[s.color]
              return (
                <motion.div
                  key={s.name}
                  {...fadeUp(0.08 + i * 0.06)}
                  className={`group relative p-4 rounded-xl border ${c.bg} ${c.border}
                               hover:ring-2 ${c.ring} transition-all duration-200
                               hover:-translate-y-0.5 cursor-default`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className={`text-base font-bold ${c.text}`}>{s.name}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5
                                     bg-white/10 text-white/50 rounded">
                      CORE
                    </span>
                  </div>
                  <p className={`text-[11px] leading-relaxed ${c.sub}`}>{s.context}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div {...fadeUp(0.3)} className="my-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-[#1A2744]" />
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#6B7E9A]">
            Supporting Skills
          </p>
          <div className="flex-1 h-px bg-[#1A2744]" />
        </motion.div>

        {/* ── Category grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => {
            const c = catColorMap[cat.color]
            return (
              <motion.div
                key={cat.title}
                {...fadeUp(0.32 + i * 0.07)}
                className={`group card-base p-6 transition-all duration-300 hover:-translate-y-1 ${c.border}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                    <cat.icon size={17} />
                  </div>
                  <h3 className="font-semibold text-text-primary text-sm">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${c.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Languages */}
        <motion.div {...fadeUp(0.55)} className="mt-8 flex items-center gap-4 pt-6 border-t border-[#1A2744]/60">
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#6B7E9A]">Languages</span>
          <div className="flex gap-3">
            {[{ lang: 'Hebrew', level: 'Native' }, { lang: 'English', level: 'Full Professional' }].map((l) => (
              <span key={l.lang}
                className="text-xs font-medium text-text-secondary border border-[#1A2744]
                           bg-white/[0.03] px-3 py-1.5 rounded-full">
                {l.lang} — {l.level}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
