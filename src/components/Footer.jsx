
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

//       {/* Bottom Bar */}
//       <div className="bg-primary-dark py-4 text-center text-xs text-gray-400">
//         2025 © Copyright Has Remote Solution Pvt. Ltd. All rights reserved.
//       </div>
//     </footer>
//   )
// }







import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
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
  'Website Development': [
    { label: 'Website Development', to: '/website-development' },
    { label: 'PHP Development', to: '/php-development' },
    { label: 'Codeigniter Development', to: '/codeigniter-development' },
    { label: 'CakePHP Development', to: '/cakephp-development' },
    { label: 'Laravel Development', to: '/laravel-development' },
    { label: 'WordPress Development', to: '/wordpress-development' },
    { label: 'Magento Development', to: '/magento-development' },
  ],
  Resources: [
    { label: 'Careers', to: '/careers' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Testimonial', to: '/testimonials' },
    { label: 'Refund Policy', to: '/refund-policy' },
    { label: 'Privacy Policies', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-and-conditions' },
    { label: 'Blog', to: '/blog' },
  ],
}

const socialLinks = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61577683717252', bg: 'bg-[#1877F2]' },
  { icon: FaXTwitter, href: 'https://x.com/RemoteHas61541', bg: 'bg-black' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/has-remote-solution-pvt-ltd/?viewAsMember=true', bg: 'bg-[#0A66C2]' },
  { icon: FaInstagram, href: 'https://www.instagram.com/hasremotesolution_pvt_ltd?igsh=cGkzNmx0dWJoODEz', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600' },
  { icon: FaYoutube, href: 'https://youtube.com/@danishullah-b4s?si=azDnLDi2K30A2qSU', bg: 'bg-[#FF0000]' },
  { icon: FaWhatsapp, href: 'https://wa.me/916378400775', bg: 'bg-[#25D366]' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-accent rounded-md px-3 py-1.5">
                <span className="text-white font-extrabold text-lg tracking-tight">HRS</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-none">Has Remote</div>
                <div className="text-accent text-xs font-medium">Solution Pvt. Ltd.</div>
              </div>
            </Link>

            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Award-winning IT & Digital Marketing agency helping businesses scale with top-tier remote professionals.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mb-5">
              {socialLinks.map(({ icon: Icon, href, bg }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white ${bg} hover:scale-110 transition-all duration-300`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-accent mt-0.5 shrink-0" />
                <span className="text-gray-400 text-xs">
                  J-3/31B Khirki Extn. Malviya Nagar New Delhi 110017
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={14} className="text-accent shrink-0" />
                <a href="tel:+916378400775" className="text-gray-400 text-xs hover:text-accent">
                  +91 6378400775
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} className="text-accent shrink-0" />
                <a href="mailto:contact@hasremotesolution.in" className="text-gray-400 text-xs hover:text-accent">
                  contact@hasremotesolution.in
                </a>
              </div>
            </div>
          </div>

          {/* Footer Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-gray-700">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs text-gray-400 hover:text-accent transition-colors hover:pl-1 duration-200 block"
                    >
                      › {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Award Badges Infinite Scroll Strip ── */}
      <div className="border-t border-gray-700/60 bg-gray-800/50 py-5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-8 items-center">
          {[...awardImages, ...awardImages].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white/5 hover:bg-white/10 rounded-lg px-4 py-2.5 transition-colors duration-300"
            >
              <img
                src={src}
                alt={`award-${(i % awardImages.length) + 1}`}
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark py-4 text-center text-xs text-gray-400">
        2025 © Copyright Has Remote Solution Pvt. Ltd. All rights reserved.
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  )
}
