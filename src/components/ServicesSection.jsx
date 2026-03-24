// import { Link } from 'react-router-dom'
// import { Search, Share2, MousePointer, Shield, Code, Cpu, Link2, Smartphone } from 'lucide-react'

// const services = [
//   {
//     icon: Search,
//     title: 'Search Engine Marketing',
//     desc: 'Increase your online visibility and drive traffic to your website with our expert search engine marketing services.',
//     color: '#e05c20',
//   },
//   {
//     icon: Share2,
//     title: 'Social Media',
//     desc: "Boost your brand's social media presence and engage with your audience through our strategic social media management.",
//     color: '#1a3c6e',
//   },
//   {
//     icon: MousePointer,
//     title: 'Pay Per Click',
//     desc: 'Maximize your advertising ROI and generate leads through targeted and optimized pay-per-click campaigns.',
//     color: '#e05c20',
//   },
//   {
//     icon: Shield,
//     title: 'Reputation Management',
//     desc: "Protect and enhance your brand's reputation with our proactive online reputation management solutions.",
//     color: '#1a3c6e',
//   },
//   {
//     icon: Code,
//     title: 'Web Development',
//     desc: 'Get a responsive, user-friendly, and customized website that will showcase your brand and drive conversions.',
//     color: '#e05c20',
//   },
//   {
//     icon: Cpu,
//     title: 'Internet of Things',
//     desc: 'Harness the power of IoT technology and revolutionize your business operations with our IoT solutions.',
//     color: '#1a3c6e',
//   },
//   {
//     icon: Link2,
//     title: 'Blockchain',
//     desc: 'Secure your transactions and protect your data with our reliable and innovative blockchain solutions.',
//     color: '#e05c20',
//   },
//   {
//     icon: Smartphone,
//     title: 'App Development',
//     desc: 'Build a seamless and user-friendly mobile app that will engage your customers and drive business growth.',
//     color: '#1a3c6e',
//   },
// ]

// export default function ServicesSection() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
//           <h2 className="section-title">Our Services</h2>
//           <p className="section-subtitle">
//             Comprehensive Digital Marketing Services to Boost Your Business Online
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, i) => {
//             const Icon = service.icon
//             return (
//               <div
//                 key={service.title}
//                 className="scroll-reveal bg-white border border-gray-100 rounded-xl p-6 card-shadow group cursor-pointer"
//                 style={{ transitionDelay: `${i * 60}ms` }}
//               >
//                 <div
//                   className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
//                   style={{ backgroundColor: `${service.color}15` }}
//                 >
//                   <Icon size={26} style={{ color: service.color }} />
//                 </div>
//                 <h3 className="font-bold text-primary text-base mb-2 group-hover:text-accent transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
//                 <Link
//                   to="/services"
//                   className="text-accent text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }











import { Link } from 'react-router-dom'
import { Search, Share2, MousePointer, Shield, Code, Cpu, Link2, Smartphone, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Search Engine Marketing',
    desc: 'Increase your online visibility and drive traffic with our expert SEO and SEM services.',
    color: '#FF6B2C',
    bg: '#fff4ef',
    badge: 'Most Popular',
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: "Boost your brand's social media presence and engage your audience through strategic management.",
    color: '#1A73E8',
    bg: '#eff6ff',
    badge: null,
  },
  {
    icon: MousePointer,
    title: 'Pay Per Click',
    desc: 'Maximize your advertising ROI and generate leads through targeted PPC campaigns.',
    color: '#FF6B2C',
    bg: '#fff4ef',
    badge: null,
  },
  {
    icon: Shield,
    title: 'Reputation Management',
    desc: "Protect and enhance your brand's reputation with our proactive ORM solutions.",
    color: '#1A73E8',
    bg: '#eff6ff',
    badge: null,
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Get a responsive, user-friendly, customized website that drives conversions.',
    color: '#FF6B2C',
    bg: '#fff4ef',
    badge: null,
  },
  {
    icon: Cpu,
    title: 'Internet of Things',
    desc: 'Harness the power of IoT technology to revolutionize your business operations.',
    color: '#1A73E8',
    bg: '#eff6ff',
    badge: null,
  },
  {
    icon: Link2,
    title: 'Blockchain',
    desc: 'Secure your transactions and protect your data with innovative blockchain solutions.',
    color: '#FF6B2C',
    bg: '#fff4ef',
    badge: null,
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Build seamless mobile apps that engage your customers and drive business growth.',
    color: '#1A73E8',
    bg: '#eff6ff',
    badge: null,
  },
]

export default function ServicesSection() {
  return (
    <section style={{ padding: '80px 0', background: '#F5F7FF', position: 'relative', overflow: 'hidden' }}>

      {/* Background decorative blobs */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-60px',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(255,107,44,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-40px',
        width: '250px', height: '250px',
        background: 'radial-gradient(circle, rgba(26,115,232,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── SECTION HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#fff4ef',
            border: '1.5px solid rgba(255,107,44,0.25)',
            borderRadius: '50px',
            padding: '6px 18px',
            marginBottom: '16px',
          }}>
            <span style={{
              width: '7px', height: '7px',
              background: '#FF6B2C', borderRadius: '50%',
              display: 'inline-block',
            }} />
            <span style={{ color: '#FF6B2C', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              What We Offer
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: 900,
            color: '#0f172a',
            marginBottom: '14px',
            letterSpacing: '-0.5px',
            lineHeight: 1.15,
          }}>
            Our{' '}
            <span style={{ color: '#FF6B2C' }}>Services</span>
            {' '}That Drive
            <br />
            <span style={{ color: '#1A73E8' }}>Real Business Growth</span>
          </h2>

          <p style={{
            color: '#64748b', fontSize: '16px',
            lineHeight: 1.75, maxWidth: '560px',
            margin: '0 auto',
          }}>
            Comprehensive digital solutions designed to boost your online presence,
            generate leads, and grow your revenue.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <ServiceCard key={service.title} service={service} Icon={Icon} delay={i * 60} />
            )
          })}
        </div>

        {/* ── BOTTOM CTA ROW ── */}
        <div style={{
          marginTop: '56px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}>
          <p style={{ color: '#64748b', fontSize: '15px', fontWeight: 500 }}>
            Not sure which service fits your business?
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #FF6B2C, #ff8c5a)',
                color: '#fff',
                fontWeight: 700, fontSize: '14px',
                padding: '13px 28px',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(255,107,44,0.40)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,107,44,0.55)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,107,44,0.40)'
              }}
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/services"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#fff',
                color: '#1A73E8',
                fontWeight: 700, fontSize: '14px',
                padding: '13px 28px',
                borderRadius: '50px',
                textDecoration: 'none',
                border: '2px solid #1A73E8',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1A73E8'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.color = '#1A73E8'
              }}
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

// ── Individual card as its own component for clean hover state ──
function ServiceCard({ service, Icon, delay }) {
  return (
    <div
      className="scroll-reveal"
      style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '28px 24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        border: '1.5px solid #f1f5f9',
        borderTop: `4px solid ${service.color}`,
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transitionDelay: `${delay}ms`,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = `0 20px 50px ${service.color}22`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
      }}
    >
      {/* Optional badge */}
      {service.badge && (
        <div style={{
          position: 'absolute', top: '16px', right: '16px',
          background: service.color,
          color: '#fff',
          fontSize: '10px', fontWeight: 700,
          padding: '3px 10px', borderRadius: '20px',
          letterSpacing: '0.5px',
        }}>
          {service.badge}
        </div>
      )}

      {/* Icon box */}
      <div style={{
        width: '56px', height: '56px',
        background: service.bg,
        borderRadius: '16px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '18px',
        transition: 'background 0.3s',
      }}>
        <Icon size={26} style={{ color: service.color }} />
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '16px', fontWeight: 800,
        color: '#0f172a',
        marginBottom: '10px',
        lineHeight: 1.3,
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        color: '#64748b', fontSize: '13px',
        lineHeight: 1.75, marginBottom: '20px',
      }}>
        {service.desc}
      </p>

      {/* Read more */}
      <Link
        to="/services"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          color: service.color,
          fontSize: '13px', fontWeight: 700,
          textDecoration: 'none',
          transition: 'gap 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.gap = '10px'}
        onMouseLeave={e => e.currentTarget.style.gap = '6px'}
      >
        Learn More
        <ArrowRight size={14} />
      </Link>

      {/* Bottom decorative dot */}
      <div style={{
        position: 'absolute', bottom: '-20px', right: '-20px',
        width: '70px', height: '70px',
        background: service.bg,
        borderRadius: '50%',
        opacity: 0.6,
      }} />
    </div>
  )
}