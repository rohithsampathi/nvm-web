// app/layout.tsx  
import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Revealer from '@/components/layout/Revealer'   // NEW

const manrope  = Manrope({ subsets: ['latin'], variable: '--font-manrope',  display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'AO Green Fields', template: '%s | AO Green Fields' },
  description: 'Premium communities where location intelligence meets lifestyle design.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        {/* installs the viewport observer once */}
        <Revealer />                      {/* NEW */}

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
