'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Star, Award, Brain, BarChart2, TrendingUp, ChevronRight, Music2, AlertCircle, Lightbulb, Zap } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

/* ── Small project card component ── */
function ProjectCard({
  icon: Icon,
  color,
  grade,
  tags,
  title,
  problem,
  build,
  value,
  stack,
  delay = 0,
}: {
  icon: React.ElementType
  color: 'emerald' | 'sky' | 'violet'
  grade: string
  tags: string[]
  title: string
  problem: string
  build: string
  value: string
  stack: string[]
  delay?: number
}) {
  const colorMap = {
    emerald: {
      icon: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
      badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
      tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      accent: 'text-emerald-400',
      border: 'hover:border-emerald-500/30',
      line: 'via-emerald-500/40',
    },
    sky: {
      icon: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
      badge: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
      tag: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
      accent: 'text-sky-400',
      border: 'hover:border-sky-500/30',
      line: 'via-sky-500/40',
    },
    violet: {
      icon: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
      badge: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
      tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
      accent: 'text-violet-400',
      border: 'hover:border-violet-500/30',
      line: 'via-violet-500/40',
    },
  }
  const c = colorMap[color]

  return (
    <motion.div {...fadeUp(delay)}>
      <div className={`group h-full card-base ${c.border} hover:-translate-y-1 transition-all
                       duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative overflow-hidden`}>
        <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${c.line} to-transparent`} />
        <div className="p-7">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${c.icon}`}>
              <Icon size={20} />
            </div>
            <span className={`inline-flex items-center gap-1 text-[11px] font-bold
                               border px-2.5 py-1 rounded-full ${c.badge}`}>
              <Award size={10} />
              {grade}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map(t => (
              <span key={t} className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${c.tag}`}>{t}</span>
            ))}
          </div>

          <h3 className="text-lg font-bold text-text-primary mb-5">{title}</h3>

          {/* PSI structure */}
          <div className="space-y-3 mb-5">
            {[
              { icon: AlertCircle, label: 'Problem', text: problem, col: 'text-red-400/70' },
              { icon: Lightbulb,   label: 'Built',   text: build,   col: 'text-sky-400/70' },
              { icon: Zap,         label: 'Value',   text: value,   col: 'text-emerald-400/70' },
            ].map(row => (
              <div key={row.label} className="flex gap-3">
                <row.icon size={14} className={`${row.col} flex-shrink-0 mt-0.5`} />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">{row.label} — </span>
                  <span className="text-[12px] text-text-secondary leading-relaxed">{row.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1A2744]/60">
            {stack.map(t => (
              <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border
                                        border-white/[0.08] text-[#6B7E9A] rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 inset-x-0 h-px glow-line" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full
                      bg-violet-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-3">
            Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Things I&apos;ve built.
            </h2>
            <p className="text-sm text-[#6B7E9A] max-w-xs">
              Real systems. Real problems. Measurable outcomes.
            </p>
          </div>
        </motion.div>

        {/* ═══ FEATURED: SmartHire ═══ */}
        <motion.div {...fadeUp(0.1)} className="mb-10">
          <div className="group relative overflow-hidden rounded-2xl border border-sky-500/20
                          bg-[#0D1525] hover:border-sky-500/35 transition-all duration-300
                          hover:shadow-[0_20px_64px_rgba(0,0,0,0.55)] hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-500 via-violet-500 to-emerald-500" />
            <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full
                            bg-sky-500/[0.04] blur-[80px] pointer-events-none" />

            <div className="relative p-8 sm:p-10">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-7">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full
                                 bg-gradient-to-r from-sky-500/20 to-violet-500/20 text-sky-300
                                 border border-sky-500/25">
                  <Star size={11} className="fill-sky-400 text-sky-400" />
                  Featured Project
                </span>
                {['Flask · Python', 'Gemini API', 'AI Automation', 'Prompt Engineering'].map(t => (
                  <span key={t} className="tag-sky">{t}</span>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                {/* Left */}
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20
                                    flex items-center justify-center flex-shrink-0">
                      <Brain size={22} className="text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary">SmartHire</h3>
                      <p className="text-sm text-[#6B7E9A]">AI Resume Screening System</p>
                    </div>
                  </div>

                  {/* PSI — large version */}
                  <div className="space-y-5 mb-7">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={13} className="text-red-400/80 flex-shrink-0" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-red-400/70">Problem</span>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed pl-5">
                        Manual resume screening doesn&apos;t scale. Reviewing 50+ CVs by hand
                        takes hours, introduces inconsistency, and misses qualified candidates —
                        especially under time pressure.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Lightbulb size={13} className="text-sky-400/80 flex-shrink-0" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400/70">Solution</span>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed pl-5">
                        Built a Flask web app powered by Gemini AI — extracts and structures
                        job requirements into must-have vs. bonus criteria, parses uploaded
                        CVs (PDF &amp; DOCX), and scores every candidate through a
                        weighted matching engine with a local skills database.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Zap size={13} className="text-emerald-400/80 flex-shrink-0" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400/70">Impact</span>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed pl-5">
                        Recruiter gets a ranked, filterable shortlist in minutes — not hours.
                        Consistent scoring every time. Full export for handoff.
                      </p>
                    </div>
                  </div>

                  {/* Impact metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-7">
                    {[
                      { value: '−85%', label: 'Screening time' },
                      { value: 'PDF+DOCX', label: 'Input formats' },
                      { value: '100%', label: 'Consistent score' },
                    ].map(m => (
                      <div key={m.label} className="bg-white/[0.03] border border-white/[0.06]
                                                     rounded-xl p-3 text-center">
                        <div className="text-base font-bold text-sky-400">{m.value}</div>
                        <div className="text-[10px] text-[#6B7E9A] mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10
                               hover:bg-sky-500/20 text-sky-300 border border-sky-500/25
                               rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5
                               hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                  >
                    <ExternalLink size={15} />
                    Request Demo
                  </a>
                </div>

                {/* Right: capability list */}
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#6B7E9A] mb-4">
                    System Capabilities
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      { title: 'LLM Requirement Extraction', desc: 'Gemini API classifies job descriptions into structured must-have vs. bonus criteria.' },
                      { title: 'Prompt Engineering Layer',   desc: 'Carefully tuned prompts improve matching accuracy across different JD formats.' },
                      { title: 'Multi-format CV Ingestion',  desc: 'Batch upload PDF + DOCX. Structured data extracted from unstructured resumes.' },
                      { title: 'Weighted Scoring Engine',    desc: 'Candidates ranked using criteria weights + local skills DB. No keyword guessing.' },
                      { title: 'Filter & Export',            desc: 'Set threshold, filter by must-have compliance, export shortlist cleanly.' },
                    ].map(f => (
                      <div key={f.title} className="flex gap-3 p-3.5 rounded-xl bg-white/[0.025]
                                                     border border-white/[0.05] hover:border-sky-500/20
                                                     hover:bg-white/[0.035] transition-all">
                        <ChevronRight size={14} className="text-sky-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-text-primary mb-0.5">{f.title}</div>
                          <div className="text-[11px] text-[#6B7E9A] leading-relaxed">{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="mt-4 pt-4 border-t border-[#1A2744]/60">
                    <p className="text-[10px] text-[#6B7E9A] uppercase tracking-widest mb-2">Built with</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'Flask', 'Gemini API', 'PyMuPDF', 'python-docx', 'Pandas', 'HTML/CSS'].map(t => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-white/5
                                                  border border-white/[0.08] text-[#6B7E9A] rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 3 smaller projects ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            icon={BarChart2}
            color="emerald"
            grade="93 / 100"
            tags={['Power BI', 'SQL', 'Star Schema']}
            title="SaaS Sales BI Dashboard"
            problem="A SaaS business with fragmented sales data, no reporting structure, and no visibility into what was driving revenue."
            build="Designed a star-schema data warehouse, ran ETL, and built a multi-page Power BI dashboard suite tracking sales KPIs, customer segments, and business metrics."
            value="Stakeholders went from guessing to deciding — dashboards surfaced clear patterns, with recommendations tied directly to findings."
            stack={['Power BI', 'SQL', 'DAX', 'Excel', 'Data Modeling']}
            delay={0.2}
          />
          <ProjectCard
            icon={Music2}
            color="sky"
            grade="95 / 100"
            tags={['Advanced Excel', 'Data Analysis']}
            title="Spotify Data Analysis"
            problem="A large Spotify dataset with no clear story — what actually makes songs succeed, and does it change over time?"
            build="Used advanced Excel tools to clean, segment, and analyze streaming data — pivot tables, statistical analysis, pattern detection across years of tracks."
            value="Identified clear, data-backed patterns in what drives song performance — visualized in a dashboard built for insight, not decoration."
            stack={['Excel', 'Pivot Tables', 'Charts', 'Statistical Analysis', 'Data Cleaning']}
            delay={0.3}
          />
          <ProjectCard
            icon={TrendingUp}
            color="violet"
            grade="95 / 100"
            tags={['Linear Programming', 'Excel Solver']}
            title="OR Optimization Model"
            problem="A resource allocation decision with multiple variables, competing constraints, and no obvious optimal answer — the kind solved by guessing without a model."
            build="Formulated a full linear programming model — defined decision variables, constraints, and objective function — then solved with Excel Solver."
            value="Sensitivity analysis revealed which constraints were binding and which decisions had the most leverage. Clear recommendations, not just a number."
            stack={['Excel Solver', 'Linear Programming', 'Sensitivity Analysis', 'Quantitative Modeling']}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}
