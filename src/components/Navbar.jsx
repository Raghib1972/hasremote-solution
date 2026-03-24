
// import { useState, useEffect } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { Menu, X, ChevronDown } from 'lucide-react'
// import logo from '../assets/images/hasremote-logo.png'
// const navItems = [
//   { label: 'Home', to: '/' },

//   {
//     label: 'Products',
//     children: [
//       { label: 'Texora AI', to: 'https://texora.ai/' },
//       { label: 'ILM ORA (LMS)', to: 'https://ilm-ora.texora.ai//' },
//       { label: 'TaskOrbit', to: 'https://task-orbit.texora.ai/' },
//       { label: 'Job Portal', to: 'https://texora.ai/job-portal' },
//     ],
//   },

//   {
//     label: 'Company',
//     children: [
//       { label: 'About hasremotesolution', to: '/about' },
//       { label: 'Testimonials', to: '/testimonials' },
//     ],
//   },

//   {
//     label: 'Digital Marketing',
//     children: [
//       {
//         label: 'SEO Services',
//         to: '/seo-services',
//         sub: [
//           { label: 'Local SEO Services', to: '/local-seo-services' },
//           { label: 'Ecommerce SEO Services', to: '/ecommerce-seo-services' },
//           { label: 'Enterprise SEO Services', to: '/enterprise-seo-services' },
//           { label: 'Google Maps Marketing', to: '/google-maps-marketing' },
//           { label: 'AEO Services', to: '/aeo-services' },
//           { label: 'International SEO', to: '/international-seo-services' },
//           { label: 'Multilingual SEO', to: '/multilingual-seo-services' },
//           { label: 'Small Business SEO', to: '/small-business-seo-services' },
//           { label: 'Mobile SEO Services', to: '/mobile-seo-services' },
//         ],
//       },
//       { label: 'Influencer Marketing', to: '/influencer-marketing' },
//       { label: 'Social Media Marketing', to: '/social-media-marketing' },
//       { label: 'Pay Per Click Services', to: '/ppc-services' },
//       { label: 'Reputation Management', to: '/reputation-management' },
//       { label: 'Public Relations', to: '/public-relations-services' },
//       { label: 'Content Marketing', to: '/content-marketing' },
//     ],
//   },

//   {
//     label: 'Packages',
//     children: [
//       { label: 'SEO Service Packages', to: '/seo-packages' },
//       { label: 'ORM Services Packages', to: '/orm-packages' },
//       { label: 'SMO Services Packages', to: '/smo-packages' },
//       { label: 'Content Writing Packages', to: '/content-writing-packages' },
//       { label: 'Local SEO Packages', to: '/local-seo-packages' },
//       { label: 'PPC Services Packages', to: '/ppc-packages' },
//       { label: 'Web Development Packages', to: '/web-development-packages' },
//       { label: 'E-commerce SEO Packages', to: '/ecommerce-seo-packages' },
//       { label: 'ASO Packages', to: '/aso-packages' },
//       { label: 'Digital Marketing Packages', to: '/digital-marketing-packages' },
//       { label: 'Website Maintenance Packages', to: '/website-maintenance-packages' },
//     ],
//   },

//   {
//     label: 'Web Development',
//     children: [
//       { label: 'Website Development', to: '/website-development' },
//       { label: 'PHP Development', to: '/php-development' },
//       { label: 'Codeigniter Development', to: '/codeigniter-development' },
//       { label: 'CakePHP Development', to: '/cakephp-development' },
//       { label: 'Laravel Development', to: '/laravel-development' },
//       { label: 'WordPress Development', to: '/wordpress-development' },
//       { label: 'Magento Development', to: '/magento-development' },
//     ],
//   },

//   {
//     label: 'Full Stack',
//     children: [
//       { label: 'Angular Development', to: '/angular-development' },
//       { label: 'ReactJS Development', to: '/reactjs-development' },
//       { label: 'Python Development', to: '/python-development' },
//       { label: 'NodeJS Development', to: '/nodejs-development' },
//       { label: 'ASP .net Development', to: '/asp-development' },
//       { label: 'Mean Stack Development', to: '/mean-stack-development' },
//     ],
//   },

//   {
//     label: 'App Development',
//     children: [
//       { label: 'Mobile Apps Development', to: '/mobile-app-development' },
//       { label: 'IOS Development', to: '/ios-development' },
//       { label: 'Android Development', to: '/android-development' },
//       { label: 'Blockchain Development', to: '/blockchain-development' },
//       { label: 'Cross Platform Development', to: '/cross-platform-development' },
//       { label: 'React Native Development', to: '/react-native-development' },
//       { label: 'Flutter Development', to: '/flutter-development' },
//     ],
//   },

//   {
//     label: 'Portfolio',
//     children: [
//       { label: 'Web Portfolio', to: '/portfolio' },
//       { label: 'Mobile Portfolio', to: '/portfolio' },
//       { label: 'SEO Results', to: '/seo-results' },
//     ],
//   },
// ]

// export default function Navbar() {

//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [openDropdown, setOpenDropdown] = useState(null)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       {/* TOP HEADER */}
//       <div className="bg-primary-dark text-white text-xs py-2">
//         <div className="container mx-auto px-4 flex justify-end items-center gap-4">
//           <Link to="/seo-results" className="hover:text-accent">CLIENTS RESULT</Link>
//           <Link to="/careers" className="hover:text-accent">CAREERS</Link>
//           <Link to="/blog" className="hover:text-accent">BLOG</Link>
//           <Link to="/about" className="hover:text-accent">ABOUT US</Link>
//           <Link to="/contact" className="bg-accent px-3 py-1 rounded text-white">Get A Quote</Link>
//         </div>
//       </div>

//       {/* NAVBAR */}
//       <nav className={`sticky top-0 z-50 ${scrolled ? 'bg-primary shadow-xl' : 'bg-primary'}`}>
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">

//             {/* LOGO
//             <Link to="/" className="flex items-center gap-2">
//               <div className="bg-accent rounded-md px-3 py-1.5">
//                 <span className="text-white font-extrabold text-lg tracking-tight">HRS</span>
//               </div>
//               <div>
//                 <div className="text-white font-bold text-sm leading-none">Has Remote</div>
//                 <div className="text-accent text-xs font-medium">Solution Pvt. Ltd.</div>
//               </div>
//             </Link> */}

//             {/* LOGO */}
// <Link to="/" className="flex items-center">
//   <img
//     src={logo}
//     alt="Has Remote Solution"
//     className="h-12 w-auto"
//   />
// </Link>

//             {/* DESKTOP MENU */}
//             <div className="hidden lg:flex items-center">
//               {navItems.map((item) =>
//                 item.children ? (
//                   <div key={item.label} className="relative group">
//                     <button className="flex items-center gap-1 text-gray-200 hover:text-white text-sm font-medium px-2.5 py-5 whitespace-nowrap">
//                       {item.label} <ChevronDown size={12} />
//                     </button>

//                     <div className="absolute top-full left-0 bg-white shadow-2xl rounded-b-lg min-w-[220px] hidden group-hover:block z-50 border-t-2 border-accent">

//                       {item.children.map((child) => (
//                         <div key={child.label} className="relative group/sub">

//                           {child.to?.startsWith('http') ? (
//                             <a
//                               href={child.to}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white"
//                             >
//                               {child.label}
//                             </a>
//                           ) : (
//                             <Link
//                               to={child.to || '#'}
//                               className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white"
//                             >
//                               {child.label}
//                               {child.sub && <ChevronDown size={11} className="-rotate-90 opacity-40" />}
//                             </Link>
//                           )}

//                           {child.sub && (
//                             <div className="absolute left-full top-0 bg-white shadow-2xl rounded-lg min-w-[220px] hidden group-hover/sub:block z-50 border-l-2 border-accent">
//                               {child.sub.map((s) => (
//                                 <Link
//                                   key={s.label}
//                                   to={s.to}
//                                   className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white"
//                                 >
//                                   {s.label}
//                                 </Link>
//                               ))}
//                             </div>
//                           )}

//                         </div>
//                       ))}

//                     </div>
//                   </div>
//                 ) : (
//                   <NavLink
//                     key={item.label}
//                     to={item.to}
//                     className={({ isActive }) =>
//                       `text-sm font-medium px-2.5 py-5 ${isActive ? 'text-white' : 'text-gray-200 hover:text-white'}`
//                     }
//                   >
//                     {item.label}
//                   </NavLink>
//                 )
//               )}
//             </div>

//             {/* MOBILE TOGGLE */}
//             <button className="lg:hidden text-white p-1" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>

//           </div>
//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       {isOpen && (
//         <div className="lg:hidden bg-primary text-white px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">

//           {navItems.map((item) => (
//             <div key={item.label}>

//               {item.children ? (
//                 <>
//                   <button
//                     className="w-full text-left font-semibold"
//                     onClick={() =>
//                       setOpenDropdown(openDropdown === item.label ? null : item.label)
//                     }
//                   >
//                     {item.label}
//                   </button>

//                   {openDropdown === item.label && (
//                     <div className="pl-4 mt-2 space-y-1">

//                       {item.children.map((child) => (
//                         <div key={child.label}>

//                           <Link to={child.to || '#'} className="block text-gray-300">
//                             {child.label}
//                           </Link>

//                           {child.sub && (
//                             <div className="pl-4">
//                               {child.sub.map((s) => (
//                                 <Link key={s.label} to={s.to} className="block text-gray-400 text-sm">
//                                   {s.label}
//                                 </Link>
//                               ))}
//                             </div>
//                           )}

//                         </div>
//                       ))}

//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link to={item.to} className="block font-semibold">
//                   {item.label}
//                 </Link>
//               )}

//             </div>
//           ))}

//         </div>
//       )}

//     </>
//   )
// }old1






import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react'
import logo from '../assets/images/hasremote-logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'Products',
    children: [
      { label: 'Texora AI', to: 'https://texora.ai/' },
      { label: 'ILM ORA (LMS)', to: 'https://ilm-ora.texora.ai//' },
      { label: 'TaskOrbit', to: 'https://task-orbit.texora.ai/' },
      { label: 'Job Portal', to: 'https://texora.ai/job-portal' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About hasremotesolution', to: '/about' },
      { label: 'Testimonials', to: '/testimonials' },
    ],
  },
  {
    label: 'Digital Marketing',
    children: [
      {
        label: 'SEO Services',
        to: '/seo-services',
        sub: [
          { label: 'Local SEO Services', to: '/local-seo-services' },
          { label: 'Ecommerce SEO Services', to: '/ecommerce-seo-services' },
          { label: 'Enterprise SEO Services', to: '/enterprise-seo-services' },
          { label: 'Google Maps Marketing', to: '/google-maps-marketing' },
          { label: 'AEO Services', to: '/aeo-services' },
          { label: 'International SEO', to: '/international-seo-services' },
          { label: 'Multilingual SEO', to: '/multilingual-seo-services' },
          { label: 'Small Business SEO', to: '/small-business-seo-services' },
          { label: 'Mobile SEO Services', to: '/mobile-seo-services' },
        ],
      },
      { label: 'Influencer Marketing', to: '/influencer-marketing' },
      { label: 'Social Media Marketing', to: '/social-media-marketing' },
      { label: 'Pay Per Click Services', to: '/ppc-services' },
      { label: 'Reputation Management', to: '/reputation-management' },
      { label: 'Public Relations', to: '/public-relations-services' },
      { label: 'Content Marketing', to: '/content-marketing' },
    ],
  },
  {
    label: 'Packages',
    children: [
      { label: 'SEO Service Packages', to: '/seo-packages' },
      { label: 'ORM Services Packages', to: '/orm-packages' },
      { label: 'SMO Services Packages', to: '/smo-packages' },
      { label: 'Content Writing Packages', to: '/content-writing-packages' },
      { label: 'Local SEO Packages', to: '/local-seo-packages' },
      { label: 'PPC Services Packages', to: '/ppc-packages' },
      { label: 'Web Development Packages', to: '/web-development-packages' },
      { label: 'E-commerce SEO Packages', to: '/ecommerce-seo-packages' },
      { label: 'ASO Packages', to: '/aso-packages' },
      { label: 'Digital Marketing Packages', to: '/digital-marketing-packages' },
      { label: 'Website Maintenance Packages', to: '/website-maintenance-packages' },
    ],
  },
  {
    label: 'Web Development',
    children: [
      { label: 'Website Development', to: '/website-development' },
      { label: 'PHP Development', to: '/php-development' },
      { label: 'Codeigniter Development', to: '/codeigniter-development' },
      { label: 'CakePHP Development', to: '/cakephp-development' },
      { label: 'Laravel Development', to: '/laravel-development' },
      { label: 'WordPress Development', to: '/wordpress-development' },
      { label: 'Magento Development', to: '/magento-development' },
    ],
  },
  {
    label: 'Full Stack',
    children: [
      { label: 'Angular Development', to: '/angular-development' },
      { label: 'ReactJS Development', to: '/reactjs-development' },
      { label: 'Python Development', to: '/python-development' },
      { label: 'NodeJS Development', to: '/nodejs-development' },
      { label: 'ASP .net Development', to: '/asp-development' },
      { label: 'Mean Stack Development', to: '/mean-stack-development' },
    ],
  },
  {
    label: 'App Development',
    children: [
      { label: 'Mobile Apps Development', to: '/mobile-app-development' },
      { label: 'IOS Development', to: '/ios-development' },
      { label: 'Android Development', to: '/android-development' },
      { label: 'Blockchain Development', to: '/blockchain-development' },
      { label: 'Cross Platform Development', to: '/cross-platform-development' },
      { label: 'React Native Development', to: '/react-native-development' },
      { label: 'Flutter Development', to: '/flutter-development' },
    ],
  },
  {
    label: 'Portfolio',
    children: [
      { label: 'Web Portfolio', to: '/portfolio' },
      { label: 'Mobile Portfolio', to: '/portfolio' },
      { label: 'SEO Results', to: '/seo-results' },
    ],
  },
]

// ── Dropdown item with optional sub-menu (React state based, no Tailwind group/sub) ──
function DropdownChild({ child }) {
  const [subOpen, setSubOpen] = useState(false)

  const linkStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '10px 18px', fontSize: '13px', fontWeight: 500,
    color: subOpen ? '#FF6B2C' : '#374151',
    background: subOpen ? '#fff4ef' : '#fff',
    textDecoration: 'none',
    borderBottom: '1px solid #f8fafc',
    transition: 'background 0.15s, color 0.15s',
    cursor: 'pointer',
  }

  const handleMouseEnter = (e) => {
    e.currentTarget.style.background = '#fff4ef'
    e.currentTarget.style.color = '#FF6B2C'
  }
  const handleMouseLeave = (e) => {
    if (!subOpen) {
      e.currentTarget.style.background = '#fff'
      e.currentTarget.style.color = '#374151'
    }
  }

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => child.sub && setSubOpen(true)}
      onMouseLeave={() => child.sub && setSubOpen(false)}
    >
      {child.to?.startsWith('http') ? (
        <a
          href={child.to}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {child.label}
          <ArrowRight size={12} style={{ opacity: 0.4 }} />
        </a>
      ) : (
        <Link
          to={child.to || '#'}
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {child.label}
          {child.sub
            ? <ChevronDown size={11} style={{ transform: 'rotate(-90deg)', opacity: 0.6, color: '#FF6B2C' }} />
            : <ArrowRight size={12} style={{ opacity: 0.4 }} />
          }
        </Link>
      )}

      {/* Sub-dropdown — shown via React state */}
      {child.sub && subOpen && (
        <div style={{
          position: 'absolute',
          left: '100%',
          top: 0,
          background: '#fff',
          minWidth: '230px',
          borderRadius: '0 14px 14px 14px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.13)',
          borderLeft: '3px solid #1A73E8',
          zIndex: 60,
          overflow: 'hidden',
        }}>
          {child.sub.map((s) => (
            <Link
              key={s.label}
              to={s.to}
              style={{
                display: 'block',
                padding: '10px 18px',
                fontSize: '13px', fontWeight: 500,
                color: '#374151',
                textDecoration: 'none',
                borderBottom: '1px solid #f8fafc',
                transition: 'background 0.15s, color 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#eff6ff'
                e.currentTarget.style.color = '#1A73E8'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.color = '#374151'
              }}
            >
              {s.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Top-level dropdown ──
function NavDropdown({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button style={{
        display: 'flex', alignItems: 'center', gap: '4px',
        color: open ? '#FF6B2C' : '#334155',
        background: 'none', border: 'none',
        fontSize: '13px', fontWeight: 600,
        padding: '0 10px', height: '68px',
        cursor: 'pointer', transition: 'color 0.2s', whiteSpace: 'nowrap',
      }}>
        {item.label}
        <ChevronDown size={12} style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0,
          background: '#fff', minWidth: '230px',
          borderRadius: '0 0 14px 14px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.13)',
          borderTop: '3px solid #FF6B2C',
          zIndex: 50, overflow: 'visible',
        }}>
          {item.children.map((child) => (
            <DropdownChild key={child.label} child={child} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ══════════════════════════════════════
          TOP BAR
      ══════════════════════════════════════ */}
      <div
        style={{
          background: 'linear-gradient(135deg, #FF6B2C, #e05520)',
          color: '#fff', fontSize: '12px', padding: '6px 0',
        }}
        className="hidden md:block"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a
            href="tel:+916378400775"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: '#fff', textDecoration: 'none', fontWeight: 600, opacity: 0.92,
            }}
          >
            <Phone size={12} />
            INDIA: +91 6378400775
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {[
              { label: 'CLIENT RESULTS', to: '/seo-results' },
              { label: 'CAREERS', to: '/careers' },
              { label: 'BLOG', to: '/blog' },
              { label: 'ABOUT US', to: '/about' },
            ].map(l => (
              <Link
                key={l.label} to={l.to}
                style={{
                  color: '#fff', textDecoration: 'none', fontWeight: 600,
                  opacity: 0.88, transition: 'opacity 0.2s',
                  fontSize: '11px', letterSpacing: '0.5px',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.88'}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              style={{
                background: '#fff', color: '#FF6B2C', fontWeight: 700,
                fontSize: '11px', padding: '4px 14px',
                borderRadius: '20px', textDecoration: 'none', letterSpacing: '0.3px',
              }}
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN NAVBAR
      ══════════════════════════════════════ */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: '#fff',
        borderBottom: scrolled ? 'none' : '1px solid #f1f5f9',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.10)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}>
        <div className="container mx-auto px-4">
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', height: '68px',
          }}>

            {/* LOGO */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Has Remote Solution" style={{ height: '44px', width: 'auto' }} />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex" style={{ alignItems: 'center' }}>
              {navItems.map((item) =>
                item.children ? (
                  <NavDropdown key={item.label} item={item} />
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    style={({ isActive }) => ({
                      fontSize: '13px', fontWeight: 600,
                      padding: '0 10px', height: '68px',
                      display: 'flex', alignItems: 'center',
                      color: isActive ? '#FF6B2C' : '#334155',
                      textDecoration: 'none',
                      borderBottom: isActive ? '3px solid #FF6B2C' : '3px solid transparent',
                      transition: 'color 0.2s, border-color 0.2s',
                    })}
                    onMouseEnter={e => e.currentTarget.style.color = '#FF6B2C'}
                    onMouseLeave={e => {
                      if (!e.currentTarget.classList.contains('active')) {
                        e.currentTarget.style.color = '#334155'
                      }
                    }}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>

            {/* HAMBURGER — phone & tablet only (hidden on lg+) */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: '#fff4ef',
                border: '1.5px solid #ffe4d4',
                borderRadius: '10px', padding: '8px',
                color: '#FF6B2C', cursor: 'pointer',
                alignItems: 'center',
              }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          MOBILE MENU
      ══════════════════════════════════════ */}
      {isOpen && (
        <div
          style={{
            background: '#fff',
            borderTop: '3px solid #FF6B2C',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            maxHeight: '80vh', overflowY: 'auto', padding: '16px',
          }}
          className="lg:hidden"
        >
          {navItems.map((item) => (
            <div key={item.label} style={{ borderBottom: '1px solid #f1f5f9' }}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    style={{
                      width: '100%', textAlign: 'left',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '12px 4px', fontSize: '14px', fontWeight: 700,
                      color: openDropdown === item.label ? '#FF6B2C' : '#1e293b',
                      background: 'none', border: 'none', cursor: 'pointer',
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      style={{
                        transform: openDropdown === item.label ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s', color: '#FF6B2C',
                      }}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div style={{
                      paddingLeft: '12px', paddingBottom: '8px',
                      borderLeft: '3px solid #FF6B2C',
                      marginLeft: '4px', marginBottom: '8px',
                    }}>
                      {item.children.map((child) => (
                        <div key={child.label}>
                          {child.to?.startsWith('http') ? (
                            <a
                              href={child.to} target="_blank" rel="noopener noreferrer"
                              style={{
                                display: 'block', padding: '7px 4px',
                                fontSize: '13px', fontWeight: 500,
                                color: '#475569', textDecoration: 'none',
                              }}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              to={child.to || '#'}
                              style={{
                                display: 'block', padding: '7px 4px',
                                fontSize: '13px', fontWeight: 500,
                                color: '#475569', textDecoration: 'none',
                              }}
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          )}

                          {child.sub && (
                            <div style={{
                              paddingLeft: '12px',
                              borderLeft: '2px solid #1A73E8',
                              marginLeft: '4px',
                            }}>
                              {child.sub.map((s) => (
                                <Link
                                  key={s.label} to={s.to}
                                  style={{
                                    display: 'block', padding: '5px 4px',
                                    fontSize: '12px', color: '#64748b', textDecoration: 'none',
                                  }}
                                  onClick={() => setIsOpen(false)}
                                >
                                  › {s.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.to}
                  style={{
                    display: 'block', padding: '12px 4px',
                    fontSize: '14px', fontWeight: 700,
                    color: '#1e293b', textDecoration: 'none',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              marginTop: '16px',
              background: 'linear-gradient(135deg, #FF6B2C, #ff8c5a)',
              color: '#fff', fontWeight: 700, fontSize: '14px',
              padding: '13px', borderRadius: '50px', textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(255,107,44,0.40)',
            }}
          >
            Book a Free Call
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </>
  )
}