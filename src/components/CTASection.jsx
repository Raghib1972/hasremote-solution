import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react'

const benefits = [
  { icon: Users, title: 'Dedicated Team', desc: 'Your own dedicated professionals' },
  { icon: Award, title: 'Best Advisors', desc: 'Expert guidance at every step' },
  { icon: TrendingUp, title: '24/7 Supports', desc: 'Round-the-clock assistance' },
]

export default function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Benefit Cards */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Why Us</p>
            <h2 className="text-3xl font-bold text-white mb-3">
              The Best SEO Agency For Your Business
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Has Remote Solution Pvt. Ltd. Digital Marketing Company is a professional, reliable, and trusted marketing company offering a range of solutions. We use the latest technology to achieve results and create long-lasting business value for our clients.
            </p>

            <div className="space-y-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.title} className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{b.title}</h4>
                      <p className="text-gray-300 text-xs">{b.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: CTA Box */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-primary mb-2">Ready to Scale?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Get a free consultation and discover how we can help your business grow with top-tier remote professionals.
            </p>

            <div className="space-y-4 mb-6">
              {[
                '✅ 2-Week Risk-Free Trial',
                '✅ Pre-vetted Professionals',
                '✅ 70% Cost Savings',
                '✅ Start in Days, Not Months',
              ].map((item) => (
                <div key={item} className="text-sm text-gray-700 font-medium">{item}</div>
              ))}
            </div>

            <Link
              to="/contact"
              className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-base"
            >
              Book a Free Discovery Call <ArrowRight size={18} />
            </Link>
            <p className="text-center text-xs text-gray-400 mt-3">No commitment required • Free consultation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
