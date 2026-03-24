// import { Link } from 'react-router-dom'
// import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react'

// const benefits = [
//   { icon: Users, title: 'Dedicated Team', desc: 'Your own dedicated professionals' },
//   { icon: Award, title: 'Best Advisors', desc: 'Expert guidance at every step' },
//   { icon: TrendingUp, title: '24/7 Supports', desc: 'Round-the-clock assistance' },
// ]

// export default function CTASection() {
//   return (
//     <section className="py-16 bg-primary">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-10 items-center">
//           {/* Left: Benefit Cards */}
//           <div>
//             <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Why Us</p>
//             <h2 className="text-3xl font-bold text-white mb-3">
//               The Best SEO Agency For Your Business
//             </h2>
//             <p className="text-gray-300 text-sm leading-relaxed mb-8">
//               Has Remote Solution Pvt. Ltd. Digital Marketing Company is a professional, reliable, and trusted marketing company offering a range of solutions. We use the latest technology to achieve results and create long-lasting business value for our clients.
//             </p>

//             <div className="space-y-4">
//               {benefits.map((b) => {
//                 const Icon = b.icon
//                 return (
//                   <div key={b.title} className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors">
//                     <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0">
//                       <Icon size={22} className="text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-white text-sm">{b.title}</h4>
//                       <p className="text-gray-300 text-xs">{b.desc}</p>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Right: CTA Box */}
//           <div className="bg-white rounded-2xl p-8 shadow-2xl">
//             <h3 className="text-2xl font-bold text-primary mb-2">Ready to Scale?</h3>
//             <p className="text-gray-500 text-sm mb-6">
//               Get a free consultation and discover how we can help your business grow with top-tier remote professionals.
//             </p>

//             <div className="space-y-4 mb-6">
//               {[
//                 '✅ 2-Week Risk-Free Trial',
//                 '✅ Pre-vetted Professionals',
//                 '✅ 70% Cost Savings',
//                 '✅ Start in Days, Not Months',
//               ].map((item) => (
//                 <div key={item} className="text-sm text-gray-700 font-medium">{item}</div>
//               ))}
//             </div>

//             <Link
//               to="/contact"
//               className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-base"
//             >
//               Book a Free Discovery Call <ArrowRight size={18} />
//             </Link>
//             <p className="text-center text-xs text-gray-400 mt-3">No commitment required • Free consultation</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
















import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, TrendingUp, CheckCircle, Star } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Dedicated Team',
    desc: 'Your own dedicated professionals working exclusively for you',
    color: '#FF6B2C',
    bg: '#fff4ef',
  },
  {
    icon: Award,
    title: 'Best Advisors',
    desc: 'Expert guidance and strategy at every step of your journey',
    color: '#1A73E8',
    bg: '#eff6ff',
  },
  {
    icon: TrendingUp,
    title: '24/7 Support',
    desc: 'Round-the-clock assistance so your business never stops',
    color: '#FF6B2C',
    bg: '#fff4ef',
  },
]

const checklist = [
  '2-Week Risk-Free Trial',
  'Pre-vetted Professionals Only',
  '70% Cost Savings vs Local Hire',
  'Onboard in Days, Not Months',
  'Dedicated Account Manager',
]

export default function CTASection() {
  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background decorative shapes */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-80px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(255,107,44,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-60px',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(26,115,232,0.14) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}>

          {/* ── LEFT: Benefits ── */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,107,44,0.15)',
              border: '1.5px solid rgba(255,107,44,0.35)',
              borderRadius: '50px',
              padding: '6px 16px',
              marginBottom: '20px',
            }}>
              <Star size={12} style={{ color: '#FF6B2C', fill: '#FF6B2C' }} />
              <span style={{ color: '#FF6B2C', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                Why Choose Us
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 900,
              color: '#fff',
              marginBottom: '16px',
              lineHeight: 1.15,
              letterSpacing: '-0.5px',
            }}>
              The Best IT Agency
              <br />
              For Your{' '}
              <span style={{ color: '#FF6B2C' }}>Business Growth</span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '15px', lineHeight: 1.75,
              marginBottom: '36px',
              maxWidth: '460px',
            }}>
              Has Remote Solution connects founders and growing SMEs with
              pre-vetted remote talent — without the hassle, without the overhead.
              Professional results at 70% less cost.
            </p>

            {/* Benefit cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <BenefitCard key={b.title} b={b} Icon={Icon} />
                )
              })}
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex', gap: '32px',
              marginTop: '36px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255,255,255,0.12)',
            }}>
              {[
                { num: '300+', label: 'Happy Clients' },
                { num: '500+', label: 'Projects Done' },
                { num: '10+', label: 'Years Experience' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: '26px', fontWeight: 900, color: '#FF6B2C', lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '4px', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: CTA Card ── */}
          <div style={{
            background: '#fff',
            borderRadius: '24px',
            padding: '40px 36px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Top orange bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '5px',
              background: 'linear-gradient(90deg, #FF6B2C, #1A73E8)',
              borderRadius: '24px 24px 0 0',
            }} />

            {/* Decorative circle */}
            <div style={{
              position: 'absolute', top: '-40px', right: '-40px',
              width: '150px', height: '150px',
              background: '#fff4ef',
              borderRadius: '50%',
              opacity: 0.6,
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Card header */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: '#fff4ef',
                  border: '1.5px solid rgba(255,107,44,0.2)',
                  borderRadius: '50px',
                  padding: '4px 14px',
                  marginBottom: '14px',
                }}>
                  <span style={{ fontSize: '14px' }}>🚀</span>
                  <span style={{ color: '#FF6B2C', fontSize: '11px', fontWeight: 700 }}>
                    Start Today
                  </span>
                </div>
                <h3 style={{
                  fontSize: '26px', fontWeight: 900,
                  color: '#0f172a', marginBottom: '8px',
                  lineHeight: 1.2,
                }}>
                  Ready to{' '}
                  <span style={{ color: '#FF6B2C' }}>Scale</span>
                  {' '}Your Business?
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7 }}>
                  Get a free consultation and discover how top-tier remote
                  professionals can transform your business.
                </p>
              </div>

              {/* Checklist */}
              <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {checklist.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF6B2C, #ff8c5a)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <CheckCircle size={13} color="#fff" />
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#334155' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: '#f1f5f9', marginBottom: '24px' }} />

              {/* CTA Button */}
              <CTAButton />

              <p style={{
                textAlign: 'center', fontSize: '12px',
                color: '#94a3b8', marginTop: '12px',
              }}>
                No commitment required &nbsp;•&nbsp; Free consultation
              </p>

              {/* Social proof */}
              <div style={{
                marginTop: '20px',
                background: '#F5F7FF',
                borderRadius: '14px',
                padding: '14px 16px',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <div style={{ display: 'flex' }}>
                  {['🧑‍💼', '👩‍💻', '🧑‍🎨'].map((emoji, i) => (
                    <div key={i} style={{
                      width: '32px', height: '32px',
                      borderRadius: '50%',
                      background: i % 2 === 0 ? '#fff4ef' : '#eff6ff',
                      border: '2px solid #fff',
                      marginLeft: i > 0 ? '-8px' : '0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '16px',
                    }}>
                      {emoji}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '2px' }}>
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={11} style={{ color: '#FF6B2C', fill: '#FF6B2C' }} />
                    ))}
                  </div>
                  <p style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>
                    Trusted by <strong style={{ color: '#0f172a' }}>300+ businesses</strong> worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function BenefitCard({ b, Icon }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: '16px',
        padding: '16px 18px',
        transition: 'background 0.3s, border-color 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.10)'
        e.currentTarget.style.borderColor = `${b.color}55`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
      }}
    >
      <div style={{
        width: '48px', height: '48px', borderRadius: '14px',
        background: b.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={22} style={{ color: b.color }} />
      </div>
      <div>
        <h4 style={{ fontWeight: 800, color: '#fff', fontSize: '14px', marginBottom: '3px' }}>
          {b.title}
        </h4>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', lineHeight: 1.5 }}>
          {b.desc}
        </p>
      </div>
    </div>
  )
}

function CTAButton() {
  return (
    <Link
      to="/contact"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        width: '100%',
        background: 'linear-gradient(135deg, #FF6B2C, #ff8c5a)',
        color: '#fff',
        fontWeight: 800, fontSize: '15px',
        padding: '15px',
        borderRadius: '14px',
        textDecoration: 'none',
        boxShadow: '0 8px 25px rgba(255,107,44,0.45)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 14px 35px rgba(255,107,44,0.60)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,107,44,0.45)'
      }}
    >
      Book a Free Discovery Call
      <ArrowRight size={18} />
    </Link>
  )
}