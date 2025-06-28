// components/ui/InteractiveButtons.tsx

'use client'
import Link from 'next/link'
import { Phone, Download, Calendar } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function InteractiveButtons() {
  return (
    <div className="hero-cta">
      <Link
        href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
        className="btn-primary"
      >
        <Phone className="h-4 w-4" />
        WhatsApp
      </Link>

      <Link href="/downloads/AOGF_NVM.pdf" download className="btn-secondary">
        <Download className="h-4 w-4" />
        Brochure
      </Link>

      <Link href="#visit" className="btn-primary from-gold to-teal">
        <Calendar className="h-4 w-4" />
        Schedule Visit
      </Link>
    </div>
  )
}
