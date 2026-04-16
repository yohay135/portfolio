'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, FileDown, ArrowRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 inset-x-0 h-px glow-line" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(56,189,248,0.04),transparent)]" />

      <div className="section-container relative">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-5">
            Let&apos;s talk.
          </h2>
          {/* Direct, specific CTA text */}
          <p className="text-text-secondary text-[1.05rem] leading-relaxed">
            I&apos;m looking for a{' '}
            <strong className="text-text-primary font-semibold">
              data analyst, BI, or junior analytics role
            </strong>
            {' '}— student or internship level. If you&apos;re hiring or want to connect,
            reach out directly.
          </p>
        </motion.div>

        {/* ── Email CTA — prominent ── */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-8">
          <a
            href="mailto:yohay135@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-sky-500 hover:bg-sky-400
                       text-white font-semibold text-base rounded-xl transition-all duration-200
                       shadow-[0_0_28px_rgba(56,189,248,0.3)] hover:shadow-[0_0_44px_rgba(56,189,248,0.5)]
                       hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail size={18} />
            yohay135@gmail.com
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* ── Secondary contact cards ── */}
        <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto mb-12">
          <a
            href="https://www.linkedin.com/in/yohay-mabari-171364256"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-6 py-3.5 card-base
                       hover:border-emerald-500/35 hover:-translate-y-0.5 transition-all duration-300
                       hover:shadow-[0_0_24px_rgba(52,211,153,0.1)]"
          >
            <Linkedin size={18} className="text-emerald-400" />
            <div className="text-left">
              <div className="text-xs text-[#6B7E9A] uppercase tracking-wider">LinkedIn</div>
              <div className="text-sm font-semibold text-text-primary group-hover:text-emerald-300
                              transition-colors">
                yohay-mabari
              </div>
            </div>
          </a>

          <a
            href="/cv.pdf"
            download
            className="group flex items-center justify-center gap-3 px-6 py-3.5 card-base
                       hover:border-violet-500/35 hover:-translate-y-0.5 transition-all duration-300
                       hover:shadow-[0_0_24px_rgba(129,140,248,0.1)]"
          >
            <FileDown size={18} className="text-violet-400" />
            <div className="text-left">
              <div className="text-xs text-[#6B7E9A] uppercase tracking-wider">Resume</div>
              <div className="text-sm font-semibold text-text-primary group-hover:text-violet-300
                              transition-colors">
                Download CV
              </div>
            </div>
          </a>
        </motion.div>

        {/* Currently open to */}
        <motion.div
          {...fadeUp(0.3)}
          className="max-w-xl mx-auto text-center p-6 rounded-2xl border border-[#1A2744]
                     bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.03),transparent)]"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6B7E9A] mb-3">
            Currently open to
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Data Analyst', 'BI Analyst', 'Junior Analytics', 'Operations Analyst', 'Technical Business'].map(role => (
              <span key={role}
                className="text-xs font-medium text-text-secondary border border-[#1A2744]
                           bg-white/[0.03] px-3 py-1.5 rounded-full">
                {role}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
