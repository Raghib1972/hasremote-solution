import { Link } from 'react-router-dom'
import { CheckCircle, X } from 'lucide-react'

export default function PackagePageTemplate({ title, subtitle, badge, packages = [], faqs = [] }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-accent/20 border border-accent/40 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">{badge}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">{subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>›</span>
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>›</span>
            <span className="text-white">{badge}</span>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`rounded-2xl overflow-hidden flex flex-col ${pkg.highlight ? 'shadow-2xl ring-2 ring-accent' : 'shadow-lg border border-gray-200 bg-white'}`}
              >
                {/* Header */}
                <div className={`p-6 ${pkg.highlight ? 'bg-accent' : 'bg-primary'}`}>
                  {pkg.highlight && (
                    <div className="bg-white text-accent text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-white/70 text-xs mb-3">{pkg.desc}</p>
                  <div className="text-4xl font-extrabold text-white">
                    {pkg.price}
                    <span className="text-sm font-normal text-white/70">{pkg.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className={`p-6 flex-grow ${pkg.highlight ? 'bg-white' : 'bg-white'}`}>
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className={`flex items-start gap-2.5 text-sm ${f.included ? 'text-gray-700' : 'text-gray-300'}`}>
                        {f.included
                          ? <CheckCircle size={15} className="text-accent shrink-0 mt-0.5" />
                          : <X size={15} className="text-gray-300 shrink-0 mt-0.5" />}
                        {f.text}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center font-bold py-3 rounded-xl text-sm transition-all ${
                      pkg.highlight
                        ? 'bg-accent text-white hover:bg-accent-dark'
                        : 'bg-primary text-white hover:bg-primary-light'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">
            All plans include a free setup consultation. Prices may vary based on custom requirements.{' '}
            <Link to="/contact" className="text-accent hover:underline">Contact us</Link> for custom pricing.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Why Choose Has Remote Solution?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { icon: '🏆', label: '10+ Years Experience' },
              { icon: '📊', label: 'Data-Driven Results' },
              { icon: '🤝', label: 'Dedicated Account Manager' },
              { icon: '📈', label: 'Proven ROI' },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-white text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => <FaqItem key={i} faq={faq} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-primary mb-2">Not sure which plan is right for you?</h3>
          <p className="text-gray-500 text-sm mb-5">Book a free consultation and we'll recommend the perfect package for your needs.</p>
          <Link to="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-lg transition-all text-sm">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${open ? 'border-accent' : 'border-gray-200'}`}>
      <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpen(!open)}>
        <span className={`font-semibold text-sm ${open ? 'text-accent' : 'text-primary'}`}>{faq.q}</span>
        <span className="text-xl font-light shrink-0 ml-4 text-gray-400">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  )
}
