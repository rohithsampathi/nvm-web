// components/layout/Footer.tsx

import Link from 'next/link'
import { CONTACT, SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3 className="font-display text-2xl mb-4">{SITE.name}</h3>
          <p className="max-w-xs leading-relaxed">{SITE.tagline}</p>
        </div>

        <div>
          <h4 className="font-medium mb-4 uppercase tracking-wide text-sm">
            Quick Links
          </h4>
          {[
            ['Home', '/'],
            ['Nandanavanam', '/nandanavanam'],
            ['Team', '/team'],
            ['Contact', '/contact'],
          ].map(([label, href]) => (
            <p key={label}>
              <Link href={href} className="footer-link text-sm">
                {label}
              </Link>
            </p>
          ))}
        </div>

        <div>
          <h4 className="font-medium mb-4 uppercase tracking-wide text-sm">
            Reach Us
          </h4>
          <address className="not-italic text-sm leading-relaxed">
            {CONTACT.address}
            <br />
            <a href={`tel:${CONTACT.phone}`} className="footer-link">
              {CONTACT.phone}
            </a>
            <br />
            <a href={`mailto:${CONTACT.email}`} className="footer-link underline">
              {CONTACT.email}
            </a>
          </address>
        </div>

        <div>
          <h4 className="font-medium mb-4 uppercase tracking-wide text-sm">
            Site Visits
          </h4>
          <p className="text-sm">10 AM – 6 PM • By appointment</p>
        </div>
      </div>

      <div className="divider">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  )
}

