// components/layout/Header.tsx

'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)

  /* compact = <1024 px → only hamburger */
  useEffect(() => {
    const detect = () => setCompact(window.innerWidth < 1024)
    detect()
    window.addEventListener('resize', detect)
    return () => window.removeEventListener('resize', detect)
  }, [])

  const links: [string, string][] = [
    ['Home', '/'],
    ['Nandanavanam', '/nandanavanam'],
    ['Team', '/team'],
    ['Contact', '/contact'],
  ]

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logos/aogflogo.png" alt="AO Green Fields" width={90} height={90} priority />
          <span className="font-display text-2xl tracking-wide text-stone">
            AO Green Fields
          </span>
        </Link>

        {/* full nav */}
        {!compact && (
          <nav>
            <ul className="flex items-center gap-10">
              {links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="nav-link px-4 py-2 uppercase">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* hamburger */}
        {compact && (
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-stone p-2 hover:bg-white/10 rounded-md"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        )}

        {/* mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10, scale: .95 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              exit={{   opacity: 0, y: -10, scale: .95 }}
              transition={{ duration: .22, ease: 'easeOut' }}
              className="absolute right-4 top-full mt-3 w-72 rounded-2xl bg-white/95 backdrop-blur-lg shadow-xl ring-1 ring-black/5"
            >
              <ul className="divide-y divide-ink/5">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block px-7 py-4 text-sm uppercase tracking-wide text-ink hover:text-gold hover:bg-ink/5 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

