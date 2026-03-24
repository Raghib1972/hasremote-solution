// import { ArrowRight, CheckCircle } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const highlights = [
//   'Virtual Assistants from <$8/hour',
//   'Full-Stack Developers without $100k+ salaries',
//   'Data-Driven SEO Experts without high agency retainers',
//   '2-week risk-free trial — pay only if satisfied',
// ]

// export default function HeroSection() {
//   return (
//     <section
//       className="relative min-h-[85vh] flex items-center overflow-hidden"
//       style={{
//         background:
//           'linear-gradient(135deg, #0e2954 0%, #1a3c6e 50%, #0e2954 100%)',
//       }}
//     >
//       {/* Decorative Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent opacity-10 blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-400 opacity-10 blur-3xl" />
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
//             backgroundSize: '40px 40px',
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4 py-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* LEFT CONTENT */}
//           <div>
//             <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
//               <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
//               <span className="text-accent text-sm font-medium">
//                 Award-Winning Remote Staffing Agency
//               </span>
//             </div>

//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
//               Stop Paying Local Prices for Talent.{' '}
//               <span className="text-accent">
//                 Scale with Top-Tier Indian Remote Staff for 70% Less.
//               </span>
//             </h1>

//             <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-xl">
//               Are you stuck in the endless hiring cycle? High salaries,
//               hidden overhead costs, long recruitment timelines,
//               and the constant fear of a bad hire?
//             </p>

//             <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-xl">
//               What if you could onboard a dedicated, English-speaking
//               professional in days — not months — at a fraction of the cost?
//             </p>

//             <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
//               <strong>Has Remote Solution</strong> connects founders and growing SMEs
//               with pre-vetted remote talent from India — without the hassle,
//               without the overhead.
//             </p>

//             {/* Highlights */}
//             <div className="space-y-3 mb-8">
//               {highlights.map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle size={18} className="text-accent shrink-0" />
//                   <span className="text-gray-200 text-sm">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <p className="text-gray-300 text-sm md:text-base mt-6 max-w-xl">
//               This isn’t outsourcing. This is effortless scaling.
//               This is getting your time back.
//               This is finally focusing on growth — not just operations.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mt-8">
//               <Link
//                 to="/contact"
//                 className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3 text-base shadow-lg hover:shadow-accent/40"
//               >
//                 Book a Free 10-Minute Strategy Call
//                 <ArrowRight size={18} />
//               </Link>

//               <Link
//                 to="/services"
//                 className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-center transition-all duration-300 text-base"
//               >
//                 Our Services
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT SIDE STATS */}
//           <div className="hidden lg:grid grid-cols-2 gap-4">
//             {[
//               { num: '10+', label: 'Years of Experience', icon: '🏆' },
//               { num: '500+', label: 'Projects Delivered', icon: '🚀' },
//               { num: '300+', label: 'Happy Clients', icon: '😊' },
//               { num: '70%', label: 'Cost Savings', icon: '💰' },
//             ].map((stat) => (
//               <div
//                 key={stat.label}
//                 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="text-3xl mb-2">{stat.icon}</div>
//                 <div className="text-3xl font-extrabold text-accent mb-1">
//                   {stat.num}
//                 </div>
//                 <div className="text-gray-300 text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// } old1









// import { ArrowRight, CheckCircle, Play, Users, Briefcase, Star, TrendingDown } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const stats = [
//   { num: '10+', label: 'Years Experience', icon: <Star size={22} />, color: '#FF6B2C' },
//   { num: '500+', label: 'Projects Delivered', icon: <Briefcase size={22} />, color: '#1A73E8' },
//   { num: '300+', label: 'Happy Clients', icon: <Users size={22} />, color: '#FF6B2C' },
//   { num: '70%', label: 'Cost Savings', icon: <TrendingDown size={22} />, color: '#1A73E8' },
// ]

// const highlights = [
//   'Virtual Assistants from <$8/hour',
//   'Full-Stack Developers without $100k+ salaries',
//   'Data-Driven SEO Experts without high agency retainers',
//   '2-week risk-free trial — pay only if satisfied',
// ]

// export default function HeroSection() {
//   return (
//     <section style={{
//       background: '#F5F7FF',
//       minHeight: '90vh',
//       display: 'flex',
//       alignItems: 'center',
//       overflow: 'hidden',
//       position: 'relative',
//       fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
//     }}>

//       {/* Background decorative shapes */}
//       <div style={{
//         position: 'absolute', top: 0, right: 0,
//         width: '55%', height: '100%',
//         background: 'linear-gradient(135deg, #1A73E8 0%, #0d4fa3 100%)',
//         clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)',
//         zIndex: 0,
//       }} />
//       {/* Orange blob top-right */}
//       <div style={{
//         position: 'absolute', top: '-60px', right: '80px',
//         width: '180px', height: '180px',
//         background: 'linear-gradient(135deg, #FF6B2C, #ff9a5c)',
//         borderRadius: '50%',
//         opacity: 0.18,
//         zIndex: 1,
//       }} />
//       {/* Orange blob bottom-left */}
//       <div style={{
//         position: 'absolute', bottom: '-40px', left: '30px',
//         width: '140px', height: '140px',
//         background: '#FF6B2C',
//         borderRadius: '50%',
//         opacity: 0.12,
//         zIndex: 1,
//       }} />
//       {/* Small floating dots */}
//       {[
//         { top: '15%', left: '44%', size: 14, color: '#FF6B2C' },
//         { top: '70%', left: '38%', size: 10, color: '#1A73E8' },
//         { top: '30%', right: '10%', size: 18, color: '#FF6B2C', opacity: 0.5 },
//         { top: '75%', right: '20%', size: 12, color: '#fff', opacity: 0.4 },
//       ].map((dot, i) => (
//         <div key={i} style={{
//           position: 'absolute',
//           top: dot.top, left: dot.left, right: dot.right,
//           width: dot.size, height: dot.size,
//           background: dot.color,
//           borderRadius: '50%',
//           opacity: dot.opacity || 0.7,
//           zIndex: 2,
//         }} />
//       ))}

//       {/* MAIN CONTAINER */}
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '80px 32px',
//         width: '100%',
//         position: 'relative',
//         zIndex: 3,
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: '48px',
//         alignItems: 'center',
//       }}>

//         {/* ── LEFT SIDE ── */}
//         <div>
//           {/* Badge */}
//           <div style={{
//             display: 'inline-flex', alignItems: 'center', gap: '8px',
//             background: '#fff',
//             border: '1.5px solid #FF6B2C44',
//             borderRadius: '50px',
//             padding: '6px 16px',
//             marginBottom: '24px',
//             boxShadow: '0 2px 12px #FF6B2C22',
//           }}>
//             <span style={{
//               width: '8px', height: '8px',
//               background: '#FF6B2C',
//               borderRadius: '50%',
//               display: 'inline-block',
//             }} />
//             <span style={{ color: '#FF6B2C', fontSize: '13px', fontWeight: 600 }}>
//               Award-Winning Remote Staffing Agency
//             </span>
//           </div>

//           {/* HEADING */}
//           <h1 style={{
//             fontSize: 'clamp(32px, 4vw, 52px)',
//             fontWeight: 900,
//             lineHeight: 1.1,
//             color: '#0f172a',
//             marginBottom: '20px',
//             letterSpacing: '-1px',
//           }}>
//             Stop Paying<br />
//             Local Prices.{' '}
//             <span style={{
//               color: '#FF6B2C',
//               position: 'relative',
//               display: 'inline-block',
//             }}>
//               Scale Smart
//               {/* Underline decoration */}
//               <svg viewBox="0 0 200 12" style={{
//                 position: 'absolute', bottom: '-6px', left: 0,
//                 width: '100%', height: '10px',
//               }}>
//                 <path d="M2 8 Q100 2 198 8" stroke="#FF6B2C" strokeWidth="3"
//                   fill="none" strokeLinecap="round" opacity="0.6" />
//               </svg>
//             </span>
//             {' '}for<br />
//             <span style={{ color: '#1A73E8' }}>70% Less Cost.</span>
//           </h1>

//           {/* Subtext */}
//           <p style={{
//             color: '#64748b', fontSize: '16px', lineHeight: 1.75,
//             marginBottom: '24px', maxWidth: '480px',
//           }}>
//             Hire pre-vetted, English-speaking Indian remote professionals — 
//             developers, VAs, SEO experts — onboarded in days, not months.
//           </p>

//           {/* Highlights */}
//           <div style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//             {highlights.map((item) => (
//               <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                 <div style={{
//                   width: '22px', height: '22px', borderRadius: '50%',
//                   background: '#FF6B2C', display: 'flex',
//                   alignItems: 'center', justifyContent: 'center',
//                   flexShrink: 0,
//                 }}>
//                   <CheckCircle size={14} color="#fff" />
//                 </div>
//                 <span style={{ color: '#334155', fontSize: '14px', fontWeight: 500 }}>{item}</span>
//               </div>
//             ))}
//           </div>

//           {/* CTA BUTTONS */}
//           <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
//             <Link
//               to="/contact"
//               style={{
//                 background: 'linear-gradient(135deg, #FF6B2C, #ff8c5a)',
//                 color: '#fff',
//                 fontWeight: 700,
//                 padding: '14px 28px',
//                 borderRadius: '50px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 textDecoration: 'none',
//                 fontSize: '15px',
//                 boxShadow: '0 8px 25px #FF6B2C55',
//                 transition: 'transform 0.2s, box-shadow 0.2s',
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.transform = 'translateY(-2px)'
//                 e.currentTarget.style.boxShadow = '0 12px 35px #FF6B2C66'
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.transform = 'translateY(0)'
//                 e.currentTarget.style.boxShadow = '0 8px 25px #FF6B2C55'
//               }}
//             >
//               Book Free Strategy Call
//               <ArrowRight size={18} />
//             </Link>

//             <Link
//               to="/services"
//               style={{
//                 display: 'flex', alignItems: 'center', gap: '10px',
//                 color: '#0f172a', textDecoration: 'none',
//                 fontSize: '15px', fontWeight: 600,
//               }}
//             >
//               <div style={{
//                 width: '44px', height: '44px',
//                 background: '#fff',
//                 borderRadius: '50%',
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 boxShadow: '0 4px 15px rgba(0,0,0,0.12)',
//                 border: '2px solid #e2e8f0',
//               }}>
//                 <Play size={16} fill="#1A73E8" color="#1A73E8" style={{ marginLeft: '2px' }} />
//               </div>
//               Our Services
//             </Link>
//           </div>

//           {/* BOTTOM STATS ROW */}
//           <div style={{
//             display: 'flex', gap: '32px', marginTop: '40px',
//             paddingTop: '32px',
//             borderTop: '1px solid #e2e8f0',
//           }}>
//             {[
//               { num: '300+', label: 'Happy Clients' },
//               { num: '500+', label: 'Projects Done' },
//               { num: '70%', label: 'Cost Savings' },
//             ].map(s => (
//               <div key={s.label}>
//                 <div style={{
//                   fontSize: '28px', fontWeight: 900,
//                   color: '#FF6B2C', lineHeight: 1,
//                 }}>{s.num}</div>
//                 <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px', fontWeight: 500 }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── RIGHT SIDE ── */}
//         <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

//           {/* Big circle bg */}
//           <div style={{
//             position: 'absolute',
//             width: '380px', height: '380px',
//             background: 'rgba(255,255,255,0.08)',
//             borderRadius: '50%',
//             border: '2px solid rgba(255,255,255,0.15)',
//           }} />

//           {/* Stats cards grid */}
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '16px',
//             padding: '20px',
//             position: 'relative',
//             zIndex: 2,
//           }}>
//             {stats.map((stat) => (
//               <div key={stat.label} style={{
//                 background: 'rgba(255,255,255,0.95)',
//                 borderRadius: '20px',
//                 padding: '24px 20px',
//                 textAlign: 'center',
//                 boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
//                 transition: 'transform 0.3s',
//                 cursor: 'default',
//                 backdropFilter: 'blur(10px)',
//               }}
//                 onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
//                 onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
//               >
//                 {/* Icon circle */}
//                 <div style={{
//                   width: '48px', height: '48px',
//                   background: stat.color + '15',
//                   borderRadius: '14px',
//                   display: 'flex', alignItems: 'center', justifyContent: 'center',
//                   margin: '0 auto 12px',
//                   color: stat.color,
//                 }}>
//                   {stat.icon}
//                 </div>
//                 <div style={{
//                   fontSize: '34px', fontWeight: 900,
//                   color: stat.color,
//                   lineHeight: 1,
//                   marginBottom: '6px',
//                 }}>{stat.num}</div>
//                 <div style={{
//                   fontSize: '12px', color: '#64748b',
//                   fontWeight: 600, lineHeight: 1.3,
//                 }}>{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Floating pill card — top */}
//           <div style={{
//             position: 'absolute', top: '-10px', left: '0px',
//             background: '#FF6B2C',
//             color: '#fff',
//             borderRadius: '50px',
//             padding: '8px 16px',
//             fontSize: '12px', fontWeight: 700,
//             boxShadow: '0 6px 20px #FF6B2C55',
//             display: 'flex', alignItems: 'center', gap: '6px',
//             zIndex: 4,
//           }}>
//             <span style={{ fontSize: '16px' }}>🚀</span> Onboard in 48 Hours
//           </div>

//           {/* Floating pill card — bottom */}
//           <div style={{
//             position: 'absolute', bottom: '-10px', right: '0px',
//             background: '#fff',
//             color: '#0f172a',
//             borderRadius: '50px',
//             padding: '8px 16px',
//             fontSize: '12px', fontWeight: 700,
//             boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
//             display: 'flex', alignItems: 'center', gap: '6px',
//             zIndex: 4,
//             border: '1.5px solid #e2e8f0',
//           }}>
//             <span style={{ fontSize: '16px' }}>✅</span> 2-Week Risk-Free Trial
//           </div>

//         </div>
//       </div>

//       {/* Wave bottom divider */}
//       <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2 }}>
//         <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
//           style={{ display: 'block', width: '100%' }}>
//           <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="#F5F7FF" />
//         </svg>
//       </div>

//     </section>
//   )
// }














import { ArrowRight, CheckCircle, Play, Users, Briefcase, Star, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import hero1 from '../assets/images/Hero/Hero/hero-1.jpeg'
import hero2 from '../assets/images/Hero/Hero/hero-2.jpeg'
import hero3 from '../assets/images/Hero/Hero/hero-3.jpeg'
import hero4 from '../assets/images/Hero/Hero/hero-4.jpeg'
import hero5 from '../assets/images/Hero/Hero/hero-5.jpeg'

// ✅ All 5 images included
const heroImages = [hero1, hero2, hero3, hero4, hero5]

const highlights = [
  'Virtual Assistants from <$8/hour',
  'Full-Stack Developers without $100k+ salaries',
  'Data-Driven SEO Experts without high agency retainers',
  '2-week risk-free trial — pay only if satisfied',
]

export default function HeroSection() {
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg(prev => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{
      background: '#F5F7FF',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
    }}>

      {/* Blue diagonal bg */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '50%', height: '100%',
        background: 'linear-gradient(150deg, #1A73E8 0%, #0b3d8f 100%)',
        clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)',
        zIndex: 0,
      }} />

      {/* Decorative circles */}
      <div style={{ position:'absolute', top:'-80px', right:'5%', width:'260px', height:'260px', borderRadius:'50%', background:'rgba(255,255,255,0.06)', zIndex:1 }} />
      <div style={{ position:'absolute', bottom:'-60px', right:'20%', width:'180px', height:'180px', borderRadius:'50%', background:'rgba(255,107,44,0.15)', zIndex:1 }} />
      <div style={{ position:'absolute', top:'40%', left:'42%', width:'12px', height:'12px', borderRadius:'50%', background:'#FF6B2C', opacity:0.7, zIndex:2 }} />
      <div style={{ position:'absolute', bottom:'25%', left:'36%', width:'8px', height:'8px', borderRadius:'50%', background:'#1A73E8', opacity:0.6, zIndex:2 }} />

      {/* MAIN GRID */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 28px',
        width: '100%',
        position: 'relative',
        zIndex: 3,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'center',
      }}>

        {/* ─── LEFT ─── */}
        <div>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#fff',
            border: '1.5px solid #FF6B2C44',
            borderRadius: '50px',
            padding: '5px 14px',
            marginBottom: '20px',
            boxShadow: '0 2px 12px #FF6B2C18',
          }}>
            <span style={{ width:'8px', height:'8px', background:'#FF6B2C', borderRadius:'50%', display:'inline-block' }} />
            <span style={{ color:'#FF6B2C', fontSize:'12px', fontWeight:700, letterSpacing:'0.3px' }}>
              Award-Winning Remote Staffing Agency
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(28px, 3.6vw, 50px)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#0f172a',
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}>
            Stop Paying<br />
            Local Prices.{' '}
            <span style={{ color:'#FF6B2C', position:'relative', display:'inline-block' }}>
              Scale Smart
              <svg viewBox="0 0 200 12" style={{ position:'absolute', bottom:'-5px', left:0, width:'100%', height:'9px' }}>
                <path d="M2 8 Q100 2 198 8" stroke="#FF6B2C" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
              </svg>
            </span>{' '}for<br />
            <span style={{ color:'#1A73E8' }}>70% Less Cost.</span>
          </h1>

          {/* Subtext */}
          <p style={{ color:'#64748b', fontSize:'14.5px', lineHeight:1.75, marginBottom:'20px', maxWidth:'440px' }}>
            Hire pre-vetted, English-speaking Indian remote professionals —
            developers, VAs, SEO experts — onboarded in days, not months.
          </p>

          {/* Highlights */}
          <div style={{ marginBottom:'26px', display:'flex', flexDirection:'column', gap:'9px' }}>
            {highlights.map(item => (
              <div key={item} style={{ display:'flex', alignItems:'center', gap:'9px' }}>
                <div style={{
                  width:'20px', height:'20px', borderRadius:'50%',
                  background:'#FF6B2C', display:'flex',
                  alignItems:'center', justifyContent:'center', flexShrink:0,
                }}>
                  <CheckCircle size={12} color="#fff" />
                </div>
                <span style={{ color:'#334155', fontSize:'13.5px', fontWeight:500 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display:'flex', gap:'14px', alignItems:'center', flexWrap:'wrap' }}>
            <Link
              to="/contact"
              style={{
                background: 'linear-gradient(135deg, #FF6B2C, #ff8c5a)',
                color: '#fff', fontWeight: 700,
                padding: '12px 24px',
                borderRadius: '50px',
                display: 'flex', alignItems: 'center', gap: '7px',
                textDecoration: 'none', fontSize: '14px',
                boxShadow: '0 8px 24px #FF6B2C44',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 32px #FF6B2C66' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 24px #FF6B2C44' }}
            >
              Book Free Strategy Call
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/services"
              style={{ display:'flex', alignItems:'center', gap:'9px', color:'#0f172a', textDecoration:'none', fontSize:'14px', fontWeight:600 }}
            >
              <div style={{
                width:'40px', height:'40px',
                background:'#fff', borderRadius:'50%',
                display:'flex', alignItems:'center', justifyContent:'center',
                boxShadow:'0 4px 14px rgba(0,0,0,0.11)',
                border:'2px solid #e2e8f0',
              }}>
                <Play size={14} fill="#1A73E8" color="#1A73E8" style={{ marginLeft:'2px' }} />
              </div>
              Our Services
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display:'flex', gap:'28px', marginTop:'32px', paddingTop:'24px', borderTop:'1px solid #e2e8f0' }}>
            {[
              { num: '300+', label: 'Happy Clients' },
              { num: '500+', label: 'Projects Done' },
              { num: '70%', label: 'Cost Savings' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize:'26px', fontWeight:900, color:'#FF6B2C', lineHeight:1 }}>{s.num}</div>
                <div style={{ fontSize:'11px', color:'#94a3b8', marginTop:'3px', fontWeight:600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT: IMAGE CAROUSEL ─── */}
        <div style={{ position:'relative', display:'flex', flexDirection:'column', alignItems:'center', gap:'16px' }}>

          {/* Main image frame */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '520px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.28)',
            aspectRatio: '4/3',
            background: '#0b3d8f',
          }}>
            {heroImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`hero-${i+1}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: activeImg === i ? 1 : 0,
                  transition: 'opacity 0.8s ease',
                }}
              />
            ))}

            {/* Gradient overlay bottom */}
            <div style={{
              position:'absolute', bottom:0, left:0, right:0, height:'45%',
              background:'linear-gradient(to top, rgba(10,30,80,0.75) 0%, transparent 100%)',
              zIndex:2,
            }} />

            {/* Prev / Next arrows */}
            {[
              { side:'left', icon:<ChevronLeft size={18}/>, action:() => setActiveImg(p => (p-1+heroImages.length)%heroImages.length) },
              { side:'right', icon:<ChevronRight size={18}/>, action:() => setActiveImg(p => (p+1)%heroImages.length) },
            ].map(btn => (
              <button
                key={btn.side}
                onClick={btn.action}
                style={{
                  position:'absolute',
                  top:'50%', [btn.side]:'12px',
                  transform:'translateY(-50%)',
                  width:'34px', height:'34px',
                  background:'rgba(255,255,255,0.18)',
                  backdropFilter:'blur(8px)',
                  border:'1px solid rgba(255,255,255,0.3)',
                  borderRadius:'50%',
                  color:'#fff',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  cursor:'pointer',
                  zIndex:3,
                  transition:'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.32)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.18)'}
              >
                {btn.icon}
              </button>
            ))}

            {/* ✅ Floating badge top-left — text restored */}
            <div style={{
              position:'absolute', top:'14px', left:'14px', zIndex:4,
              background:'#FF6B2C', color:'#fff',
              borderRadius:'50px', padding:'6px 13px',
              fontSize:'11px', fontWeight:700,
              display:'flex', alignItems:'center', gap:'5px',
              boxShadow:'0 4px 16px #FF6B2C55',
            }}>
              
            </div>

            {/* ✅ Floating badge bottom-right — text restored */}
            <div style={{
              position:'absolute', bottom:'40px', right:'14px', zIndex:4,
              background:'rgba(255,255,255,0.95)',
              color:'#0f172a',
              borderRadius:'50px', padding:'6px 13px',
              fontSize:'11px', fontWeight:700,
              display:'flex', alignItems:'center', gap:'5px',
              boxShadow:'0 4px 16px rgba(0,0,0,0.18)',
            }}>
              
            </div>

            {/* Dot indicators */}
            <div style={{
              position:'absolute', bottom:'14px', left:'50%',
              transform:'translateX(-50%)',
              display:'flex', gap:'6px', zIndex:4,
            }}>
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: activeImg===i ? '22px' : '7px',
                    height:'7px',
                    borderRadius:'50px',
                    background: activeImg===i ? '#FF6B2C' : 'rgba(255,255,255,0.55)',
                    border:'none', cursor:'pointer', padding:0,
                    transition:'all 0.35s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail strip — 5 images fit */}
          <div style={{ display:'flex', gap:'8px', justifyContent:'center', flexWrap:'wrap' }}>
            {heroImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  width:'56px', height:'42px',
                  borderRadius:'10px',
                  overflow:'hidden',
                  border: activeImg===i ? '2.5px solid #FF6B2C' : '2.5px solid transparent',
                  boxShadow: activeImg===i ? '0 0 0 2px #FF6B2C44' : '0 2px 8px rgba(0,0,0,0.14)',
                  cursor:'pointer', padding:0, background:'none',
                  transition:'all 0.25s',
                  flexShrink:0,
                }}
              >
                <img src={img} alt={`thumb-${i+1}`} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Wave divider */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, zIndex:2 }}>
        <svg viewBox="0 0 1440 55" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }}>
          <path d="M0 55 L0 28 Q360 0 720 28 Q1080 55 1440 18 L1440 55 Z" fill="#F5F7FF" />
        </svg>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}