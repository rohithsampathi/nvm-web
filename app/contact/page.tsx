// app/contact/page.tsx

// app/contact/page.tsx
'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MapPin, Phone, Mail, Clock, Calendar, Sparkles } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { PrimaryButton } from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import MetaTags from '@/components/layout/MetaTags'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(8, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address'),
  visitDate: z.string().optional(),
  people: z.string().optional(),
  message: z.string().optional(),
})

type Values = z.infer<typeof schema>

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = 
    useForm<Values>({ resolver: zodResolver(schema) })

  return (
    <>
      <MetaTags
        title="Contact Us - Schedule Your Site Visit"
        description="Get in touch with AO Green Fields. Schedule site visits, download brochures, or speak with our team. Corporate office in Kondapur, Hyderabad. WhatsApp support available."
        ogImage="/images/og/contact-og.jpg"
        url="/contact"
        keywords="AO Green Fields contact, site visit booking, real estate inquiry, Hyderabad office, property consultation"
        schema="organization"
      />

      {/* ── ENHANCED HERO ────────────────────────────────── */}
      <section className="hero-enhanced">
        <div className="hero-bg-pattern"></div>
        <div className="container relative z-10">
          <div className="hero-content">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-stone/90 mb-6">
              <Sparkles className="h-4 w-4 text-gold" />
              <span>Get in Touch</span>
            </div>
            <h1 className="hero-title">Let's Start Your 
              <span className="block text-gold mt-2">Wellness Journey</span>
            </h1>
            <p className="hero-description">
              Ready to discover your perfect home at Nandanavanam? Our team is here to guide you 
              through every step, from site visits to making your 
              <span className="text-gold font-medium">dream a reality</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT CONTENT ─────────────────────────────── */}
      <section className="section-pad-large">
        <div className="container grid gap-20 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="contact-info">
            <Reveal>
              <div className="contact-card">
                <h2 className="contact-title">Visit Our Offices</h2>
                
                {/* Corporate Office */}
                <div className="office-section">
                  <div className="office-header">
                    <MapPin className="h-5 w-5 text-teal" />
                    <h3 className="office-name">Corporate Office</h3>
                  </div>
                  <address className="office-details">
                    <p className="office-address">{CONTACT.address}</p>
                    <div className="contact-methods">
                      <a href={`tel:${CONTACT.phone}`} className="contact-link">
                        <Phone className="h-4 w-4" />
                        <span>{CONTACT.phone}</span>
                      </a>
                      <a href={`mailto:${CONTACT.email}`} className="contact-link">
                        <Mail className="h-4 w-4" />
                        <span>{CONTACT.email}</span>
                      </a>
                    </div>
                  </address>
                </div>

                {/* Site Office */}
                <div className="office-section">
                  <div className="office-header">
                    <MapPin className="h-5 w-5 text-gold" />
                    <h3 className="office-name">Nandanavanam Site</h3>
                  </div>
                  <address className="office-details">
                    <p className="office-address">1 km off NH‑161, Zaheerabad</p>
                    <div className="contact-methods">
                      <div className="contact-info-item">
                        <Clock className="h-4 w-4 text-green" />
                        <span>Open daily 10 AM – 6 PM (by appointment)</span>
                      </div>
                    </div>
                  </address>
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                  <h4 className="quick-actions-title">Quick Actions</h4>
                  <div className="quick-actions-grid">
                    <a 
                      href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
                      className="quick-action-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="quick-action-icon bg-green/10">
                        <Phone className="h-5 w-5 text-green" />
                      </div>
                      <div>
                        <div className="quick-action-label">WhatsApp</div>
                        <div className="quick-action-desc">Instant response</div>
                      </div>
                    </a>
                    <a 
                      href="/AOGF_brochure.pdf" 
                      download
                      className="quick-action-btn"
                    >
                      <div className="quick-action-icon bg-teal/10">
                        <Calendar className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <div className="quick-action-label">Brochure</div>
                        <div className="quick-action-desc">Download PDF</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal y={30}>
            <form
              onSubmit={handleSubmit(data => { console.log(data); reset() })}
              id="visit"
              className="contact-form"
            >
              <div className="form-header">
                <h3 className="form-title">Schedule Your Site Visit</h3>
                <p className="form-subtitle">
                  Fill out the form below and we'll confirm your visit shortly
                </p>
              </div>

              {isSubmitSuccessful && (
                <div className="success-message">
                  <div className="success-icon">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="success-title">Thank you!</p>
                    <p className="success-desc">We'll confirm your visit shortly.</p>
                  </div>
                </div>
              )}

              <div className="form-grid">
                <Input 
                  label="Full Name" 
                  field="name" 
                  register={register} 
                  errors={errors}
                  required
                />
                <Input 
                  label="Phone Number" 
                  field="phone" 
                  register={register} 
                  errors={errors}
                  required
                />
                <Input 
                  label="Email Address" 
                  field="email" 
                  type="email"
                  register={register} 
                  errors={errors}
                  required
                />
                <Input 
                  label="Preferred Visit Date" 
                  field="visitDate" 
                  type="date" 
                  register={register} 
                  errors={errors}
                />
                <Input 
                  label="Number of People" 
                  field="people" 
                  type="number"
                  register={register} 
                  errors={errors}
                />
              </div>

              <div className="form-field">
                <label className="form-label">
                  Message (Optional)
                </label>
                <textarea 
                  {...register('message')}
                  rows={4}
                  placeholder="Tell us about your requirements, budget, or any specific questions..."
                  className="form-textarea"
                />
              </div>

              <PrimaryButton 
                type="submit" 
                fullWidth
                className="submit-btn"
              >
                <Calendar className="h-5 w-5" />
                Schedule My Visit
              </PrimaryButton>

              <p className="form-footer">
                By submitting this form, you agree to be contacted by our team regarding your inquiry.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-bg-pattern"></div>
        <div className="container relative z-10 text-center">
          <Reveal>
            <h2 className="cta-title mb-6">
              Ready to Make Nandanavanam 
              <span className="text-teal"> Your Home</span>?
            </h2>
            <p className="cta-description mb-12">
              Join the exclusive community of families who've chosen wellness, location intelligence, 
              and premium living. Your journey to a better life starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-large"
              >
                <Phone className="h-5 w-5" />
                WhatsApp Now
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="btn-secondary-large"
              >
                <Phone className="h-5 w-5" />
                Call Directly
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ────────────────────────────────────────────────────*/
/* ENHANCED INPUT COMPONENT */
/* ────────────────────────────────────────────────────*/
function Input({
  label,
  field,
  register,
  errors,
  type = 'text',
  required = false
}: {
  label: string
  field: keyof Values
  register: any
  errors: any
  type?: string
  required?: boolean
}) {
  const hasError = errors[field]

  return (
    <div className="form-field">
      <label className="form-label">
        {label}
        {required && <span className="required-indicator">*</span>}
      </label>
      <div className="input-wrapper">
        <input 
          type={type} 
          {...register(field)}
          className={`form-input ${hasError ? 'form-input-error' : ''}`}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
        {hasError && (
          <div className="error-message">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errors[field]?.message}</span>
          </div>
        )}
      </div>
    </div>
  )
}