'use client'

import { motion } from 'framer-motion'
import { BookOpen, TrendingUp, Shield, Cpu } from 'lucide-react'

const stats = [
  { value: '3rd Year', label: 'Azrieli IE&M', icon: BookOpen },
  { value: '93–95', label: 'Project Grades', icon: TrendingUp },
  { value: '4', label: 'Projects Built', icon: Cpu },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full
                      bg-sky-500/[0.04] blur-[80px] pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Where analytical thinking meets practical execution.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">

          {/* ── Text column: 3 structured blocks ── */}
          <div className="space-y-8">

            {/* Block 1: Who I am */}
            <motion.div {...fadeUp(0.1)} className="space-y-2">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-sky-500/70">
                Who I am
              </p>
              <p className="text-text-secondary text-[1.02rem] leading-relaxed">
                3rd-year Industrial Engineering &amp; Management student at Azrieli College
                of Engineering, Jerusalem.{' '}
                <strong className="text-text-primary font-semibold">
                  I bridge the gap between raw data and business decisions
                </strong>{' '}
                — combining analytical training with hands-on systems building.
              </p>
            </motion.div>

            {/* Block 2: How I work */}
            <motion.div {...fadeUp(0.2)} className="space-y-2">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-sky-500/70">
                How I work
              </p>
              <p className="text-text-secondary text-[1.02rem] leading-relaxed">
                Data only matters when it drives action.{' '}
                <strong className="text-text-primary font-semibold">
                  I don&apos;t build dashboards for aesthetics — I build them because someone
                  needs to know where the bottleneck is.
                </strong>{' '}
                Every project I build starts with a real problem and ends with a usable output.
              </p>
            </motion.div>

            {/* Block 3: What sets me apart */}
            <motion.div {...fadeUp(0.3)} className="space-y-3">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-sky-500/70">
                What sets me apart
              </p>
              <p className="text-text-secondary text-[1.02rem] leading-relaxed">
                My IE&amp;M background gives me system-level thinking most technical roles
                don&apos;t get from pure CS grads — I model processes, not just code them.
              </p>
              {/* Military badge — highlighted */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-[#1E3A5F]
                              bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.05),transparent)]
                              mt-1">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20
                                flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield size={18} className="text-sky-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary mb-0.5">
                    Military Service — Golani Infantry Brigade
                  </div>
                  <div className="text-sm text-text-secondary leading-relaxed">
                    Combat soldier (2016–2019). Active reserve since 2023 —{' '}
                    <strong className="text-sky-300 font-semibold">300+ operational days</strong>
                    {' '}while studying full-time. Builds a different kind of discipline
                    and tolerance for ambiguity.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Focus tags */}
            <motion.div {...fadeUp(0.4)}>
              <div className="flex flex-wrap gap-2">
                {['Data Analysis', 'Business Intelligence', 'AI Automation', 'Process Optimization', 'Decision Support'].map((tag) => (
                  <span key={tag}
                    className="text-xs font-medium text-text-secondary border border-[#1A2744]
                               bg-white/[0.03] px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Stats column ── */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(0.15 + i * 0.1)}
                className="card-base card-hover p-5 flex flex-col gap-3 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20
                                flex items-center justify-center">
                  <s.icon size={17} className="text-sky-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs text-[#6B7E9A] font-medium uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Third stat — spans full col */}
            <motion.div
              {...fadeUp(0.45)}
              className="col-span-2 card-base card-hover p-5 flex flex-col gap-3 cursor-default"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20
                              flex items-center justify-center">
                <Shield size={17} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-text-primary leading-none mb-1">300+</div>
                <div className="text-xs text-[#6B7E9A] font-medium uppercase tracking-wide">
                  Reserve Days Active
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              {...fadeUp(0.55)}
              className="col-span-2 card-base p-5 border-sky-500/15
                         bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.04),transparent)]"
            >
              <p className="text-sm text-text-secondary leading-relaxed italic">
                &ldquo;The goal is not to have more data. The goal is to have
                clearer decisions.&rdquo;
              </p>
              <p className="text-xs text-[#6B7E9A] mt-2">— My approach to every project</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
