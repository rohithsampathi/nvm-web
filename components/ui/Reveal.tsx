// components/ui/Reveal.tsx

'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  y?: number
  delay?: number
}

export default function Reveal({ children, y = 24, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="reveal"
    >
      {children}
    </motion.div>
  )
}