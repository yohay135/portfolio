'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, FileDown, Mail, Zap } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 dot-bg opacity-60" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#080C16_100%)]" />

      {/* Top glow orb */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px]
                   rounded-full opacity-[0.07] blur-[100px]"
        style={{ background: 'radial-gradient(circle, #38BDF8 0%, #818CF8 100%)' }}
      />

      {/* Content grid */}
      <div className="section-container relative z-10 w-full pt-28 pb-16
                      grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Left: text ── */}
        <div className="flex flex-col gap-5">

          {/* Availability badge */}
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest
                             uppercase text-sky-400 border border-sky-500/25 bg-sky-500/[0.08]
                             px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse-slow" />
              Available for internship &amp; student roles
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold
                       leading-[1.1] tracking-tight"
          >
            I build systems that{' '}
            <span className="text-gradient-hero">turn data into decisions.</span>
          </motion.h1>

          {/* Sharp subtext — 3 short sentences */}
          <motion.div {...fadeUp(0.3)} className="space-y-2 max-w-[520px]">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              IE&amp;M student specializing in data analytics, BI, and AI-driven automation.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              I solve real operational problems — not just model them.
            </p>
            {/* Proof statement */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center gap-2 bg-emerald-500/[0.08] border border-emerald-500/20
                              rounded-full px-3.5 py-1.5">
                <Zap size={12} className="text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-medium text-emerald-300">
                  Built an AI screening system that cut manual review time by 85%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stat pills */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-2.5">
            {[
              { label: '3rd Year', sub: 'IE&M · Azrieli' },
              { label: '93–95', sub: 'Project Grades' },
              { label: '4', sub: 'Projects Built' },
              { label: 'Python · SQL · BI', sub: 'Core Stack' },
            ].map((s) => (
              <div
                key={s.sub}
                className="flex flex-col px-3.5 py-2 bg-white/[0.04] border border-white/[0.08]
                           rounded-xl backdrop-blur-sm"
              >
                <span className="text-sm font-bold text-text-primary">{s.label}</span>
                <span className="text-[11px] text-text-muted uppercase tracking-wider">{s.sub}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400
                         text-white font-semibold text-sm rounded-xl transition-all duration-200
                         shadow-[0_0_24px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]
                         hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              See Projects
              <ArrowRight size={16} />
            </button>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A2744]
                         hover:border-sky-500/40 text-text-secondary hover:text-text-primary
                         font-semibold text-sm rounded-xl transition-all duration-200
                         hover:-translate-y-0.5 hover:bg-sky-500/5 active:scale-[0.98]"
            >
              <FileDown size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Social */}
          <motion.div {...fadeUp(0.6)} className="flex items-center gap-4 pt-1">
            <span className="text-xs text-text-muted">Find me on</span>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/yohay-mabari-171364256"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#1A2744] flex items-center justify-center
                           text-text-secondary hover:text-sky-400 hover:border-sky-500/30
                           hover:bg-sky-500/5 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:yohay135@gmail.com"
                className="w-9 h-9 rounded-lg border border-[#1A2744] flex items-center justify-center
                           text-text-secondary hover:text-sky-400 hover:border-sky-500/30
                           hover:bg-sky-500/5 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Right: SmartHire mock UI ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="hidden lg:flex flex-col items-end gap-3"
        >
          {/* Label above the UI */}
          <div className="flex items-center gap-2 self-start ml-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="text-[11px] font-medium text-text-muted uppercase tracking-widest">
              Real project — AI-powered resume screening
            </span>
          </div>

          <div className="relative w-full max-w-[440px] animate-float">
            {/* Card glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-500/20
                            to-violet-500/10 blur-sm" />

            {/* Window */}
            <div className="relative bg-[#0D1525] rounded-2xl border border-[#1A2744] overflow-hidden
                            shadow-[0_24px_80px_rgba(0,0,0,0.6)]">

              {/* Chrome */}
              <div className="flex items-center gap-2 px-4 py-3.5 border-b border-[#1A2744] bg-[#080C16]/60">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-[11px] font-mono text-text-muted px-3 py-0.5 bg-white/5 rounded-md">
                    SmartHire — Candidate Review
                  </span>
                </div>
              </div>

              {/* Toolbar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1A2744]/60 bg-[#0A1020]">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted">Role:</span>
                  <span className="text-xs font-medium text-sky-300 bg-sky-500/10 px-2 py-0.5
                                   rounded-md border border-sky-500/20">
                    Data Analyst
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-text-muted">12 candidates</span>
                  <span className="w-1 h-1 rounded-full bg-text-muted/50" />
                  <span className="text-[10px] text-emerald-400 font-medium">7 shortlisted</span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#1A2744]/40">
                {[
                  { name: 'Alex Johnson', score: 94, status: 'Strong Match', color: 'emerald', skills: ['SQL', 'Python'] },
                  { name: 'Sarah Chen',   score: 88, status: 'Good Fit',     color: 'emerald', skills: ['Power BI', 'Excel'] },
                  { name: 'Maya Torres', score: 76, status: 'Partial Fit',  color: 'sky',     skills: ['Python', 'Tableau'] },
                  { name: 'Mike Peters', score: 52, status: 'Reviewing',    color: 'amber',   skills: ['Excel'] },
                  { name: 'Chris Ward',  score: 31, status: 'Below Bar',    color: 'red',     skills: [] },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/[0.02] transition-colors">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px]
                                    font-bold flex-shrink-0
                                    ${c.color === 'emerald' ? 'bg-emerald-500/15 text-emerald-400' :
                                      c.color === 'sky'     ? 'bg-sky-500/15 text-sky-400' :
                                      c.color === 'amber'   ? 'bg-amber-500/15 text-amber-400' :
                                                              'bg-red-500/15 text-red-400'}`}>
                      {c.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-text-primary truncate">{c.name}</div>
                      <div className="flex gap-1 mt-0.5">
                        {c.skills.map(s => (
                          <span key={s} className="text-[9px] text-text-muted bg-white/5 px-1.5 rounded">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className={`text-sm font-bold
                                       ${c.color === 'emerald' ? 'text-emerald-400' :
                                         c.color === 'sky'     ? 'text-sky-400' :
                                         c.color === 'amber'   ? 'text-amber-400' :
                                                                  'text-red-400'}`}>
                        {c.score}%
                      </div>
                      <div className="text-[9px] text-text-muted">{c.status}</div>
                    </div>
                    <div className="w-12 h-1 rounded-full bg-white/5 flex-shrink-0 overflow-hidden">
                      <div
                        className={`h-full rounded-full
                                    ${c.color === 'emerald' ? 'bg-emerald-400' :
                                      c.color === 'sky'     ? 'bg-sky-400' :
                                      c.color === 'amber'   ? 'bg-amber-400' :
                                                              'bg-red-400'}`}
                        style={{ width: `${c.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Action bar */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-[#1A2744]/60 bg-[#0A1020]/60">
                <span className="text-[10px] text-text-muted">Powered by Gemini AI + Skills DB</span>
                <div className="flex gap-2">
                  <button className="text-[10px] px-2.5 py-1 border border-[#1A2744] text-text-secondary
                                     rounded-md hover:border-sky-500/30 transition-colors">
                    Filter
                  </button>
                  <button className="text-[10px] px-2.5 py-1 bg-sky-500/90 text-white rounded-md font-medium">
                    Export
                  </button>
                </div>
              </div>
            </div>

            {/* Floating impact badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#0D1525] border border-emerald-500/25
                            rounded-xl px-3 py-2 shadow-card animate-float-delayed">
              <div className="text-[10px] text-text-muted">Screening time</div>
              <div className="text-sm font-bold text-emerald-400">−85%</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] text-text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowRight size={14} className="text-text-muted rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  )
}
