import { Link } from 'react-router-dom'
import { Star, Quote } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const testimonials = [
  { name: 'John Smith', role: 'CEO, TechStartup Inc.', country: '🇺🇸 USA', rating: 5, service: 'SEO Services', text: 'Has Remote Solution transformed our digital presence. Their SEO team increased our organic traffic by 300% in just 6 months. The team is professional, responsive, and delivers exceptional results. I highly recommend their services to any business looking to grow online.' },
  { name: 'Sarah Williams', role: 'Marketing Director, E-Shop Co.', country: '🇬🇧 UK', rating: 5, service: 'PPC Management', text: "Working with Has Remote Solution has been a game-changer for our ecommerce business. Their PPC campaigns have significantly boosted our ROI, and the dedicated team always goes above and beyond. The cost savings compared to hiring locally are remarkable." },
  { name: 'Michael Johnson', role: 'Founder, GrowthLabs', country: '🇦🇺 Australia', rating: 5, service: 'Remote Staffing', text: "I was skeptical about remote staffing at first, but Has Remote Solution proved me wrong. The 2-week trial gave me confidence, and now I have a dedicated developer who feels like part of my team. The quality of work is outstanding at a fraction of local costs." },
  { name: 'Emma Davis', role: 'Operations Manager, Retail Hub', country: '🇨🇦 Canada', rating: 5, service: 'Social Media Marketing', text: "Has Remote Solution's social media management has helped us build a strong brand presence. Their creative team understands our vision perfectly. The communication is seamless and deliverables are always on time. Truly a world-class agency." },
  { name: 'Robert Chen', role: 'CTO, FinTech Solutions', country: '🇸🇬 Singapore', rating: 5, service: 'ReactJS Development', text: "The React developers from Has Remote Solution are top-notch. They integrated seamlessly into our team and delivered complex features with precision. The value for money is unbeatable. We've now expanded our remote team to 5 members through them." },
  { name: 'Lisa Thompson', role: 'CMO, Healthcare Plus', country: '🇺🇸 USA', rating: 5, service: 'Content Marketing', text: "Our website traffic doubled within three months of partnering with Has Remote Solution. Their content marketing strategy was spot-on for the healthcare niche. The team is knowledgeable, dedicated, and truly committed to driving results." },
  { name: 'David Brown', role: 'Founder, EduTech Platform', country: '🇳🇿 New Zealand', rating: 5, service: 'Web Development', text: "Has Remote Solution built our entire e-learning platform from scratch. The Laravel + React stack they recommended is perfect for our use case. Delivered on time, on budget, and with excellent code quality. We've since hired them for two more projects." },
  { name: 'Priya Patel', role: 'Head of Marketing, Fashion Brand', country: '🇮🇳 India', rating: 5, service: 'Influencer Marketing', text: "Their influencer marketing strategy helped us reach over 1 million new potential customers in just 3 months. The team identified the right influencers for our niche and managed the entire campaign professionally. Excellent ROI!" },
  { name: 'James Wilson', role: 'Director, Logistics Co.', country: '🇿🇦 South Africa', rating: 5, service: 'App Development', text: "The mobile app Has Remote Solution built for our logistics operations has streamlined our entire workflow. The Flutter app works flawlessly on both iOS and Android. Their project management was excellent throughout the development process." },
  { name: 'Sophie Martin', role: 'CEO, Real Estate Agency', country: '🇫🇷 France', rating: 5, service: 'Local SEO', text: "Since implementing Has Remote Solution's local SEO strategy, our agency now appears in the top 3 for all our target keywords in Paris. Leads from organic search have increased by 250%. Their team understands the real estate industry extremely well." },
  { name: 'Alex Turner', role: 'Founder, SaaS Company', country: '🇬🇧 UK', rating: 5, service: 'NodeJS Development', text: "We hired a NodeJS developer through Has Remote Solution for our SaaS backend. The developer was highly skilled, communicated clearly, and delivered clean, well-documented code. The hiring process was smooth and the 2-week trial gave us full confidence." },
  { name: 'Maria Garcia', role: 'Marketing Manager, Restaurant Chain', country: '🇪🇸 Spain', rating: 5, service: 'Reputation Management', text: "Has Remote Solution helped us recover from a reputation crisis caused by negative reviews. Their ORM strategy was methodical and effective. Within 4 months, our average rating went from 3.2 to 4.5 stars across all platforms. Highly recommended!" },
]

const stats = [
  { num: '300+', label: 'Happy Clients' },
  { num: '4.9/5', label: 'Average Rating' },
  { num: '98%', label: 'Client Retention' },
  { num: '10+', label: 'Years of Trust' },
]

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Client Reviews</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">What Our Clients Say</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Don't just take our word for it. Here's what real clients say about working with Has Remote Solution.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Testimonials</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-accent">{s.num}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="scroll-reveal bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${(i % 6) * 80}ms` }}
              >
                <Quote size={28} className="text-accent/20 mb-3" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#e05c20" color="#e05c20" />
                  ))}
                </div>
                <span className="text-xs bg-accent/10 text-accent font-medium px-2 py-0.5 rounded-full self-start mb-3">
                  {t.service}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t pt-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Join Our Success Stories?</h2>
          <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto">
            Let us help your business grow with our proven digital marketing and remote staffing solutions.
          </p>
          <Link to="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl inline-block transition-all duration-300">
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </div>
  )
}
