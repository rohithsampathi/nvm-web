// components/ui/ContactButtons.tsx

'use client'

import { Phone, Download } from 'lucide-react'

export default function ContactButtons() {
  // Handle WhatsApp contact
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/917337537773?text=Hi, I am interested in Nandanavanam project', '_blank')
  }

  // Handle brochure download
  const handleBrochureDownload = () => {
    // Replace with actual brochure URL
    window.open('/downloads/nandanavanam-brochure.pdf', '_blank')
  }

  return (
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
      <button 
        onClick={handleWhatsAppContact}
        className="flex items-center space-x-2 hover:text-orange-500 transition-colors focus:outline-none focus:text-orange-500"
      >
        <Phone className="h-4 w-4" />
        <span>+91 7337537773</span>
      </button>
      <span className="hidden sm:block text-gray-300">|</span>
      <button 
        onClick={handleBrochureDownload}
        className="flex items-center space-x-2 hover:text-orange-500 transition-colors focus:outline-none focus:text-orange-500"
      >
        <Download className="h-4 w-4" />
        <span>Company Profile</span>
      </button>
    </div>
  )
}