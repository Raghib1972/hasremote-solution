import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlights = [
  'Virtual Assistants from <$8/hour',
  'Full-Stack Developers without $100k+ salaries',
  'Data-Driven SEO Experts without high agency retainers',
  '2-week risk-free trial — pay only if satisfied',
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0e2954 0%, #1a3c6e 50%, #0e2954 100%)',
      }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-400 opacity-10 blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-accent text-sm font-medium">
                Award-Winning Remote Staffing Agency
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Stop Paying Local Prices for Talent.{' '}
              <span className="text-accent">
                Scale with Top-Tier Indian Remote Staff for 70% Less.
              </span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-xl">
              Are you stuck in the endless hiring cycle? High salaries,
              hidden overhead costs, long recruitment timelines,
              and the constant fear of a bad hire?
            </p>

            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-xl">
              What if you could onboard a dedicated, English-speaking
              professional in days — not months — at a fraction of the cost?
            </p>

            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              <strong>Has Remote Solution</strong> connects founders and growing SMEs
              with pre-vetted remote talent from India — without the hassle,
              without the overhead.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-accent shrink-0" />
                  <span className="text-gray-200 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-sm md:text-base mt-6 max-w-xl">
              This isn’t outsourcing. This is effortless scaling.
              This is getting your time back.
              This is finally focusing on growth — not just operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3 text-base shadow-lg hover:shadow-accent/40"
              >
                Book a Free 10-Minute Strategy Call
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-center transition-all duration-300 text-base"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE STATS */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { num: '10+', label: 'Years of Experience', icon: '🏆' },
              { num: '500+', label: 'Projects Delivered', icon: '🚀' },
              { num: '300+', label: 'Happy Clients', icon: '😊' },
              { num: '70%', label: 'Cost Savings', icon: '💰' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-accent mb-1">
                  {stat.num}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}