import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${open ? 'border-accent shadow-md' : 'border-gray-200'}`}>
      <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpen(!open)}>
        <span className={`font-semibold text-sm ${open ? 'text-accent' : 'text-primary'}`}>{faq.q}</span>
        <span className={`text-xl font-light shrink-0 ml-4 ${open ? 'text-accent' : 'text-gray-400'}`}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <div className="w-10 h-0.5 bg-accent mb-3" />
          <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function ServicePageTemplate({
  badge = 'Service',
  title = '',
  subtitle = '',
  description = [],
  heroEmoji = '🚀',
  benefits = [],
  process = [],
  features = [],
  faqs = [],
  cta = 'Get a Free Consultation',
  relatedServices = [],
}) {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-accent/20 border border-accent/40 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">{badge}</span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">{title}</h1>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{subtitle}</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 text-sm transition-all">
                  {cta} <ArrowRight size={16} />
                </Link>
                <a href="tel:+916378400775" className="border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 text-sm transition-all">
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-64 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-7xl mb-3">{heroEmoji}</div>
                  <p className="text-white font-semibold text-sm">{badge}</p>
                  <p className="text-gray-400 text-xs mt-1">Has Remote Solution Pvt. Ltd.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-8 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>›</span>
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>›</span>
            <span className="text-white">{badge}</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="scroll-reveal text-center mb-8">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Overview</p>
            <h2 className="text-3xl font-bold text-primary mb-3">{title}</h2>
            <div className="w-14 h-1 bg-accent rounded mx-auto" />
          </div>
          <div className="scroll-reveal space-y-4">
            {description.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="scroll-reveal text-center mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Benefits</p>
              <h2 className="text-3xl font-bold text-primary">Why Choose Our {badge}?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {benefits.map((b, i) => (
                <div key={i} className="scroll-reveal bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-accent transition-all flex gap-4" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 text-xl">{b.icon}</div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">{b.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Checklist */}
      {features.length > 0 && (
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="scroll-reveal text-center mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">What's Included</p>
              <h2 className="text-3xl font-bold text-primary">Our {badge} Includes</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((f, i) => (
                <div key={i} className="scroll-reveal flex items-start gap-3" style={{ transitionDelay: `${i * 40}ms` }}>
                  <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      {process.length > 0 && (
        <section className="py-14 bg-primary">
          <div className="container mx-auto px-4">
            <div className="scroll-reveal text-center mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">How We Work</p>
              <h2 className="text-3xl font-bold text-white">Our Step-by-Step Process</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {process.map((step, i) => (
                <div key={i} className="scroll-reveal text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">{i + 1}</div>
                  <h4 className="font-bold text-white text-sm mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="scroll-reveal text-center mb-10">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">FAQs</p>
              <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => <FaqItem key={i} faq={faq} />)}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-lg font-bold text-primary mb-5">Related Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedServices.map((s) => (
                <Link key={s.label} to={s.to} className="border border-gray-200 hover:border-accent text-gray-600 hover:text-accent text-sm px-5 py-2 rounded-full transition-all">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-14 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h2>
          <p className="text-white/80 text-sm mb-6">Contact us today for a free consultation and custom strategy.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-accent hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-all text-sm">
              Book a Free Call
            </Link>
            <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-3 rounded-lg transition-all text-sm">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
