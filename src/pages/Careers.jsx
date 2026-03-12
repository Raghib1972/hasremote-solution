import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MapPin, Clock, ArrowRight, Search } from 'lucide-react'

const openings = [
  { id: 1, title: 'Senior SEO Specialist', dept: 'Digital Marketing', location: 'New Delhi / Remote', type: 'Full-time', exp: '3-5 years', desc: 'We are looking for an experienced SEO specialist to lead client campaigns and mentor junior team members.' },
  { id: 2, title: 'React Developer', dept: 'Web Development', location: 'New Delhi / Remote', type: 'Full-time', exp: '2-4 years', desc: 'Looking for a talented React developer to build modern, performant web applications for our global clients.' },
  { id: 3, title: 'Flutter Developer', dept: 'App Development', location: 'Remote', type: 'Full-time', exp: '1-3 years', desc: 'Build beautiful cross-platform mobile applications using Flutter for our international clients.' },
  { id: 4, title: 'PPC Specialist', dept: 'Digital Marketing', location: 'New Delhi', type: 'Full-time', exp: '2-3 years', desc: 'Manage Google Ads and Facebook Ads campaigns for clients across diverse industries.' },
  { id: 5, title: 'Content Writer (Tech & Marketing)', dept: 'Content', location: 'Remote', type: 'Full-time', exp: '1-2 years', desc: 'Create high-quality, SEO-optimized content for client blogs, websites, and marketing collateral.' },
  { id: 6, title: 'NodeJS Backend Developer', dept: 'Web Development', location: 'New Delhi / Remote', type: 'Full-time', exp: '2-4 years', desc: 'Build scalable REST APIs and microservices using Node.js, Express, and MongoDB.' },
  { id: 7, title: 'Social Media Manager', dept: 'Digital Marketing', location: 'Remote', type: 'Full-time', exp: '1-3 years', desc: 'Manage social media accounts for multiple clients, creating content and driving engagement.' },
  { id: 8, title: 'Business Development Executive', dept: 'Sales', location: 'New Delhi', type: 'Full-time', exp: '2-4 years', desc: 'Drive business growth by identifying and converting new client opportunities in global markets.' },
]

const depts = ['All Departments', 'Digital Marketing', 'Web Development', 'App Development', 'Content', 'Sales']

const perks = [
  { icon: '💰', title: 'Competitive Salary', desc: 'Market-leading compensation + performance bonuses.' },
  { icon: '🏠', title: 'Remote-Friendly', desc: 'Most roles are fully remote or hybrid.' },
  { icon: '📚', title: 'Learning & Growth', desc: 'Sponsored certifications, courses, and conferences.' },
  { icon: '🌍', title: 'Global Projects', desc: 'Work on exciting projects for clients worldwide.' },
  { icon: '🤝', title: 'Collaborative Team', desc: 'A supportive, diverse, and inclusive work culture.' },
  { icon: '⏰', title: 'Flexible Hours', desc: 'Flexible working hours and work-life balance.' },
]

export default function Careers() {
  const [activeDept, setActiveDept] = useState('All Departments')
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', cover: '' })
  const [submitted, setSubmitted] = useState(false)

  const filtered = activeDept === 'All Departments' ? openings : openings.filter((j) => j.dept === activeDept)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Join Our Team</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">Careers at Has Remote Solution</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Join a team of passionate digital professionals working on exciting projects for clients around the world.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent">Home</Link> <span>›</span>
            <span className="text-white">Careers</span>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Why Work With Us?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {perks.map((p) => (
              <div key={p.title} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-3xl shrink-0">{p.icon}</div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">{p.title}</h4>
                  <p className="text-gray-500 text-xs">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">Find the perfect role and grow your career with us.</p>
          </div>

          {/* Dept Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {depts.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeDept === d ? 'bg-accent text-white' : 'bg-white border text-gray-600 hover:border-accent hover:text-accent'}`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {filtered.map((job) => (
              <div key={job.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-accent transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-primary mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                      <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-semibold">{job.dept}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{job.desc}</p>
                    <p className="text-xs text-gray-400 mt-1">Experience: {job.exp}</p>
                  </div>
                  <button
                    onClick={() => setSelected(job)}
                    className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2 rounded-lg flex items-center gap-2 transition-all shrink-0"
                  >
                    Apply Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={(e) => { if (e.target === e.currentTarget) { setSelected(null); setSubmitted(false) } }}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-white font-bold">{selected.title}</p>
                <p className="text-gray-300 text-xs">{selected.dept} · {selected.location}</p>
              </div>
              <button onClick={() => { setSelected(null); setSubmitted(false) }} className="text-gray-300 hover:text-white text-xl">×</button>
            </div>
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-3">✅</div>
                  <h3 className="font-bold text-primary text-lg mb-2">Application Submitted!</h3>
                  <p className="text-gray-500 text-sm">Thank you for applying. We'll review your application and get back to you within 5 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1">Full Name *</label>
                    <input type="text" required placeholder="Your Name" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1">Email Address *</label>
                    <input type="email" required placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1">Phone Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1">Cover Letter / Why should we hire you? *</label>
                    <textarea required rows={4} placeholder="Tell us about yourself and why you're a great fit..." className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" value={form.cover} onChange={(e) => setForm({ ...form, cover: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1">Resume / Portfolio Link</label>
                    <input type="url" placeholder="https://drive.google.com/..." className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-xl text-sm transition-all">
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
