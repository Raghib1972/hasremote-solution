
// import { ArrowRight, CheckCircle, Play, Users, Briefcase, Star, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'

// import hero1 from '../assets/images/Hero/Hero/hero-1.jpeg'
// import hero2 from '../assets/images/Hero/Hero/hero-2.jpeg'
// import hero3 from '../assets/images/Hero/Hero/hero-3.jpeg'
// import hero4 from '../assets/images/Hero/Hero/hero-4.jpeg'
// import hero5 from '../assets/images/Hero/Hero/hero-5.jpeg'

// // ✅ All 5 images included
// const heroImages = [hero1, hero2, hero3, hero4, hero5]

// const highlights = [
//   'Virtual Assistants from <$8/hour',
//   'Full-Stack Developers without $100k+ salaries',
//   'Data-Driven SEO Experts without high agency retainers',
//   '2-week risk-free trial — pay only if satisfied',
// ]

// export default function HeroSection() {
//   const [activeImg, setActiveImg] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveImg(prev => (prev + 1) % heroImages.length)
//     }, 4000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <section style={{
//       background: '#F5F7FF',
//       minHeight: '92vh',
//       display: 'flex',
//       alignItems: 'center',
//       overflow: 'hidden',
//       position: 'relative',
//       fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
//     }}>

//       {/* Blue diagonal bg */}
//       <div style={{
//         position: 'absolute', top: 0, right: 0,
//         width: '50%', height: '100%',
//         background: 'linear-gradient(150deg, #1A73E8 0%, #0b3d8f 100%)',
//         clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)',
//         zIndex: 0,
//       }} />

//       {/* Decorative circles */}
//       <div style={{ position:'absolute', top:'-80px', right:'5%', width:'260px', height:'260px', borderRadius:'50%', background:'rgba(255,255,255,0.06)', zIndex:1 }} />
//       <div style={{ position:'absolute', bottom:'-60px', right:'20%', width:'180px', height:'180px', borderRadius:'50%', background:'rgba(255,107,44,0.15)', zIndex:1 }} />
//       <div style={{ position:'absolute', top:'40%', left:'42%', width:'12px', height:'12px', borderRadius:'50%', background:'#FF6B2C', opacity:0.7, zIndex:2 }} />
//       <div style={{ position:'absolute', bottom:'25%', left:'36%', width:'8px', height:'8px', borderRadius:'50%', background:'#1A73E8', opacity:0.6, zIndex:2 }} />

//       {/* MAIN GRID */}
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '60px 28px',
//         width: '100%',
//         position: 'relative',
//         zIndex: 3,
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: '40px',
//         alignItems: 'center',
//       }}>

//         {/* ─── LEFT ─── */}
//         <div>
//           {/* Badge */}
//           <div style={{
//             display: 'inline-flex', alignItems: 'center', gap: '8px',
//             background: '#fff',
//             border: '1.5px solid #FF6B2C44',
//             borderRadius: '50px',
//             padding: '5px 14px',
//             marginBottom: '20px',
//             boxShadow: '0 2px 12px #FF6B2C18',
//           }}>
//             <span style={{ width:'8px', height:'8px', background:'#FF6B2C', borderRadius:'50%', display:'inline-block' }} />
//             <span style={{ color:'#FF6B2C', fontSize:'12px', fontWeight:700, letterSpacing:'0.3px' }}>
//               Award-Winning Remote Staffing Agency
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 style={{
//             fontSize: 'clamp(28px, 3.6vw, 50px)',
//             fontWeight: 900,
//             lineHeight: 1.1,
//             color: '#0f172a',
//             marginBottom: '16px',
//             letterSpacing: '-1px',
//           }}>
//             Stop Paying<br />
//             Local Prices.{' '}
//             <span style={{ color:'#FF6B2C', position:'relative', display:'inline-block' }}>
//               Scale Smart
//               <svg viewBox="0 0 200 12" style={{ position:'absolute', bottom:'-5px', left:0, width:'100%', height:'9px' }}>
//                 <path d="M2 8 Q100 2 198 8" stroke="#FF6B2C" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
//               </svg>
//             </span>{' '}for<br />
//             <span style={{ color:'#1A73E8' }}>70% Less Cost.</span>
//           </h1>

//           {/* Subtext */}
//           <p style={{ color:'#64748b', fontSize:'14.5px', lineHeight:1.75, marginBottom:'20px', maxWidth:'440px' }}>
//             Hire pre-vetted, English-speaking Indian remote professionals —
//             developers, VAs, SEO experts — onboarded in days, not months.
//           </p>

//           {/* Highlights */}
//           <div style={{ marginBottom:'26px', display:'flex', flexDirection:'column', gap:'9px' }}>
//             {highlights.map(item => (
//               <div key={item} style={{ display:'flex', alignItems:'center', gap:'9px' }}>
//                 <div style={{
//                   width:'20px', height:'20px', borderRadius:'50%',
//                   background:'#FF6B2C', display:'flex',
//                   alignItems:'center', justifyContent:'center', flexShrink:0,
//                 }}>
//                   <CheckCircle size={12} color="#fff" />
//                 </div>
//                 <span style={{ color:'#334155', fontSize:'13.5px', fontWeight:500 }}>{item}</span>
//               </div>
//             ))}
//           </div>

//           {/* CTAs */}
//           <div style={{ display:'flex', gap:'14px', alignItems:'center', flexWrap:'wrap' }}>
//             <Link
//               to="/contact"
//               style={{
//                 background: 'linear-gradient(135deg, #FF6B2C, #ff8c5a)',
//                 color: '#fff', fontWeight: 700,
//                 padding: '12px 24px',
//                 borderRadius: '50px',
//                 display: 'flex', alignItems: 'center', gap: '7px',
//                 textDecoration: 'none', fontSize: '14px',
//                 boxShadow: '0 8px 24px #FF6B2C44',
//                 transition: 'transform 0.2s, box-shadow 0.2s',
//               }}
//               onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 32px #FF6B2C66' }}
//               onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 24px #FF6B2C44' }}
//             >
//               Book Free Strategy Call
//               <ArrowRight size={16} />
//             </Link>

//             <Link
//               to="/services"
//               style={{ display:'flex', alignItems:'center', gap:'9px', color:'#0f172a', textDecoration:'none', fontSize:'14px', fontWeight:600 }}
//             >
//               <div style={{
//                 width:'40px', height:'40px',
//                 background:'#fff', borderRadius:'50%',
//                 display:'flex', alignItems:'center', justifyContent:'center',
//                 boxShadow:'0 4px 14px rgba(0,0,0,0.11)',
//                 border:'2px solid #e2e8f0',
//               }}>
//                 <Play size={14} fill="#1A73E8" color="#1A73E8" style={{ marginLeft:'2px' }} />
//               </div>
//               Our Services
//             </Link>
//           </div>

//           {/* Stats row */}
//           <div style={{ display:'flex', gap:'28px', marginTop:'32px', paddingTop:'24px', borderTop:'1px solid #e2e8f0' }}>
//             {[
//               { num: '300+', label: 'Happy Clients' },
//               { num: '500+', label: 'Projects Done' },
//               { num: '70%', label: 'Cost Savings' },
//             ].map(s => (
//               <div key={s.label}>
//                 <div style={{ fontSize:'26px', fontWeight:900, color:'#FF6B2C', lineHeight:1 }}>{s.num}</div>
//                 <div style={{ fontSize:'11px', color:'#94a3b8', marginTop:'3px', fontWeight:600 }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ─── RIGHT: IMAGE CAROUSEL ─── */}
//         <div style={{ position:'relative', display:'flex', flexDirection:'column', alignItems:'center', gap:'16px' }}>

//           {/* Main image frame */}
//           <div style={{
//             position: 'relative',
//             width: '100%',
//             maxWidth: '520px',
//             borderRadius: '24px',
//             overflow: 'hidden',
//             boxShadow: '0 30px 80px rgba(0,0,0,0.28)',
//             aspectRatio: '4/3',
//             background: '#0b3d8f',
//           }}>
//             {heroImages.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`hero-${i+1}`}
//                 style={{
//                   position: 'absolute',
//                   inset: 0,
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   opacity: activeImg === i ? 1 : 0,
//                   transition: 'opacity 0.8s ease',
//                 }}
//               />
//             ))}

//             {/* Gradient overlay bottom */}
//             <div style={{
//               position:'absolute', bottom:0, left:0, right:0, height:'45%',
//               background:'linear-gradient(to top, rgba(10,30,80,0.75) 0%, transparent 100%)',
//               zIndex:2,
//             }} />

//             {/* Prev / Next arrows */}
//             {[
//               { side:'left', icon:<ChevronLeft size={18}/>, action:() => setActiveImg(p => (p-1+heroImages.length)%heroImages.length) },
//               { side:'right', icon:<ChevronRight size={18}/>, action:() => setActiveImg(p => (p+1)%heroImages.length) },
//             ].map(btn => (
//               <button
//                 key={btn.side}
//                 onClick={btn.action}
//                 style={{
//                   position:'absolute',
//                   top:'50%', [btn.side]:'12px',
//                   transform:'translateY(-50%)',
//                   width:'34px', height:'34px',
//                   background:'rgba(255,255,255,0.18)',
//                   backdropFilter:'blur(8px)',
//                   border:'1px solid rgba(255,255,255,0.3)',
//                   borderRadius:'50%',
//                   color:'#fff',
//                   display:'flex', alignItems:'center', justifyContent:'center',
//                   cursor:'pointer',
//                   zIndex:3,
//                   transition:'background 0.2s',
//                 }}
//                 onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.32)'}
//                 onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.18)'}
//               >
//                 {btn.icon}
//               </button>
//             ))}

//             {/* ✅ Floating badge top-left — text restored */}
//             <div style={{
//               position:'absolute', top:'14px', left:'14px', zIndex:4,
//               background:'#FF6B2C', color:'#fff',
//               borderRadius:'50px', padding:'6px 13px',
//               fontSize:'11px', fontWeight:700,
//               display:'flex', alignItems:'center', gap:'5px',
//               boxShadow:'0 4px 16px #FF6B2C55',
//             }}>
              
//             </div>

//             {/* ✅ Floating badge bottom-right — text restored */}
//             <div style={{
//               position:'absolute', bottom:'40px', right:'14px', zIndex:4,
//               background:'rgba(255,255,255,0.95)',
//               color:'#0f172a',
//               borderRadius:'50px', padding:'6px 13px',
//               fontSize:'11px', fontWeight:700,
//               display:'flex', alignItems:'center', gap:'5px',
//               boxShadow:'0 4px 16px rgba(0,0,0,0.18)',
//             }}>
              
//             </div>

//             {/* Dot indicators */}
//             <div style={{
//               position:'absolute', bottom:'14px', left:'50%',
//               transform:'translateX(-50%)',
//               display:'flex', gap:'6px', zIndex:4,
//             }}>
//               {heroImages.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActiveImg(i)}
//                   style={{
//                     width: activeImg===i ? '22px' : '7px',
//                     height:'7px',
//                     borderRadius:'50px',
//                     background: activeImg===i ? '#FF6B2C' : 'rgba(255,255,255,0.55)',
//                     border:'none', cursor:'pointer', padding:0,
//                     transition:'all 0.35s ease',
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Thumbnail strip — 5 images fit */}
//           <div style={{ display:'flex', gap:'8px', justifyContent:'center', flexWrap:'wrap' }}>
//             {heroImages.map((img, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActiveImg(i)}
//                 style={{
//                   width:'56px', height:'42px',
//                   borderRadius:'10px',
//                   overflow:'hidden',
//                   border: activeImg===i ? '2.5px solid #FF6B2C' : '2.5px solid transparent',
//                   boxShadow: activeImg===i ? '0 0 0 2px #FF6B2C44' : '0 2px 8px rgba(0,0,0,0.14)',
//                   cursor:'pointer', padding:0, background:'none',
//                   transition:'all 0.25s',
//                   flexShrink:0,
//                 }}
//               >
//                 <img src={img} alt={`thumb-${i+1}`} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
//               </button>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* Wave divider */}
//       <div style={{ position:'absolute', bottom:0, left:0, right:0, zIndex:2 }}>
//         <svg viewBox="0 0 1440 55" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }}>
//           <path d="M0 55 L0 28 Q360 0 720 28 Q1080 55 1440 18 L1440 55 Z" fill="#F5F7FF" />
//         </svg>
//       </div>

//       {/* Responsive styles */}
//       <style>{`
//         @media (max-width: 768px) {
//           section > div[style*="grid-template-columns"] {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }


























import { ArrowRight, CheckCircle, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import hero1 from '../assets/images/Hero/Hero/hero-1.jpeg'
import hero2 from '../assets/images/Hero/Hero/hero-2.jpeg'
import hero3 from '../assets/images/Hero/Hero/hero-3.jpeg'
import hero4 from '../assets/images/Hero/Hero/hero-4.jpeg'
import hero5 from '../assets/images/Hero/Hero/hero-5.jpeg'

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
    <>
      <style>{`
        /* ── Hero Section ── */
        .hero-section {
          background: #F5F7FF;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
          font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
        }

        /* Blue diagonal background */
        .hero-bg-diagonal {
          position: absolute;
          top: 0; right: 0;
          width: 52%;
          height: 100%;
          background: linear-gradient(150deg, #1A73E8 0%, #0b3d8f 100%);
          clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%);
          z-index: 0;
        }

        /* Decorative blobs */
        .hero-blob-1 {
          position: absolute; top: -80px; right: 5%;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          z-index: 1;
        }
        .hero-blob-2 {
          position: absolute; bottom: -60px; right: 20%;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: rgba(255,107,44,0.15);
          z-index: 1;
        }
        .hero-dot-1 {
          position: absolute; top: 40%; left: 42%;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: #FF6B2C; opacity: 0.7; z-index: 2;
        }
        .hero-dot-2 {
          position: absolute; bottom: 25%; left: 36%;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #1A73E8; opacity: 0.6; z-index: 2;
        }

        /* Main grid */
        .hero-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 28px;
          width: 100%;
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          box-sizing: border-box;
        }

        /* ── LEFT COLUMN ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1.5px solid #FF6B2C44;
          border-radius: 50px;
          padding: 5px 14px;
          margin-bottom: 20px;
          box-shadow: 0 2px 12px #FF6B2C18;
        }
        .hero-badge-dot {
          width: 8px; height: 8px;
          background: #FF6B2C;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }
        .hero-badge-text {
          color: #FF6B2C;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }

        .hero-heading {
          font-size: clamp(28px, 3.6vw, 50px);
          font-weight: 900;
          line-height: 1.1;
          color: #0f172a;
          margin: 0 0 16px 0;
          letter-spacing: -1px;
        }
        .hero-heading-orange {
          color: #FF6B2C;
          position: relative;
          display: inline-block;
        }
        .hero-heading-blue { color: #1A73E8; }

        .hero-subtext {
          color: #64748b;
          font-size: 14.5px;
          line-height: 1.75;
          margin-bottom: 20px;
          max-width: 440px;
        }

        .hero-highlights {
          margin-bottom: 26px;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .hero-highlight-item {
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .hero-highlight-icon {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: #FF6B2C;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hero-highlight-text {
          color: #334155;
          font-size: 13.5px;
          font-weight: 500;
        }

        /* CTAs */
        .hero-ctas {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }
        .hero-cta-primary {
          background: linear-gradient(135deg, #FF6B2C, #ff8c5a);
          color: #fff;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          font-size: 14px;
          box-shadow: 0 8px 24px #FF6B2C44;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .hero-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px #FF6B2C66;
        }
        .hero-cta-secondary {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #0f172a;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
        }
        .hero-play-btn {
          width: 40px; height: 40px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.11);
          border: 2px solid #e2e8f0;
          flex-shrink: 0;
        }

        /* Stats */
        .hero-stats {
          display: flex;
          gap: 28px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }
        .hero-stat-num {
          font-size: 26px;
          font-weight: 900;
          color: #FF6B2C;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 11px;
          color: #94a3b8;
          margin-top: 3px;
          font-weight: 600;
        }

        /* ── RIGHT: IMAGE CAROUSEL ── */
        .hero-right {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .hero-img-frame {
          position: relative;
          width: 100%;
          max-width: 520px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.28);
          aspect-ratio: 4/3;
          background: #0b3d8f;
        }
        .hero-img-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.8s ease;
        }
        .hero-img-gradient {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 45%;
          background: linear-gradient(to top, rgba(10,30,80,0.75) 0%, transparent 100%);
          z-index: 2;
        }

        /* Nav arrows */
        .hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 34px; height: 34px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 3;
          transition: background 0.2s;
        }
        .hero-arrow:hover { background: rgba(255,255,255,0.32); }
        .hero-arrow-left { left: 12px; }
        .hero-arrow-right { right: 12px; }

        /* Dot indicators */
        .hero-dots {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 4;
        }
        .hero-dot-btn {
          height: 7px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.35s ease;
        }

        /* Thumbnails */
        .hero-thumbs {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-thumb-btn {
          width: 56px; height: 42px;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          background: none;
          transition: all 0.25s;
          flex-shrink: 0;
        }
        .hero-thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Wave */
        .hero-wave {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 2;
        }
        .hero-wave svg { display: block; width: 100%; }

        /* ════════════════════════════════
           TABLET  (max-width: 1024px)
        ════════════════════════════════ */
        @media (max-width: 1024px) {
          .hero-bg-diagonal {
            width: 55%;
            clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
          .hero-grid {
            gap: 24px;
            padding: 48px 24px;
          }
          .hero-heading {
            font-size: clamp(24px, 3.2vw, 38px);
          }
          .hero-subtext {
            font-size: 13.5px;
          }
        }

        /* ════════════════════════════════
           MOBILE  (max-width: 768px)
        ════════════════════════════════ */
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding-bottom: 60px;
          }

          /* Stack blue bg to bottom strip on mobile */
          .hero-bg-diagonal {
            top: auto;
            bottom: 0;
            width: 100%;
            height: 45%;
            clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%);
          }

          .hero-blob-1 { display: none; }
          .hero-blob-2 { width: 100px; height: 100px; right: 10%; bottom: -30px; }
          .hero-dot-1 { display: none; }
          .hero-dot-2 { display: none; }

          /* Single column */
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 32px 20px 20px;
            gap: 32px;
          }

          /* Left column */
          .hero-badge-text {
            font-size: 11px;
          }

          .hero-heading {
            font-size: clamp(26px, 7vw, 36px);
            letter-spacing: -0.5px;
            margin-bottom: 12px;
          }

          .hero-subtext {
            font-size: 14px;
            max-width: 100%;
            margin-bottom: 16px;
          }

          .hero-highlights {
            margin-bottom: 20px;
            gap: 8px;
          }
          .hero-highlight-text {
            font-size: 13px;
          }

          .hero-ctas {
            gap: 12px;
          }
          .hero-cta-primary {
            padding: 12px 20px;
            font-size: 13.5px;
          }
          .hero-cta-secondary {
            font-size: 13.5px;
          }

          .hero-stats {
            gap: 20px;
            margin-top: 24px;
            padding-top: 20px;
          }
          .hero-stat-num {
            font-size: 22px;
          }

          /* Right / carousel */
          .hero-right {
            gap: 12px;
          }
          .hero-img-frame {
            border-radius: 18px;
            box-shadow: 0 16px 48px rgba(0,0,0,0.22);
          }
          .hero-thumb-btn {
            width: 48px;
            height: 36px;
            border-radius: 8px;
          }

          /* Wave hide on mobile (clips awkwardly) */
          .hero-wave { display: none; }
        }

        /* ════════════════════════════════
           SMALL PHONES  (max-width: 400px)
        ════════════════════════════════ */
        @media (max-width: 400px) {
          .hero-grid {
            padding: 28px 16px 16px;
          }
          .hero-heading {
            font-size: clamp(22px, 8vw, 30px);
          }
          .hero-badge {
            padding: 4px 11px;
          }
          .hero-badge-text {
            font-size: 10px;
          }
          .hero-cta-primary {
            padding: 11px 16px;
            font-size: 13px;
          }
          .hero-stat-num {
            font-size: 20px;
          }
          .hero-stat-label {
            font-size: 10px;
          }
          .hero-thumb-btn {
            width: 40px;
            height: 30px;
          }
        }
      `}</style>

      <section className="hero-section">

        {/* Blue diagonal bg */}
        <div className="hero-bg-diagonal" />

        {/* Decorative blobs/dots */}
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />
        <div className="hero-dot-1" />
        <div className="hero-dot-2" />

        {/* MAIN GRID */}
        <div className="hero-grid">

          {/* ─── LEFT ─── */}
          <div>
            {/* Badge */}
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">Award-Winning Remote Staffing Agency</span>
            </div>

            {/* Heading */}
            <h1 className="hero-heading">
              Stop Paying<br />
              Local Prices.{' '}
              <span className="hero-heading-orange">
                Scale Smart
                <svg viewBox="0 0 200 12" style={{ position:'absolute', bottom:'-5px', left:0, width:'100%', height:'9px' }}>
                  <path d="M2 8 Q100 2 198 8" stroke="#FF6B2C" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
                </svg>
              </span>{' '}for<br />
              <span className="hero-heading-blue">70% Less Cost.</span>
            </h1>

            {/* Subtext */}
            <p className="hero-subtext">
              Hire pre-vetted, English-speaking Indian remote professionals —
              developers, VAs, SEO experts — onboarded in days, not months.
            </p>

            {/* Highlights */}
            <div className="hero-highlights">
              {highlights.map(item => (
                <div key={item} className="hero-highlight-item">
                  <div className="hero-highlight-icon">
                    <CheckCircle size={12} color="#fff" />
                  </div>
                  <span className="hero-highlight-text">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-ctas">
              <Link
                to="/contact"
                className="hero-cta-primary"
              >
                Book Free Strategy Call
                <ArrowRight size={16} />
              </Link>

              <Link to="/services" className="hero-cta-secondary">
                <div className="hero-play-btn">
                  <Play size={14} fill="#1A73E8" color="#1A73E8" style={{ marginLeft:'2px' }} />
                </div>
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {[
                { num: '300+', label: 'Happy Clients' },
                { num: '500+', label: 'Projects Done' },
                { num: '70%',  label: 'Cost Savings'  },
              ].map(s => (
                <div key={s.label}>
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT: IMAGE CAROUSEL ─── */}
          <div className="hero-right">

            {/* Main image frame */}
            <div className="hero-img-frame">
              {heroImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`hero-${i + 1}`}
                  className="hero-img-slide"
                  style={{ opacity: activeImg === i ? 1 : 0 }}
                />
              ))}

              {/* Gradient overlay */}
              <div className="hero-img-gradient" />

              {/* Prev / Next */}
              <button
                className="hero-arrow hero-arrow-left"
                onClick={() => setActiveImg(p => (p - 1 + heroImages.length) % heroImages.length)}
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="hero-arrow hero-arrow-right"
                onClick={() => setActiveImg(p => (p + 1) % heroImages.length)}
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dot indicators */}
              <div className="hero-dots">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="hero-dot-btn"
                    aria-label={`Go to slide ${i + 1}`}
                    style={{
                      width: activeImg === i ? '22px' : '7px',
                      background: activeImg === i ? '#FF6B2C' : 'rgba(255,255,255,0.55)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="hero-thumbs">
              {heroImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="hero-thumb-btn"
                  aria-label={`Thumbnail ${i + 1}`}
                  style={{
                    border: activeImg === i ? '2.5px solid #FF6B2C' : '2.5px solid transparent',
                    boxShadow: activeImg === i ? '0 0 0 2px #FF6B2C44' : '0 2px 8px rgba(0,0,0,0.14)',
                  }}
                >
                  <img src={img} alt={`thumb-${i + 1}`} />
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Wave divider */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 55 L0 28 Q360 0 720 28 Q1080 55 1440 18 L1440 55 Z" fill="#F5F7FF" />
          </svg>
        </div>

      </section>
    </>
  )
}