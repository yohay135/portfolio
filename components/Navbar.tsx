'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080C16]/90 backdrop-blur-xl border-b border-[#1A2744]/80 shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="section-container h-[68px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-base group-hover:bg-sky-500/20 transition-colors">
              Y
            </span>
            <span className="text-text-primary">
              Yohay Mabari
              <span className="text-text-muted font-normal">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg
                           hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/cv.pdf"
              download
              className="ml-3 px-4 py-2 text-sm font-semibold text-sky-400 border border-sky-500/30
                         rounded-lg hover:bg-sky-500/10 hover:border-sky-500/50 transition-all duration-200"
            >
              Download CV
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg
                       text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] inset-x-0 z-40 md:hidden bg-[#080C16]/95
                       backdrop-blur-xl border-b border-[#1A2744] shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
          >
            <nav className="section-container py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-text-secondary hover:text-text-primary
                             hover:bg-white/5 rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                download
                className="mt-2 mx-0 px-4 py-3 text-sm font-semibold text-sky-400 border
                           border-sky-500/30 rounded-xl hover:bg-sky-500/10 transition-colors text-center"
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
