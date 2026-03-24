

// import { Link } from 'react-router-dom'
// import { Phone, Mail, MapPin } from 'lucide-react'
// import { 
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
//   FaXTwitter,
//   FaWhatsapp
// } from 'react-icons/fa6'

// import award1  from '../assets/images/footer/award-1.png'
// import award2  from '../assets/images/footer/award-2.png'
// import award3  from '../assets/images/footer/award-3.png'
// import award4  from '../assets/images/footer/award-4.png'
// import award5  from '../assets/images/footer/award-5.png'
// import award6  from '../assets/images/footer/award-6.png'
// import award7  from '../assets/images/footer/award-7.png'
// import award8  from '../assets/images/footer/award-8.png'
// import award9  from '../assets/images/footer/award-9.png'
// import award10 from '../assets/images/footer/award-10.png'
// import award11 from '../assets/images/footer/award-11.png'
// import award12 from '../assets/images/footer/award-12.png'
// import award13 from '../assets/images/footer/award-13.png'

// const awardImages = [
//   award1, award2, award3, award4, award5, award6, award7,
//   award8, award9, award10, award11, award12, award13,
// ]

// const footerLinks = {
//   'Digital Marketing': [
//     { label: 'SEO Services', to: '/seo-services' },
//     { label: 'Social Media Marketing', to: '/social-media-marketing' },
//     { label: 'Pay Per Click Services', to: '/ppc-services' },
//     { label: 'Reputation Management', to: '/reputation-management' },
//     { label: 'AEO Services', to: '/aeo-services' },
//     { label: 'Mobile Apps Development', to: '/mobile-app-development' },
//     { label: 'Hire Dedicated Experts', to: '/contact' },
//   ],
//   'Our Packages': [
//     { label: 'SEO Service Packages', to: '/seo-packages' },
//     { label: 'ORM Services Packages', to: '/orm-packages' },
//     { label: 'SMO Services Packages', to: '/smo-packages' },
//     { label: 'Content Writing Packages', to: '/content-writing-packages' },
//     { label: 'PPC Services Packages', to: '/ppc-packages' },
//     { label: 'Website Packages', to: '/web-development-packages' },
//     { label: 'Digital Marketing Packages', to: '/digital-marketing-packages' },
//   ],
//   'Website Development': [
//     { label: 'Website Development', to: '/website-development' },
//     { label: 'PHP Development', to: '/php-development' },
//     { label: 'Codeigniter Development', to: '/codeigniter-development' },
//     { label: 'CakePHP Development', to: '/cakephp-development' },
//     { label: 'Laravel Development', to: '/laravel-development' },
//     { label: 'WordPress Development', to: '/wordpress-development' },
//     { label: 'Magento Development', to: '/magento-development' },
//   ],
//   Resources: [
//     { label: 'Careers', to: '/careers' },
//     { label: 'Portfolio', to: '/portfolio' },
//     { label: 'Testimonial', to: '/testimonials' },
//     { label: 'Refund Policy', to: '/refund-policy' },
//     { label: 'Privacy Policies', to: '/privacy-policy' },
//     { label: 'Terms & Conditions', to: '/terms-and-conditions' },
//     { label: 'Blog', to: '/blog' },
//   ],
// }

// const socialLinks = [
//   { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61577683717252', bg: 'bg-[#1877F2]' },
//   { icon: FaXTwitter, href: 'https://x.com/RemoteHas61541', bg: 'bg-black' },
//   { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/has-remote-solution-pvt-ltd/?viewAsMember=true', bg: 'bg-[#0A66C2]' },
//   { icon: FaInstagram, href: 'https://www.instagram.com/hasremotesolution_pvt_ltd?igsh=cGkzNmx0dWJoODEz', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600' },
//   { icon: FaYoutube, href: 'https://youtube.com/@danishullah-b4s?si=azDnLDi2K30A2qSU', bg: 'bg-[#FF0000]' },
//   { icon: FaWhatsapp, href: 'https://wa.me/916378400775', bg: 'bg-[#25D366]' },
// ]

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="container mx-auto px-4 py-14">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <Link to="/" className="flex items-center gap-2 mb-4">
//               <div className="bg-accent rounded-md px-3 py-1.5">
//                 <span className="text-white font-extrabold text-lg tracking-tight">HRS</span>
//               </div>
//               <div>
//                 <div className="text-white font-bold text-sm leading-none">Has Remote</div>
//                 <div className="text-accent text-xs font-medium">Solution Pvt. Ltd.</div>
//               </div>
//             </Link>

//             <p className="text-sm text-gray-400 mb-4 leading-relaxed">
//               Award-winning IT & Digital Marketing agency helping businesses scale with top-tier remote professionals.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-3 mb-5">
//               {socialLinks.map(({ icon: Icon, href, bg }, index) => (
//                 <a
//                   key={index}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`w-9 h-9 rounded-full flex items-center justify-center text-white ${bg} hover:scale-110 transition-all duration-300`}
//                 >
//                   <Icon size={16} />
//                 </a>
//               ))}
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-2 text-sm">
//               <div className="flex items-start gap-2">
//                 <MapPin size={14} className="text-accent mt-0.5 shrink-0" />
//                 <span className="text-gray-400 text-xs">
//                   J-3/31B Khirki Extn. Malviya Nagar New Delhi 110017
//                 </span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Phone size={14} className="text-accent shrink-0" />
//                 <a href="tel:+916378400775" className="text-gray-400 text-xs hover:text-accent">
//                   +91 6378400775
//                 </a>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Mail size={14} className="text-accent shrink-0" />
//                 <a href="mailto:contact@hasremotesolution.in" className="text-gray-400 text-xs hover:text-accent">
//                   contact@hasremotesolution.in
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Footer Columns */}
//           {Object.entries(footerLinks).map(([title, links]) => (
//             <div key={title}>
//               <h4 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-gray-700">
//                 {title}
//               </h4>
//               <ul className="space-y-2">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <Link
//                       to={link.to}
//                       className="text-xs text-gray-400 hover:text-accent transition-colors hover:pl-1 duration-200 block"
//                     >
//                       › {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Award Badges Infinite Scroll Strip ── */}
//       <div className="border-t border-gray-700/60 bg-gray-800/50 py-5 overflow-hidden">
//         <div className="flex w-max animate-marquee gap-8 items-center">
//           {[...awardImages, ...awardImages].map((src, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 bg-white/5 hover:bg-white/10 rounded-lg px-4 py-2.5 transition-colors duration-300"
//             >
//               <img
//                 src={src}
//                 alt={`award-${(i % awardImages.length) + 1}`}
//                 className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
//                 draggable={false}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-primary-dark py-4 text-center text-xs text-gray-400">
//         2025 © Copyright Has Remote Solution Pvt. Ltd. All rights reserved.
//       </div>

//       <style>{`
//         @keyframes marquee {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 28s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </footer>
//   )
// }















import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaWhatsapp
} from 'react-icons/fa6'

import award1  from '../assets/images/footer/award-1.png'
import award2  from '../assets/images/footer/award-2.png'
import award3  from '../assets/images/footer/award-3.png'
import award4  from '../assets/images/footer/award-4.png'
import award5  from '../assets/images/footer/award-5.png'
import award6  from '../assets/images/footer/award-6.png'
import award7  from '../assets/images/footer/award-7.png'
import award8  from '../assets/images/footer/award-8.png'
import award9  from '../assets/images/footer/award-9.png'
import award10 from '../assets/images/footer/award-10.png'
import award11 from '../assets/images/footer/award-11.png'
import award12 from '../assets/images/footer/award-12.png'
import award13 from '../assets/images/footer/award-13.png'

const awardImages = [
  award1, award2, award3, award4, award5, award6, award7,
  award8, award9, award10, award11, award12, award13,
]

const footerLinks = {
  'Digital Marketing': [
    { label: 'SEO Services', to: '/seo-services' },
    { label: 'Social Media Marketing', to: '/social-media-marketing' },
    { label: 'Pay Per Click Services', to: '/ppc-services' },
    { label: 'Reputation Management', to: '/reputation-management' },
    { label: 'AEO Services', to: '/aeo-services' },
    { label: 'Mobile Apps Development', to: '/mobile-app-development' },
    { label: 'Hire Dedicated Experts', to: '/contact' },
  ],
  'Our Packages': [
    { label: 'SEO Service Packages', to: '/seo-packages' },
    { label: 'ORM Services Packages', to: '/orm-packages' },
    { label: 'SMO Services Packages', to: '/smo-packages' },
    { label: 'Content Writing Packages', to: '/content-writing-packages' },
    { label: 'PPC Services Packages', to: '/ppc-packages' },
    { label: 'Website Packages', to: '/web-development-packages' },
    { label: 'Digital Marketing Packages', to: '/digital-marketing-packages' },
  ],
  'Web Development': [
    { label: 'Website Development', to: '/website-development' },
    { label: 'PHP Development', to: '/php-development' },
    { label: 'Codeigniter Development', to: '/codeigniter-development' },
    { label: 'Laravel Development', to: '/laravel-development' },
    { label: 'WordPress Development', to: '/wordpress-development' },
    { label: 'Magento Development', to: '/magento-development' },
    { label: 'ReactJS Development', to: '/reactjs-development' },
  ],
  Resources: [
    { label: 'Careers', to: '/careers' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Refund Policy', to: '/refund-policy' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-and-conditions' },
    { label: 'Blog', to: '/blog' },
  ],
}

const socialLinks = [
  { icon: FaFacebookF,  href: 'https://www.facebook.com/profile.php?id=61577683717252', label: 'Facebook',  bg: '#1877F2' },
  { icon: FaXTwitter,   href: 'https://x.com/RemoteHas61541',                           label: 'Twitter',   bg: '#000000' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/has-remote-solution-pvt-ltd/?viewAsMember=true', label: 'LinkedIn', bg: '#0A66C2' },
  { icon: FaInstagram,  href: 'https://www.instagram.com/hasremotesolution_pvt_ltd?igsh=cGkzNmx0dWJoODEz', label: 'Instagram', bg: 'linear-gradient(135deg, #f59e0b, #ec4899, #8b5cf6)' },
  { icon: FaYoutube,    href: 'https://youtube.com/@danishullah-b4s?si=azDnLDi2K30A2qSU', label: 'YouTube',  bg: '#FF0000' },
  { icon: FaWhatsapp,   href: 'https://wa.me/916378400775',                               label: 'WhatsApp', bg: '#25D366' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1e', color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}>

      {/* ── TOP NEWSLETTER STRIP ── */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B2C 0%, #e05520 50%, #1A73E8 100%)',
        padding: '36px 0',
      }}>
        <div className="container mx-auto px-4" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '20px',
        }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 800, marginBottom: '4px' }}>
              Ready to grow your business? 🚀
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '13px' }}>
              Book a free consultation — no commitment required.
            </p>
          </div>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#fff',
              color: '#FF6B2C',
              fontWeight: 800, fontSize: '14px',
              padding: '12px 28px',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(0,0,0,0.20)',
              whiteSpace: 'nowrap',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Book Free Call <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* ── MAIN FOOTER BODY ── */}
      <div className="container mx-auto px-4" style={{ padding: '60px 16px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '36px',
        }}>

          {/* Company Info col */}
          <div style={{ gridColumn: 'span 1' }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #FF6B2C, #ff8c5a)',
                borderRadius: '10px',
                padding: '8px 12px',
                boxShadow: '0 4px 15px rgba(255,107,44,0.40)',
              }}>
                <span style={{ color: '#fff', fontWeight: 900, fontSize: '16px', letterSpacing: '1px' }}>HRS</span>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: '14px', lineHeight: 1.2 }}>Has Remote</div>
                <div style={{ color: '#FF6B2C', fontWeight: 600, fontSize: '11px' }}>Solution Pvt. Ltd.</div>
              </div>
            </Link>

            <p style={{ fontSize: '13px', lineHeight: 1.75, color: '#64748b', marginBottom: '20px' }}>
              Award-winning IT & Digital Marketing agency helping businesses scale with top-tier remote professionals at 70% less cost.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {socialLinks.map(({ icon: Icon, href, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  style={{
                    width: '36px', height: '36px',
                    borderRadius: '50%',
                    background: bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.35)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { Icon: MapPin, text: 'J-3/31B Khirki Extn. Malviya Nagar New Delhi 110017', href: null },
                { Icon: Phone, text: '+91 6378400775', href: 'tel:+916378400775' },
                { Icon: Mail,  text: 'contact@hasremotesolution.in', href: 'mailto:contact@hasremotesolution.in' },
              ].map(({ Icon, text, href }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{
                    width: '24px', height: '24px', borderRadius: '6px',
                    background: 'rgba(255,107,44,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '1px',
                  }}>
                    <Icon size={12} style={{ color: '#FF6B2C' }} />
                  </div>
                  {href ? (
                    <a href={href} style={{ fontSize: '12px', color: '#64748b', textDecoration: 'none', lineHeight: 1.6, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#FF6B2C'}
                      onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                    >{text}</a>
                  ) : (
                    <span style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6 }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              {/* Column heading with orange underline */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{
                  color: '#fff', fontWeight: 800,
                  fontSize: '14px', marginBottom: '8px',
                }}>
                  {title}
                </h4>
                <div style={{
                  width: '32px', height: '3px',
                  background: 'linear-gradient(90deg, #FF6B2C, #1A73E8)',
                  borderRadius: '2px',
                }} />
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      style={{
                        fontSize: '13px',
                        color: '#64748b',
                        textDecoration: 'none',
                        display: 'flex', alignItems: 'center', gap: '6px',
                        transition: 'color 0.2s, gap 0.2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#FF6B2C'
                        e.currentTarget.style.gap = '10px'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#64748b'
                        e.currentTarget.style.gap = '6px'
                      }}
                    >
                      <ArrowRight size={11} style={{ flexShrink: 0, color: '#FF6B2C', opacity: 0.6 }} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── AWARD BADGES MARQUEE ── */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.02)',
        padding: '20px 0',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'footerMarquee 28s linear infinite', gap: '24px', alignItems: 'center' }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
        >
          {[...awardImages, ...awardImages].map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '10px',
                padding: '10px 18px',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,107,44,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
            >
              <img
                src={src}
                alt={`award-${(i % awardImages.length) + 1}`}
                style={{ height: '40px', width: 'auto', objectFit: 'contain', opacity: 0.75, display: 'block' }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        padding: '16px 0',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div className="container mx-auto px-4" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '8px',
        }}>
          <p style={{ fontSize: '12px', color: '#475569' }}>
            2025 © Copyright{' '}
            <span style={{ color: '#FF6B2C', fontWeight: 700 }}>Has Remote Solution Pvt. Ltd.</span>
            {' '}All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Terms & Conditions', to: '/terms-and-conditions' },
              { label: 'Refund Policy', to: '/refund-policy' },
            ].map(l => (
              <Link
                key={l.label}
                to={l.to}
                style={{
                  fontSize: '11px', color: '#475569',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#FF6B2C'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes footerMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  )
}