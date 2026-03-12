import { Link } from 'react-router-dom'
import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const categories = ['All', 'Web Development', 'Mobile App', 'SEO Results', 'UI/UX Design']

const projects = [
  { id: 1, title: 'E-commerce Fashion Store', cat: 'Web Development', tech: 'React + Laravel', emoji: '👗', color: '#e05c20', desc: 'Full-featured ecommerce store with 5000+ products, custom search, and payment gateway.' },
  { id: 2, title: 'Healthcare Mobile App', cat: 'Mobile App', tech: 'Flutter', emoji: '🏥', color: '#0e2954', desc: 'Doctor appointment booking and telemedicine app for a healthcare chain.' },
  { id: 3, title: 'Real Estate SEO Campaign', cat: 'SEO Results', tech: 'SEO + Content', emoji: '🏠', color: '#e05c20', desc: '450% increase in organic traffic for a real estate agency in 8 months.' },
  { id: 4, title: 'SaaS Dashboard', cat: 'UI/UX Design', tech: 'Figma + React', emoji: '📊', color: '#0e2954', desc: 'Complex analytics dashboard with real-time data visualization for a fintech startup.' },
  { id: 5, title: 'Restaurant Chain Website', cat: 'Web Development', tech: 'WordPress', emoji: '🍕', color: '#e05c20', desc: 'Multi-location restaurant website with online ordering and table booking.' },
  { id: 6, title: 'Fitness Tracker App', cat: 'Mobile App', tech: 'React Native', emoji: '💪', color: '#0e2954', desc: 'Fitness tracking and workout planning app with AI-powered recommendations.' },
  { id: 7, title: 'Law Firm SEO', cat: 'SEO Results', tech: 'SEO + PPC', emoji: '⚖️', color: '#e05c20', desc: 'Ranked #1 for 25+ competitive legal keywords, 300% lead increase.' },
  { id: 8, title: 'B2B Portal Redesign', cat: 'UI/UX Design', tech: 'Figma', emoji: '🏢', color: '#0e2954', desc: 'Complete UX overhaul of a B2B procurement portal, improving conversion by 180%.' },
  { id: 9, title: 'Online Learning Platform', cat: 'Web Development', tech: 'React + Node.js', emoji: '🎓', color: '#e05c20', desc: 'LMS platform with video streaming, quizzes, and certification management.' },
  { id: 10, title: 'Travel Booking App', cat: 'Mobile App', tech: 'iOS + Android', emoji: '✈️', color: '#0e2954', desc: 'Cross-platform travel app with flight/hotel booking and itinerary planning.' },
  { id: 11, title: 'Ecommerce SEO Campaign', cat: 'SEO Results', tech: 'Ecommerce SEO', emoji: '🛒', color: '#e05c20', desc: '650% increase in organic revenue for an online electronics store.' },
  { id: 12, title: 'Crypto Exchange UI', cat: 'UI/UX Design', tech: 'Figma + React', emoji: '💰', color: '#0e2954', desc: 'Clean, intuitive cryptocurrency exchange interface with advanced trading charts.' },
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All')
  const ref = useScrollReveal()

  const filtered = activeTab === 'All' ? projects : projects.filter((p) => p.cat === activeTab)

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Our Work</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">Portfolio</h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm">See our real results. A selection of projects delivering measurable business impact.</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Portfolio</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === cat ? 'bg-accent text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="scroll-reveal bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {/* Preview */}
                <div className="h-40 flex items-center justify-center" style={{ backgroundColor: `${project.color}15` }}>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.emoji}</div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{project.cat}</span>
                  <h3 className="font-bold text-primary text-sm mt-2 mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">{project.tech}</span>
                    <Link to="/contact" className="text-accent text-xs font-semibold hover:underline">
                      View →
                    </Link>
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Build Something Amazing?</h2>
          <p className="text-gray-300 text-sm mb-6">Let's discuss your project and how we can help you achieve your goals.</p>
          <Link to="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-lg transition-all text-sm">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
