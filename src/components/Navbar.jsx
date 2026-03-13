// import { useState, useEffect } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

// const navItems = [
//   { label: 'Home', to: '/' },
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
//         label: 'SEO Services', to: '/seo-services',
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
//       <div className="bg-primary-dark text-white text-xs py-2 hidden md:block">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center gap-6">
//             {/* <a href="mailto:contact@hasremotesolution.in" className="flex items-center gap-1 hover:text-accent transition-colors">
//               <Mail size={12} /> contact@hasremotesolution.in
//             </a>
//             <a href="tel:+916378400775" className="flex items-center gap-1 hover:text-accent transition-colors">
//               <Phone size={12} /> INDIA: +91 6378400775
//             </a> */}
//           </div>
//           <div className="flex items-center gap-4">
//             <Link to="/careers" className="hover:text-accent transition-colors font-medium">TRAINING</Link>
//             <Link to="/seo-results" className="hover:text-accent transition-colors font-medium">CLIENTS RESULT</Link>
//             <Link to="/blog" className="hover:text-accent transition-colors font-medium">BLOG</Link>
//             <Link to="/about" className="hover:text-accent transition-colors font-medium">ABOUT US</Link>
//             <Link to="/contact" className="bg-accent hover:bg-accent-dark px-3 py-1 rounded text-white font-medium transition-colors">
//               Get A Quote
//             </Link>
//           </div>
//         </div>
//       </div>

//       <nav className={`sticky top-0 z-50 ${scrolled ? 'bg-primary shadow-xl' : 'bg-primary'}`}>
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             <Link to="/" className="flex items-center gap-2">
//               <div className="bg-accent rounded-md px-3 py-1.5">
//                 <span className="text-white font-extrabold text-lg tracking-tight">HRS</span>
//               </div>
//               <div>
//                 <div className="text-white font-bold text-sm leading-none">Has Remote</div>
//                 <div className="text-accent text-xs font-medium">Solution Pvt. Ltd.</div>
//               </div>
//             </Link>

//             <div className="hidden lg:flex items-center">
//               {navItems.map((item) =>
//                 item.children ? (
//                   <div key={item.label} className="relative group">
//                     <button className="flex items-center gap-1 text-gray-200 hover:text-white text-sm font-medium px-2.5 py-5 transition-colors nav-link whitespace-nowrap">
//                       {item.label} <ChevronDown size={12} />
//                     </button>
//                     <div className="absolute top-full left-0 bg-white shadow-2xl rounded-b-lg min-w-[220px] hidden group-hover:block z-50 border-t-2 border-accent">
//                       {item.children.map((child) => (
//                         <div key={child.label} className="relative group/sub">
//                           <Link
//                             to={child.to || '#'}
//                             className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors border-b border-gray-100 last:border-0"
//                           >
//                             {child.label}
//                             {child.sub && <ChevronDown size={11} className="-rotate-90 opacity-40" />}
//                           </Link>
//                           {child.sub && (
//                             <div className="absolute left-full top-0 bg-white shadow-2xl rounded-lg min-w-[220px] hidden group-hover/sub:block z-50 border-l-2 border-accent">
//                               {child.sub.map((s) => (
//                                 <Link key={s.label} to={s.to} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors border-b border-gray-100 last:border-0">
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
//                   <NavLink key={item.label} to={item.to}
//                     className={({ isActive }) =>
//                       `text-sm font-medium px-2.5 py-5 transition-colors nav-link ${isActive ? 'text-white active' : 'text-gray-200 hover:text-white'}`
//                     }
//                   >{item.label}</NavLink>
//                 )
//               )}
//             </div>

//             <div className="flex items-center gap-3">
//               <Link to="/contact" className="hidden md:block bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded transition-all whitespace-nowrap">
//                 Book a Call
//               </Link>
//               <button className="lg:hidden text-white p-1" onClick={() => setIsOpen(!isOpen)}>
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {isOpen && (
//           <div className="lg:hidden bg-primary-dark border-t border-primary-light overflow-y-auto max-h-[80vh]">
//             <div className="container mx-auto px-4 py-4 space-y-1">
//               {navItems.map((item) =>
//                 item.children ? (
//                   <div key={item.label}>
//                     <button className="w-full flex items-center justify-between text-gray-200 font-medium py-2 text-sm"
//                       onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}>
//                       {item.label}
//                       <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
//                     </button>
//                     {openDropdown === item.label && (
//                       <div className="pl-4 space-y-1 border-l-2 border-accent ml-2 mt-1 mb-2">
//                         {item.children.map((child) => (
//                           <div key={child.label}>
//                             <Link to={child.to || '#'} className="block text-gray-300 text-sm py-1.5 hover:text-accent" onClick={() => setIsOpen(false)}>
//                               {child.label}
//                             </Link>
//                             {child.sub && (
//                               <div className="pl-3 border-l border-accent/30 ml-2">
//                                 {child.sub.map((s) => (
//                                   <Link key={s.label} to={s.to} className="block text-gray-400 text-xs py-1 hover:text-accent" onClick={() => setIsOpen(false)}>
//                                     › {s.label}
//                                   </Link>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <NavLink key={item.label} to={item.to}
//                     className={({ isActive }) => `block py-2 text-sm font-medium ${isActive ? 'text-accent' : 'text-gray-200 hover:text-accent'}`}
//                     onClick={() => setIsOpen(false)}>{item.label}</NavLink>
//                 )
//               )}
//               <Link to="/contact" className="block mt-3 bg-accent text-white text-center py-2.5 rounded font-semibold text-sm" onClick={() => setIsOpen(false)}>
//                 Get A Quote
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   )
// }








import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
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
      {/* TOP HEADER */}
      <div className="bg-primary-dark text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-4">
          <Link to="/seo-results" className="hover:text-accent">CLIENTS RESULT</Link>
          <Link to="/careers" className="hover:text-accent">CAREERS</Link>
          <Link to="/blog" className="hover:text-accent">BLOG</Link>
          <Link to="/about" className="hover:text-accent">ABOUT US</Link>
          <Link to="/contact" className="bg-accent px-3 py-1 rounded text-white">Get A Quote</Link>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`sticky top-0 z-50 ${scrolled ? 'bg-primary shadow-xl' : 'bg-primary'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* LOGO
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-accent rounded-md px-3 py-1.5">
                <span className="text-white font-extrabold text-lg tracking-tight">HRS</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-none">Has Remote</div>
                <div className="text-accent text-xs font-medium">Solution Pvt. Ltd.</div>
              </div>
            </Link> */}

            {/* LOGO */}
<Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Has Remote Solution"
    className="h-12 w-auto"
  />
</Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative group">
                    <button className="flex items-center gap-1 text-gray-200 hover:text-white text-sm font-medium px-2.5 py-5 whitespace-nowrap">
                      {item.label} <ChevronDown size={12} />
                    </button>

                    <div className="absolute top-full left-0 bg-white shadow-2xl rounded-b-lg min-w-[220px] hidden group-hover:block z-50 border-t-2 border-accent">

                      {item.children.map((child) => (
                        <div key={child.label} className="relative group/sub">

                          {child.to?.startsWith('http') ? (
                            <a
                              href={child.to}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              to={child.to || '#'}
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white"
                            >
                              {child.label}
                              {child.sub && <ChevronDown size={11} className="-rotate-90 opacity-40" />}
                            </Link>
                          )}

                          {child.sub && (
                            <div className="absolute left-full top-0 bg-white shadow-2xl rounded-lg min-w-[220px] hidden group-hover/sub:block z-50 border-l-2 border-accent">
                              {child.sub.map((s) => (
                                <Link
                                  key={s.label}
                                  to={s.to}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white"
                                >
                                  {s.label}
                                </Link>
                              ))}
                            </div>
                          )}

                        </div>
                      ))}

                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-medium px-2.5 py-5 ${isActive ? 'text-white' : 'text-gray-200 hover:text-white'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>

            {/* MOBILE TOGGLE */}
            <button className="lg:hidden text-white p-1" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-primary text-white px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">

          {navItems.map((item) => (
            <div key={item.label}>

              {item.children ? (
                <>
                  <button
                    className="w-full text-left font-semibold"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                  </button>

                  {openDropdown === item.label && (
                    <div className="pl-4 mt-2 space-y-1">

                      {item.children.map((child) => (
                        <div key={child.label}>

                          <Link to={child.to || '#'} className="block text-gray-300">
                            {child.label}
                          </Link>

                          {child.sub && (
                            <div className="pl-4">
                              {child.sub.map((s) => (
                                <Link key={s.label} to={s.to} className="block text-gray-400 text-sm">
                                  {s.label}
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
                <Link to={item.to} className="block font-semibold">
                  {item.label}
                </Link>
              )}

            </div>
          ))}

        </div>
      )}

    </>
  )
}




// import { useState, useEffect } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { Menu, X, ChevronDown } from 'lucide-react'

// const navItems = [
//   { label: 'Home', to: '/' },

//   {
//     label: 'Products',
//     children: [
//       { label: 'Texora AI', to: 'https://texora.ai/' },
//       { label: 'ILM ORA (LMS)', to: 'https://ilm-ora.texora.ai//' },
//       { label: 'TaskOrbit', to: 'https://taskorbit.com/' },
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
//       {/* ✅ TOP HEADER BAR */}
//       <div className="bg-primary-dark text-white text-xs py-2 hidden md:block">
//         <div className="container mx-auto px-4 flex justify-end items-center gap-4">
//           <Link to="/seo-results" className="hover:text-accent transition-colors font-medium">
//             CLIENTS RESULT
//           </Link>
//           <Link to="/careers" className="hover:text-accent transition-colors font-medium">
//             CAREERS
//           </Link>
//           <Link to="/blog" className="hover:text-accent transition-colors font-medium">
//             BLOG
//           </Link>
//           <Link to="/about" className="hover:text-accent transition-colors font-medium">
//             ABOUT US
//           </Link>
//           <Link
//             to="/contact"
//             className="bg-accent hover:bg-accent-dark px-3 py-1 rounded text-white font-medium transition-colors"
//           >
//             Get A Quote
//           </Link>
//         </div>
//       </div>

//       {/* ✅ MAIN NAVBAR */}
//       <nav className={`sticky top-0 z-50 ${scrolled ? 'bg-primary shadow-xl' : 'bg-primary'}`}>
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">

//             {/* Logo */}
//             <Link to="/" className="flex items-center gap-2">
//               <div className="bg-accent rounded-md px-3 py-1.5">
//                 <span className="text-white font-extrabold text-lg tracking-tight">HRS</span>
//               </div>
//               <div>
//                 <div className="text-white font-bold text-sm leading-none">Has Remote</div>
//                 <div className="text-accent text-xs font-medium">Solution Pvt. Ltd.</div>
//               </div>
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center">
//               {navItems.map((item) =>
//                 item.children ? (
//                   <div key={item.label} className="relative group">
//                     <button className="flex items-center gap-1 text-gray-200 hover:text-white text-sm font-medium px-2.5 py-5 transition-colors whitespace-nowrap">
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
//                               className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors border-b border-gray-100 last:border-0"
//                             >
//                               {child.label}
//                             </a>
//                           ) : (
//                             <Link
//                               to={child.to || '#'}
//                               className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors border-b border-gray-100 last:border-0"
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
//                                   className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors border-b border-gray-100 last:border-0"
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
//                       `text-sm font-medium px-2.5 py-5 transition-colors ${isActive ? 'text-white' : 'text-gray-200 hover:text-white'}`
//                     }
//                   >
//                     {item.label}
//                   </NavLink>
//                 )
//               )}
//             </div>

//             {/* Mobile Toggle */}
//             <button className="lg:hidden text-white p-1" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }