import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, TechStartup Inc.',
    country: '🇺🇸 USA',
    rating: 5,
    text: "Has Remote Solution transformed our digital presence. Their SEO team increased our organic traffic by 300% in just 6 months. The team is professional, responsive, and delivers exceptional results. I highly recommend their services to any business looking to grow online.",
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Director, E-Shop Co.',
    country: '🇬🇧 UK',
    rating: 5,
    text: "Working with Has Remote Solution has been a game-changer for our ecommerce business. Their PPC campaigns have significantly boosted our ROI, and the dedicated team always goes above and beyond. The cost savings compared to hiring locally are remarkable.",
  },
  {
    name: 'Michael Johnson',
    role: 'Founder, GrowthLabs',
    country: '🇦🇺 Australia',
    rating: 5,
    text: "I was skeptical about remote staffing at first, but Has Remote Solution proved me wrong. The 2-week trial gave me confidence, and now I have a dedicated developer who feels like part of my team. The quality of work is outstanding at a fraction of local costs.",
  },
  {
    name: 'Emma Davis',
    role: 'Operations Manager, Retail Hub',
    country: '🇨🇦 Canada',
    rating: 5,
    text: "Has Remote Solution's social media management has helped us build a strong brand presence. Their creative team understands our vision perfectly. The communication is seamless and deliverables are always on time. Truly a world-class agency.",
  },
  {
    name: 'Robert Chen',
    role: 'CTO, FinTech Solutions',
    country: '🇸🇬 Singapore',
    rating: 5,
    text: "The React developers from Has Remote Solution are top-notch. They integrated seamlessly into our team and delivered complex features with precision. The value for money is unbeatable. We've now expanded our remote team to 5 members through them.",
  },
  {
    name: 'Lisa Thompson',
    role: 'CMO, Healthcare Plus',
    country: '🇺🇸 USA',
    rating: 5,
    text: "Our website traffic doubled within three months of partnering with Has Remote Solution. Their content marketing strategy was spot-on for the healthcare niche. The team is knowledgeable, dedicated, and truly committed to driving results.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const perPage = 3

  const total = Math.ceil(testimonials.length / perPage)
  const displayed = testimonials.slice(current * perPage, current * perPage + perPage)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="section-title">Trusted By Our Clients</h2>
          <p className="section-subtitle">What our clients say about working with us</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayed.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 card-shadow border border-gray-100 flex flex-col"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#e05c20" color="#e05c20" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 border-t pt-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                  <p className="text-xs text-gray-400">{t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-accent scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
          <button
            onClick={() => setCurrent((p) => Math.min(total - 1, p + 1))}
            disabled={current === total - 1}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
