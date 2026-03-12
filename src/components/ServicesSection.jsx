import { Link } from 'react-router-dom'
import { Search, Share2, MousePointer, Shield, Code, Cpu, Link2, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Search Engine Marketing',
    desc: 'Increase your online visibility and drive traffic to your website with our expert search engine marketing services.',
    color: '#e05c20',
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: "Boost your brand's social media presence and engage with your audience through our strategic social media management.",
    color: '#1a3c6e',
  },
  {
    icon: MousePointer,
    title: 'Pay Per Click',
    desc: 'Maximize your advertising ROI and generate leads through targeted and optimized pay-per-click campaigns.',
    color: '#e05c20',
  },
  {
    icon: Shield,
    title: 'Reputation Management',
    desc: "Protect and enhance your brand's reputation with our proactive online reputation management solutions.",
    color: '#1a3c6e',
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Get a responsive, user-friendly, and customized website that will showcase your brand and drive conversions.',
    color: '#e05c20',
  },
  {
    icon: Cpu,
    title: 'Internet of Things',
    desc: 'Harness the power of IoT technology and revolutionize your business operations with our IoT solutions.',
    color: '#1a3c6e',
  },
  {
    icon: Link2,
    title: 'Blockchain',
    desc: 'Secure your transactions and protect your data with our reliable and innovative blockchain solutions.',
    color: '#e05c20',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Build a seamless and user-friendly mobile app that will engage your customers and drive business growth.',
    color: '#1a3c6e',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive Digital Marketing Services to Boost Your Business Online
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="scroll-reveal bg-white border border-gray-100 rounded-xl p-6 card-shadow group cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon size={26} style={{ color: service.color }} />
                </div>
                <h3 className="font-bold text-primary text-base mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link
                  to="/services"
                  className="text-accent text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
