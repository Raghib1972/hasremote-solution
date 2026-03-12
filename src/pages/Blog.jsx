import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Clock, User, ArrowRight } from 'lucide-react'

const posts = [
  { id: 1, title: '10 SEO Trends That Will Dominate in 2025', cat: 'SEO', readTime: '8 min', author: 'Rahul Sharma', date: 'Jan 15, 2025', emoji: '🔍', excerpt: 'Stay ahead of the curve with these crucial SEO trends including AI-powered search, zero-click results, and core web vitals updates that every marketer needs to know.' },
  { id: 2, title: 'How to Build a High-Converting Landing Page', cat: 'Web Development', readTime: '6 min', author: 'Priya Singh', date: 'Jan 22, 2025', emoji: '💻', excerpt: 'Learn the psychological principles and technical best practices that turn visitors into customers. A complete guide with real examples.' },
  { id: 3, title: 'React vs Angular in 2025: Which Should You Choose?', cat: 'Development', readTime: '10 min', author: 'Anil Kumar', date: 'Feb 3, 2025', emoji: '⚛️', excerpt: 'A detailed comparison of React and Angular for 2025. We break down performance, developer experience, ecosystem, and when to use each.' },
  { id: 4, title: 'The Complete Guide to Google My Business Optimization', cat: 'Local SEO', readTime: '12 min', author: 'Priya Singh', date: 'Feb 10, 2025', emoji: '📍', excerpt: 'Step-by-step guide to optimizing your Google My Business profile for maximum local visibility. Includes advanced tips most businesses miss.' },
  { id: 5, title: 'Why Your Social Media Strategy Is Failing (And How to Fix It)', cat: 'Social Media', readTime: '7 min', author: 'Neha Gupta', date: 'Feb 17, 2025', emoji: '📱', excerpt: 'Common social media mistakes that hurt engagement and how to build a data-driven strategy that actually grows your following and drives sales.' },
  { id: 6, title: 'Flutter vs React Native: 2025 Deep Dive', cat: 'Mobile Dev', readTime: '9 min', author: 'Vikram Patel', date: 'Feb 24, 2025', emoji: '📱', excerpt: 'An honest, comprehensive comparison of Flutter and React Native in 2025 based on real project experience, performance benchmarks, and developer surveys.' },
  { id: 7, title: 'How We Grew a Client\'s Traffic by 650% in 8 Months', cat: 'Case Study', readTime: '11 min', author: 'Rahul Sharma', date: 'Mar 3, 2025', emoji: '📈', excerpt: 'A transparent case study breaking down the exact SEO strategy, content approach, and link building tactics that drove 650% organic growth.' },
  { id: 8, title: 'The ROI of Hiring Remote Developers vs. Local Talent', cat: 'Remote Work', readTime: '8 min', author: 'Anjali Mehta', date: 'Mar 10, 2025', emoji: '💰', excerpt: 'Real numbers on cost comparison between hiring locally and remote. Includes salary data, hidden costs, and productivity analysis.' },
  { id: 9, title: 'Answer Engine Optimization: Preparing for the AI Search Era', cat: 'SEO', readTime: '9 min', author: 'Priya Singh', date: 'Mar 17, 2025', emoji: '🤖', excerpt: 'How to optimize your content for Google\'s AI Overviews, ChatGPT, and other AI-powered search surfaces. The future of SEO is here.' },
]

const cats = ['All', 'SEO', 'Web Development', 'Development', 'Local SEO', 'Social Media', 'Mobile Dev', 'Case Study', 'Remote Work']

export default function Blog() {
  const [activeCat, setActiveCat] = useState('All')

  const filtered = activeCat === 'All' ? posts : posts.filter((p) => p.cat === activeCat)

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Insights & Resources</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm">Digital marketing insights, development tutorials, and business growth strategies from our expert team.</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent">Home</Link> <span>›</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white border-b sticky top-16 z-30">
        <div className="container mx-auto px-4 flex flex-wrap gap-2 justify-center">
          {cats.map((c) => (
            <button key={c} onClick={() => setActiveCat(c)} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeCat === c ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured */}
          <div className="mb-10">
            <div className="bg-primary rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center shadow-xl">
              <div>
                <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">{posts[0].cat}</span>
                <h2 className="text-2xl font-extrabold text-white mt-3 mb-3">{posts[0].title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <span className="flex items-center gap-1"><User size={12} /> {posts[0].author}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {posts[0].readTime} read</span>
                  <span>{posts[0].date}</span>
                </div>
                <Link to="/blog" className="bg-accent hover:bg-accent-dark text-white font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm w-fit transition-all">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-9xl">{posts[0].emoji}</div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(1).map((post, i) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-36 flex items-center justify-center" style={{ backgroundColor: i % 2 === 0 ? '#e05c2015' : '#0e295415' }}>
                  <span className="text-6xl">{post.emoji}</span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{post.cat}</span>
                  <h3 className="font-bold text-primary text-sm mt-2 mb-2 leading-snug">{post.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock size={11} /> {post.readTime}
                    </div>
                    <Link to="/blog" className="text-accent text-xs font-semibold hover:underline flex items-center gap-1">
                      Read <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg text-sm transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
