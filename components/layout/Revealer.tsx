// components/layout/Revealer.tsx
'use client'
import { useEffect } from 'react'

export default function Revealer() {
  useEffect(() => {
    // flag that JS is available – avoids blank SSR flash
    document.documentElement.classList.add('js-enabled')

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll<HTMLElement>('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
