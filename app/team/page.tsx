// app/team/page.tsx

import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import { LEADERSHIP, CORE_TEAM } from '@/lib/constants'
import Reveal from '@/components/ui/Reveal'
import MetaTags from '@/components/layout/MetaTags'

export default function TeamPage() {
  return (
    <>
      <MetaTags
        title="Our Team - Leadership & Core Team"
        description="Meet the experienced minds behind AO Green Fields. Our leadership team brings decades of expertise in real estate, finance, and community development across Telangana."
        ogImage="/images/og/team-og.jpg"
        url="/team"
        keywords="AO Green Fields team, real estate leadership, Telangana developers, property management team"
        schema="organization"
      />
      
      {/* ── ENHANCED HERO SECTION ────────────────────────────────── */}
      <section className="hero-enhanced">
        <div className="hero-bg-pattern"></div>
        <div className="container relative z-10">
          <div className="hero-content">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-stone/90 mb-6">
              <span>Meet Our Team</span>
            </div>
            <h1 className="hero-title">The Minds Behind AO Green Fields</h1>
            <p className="hero-description">
              Relationships first, buildings second. <em>Would we want our families 
              to live here?</em> Our team brings decades of experience in real estate, 
              finance, and community development to create spaces that truly matter.
            </p>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SECTION ─────────────────────────────── */}
      <section className="section-pad bg-stone">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-3xl text-navy mb-14">Leadership</h2>
          </Reveal>
          
          <div className="grid gap-20 md:grid-cols-2">
            {LEADERSHIP.map(person => (
              <Reveal key={person.name}>
                <div className="leadership-card group">
                  <div className="leadership-image">
                    <Image 
                      src={person.img} 
                      alt={person.name}
                      width={720} 
                      height={900}
                      className="leadership-img"
                    />
                    <div className="leadership-overlay" />
                    <div className="leadership-content">
                      <h3 className="leadership-name">{person.name}</h3>
                      <p className="leadership-role">{person.role}</p>
                      <p className="leadership-bio">{person.bio}</p>
                      <div className="leadership-links">
                        <a 
                          href={person.linkedIn}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="leadership-link"
                        >
                          <Linkedin className="h-5 w-5"/>
                        </a>
                        <a 
                          href={`mailto:${person.email}`}
                          className="leadership-link"
                        >
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 4h20v16H2z" fill="none"/>
                            <path d="M22 4H2v16h20V4zm-2 2v.511l-8 6.222-8-6.222V6h16zM4 18V8.234l8 6.222 8-6.222V18H4z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── CORE TEAM SECTION ─────────────────────────────── */}
          <Reveal>
            <h2 className="font-display text-3xl text-navy mt-32 mb-14">Core Team</h2>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">
            {CORE_TEAM.map(member => (
              <Reveal key={member.name}>
                <div className="core-team-card">
                  <div className="core-team-image">
                    <Image 
                      src={member.img} 
                      alt={member.name}
                      width={500} 
                      height={600}
                      className="core-team-img"
                    />
                  </div>
                  <div className="core-team-content">
                    <p className="core-team-name">{member.name}</p>
                    <p className="text-sm text-ink/70 mb-3">{member.bio}</p>
                    <div className="core-team-link">
                      <a 
                        href={member.linkedIn}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-navy hover:text-teal transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}