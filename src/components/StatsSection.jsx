import { Link } from 'react-router-dom'

const stats = [
  { num: '10+', label: 'Years of Experience' },
  { num: '500+', label: 'Projects Completed' },
  { num: '300+', label: 'Happy Clients' },
  { num: '50+', label: 'Team Members' },
]

const results = [
  { label: 'Case Studies +', to: '/about' },
  { label: 'Portfolio +', to: '/about' },
  { label: 'SEO Results +', to: '/about' },
  { label: 'Testimonials +', to: '/about#testimonials' },
]

export default function StatsSection() {
  return (
    <section className="py-14 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Our Achievements</p>
          <h2 className="text-3xl font-bold text-white mb-2">See our Real Results</h2>
          <p className="text-gray-300 text-sm">Empower Your Business Growth with Hasremote Solution Marketing Solutions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-1">{stat.num}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {results.map((r) => (
            <Link
              key={r.label}
              to={r.to}
              className="bg-white/10 hover:bg-accent border border-white/20 hover:border-accent text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all duration-300"
            >
              {r.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
