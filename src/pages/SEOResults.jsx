import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const caseStudies = [
  {
    client: 'E-Commerce Fashion Brand',
    industry: 'Ecommerce',
    emoji: '👗',
    duration: '8 months',
    results: [
      { label: 'Organic Traffic', before: '5,200/mo', after: '28,900/mo', change: '+456%' },
      { label: 'Keyword Rankings', before: '12 top-10', after: '87 top-10', change: '+625%' },
      { label: 'Organic Revenue', before: '$8,400/mo', after: '$52,000/mo', change: '+519%' },
    ],
    desc: 'Transformed a struggling fashion ecommerce site from page 3 to dominating page 1 for competitive fashion keywords through technical SEO, content strategy, and authority building.',
  },
  {
    client: 'Legal Services Firm',
    industry: 'Legal',
    emoji: '⚖️',
    duration: '6 months',
    results: [
      { label: 'Organic Traffic', before: '820/mo', after: '4,100/mo', change: '+400%' },
      { label: 'Leads Generated', before: '15/mo', after: '67/mo', change: '+347%' },
      { label: 'Domain Authority', before: 'DA 18', after: 'DA 41', change: '+128%' },
    ],
    desc: 'Helped a personal injury law firm rank in the coveted Google 3-pack and page 1 for highly competitive legal keywords in a major US city.',
  },
  {
    client: 'Healthcare Clinic',
    industry: 'Healthcare',
    emoji: '🏥',
    duration: '5 months',
    results: [
      { label: 'Google Maps Ranking', before: 'Position 18', after: 'Position 2', change: '+89%' },
      { label: 'Phone Calls', before: '45/mo', after: '210/mo', change: '+367%' },
      { label: 'New Patients', before: '12/mo', after: '58/mo', change: '+383%' },
    ],
    desc: 'A multi-specialty clinic saw massive growth in new patient acquisition through local SEO and Google Maps optimization.',
  },
  {
    client: 'Real Estate Agency',
    industry: 'Real Estate',
    emoji: '🏠',
    duration: '9 months',
    results: [
      { label: 'Organic Traffic', before: '1,800/mo', after: '11,200/mo', change: '+522%' },
      { label: 'Property Inquiries', before: '22/mo', after: '134/mo', change: '+509%' },
      { label: 'First Page Rankings', before: '8 keywords', after: '64 keywords', change: '+700%' },
    ],
    desc: 'Drove massive organic growth for a regional real estate agency through hyper-local content strategy and technical optimization.',
  },
  {
    client: 'SaaS B2B Platform',
    industry: 'Technology',
    emoji: '💻',
    duration: '12 months',
    results: [
      { label: 'Organic Signups', before: '89/mo', after: '520/mo', change: '+484%' },
      { label: 'Blog Traffic', before: '2,100/mo', after: '18,400/mo', change: '+776%' },
      { label: 'Backlinks Earned', before: '142 total', after: '1,240 total', change: '+773%' },
    ],
    desc: 'Established content leadership for a B2B SaaS company through thought leadership content, link earning, and technical excellence.',
  },
  {
    client: 'Restaurant Chain (5 locations)',
    industry: 'Food & Beverage',
    emoji: '🍕',
    duration: '4 months',
    results: [
      { label: 'Google Maps Views', before: '3,200/mo', after: '24,800/mo', change: '+675%' },
      { label: 'Online Reservations', before: '45/mo', after: '280/mo', change: '+522%' },
      { label: 'Review Score', before: '3.8 avg', after: '4.7 avg', change: '+24%' },
    ],
    desc: 'Transformed local search presence for all 5 restaurant locations through GMB optimization and reputation management.',
  },
]

export default function SEOResults() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Proof of Performance</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">Real SEO Results</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">We let our results speak for themselves. See real data from real client campaigns across multiple industries.</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent">Home</Link> <span>›</span>
            <span className="text-white">SEO Results</span>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '500+', label: 'Campaigns Run' },
              { num: '350%', label: 'Avg Traffic Growth' },
              { num: '300+', label: 'Happy Clients' },
              { num: '10+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold text-white mb-1">{s.num}</div>
                <div className="text-white/80 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Client Case Studies</h2>
            <p className="section-subtitle">Real results with real data — no fluff, no exaggeration.</p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {caseStudies.map((cs, i) => (
              <div key={i} className="scroll-reveal bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="grid md:grid-cols-3">
                  {/* Info */}
                  <div className="bg-primary p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-5xl mb-3">{cs.emoji}</div>
                      <h3 className="font-bold text-white text-lg mb-1">{cs.client}</h3>
                      <span className="text-accent text-xs font-semibold bg-accent/20 px-2 py-0.5 rounded-full">{cs.industry}</span>
                      <p className="text-gray-300 text-xs mt-3 leading-relaxed">{cs.desc}</p>
                    </div>
                    <div className="mt-4">
                      <span className="text-gray-400 text-xs">Campaign Duration: </span>
                      <span className="text-white text-xs font-semibold">{cs.duration}</span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="md:col-span-2 p-6">
                    <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-wide">Results Achieved</h4>
                    <div className="space-y-4">
                      {cs.results.map((r, j) => (
                        <div key={j} className="flex items-center gap-4">
                          <div className="w-36 shrink-0">
                            <p className="text-xs text-gray-500">{r.label}</p>
                          </div>
                          <div className="flex items-center gap-3 flex-1">
                            <div className="text-center">
                              <div className="text-sm font-semibold text-gray-400">{r.before}</div>
                              <div className="text-xs text-gray-300">Before</div>
                            </div>
                            <div className="text-accent text-lg font-bold">→</div>
                            <div className="text-center">
                              <div className="text-sm font-bold text-primary">{r.after}</div>
                              <div className="text-xs text-gray-400">After</div>
                            </div>
                            <div className="ml-auto bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                              {r.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Your Business Could Be Our Next Success Story</h2>
          <p className="text-gray-300 text-sm mb-6">Book a free consultation to see what's possible for your business.</p>
          <Link to="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-lg transition-all text-sm">
            Get a Free SEO Audit
          </Link>
        </div>
      </section>
    </div>
  )
}
