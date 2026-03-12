import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import {
  Search, Share2, MousePointer, Shield, Code, Cpu, Link2, Smartphone,
  Globe, Layers, Database, Zap, BarChart2, PenTool, Mail
} from 'lucide-react'

const serviceCategories = [
  {
    title: 'Digital Marketing',
    color: '#e05c20',
    services: [
      { icon: Search, name: 'SEO Services', desc: 'Boost organic rankings with proven on-page, off-page, and technical SEO strategies.' },
      { icon: Share2, name: 'Social Media Marketing', desc: 'Build brand awareness and drive engagement across all major social platforms.' },
      { icon: MousePointer, name: 'Pay Per Click (PPC)', desc: 'Maximize ROI with data-driven Google Ads, Facebook Ads, and more.' },
      { icon: Shield, name: 'Reputation Management', desc: 'Monitor and improve your online reputation across all digital channels.' },
      { icon: PenTool, name: 'Content Marketing', desc: 'Create compelling content that attracts, engages, and converts your audience.' },
      { icon: Mail, name: 'Email Marketing', desc: 'Drive repeat business and nurture leads with strategic email campaigns.' },
    ],
  },
  {
    title: 'Web Development',
    color: '#0e2954',
    services: [
      { icon: Globe, name: 'Website Development', desc: 'Custom, responsive websites built to convert visitors into customers.' },
      { icon: Code, name: 'PHP Development', desc: 'Robust PHP applications and custom backend solutions.' },
      { icon: Layers, name: 'Laravel Development', desc: 'Scalable, elegant web applications built with Laravel framework.' },
      { icon: Database, name: 'WordPress Development', desc: 'Custom WordPress themes, plugins, and full website development.' },
      { icon: Zap, name: 'ReactJS Development', desc: 'Dynamic, high-performance React applications and SPAs.' },
      { icon: BarChart2, name: 'Magento Development', desc: 'Feature-rich ecommerce solutions with Magento platform.' },
    ],
  },
  {
    title: 'App Development',
    color: '#e05c20',
    services: [
      { icon: Smartphone, name: 'Mobile App Development', desc: 'Native and cross-platform mobile apps for iOS and Android.' },
      { icon: Cpu, name: 'React Native', desc: 'Cost-effective cross-platform apps with React Native.' },
      { icon: Link2, name: 'Flutter Development', desc: 'Beautiful, natively compiled apps from a single codebase.' },
      { icon: Shield, name: 'iOS Development', desc: 'Premium iOS applications for iPhone and iPad.' },
      { icon: Share2, name: 'Android Development', desc: 'Feature-rich Android apps for the global market.' },
      { icon: Database, name: 'Blockchain Development', desc: 'Secure blockchain solutions and smart contract development.' },
    ],
  },
]

const packages = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    features: ['SEO Audit', '5 Keywords', 'Monthly Report', 'Email Support', 'On-Page Optimization'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$599',
    period: '/month',
    features: ['Everything in Starter', '15 Keywords', 'Weekly Reports', 'Priority Support', 'Link Building', 'Social Media Setup'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$1,199',
    period: '/month',
    features: ['Everything in Growth', 'Unlimited Keywords', 'Daily Reports', 'Dedicated Manager', 'Full SEO Campaign', 'PPC Management'],
    highlight: false,
  },
]

export default function Services() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      {/* Page Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">What We Do</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Comprehensive digital services designed to accelerate your business growth and maximize ROI.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, ci) => (
        <section key={category.title} className={`py-16 ${ci % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">{category.title}</p>
              <h2 className="section-title">{category.title} Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, i) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.name}
                    className="scroll-reveal bg-white border border-gray-100 rounded-xl p-6 card-shadow group"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <Icon size={26} style={{ color: category.color }} />
                    </div>
                    <h3 className="font-bold text-primary text-base mb-2 group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <Link to="/contact" className="text-accent text-sm font-semibold hover:underline">
                      Get Started →
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Packages */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Pricing</p>
            <h2 className="text-3xl font-bold text-white mb-3">SEO Service Packages</h2>
            <p className="text-gray-300 text-sm">Choose the right plan for your business needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`scroll-reveal rounded-2xl p-7 flex flex-col ${
                  pkg.highlight
                    ? 'bg-accent shadow-2xl shadow-accent/30 scale-105'
                    : 'bg-white/10 border border-white/20'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {pkg.highlight && (
                  <div className="bg-white text-accent text-xs font-bold px-3 py-1 rounded-full self-start mb-3">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`font-bold text-xl mb-1 ${pkg.highlight ? 'text-white' : 'text-white'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl font-extrabold mb-5 ${pkg.highlight ? 'text-white' : 'text-accent'}`}>
                  {pkg.price}<span className="text-sm font-normal">{pkg.period}</span>
                </div>
                <ul className="space-y-2 mb-6 flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${pkg.highlight ? 'text-white/90' : 'text-gray-300'}`}>
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${pkg.highlight ? 'bg-white text-accent' : 'bg-accent text-white'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`text-center font-bold py-3 rounded-xl transition-all duration-300 text-sm ${
                    pkg.highlight
                      ? 'bg-white text-accent hover:bg-gray-100'
                      : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
