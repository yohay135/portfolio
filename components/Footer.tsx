'use client'

import { Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1A2744]">
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center
                           justify-center text-sky-400 font-bold text-sm">
            Y
          </span>
          <span className="text-sm text-text-muted">
            © {year} Yohay Mabari. All rights reserved.
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1">
          {[
            { icon: Linkedin, href: 'https://www.linkedin.com/in/yohay-mabari-171364256', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:yohay135@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted
                         hover:text-sky-400 hover:bg-sky-500/10 transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
