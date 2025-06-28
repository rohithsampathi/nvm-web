// app/nandanavanam/page.tsx

'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, MapPin, Users, Calendar, Phone, Download, ChevronDown, ChevronUp } from 'lucide-react'
import InteractiveButtons from '@/components/ui/InteractiveButtons'
import Reveal from '@/components/ui/Reveal'
import MetaTags from '@/components/layout/MetaTags'

export const dynamic = 'force-static'

export default function NandanavanamPage() {
  return (
    <>
      <MetaTags
        title="Nandanavanam - Wellness Community in Telangana's Golden Quadrilateral"
        description="150 exclusive living spaces with lifetime wellness membership. Located at the center of 4 mega infrastructure projects: NIMZ, Regional Ring Road, Mobility Valley. 400-1200 sq yds plots available."
        ogImage="/images/og/nandanavanam-og.jpg"
        url="/nandanavanam"
        keywords="Nandanavanam, wellness community, Golden Quadrilateral, NIMZ Zaheerabad, Haritha Retreats, residential plots Telangana"
        schema="product"
        schemaData={{
          name: "Nandanavanam Wellness Community",
          description: "150 exclusive wellness-focused residential plots with lifetime Haritha Retreats membership"
        }}
      />
      {/* ── ENHANCED HERO ────────────────────────────────── */}
      <section className="hero-wellness">
        <div className="hero-bg-pattern"></div>
        <div className="container relative z-10">
          <div className="hero-content">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-stone/90 mb-6">
              <Sparkles className="h-4 w-4 text-gold" />
              <span>Wellness Community</span>
            </div>
            <h1 className="hero-title">
              Nandanavanam
              <span className="block text-gold mt-2">The Golden Quadrilateral's Wellness Community</span>
            </h1>
            <p className="hero-description">
              150 exclusive living spaces where <span className="text-gold font-medium">strategic location</span> 
              meets <span className="text-teal font-medium">conscious living</span>. 
              Your wellness journey begins at home.
            </p>
            <InteractiveButtons />
          </div>
        </div>
      </section>

      {/* ── THE OPPORTUNITY WITH SINGLE NVM IMAGE ─────────────────────── */}
      <section className="section-pad-large">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            {/* Content */}
            <Reveal>
              <div className="prose-enhanced">
                <h2 className="section-title">The Opportunity</h2>
                <p className="text-lg leading-relaxed text-ink/80 mb-6">
                  Four mega‑infrastructure projects are converging to create 
                  Telangana's next growth corridor. At the centre sits Nandanavanam 
                  — <span className="text-teal font-semibold">150 living spaces</span> for 
                  families who see tomorrow's value today.
                </p>
                <div className="opportunity-highlights">
                  <div className="opportunity-item">
                    <div className="w-3 h-3 bg-teal rounded-full"></div>
                    <span>NIMZ Zaheerabad - ₹7,426 Cr Investment</span>
                  </div>
                  <div className="opportunity-item">
                    <div className="w-3 h-3 bg-gold rounded-full"></div>
                    <span>Regional Ring Road - 340 km Expressway</span>
                  </div>
                  <div className="opportunity-item">
                    <div className="w-3 h-3 bg-green rounded-full"></div>
                    <span>Wellness Partnership with Haritha Retreats</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Single NVM Image - Clean Logo Only */}
            <Reveal y={30}>
              <div className="flex justify-center">
                <Image
                  src="/images/logos/nvmlogo.png"
                  alt="Nandanavanam Infrastructure Overview"
                  width={500}
                  height={400}
                  className="w-full max-w-lg h-auto object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE MAP / MASTERPLAN TABS ──────────────── */}
      <section className="section-pad bg-white">
        <div className="container">
          <InteractiveMaps />
        </div>
      </section>

      {/* ── ENHANCED PROJECT DATA ─────────────────────────── */}
      <section className="section-pad-reduced">
        <div className="container">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="section-title">Project Details</h2>
              <p className="text-ink/70 text-lg">Transparency in every detail</p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <EnhancedHighlightsAccordion />
            </Reveal>
            <Reveal y={30}>
              <EnhancedProgressAccordion />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WELLNESS DIFFERENCE ───────────────────────────── */}
      <section className="wellness-section">
        <div className="container grid md:grid-cols-2 gap-14 items-center">
          <Reveal y={20}>
            <div className="prose prose-invert">
              <h2 className="text-stone">The Wellness Difference</h2>
              <p className="text-stone/90">
                In exclusive partnership with Haritha Retreats, every 
                Nandanavanam resident receives a lifetime wellness membership:
              </p>
              <div className="wellness-features">
                <div className="wellness-feature">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Unlimited consultations at NABH‑accredited facility</span>
                </div>
                <div className="wellness-feature">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Ayurveda & Naturopathy treatments</span>
                </div>
                <div className="wellness-feature">
                  <div className="w-2 h-2 bg-green rounded-full"></div>
                  <span>Yoga & meditation programs</span>
                </div>
                <div className="wellness-feature">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span>Preventive health assessments</span>
                </div>
                <div className="wellness-feature">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Preferential rates for extended family</span>
                </div>
                <div className="wellness-feature">
                  <div className="w-2 h-2 bg-green rounded-full"></div>
                  <span>Priority access to wellness retreats</span>
                </div>
              </div>
              <p className="mt-6 text-gold font-medium">
                Your own wellness centre — just five minutes from your doorstep.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="wellness-image">
              <Image
                src="/images/general/clubhouse.jpg"
                alt="Wellness Centre Render"
                width={640}
                height={420}
                className="rounded-xl shadow-soft object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rest of sections remain the same */}
      <LocationCommunity />
      
      <section className="section-pad bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-12">Project Gallery</h2>
          <Gallery />
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg-pattern"></div>
        <div className="container relative z-10 text-center">
          <h2 className="cta-title mb-12">
            Join 150 Families Crafting a 
            <span className="text-gold"> Wellness Legacy</span>
          </h2>
          <div className="hero-cta">
            <a href="/AOGF_brochure.pdf" download className="btn-primary-large">
              <Download className="h-5 w-5" />
              Download Brochure
            </a>
            <Link href="#visit" className="btn-secondary-large">
              <Calendar className="h-5 w-5" />
              Schedule Site Visit
            </Link>
            <a
              href="https://wa.me/917337537773?text=Hi%20I%20am%20interested%20in%20Nandanavanam"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-large"
            >
              <Phone className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ──────── ENHANCED INTERACTIVE COMPONENTS ────────── */
function InteractiveMaps() {
  const [tab, setTab] = useState<'map' | 'plan'>('map')
  
  return (
    <>
      <div className="flex gap-4 mb-8 justify-center">
        {[
          ['map', 'Golden Quadrilateral'],
          ['plan', 'Master Plan'],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key as 'map' | 'plan')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              tab === key
                ? 'bg-teal text-stone shadow-lg scale-105'
                : 'bg-stone border border-ink/10 hover:bg-ink/5 hover:border-teal/30'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      
      {tab === 'map' ? (
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <Image
            src="/images/general/goldenquad.jpg"
            alt="Golden Quadrilateral"
            width={640}
            height={420}
            className="rounded-xl shadow-soft object-cover"
          />
          <div className="prose-enhanced">
            <h3 className="text-2xl font-display text-navy mb-6">The Golden Quadrilateral</h3>
            <div className="space-y-4">
              <div className="infrastructure-item">
                <div className="w-3 h-3 bg-teal rounded-full"></div>
                <span><strong>NIMZ Zaheerabad (10 km)</strong> — ₹7,426 Cr</span>
              </div>
              <div className="infrastructure-item">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span><strong>Mobility Valley (15 km)</strong> — Aerospace & Defence hub</span>
              </div>
              <div className="infrastructure-item">
                <div className="w-3 h-3 bg-green rounded-full"></div>
                <span><strong>Regional Ring Road (2 km)</strong> — 340 km expressway</span>
              </div>
              <div className="infrastructure-item">
                <div className="w-3 h-3 bg-navy rounded-full"></div>
                <span><strong>Neopolis (20 km)</strong> — Upcoming satellite city</span>
              </div>
            </div>
            <p className="text-sm text-ink/70 mt-6 italic">
              When infrastructure of this magnitude converges, land values follow a predictable trajectory.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <Image
            src="/images/general/masterplan.jpg"
            alt="Master Plan Layout"
            width={640}
            height={420}
            className="rounded-xl shadow-soft object-cover"
          />
          <div className="prose-enhanced">
            <h3 className="text-2xl font-display text-navy mb-6">Master Plan Snapshot</h3>
            <div className="space-y-4">
              <div className="infrastructure-item">
                <div className="w-3 h-3 bg-teal rounded-full"></div>
                <span>Spaces distribution (400 – 1,200 sq yds)</span>
              </div>
              <div className="infrastructure-item">
                <div className="w-3 h-3 bg-gold rounded-full"></div>
                <span>4‑acre wellness zone</span>
              </div>
              <div className="infrastructure-item">
                <div className="w-3 h-3 bg-green rounded-full"></div>
                <span>Sports & recreation hub</span>
              </div>
              <div className="infrastructure-item">
                <div className="w-3 h-3 bg-navy rounded-full"></div>
                <span>40% green cover</span>
              </div>
              <div className="infrastructure-item">
                <div className="w-3 h-3 bg-teal rounded-full"></div>
                <span>33 ft & 40 ft internal road network</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function EnhancedAccordion({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="enhanced-accordion">
      <button
        onClick={() => setOpen(!open)}
        className="enhanced-accordion-trigger"
      >
        <span className="font-medium text-lg">{title}</span>
        <div className="accordion-icon">
          {open ? (
            <ChevronUp className="h-5 w-5 text-teal" />
          ) : (
            <ChevronDown className="h-5 w-5 text-ink/60" />
          )}
        </div>
      </button>
      {open && (
        <div className="enhanced-accordion-content">
          {children}
        </div>
      )}
    </div>
  )
}

function EnhancedHighlightsAccordion() {
  return (
    <EnhancedAccordion title="Project Highlights">
      <div className="highlights-grid">
        <div className="highlight-item">
          <div className="highlight-number">150</div>
          <div className="highlight-label">Total Spaces<br /><span className="text-xs text-ink/60">(capped, no future phases)</span></div>
        </div>
        <div className="highlight-item">
          <div className="highlight-number">34</div>
          <div className="highlight-label">Total Acres</div>
        </div>
        <div className="highlight-item">
          <div className="highlight-number">400-1200</div>
          <div className="highlight-label">Space Sizes<br /><span className="text-xs text-ink/60">(sq yds)</span></div>
        </div>
        <div className="highlight-item">
          <div className="highlight-number">NABH</div>
          <div className="highlight-label">Wellness Partner<br /><span className="text-xs text-ink/60">Haritha Retreats</span></div>
        </div>
      </div>
    </EnhancedAccordion>
  )
}

function EnhancedProgressAccordion() {
  const items: [string, 'done' | 'prog' | 'todo'][] = [
    ['Land acquisition', 'done'],
    ['DTCP & RERA approvals', 'done'],
    ['Master planning', 'done'],
    ['Bank loan facility', 'done'],
    ['Road infrastructure', 'prog'],
    ['Drainage systems', 'prog'],
    ['Electrical infrastructure', 'todo'],
    ['Wellness centre (Sep 2025)', 'todo'],
    ['Amenities', 'todo'],
    ['Landscaping & finishing', 'todo'],
  ]
  
  return (
    <EnhancedAccordion title="Development Progress">
      <div className="progress-list">
        {items.map(([label, state]) => (
          <div key={label} className="progress-item">
            <div className="progress-indicator">
              {state === 'done' && (
                <div className="w-4 h-4 rounded-full bg-teal flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
              {state === 'prog' && (
                <div className="w-4 h-4 animate-pulse rounded-full bg-gold flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
              {state === 'todo' && (
                <div className="w-4 h-4 border-2 border-ink/40 rounded-full"></div>
              )}
            </div>
            <span className="progress-label">{label}</span>
          </div>
        ))}
      </div>
    </EnhancedAccordion>
  )
}

function LocationCommunity() {
  return (
    <section className="section-pad">
      <div className="container grid md:grid-cols-2 gap-14">
        <Reveal>
          <div className="prose-enhanced">
            <h2 className="section-title">Location Advantages</h2>
            <div className="space-y-3">
              <div className="opportunity-item">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                <span>1 hour from Hyderabad's IT corridor</span>
              </div>
              <div className="opportunity-item">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>10 km from NIMZ industrial zone</span>
              </div>
              <div className="opportunity-item">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span>Direct access via upcoming RRR</span>
              </div>
              <div className="opportunity-item">
                <div className="w-2 h-2 bg-navy rounded-full"></div>
                <span>Peaceful setting with clean air</span>
              </div>
              <div className="opportunity-item">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                <span>Future appreciation fuelled by infrastructure</span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal y={30}>
          <div className="prose-enhanced">
            <h2 className="section-title">Community Features</h2>
            <div className="space-y-3">
              <div className="opportunity-item">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                <span>Gated community with 24 × 7 security</span>
              </div>
              <div className="opportunity-item">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Tree‑lined avenues & 40% green cover</span>
              </div>
              <div className="opportunity-item">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <span>Sports facilities (Pickleball, Badminton)</span>
              </div>
              <div className="opportunity-item">
                <div className="w-2 h-2 bg-navy rounded-full"></div>
                <span>Children's play areas & walking tracks</span>
              </div>
              <div className="opportunity-item">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                <span>Open‑air theatre & community spaces</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    '/images/general/site1.jpeg',
    '/images/general/site2.jpeg',
    '/images/general/site3.jpeg',
    '/images/general/site4.jpeg',
  ]
  const [idx, setIdx] = useState<number | null>(null)
  
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIdx(i)}
            className="group overflow-hidden rounded-2xl shadow-soft"
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              width={400}
              height={260}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      {idx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setIdx(null)}
        >
          <button
            className="absolute top-6 right-6 text-stone text-3xl leading-none focus:outline-none"
            aria-label="Close"
          >
            ×
          </button>
          <Image
            src={images[idx]}
            alt=""
            width={960}
            height={640}
            className="max-h-[85vh] w-auto rounded-xl shadow-soft"
          />
        </div>
      )}
    </>
  )
}