// app/page.tsx

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, MapPin, Calendar, Sparkles } from 'lucide-react'
import { SITE, WHY_STATS, PORTFOLIO, CONTACT } from '@/lib/constants'
import Reveal from '@/components/ui/Reveal'
import MetaTags from '@/components/layout/MetaTags'

export default function HomePage() {
  return (
    <>
      <MetaTags
        title="AO Green Fields - Building Telangana's Most Thoughtful Communities"
        description="Premium residential communities across Telangana. 15+ years of experience creating wellness-focused living spaces. DTCP approved, RERA certified projects with 500+ happy families."
        ogImage="/images/og/home-og.jpg"
        url="/"
        keywords="AO Green Fields, Telangana real estate, premium communities, residential projects, DTCP approved, RERA certified, Hyderabad properties"
        schema="organization"
      />
      {/* ── ENHANCED HERO ───────────────────────────────── */}
      <section className="hero-enhanced">
        <div className="hero-bg-pattern"></div>
        <div className="container relative z-10">
          <div className="hero-content">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-stone/90 mb-6">
              <Sparkles className="h-4 w-4 text-gold" />
              <span>Telangana's Most Thoughtful Communities</span>
            </div>
            <h1 className="hero-title">{SITE.tagline}</h1>
            <p className="hero-description">
              AO Green Fields creates premium residential spaces where location 
              intelligence meets lifestyle design. Experience the perfect blend of 
              <span className="text-gold font-medium"> wellness, luxury, and strategic investment</span>.
            </p>
            <div className="hero-cta">
              <Link href="/nandanavanam" className="btn-primary-large">
                <span>Explore Nandanavanam</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/team" className="btn-secondary-large">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT WITH SINGLE LOGO ───────────────────────────── */}
      <section className="section-pad-large">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            {/* Content */}
            <Reveal>
              <div className="prose-enhanced">
                <h2 className="section-title">About AO Green Fields</h2>
                <p className="text-lg leading-relaxed text-ink/80 mb-6">
                  For over <span className="text-teal font-semibold">15 years</span> we've developed 
                  premium communities across Telangana. We invest in locations before they boom, 
                  build infrastructure before we sell, and craft neighbourhoods that appreciate 
                  in both value and quality of life.
                </p>
                <div className="flex items-center gap-4 text-sm text-ink/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span>DTCP Approved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>RERA Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green rounded-full"></div>
                    <span>Bank Approved</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Single AOGF Logo - Clean Logo Only */}
            <Reveal y={30}>
              <div className="flex justify-center">
                <Image
                  src="/images/logos/aogfg.jpg"
                  alt="AO Green Fields Logo"
                  width={400}
                  height={300}
                  className="w-full max-w-lg h-auto object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE (ENHANCED STATS) ──────────────────── */}
      <section className="section-pad bg-gradient-to-br from-navy to-navy/90">
        <div className="container">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="section-title text-stone mb-4">Why Choose AO Green Fields</h2>
              <p className="text-stone/80 text-lg">Building trust through transparency and excellence</p>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {WHY_STATS.map(([value, label], index) => (
              <Reveal key={label} delay={index * 0.1}>
                <div className="stats-card">
                  <div className="stats-value">{value}</div>
                  <div className="stats-label">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ─────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="section-title">Our Portfolio</h2>
              <p className="text-ink/70 text-lg">Proven track record of delivering exceptional communities</p>
            </Reveal>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {PORTFOLIO.map(({ title, location, status, img }, index) => (
              <Reveal key={title} y={30} delay={index * 0.1}>
                <div className="portfolio-card group">
                  <div className="portfolio-image">
                    <Image
                      src={img}
                      alt={title}
                      width={800}
                      height={600}
                      className="portfolio-img"
                    />
                    <div className="portfolio-overlay">
                      <span className="portfolio-status">{status}</span>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <h3 className="portfolio-title">{title}</h3>
                    <p className="portfolio-location">{location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA SECTION ──────────────────────────── */}
      <section className="cta-section">
        <div className="cta-bg-pattern"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <Reveal>
              <div className="cta-content">
                <h2 className="cta-title">
                  Ready to Discover Your 
                  <span className="text-gold"> Dream Community</span>?
                </h2>
                <p className="cta-description">
                  Join the families who've already secured their place in Telangana's 
                  most thoughtful residential developments. Our team is ready to guide 
                  you through every step of your journey.
                </p>
                <div className="cta-features">
                  <div className="cta-feature">
                    <MapPin className="h-5 w-5 text-teal" />
                    <span>Site visits available daily</span>
                  </div>
                  <div className="cta-feature">
                    <Phone className="h-5 w-5 text-teal" />
                    <span>Instant WhatsApp support</span>
                  </div>
                  <div className="cta-feature">
                    <Calendar className="h-5 w-5 text-teal" />
                    <span>Flexible payment options</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTA Actions */}
            <Reveal y={30}>
              <div className="cta-actions">
                <Link 
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
                  className="btn-primary-large w-full justify-center"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Now</span>
                </Link>
                <Link 
                  href="/contact"
                  className="btn-secondary-large w-full justify-center"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Site Visit</span>
                </Link>
                <div className="text-center mt-6">
                  <p className="text-sm text-ink/60">
                    Call us directly at{' '}
                    <a 
                      href={`tel:${CONTACT.phone}`}
                      className="text-teal font-medium hover:text-teal/80 transition-colors"
                    >
                      {CONTACT.phone}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}