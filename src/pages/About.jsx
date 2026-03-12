// import { Link } from 'react-router-dom'
// import TestimonialsSection from '../components/TestimonialsSection'
// import useScrollReveal from '../hooks/useScrollReveal'
// import { CheckCircle, Award, Users, Globe, Clock } from 'lucide-react'

// const milestones = [
//   { year: '2014', title: 'Company Founded', desc: 'Has Remote Solution was established in New Delhi, India.' },
//   { year: '2016', title: 'First 100 Clients', desc: 'Reached our first major milestone with 100 satisfied clients.' },
//   { year: '2018', title: 'Google Partner', desc: 'Became a certified Google Partner agency.' },
//   { year: '2020', title: 'Remote Staffing Launch', desc: 'Launched our dedicated remote staffing solutions.' },
//   { year: '2022', title: '300+ Projects', desc: 'Delivered over 300 successful digital projects.' },
//   { year: '2025', title: 'Global Expansion', desc: 'Serving clients across US, UK, Australia, Canada, and more.' },
// ]

// const team = [
//   { name: 'Rahul Sharma', role: 'CEO & Founder', initials: 'RS' },
//   { name: 'Priya Singh', role: 'Head of SEO', initials: 'PS' },
//   { name: 'Anil Kumar', role: 'Lead Developer', initials: 'AK' },
//   { name: 'Neha Gupta', role: 'Social Media Manager', initials: 'NG' },
//   { name: 'Vikram Patel', role: 'PPC Specialist', initials: 'VP' },
//   { name: 'Anjali Mehta', role: 'Content Strategist', initials: 'AM' },
// ]

// export default function About() {
//   const ref = useScrollReveal()

//   return (
//     <div ref={ref}>
//       {/* Page Hero */}
//       <section className="bg-primary py-16">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">About Us</p>
//           <h1 className="text-4xl font-extrabold text-white mb-4">About Has Remote Solution</h1>
//           <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
//             A decade of excellence in IT services, digital marketing, and remote staffing — helping businesses worldwide scale efficiently.
//           </p>
//           <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
//             <Link to="/" className="hover:text-accent transition-colors">Home</Link>
//             <span>›</span>
//             <span className="text-white">About Us</span>
//           </div>
//         </div>
//       </section>

//       {/* Company Overview */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="scroll-reveal">
//               <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Who We Are</p>
//               <h2 className="text-3xl font-bold text-primary mb-4">
//                 Your Trusted Partner for Digital Growth
//               </h2>
//               <div className="w-14 h-1 bg-accent rounded mb-5" />
//               <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                 Has Remote Solution Pvt. Ltd. is a leading IT services and digital marketing agency based in New Delhi, India. With over 10 years of experience, we have helped 300+ businesses across the globe achieve their digital goals.
//               </p>
//               <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                 We specialize in connecting businesses with top-tier remote professionals — from virtual assistants and developers to SEO experts and social media managers — at up to 70% less than local hiring costs.
//               </p>
//               <div className="space-y-2 mb-6">
//                 {[
//                   'Pre-vetted, English-speaking professionals',
//                   'Transparent pricing with no hidden fees',
//                   '2-week risk-free trial period',
//                   'Dedicated account management',
//                 ].map((item) => (
//                   <div key={item} className="flex items-center gap-2">
//                     <CheckCircle size={16} className="text-accent shrink-0" />
//                     <span className="text-gray-700 text-sm">{item}</span>
//                   </div>
//                 ))}
//               </div>
//               <Link to="/contact" className="btn-primary">
//                 Get a Free Consultation 
//               </Link>
//             </div>

//             {/* Stats Grid */}
//             <div className="scroll-reveal grid grid-cols-2 gap-4">
//               {[
//                 { icon: Award, num: '10+', label: 'Years Experience', color: 'bg-accent' },
//                 { icon: Users, num: '300+', label: 'Happy Clients', color: 'bg-primary' },
//                 { icon: Globe, num: '20+', label: 'Countries Served', color: 'bg-primary' },
//                 { icon: Clock, num: '24/7', label: 'Support Available', color: 'bg-accent' },
//               ].map((stat) => {
//                 const Icon = stat.icon
//                 return (
//                   <div key={stat.label} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow">
//                     <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
//                       <Icon size={22} className="text-white" />
//                     </div>
//                     <div className="text-2xl font-extrabold text-primary mb-1">{stat.num}</div>
//                     <div className="text-gray-500 text-xs">{stat.label}</div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Journey</p>
//             <h2 className="section-title">Our Story</h2>
//           </div>
//           <div className="max-w-3xl mx-auto">
//             {milestones.map((m, i) => (
//               <div key={m.year} className={`scroll-reveal flex gap-6 mb-6 ${i % 2 === 0 ? '' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
//                 <div className="flex flex-col items-center">
//                   <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
//                     {m.year}
//                   </div>
//                   {i < milestones.length - 1 && <div className="w-0.5 h-full bg-accent/20 mt-2" />}
//                 </div>
//                 <div className="bg-white rounded-xl p-5 flex-grow shadow-sm border border-gray-100 mb-2">
//                   <h3 className="font-bold text-primary mb-1">{m.title}</h3>
//                   <p className="text-gray-500 text-sm">{m.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Our People</p>
//             <h2 className="section-title">Meet Our Team</h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {team.map((member, i) => (
//               <div
//                 key={member.name}
//                 className="scroll-reveal text-center bg-gray-50 rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
//                 style={{ transitionDelay: `${i * 80}ms` }}
//               >
//                 <div className="w-16 h-16 bg-primary group-hover:bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 transition-colors duration-300">
//                   {member.initials}
//                 </div>
//                 <p className="font-semibold text-primary text-sm">{member.name}</p>
//                 <p className="text-gray-400 text-xs mt-1">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div id="testimonials">
//         <TestimonialsSection />
//       </div>
//     </div>
//   )
// }










import { Link } from "react-router-dom";
import TestimonialsSection from "../components/TestimonialsSection";
import useScrollReveal from "../hooks/useScrollReveal";
import { CheckCircle, Award, Users, Globe, Clock } from "lucide-react";

export default function About() {

const ref = useScrollReveal();

return (
<div ref={ref}>

{/* HERO */}
<section className="bg-primary py-16">
<div className="container mx-auto px-4 text-center">

<p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
About Has Remote Solution
</p>

<h1 className="text-4xl font-extrabold text-white mb-4">
About Has Remote Solution
</h1>

<p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
Top-Notch Services for Digital Marketing that Boost Sales and Leads
</p>

<div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
<Link to="/" className="hover:text-accent">Home</Link>
<span>›</span>
<span className="text-white">About Has Remote Solution</span>
</div>

</div>
</section>


{/* DIGITAL MARKETING INTRO */}
<section className="py-16 bg-white">

<div className="container mx-auto px-4 max-w-4xl">

<p className="text-gray-600 text-sm leading-relaxed mb-6">
To deliver successful results with these contents and tactics for our clients,
we are a digital marketing agency that believes in teamwork. Our professionals
focus on building strong online brand presence including social media growth
and ranking in search engines.
</p>

<div className="grid md:grid-cols-2 gap-4">

{[
"Consulting on Strategic Branding",
"Agency of Design & Strategic Marketing",
"Expand Your Enterprise",
"Performance Driven by ROI",
"Certified Professionals",
"Top-Notch Services for Digital Marketing"
].map((item)=>(
<div key={item} className="flex items-center gap-2">
<CheckCircle size={16} className="text-accent"/>
<span className="text-gray-700 text-sm">{item}</span>
</div>
))}

</div>

</div>

</section>


{/* WHO WE ARE */}
<section className="py-16 bg-gray-50">

<div className="container mx-auto px-4 max-w-4xl">

<h2 className="text-3xl font-bold text-primary mb-6">
Who We Are?
</h2>

<p className="text-gray-600 text-sm leading-relaxed mb-4">
We at Has Remote Solution Pvt. Ltd. believe that a company is only as
successful as its workers. Our team of web developers uses the most recent
web technology to create user-friendly interfaces for businesses.
</p>

<p className="text-gray-600 text-sm leading-relaxed mb-4">
We are a group of digital pioneers who approach problems head-on and provide
solutions that help global businesses grow faster and operate efficiently.
</p>

<p className="text-gray-600 text-sm leading-relaxed">
Our staff is highly engaged and has strong knowledge of social media and
digital marketing strategies that help companies achieve their goals.
</p>

</div>

</section>


{/* VISION */}
<section className="py-16 bg-white">

<div className="container mx-auto px-4 max-w-4xl">

<h2 className="text-3xl font-bold text-primary mb-6">
Our Vision
</h2>

<p className="text-gray-600 text-sm leading-relaxed">
Has Remote Solution Pvt. Ltd. aims to become a major player in the digital
marketing service industry. We help businesses expand and evolve their
marketing using our expertise in branding, digital media, strategy and
direct marketing.
</p>

</div>

</section>


{/* AIM */}
<section className="py-16 bg-gray-50">

<div className="container mx-auto px-4 max-w-4xl">

<h2 className="text-3xl font-bold text-primary mb-6">
Has Remote Solution Pvt. Ltd. Aiming For
</h2>

<p className="text-gray-600 text-sm leading-relaxed">
The internet is full of conventional solutions for business challenges.
We provide innovative digital solutions that help companies grow and
stand out in competitive markets.
</p>

<p className="text-gray-600 text-sm leading-relaxed mt-4">
Our experienced team creates customized strategies and enterprise
solutions that deliver real measurable results for businesses across
different industries.
</p>

</div>

</section>


{/* EXPERTISE */}
<section className="py-16 bg-white">

<div className="container mx-auto px-4">

<h2 className="text-3xl font-bold text-primary mb-10 text-center">
Our Expertise
</h2>

<div className="grid md:grid-cols-2 gap-8">

<div>
<h3 className="font-bold text-primary mb-2">
Industry Insiders
</h3>
<p className="text-gray-600 text-sm">
Our team consists of experienced digital marketing specialists who create
goal-driven strategies and follow search engine guidelines.
</p>
</div>

<div>
<h3 className="font-bold text-primary mb-2">
Data-Driven Digital Marketing
</h3>
<p className="text-gray-600 text-sm">
We analyze research and SWOT data to deliver the right message on the
right platform at the right time.
</p>
</div>

<div>
<h3 className="font-bold text-primary mb-2">
Personalized Digital Marketing Framework
</h3>
<p className="text-gray-600 text-sm">
We analyze your marketing strategy, brand values and KPIs to create
custom digital marketing solutions.
</p>
</div>

<div>
<h3 className="font-bold text-primary mb-2">
Campaign Monitoring And Evaluation
</h3>
<p className="text-gray-600 text-sm">
We track campaign performance using analytics and continuously improve
audience targeting and ROI.
</p>
</div>

<div>
<h3 className="font-bold text-primary mb-2">
Reasonable Costs
</h3>
<p className="text-gray-600 text-sm">
Our digital marketing services are designed according to your business
needs and budget.
</p>
</div>

</div>

</div>

</section>


{/* PRINCIPLES */}
<section className="py-16 bg-gray-50">

<div className="container mx-auto px-4">

<h2 className="text-3xl font-bold text-primary mb-10 text-center">
Our Principles
</h2>

<div className="grid md:grid-cols-2 gap-6">

<div>
<h3 className="font-bold text-primary mb-2">Innovation</h3>
<p className="text-gray-600 text-sm">
Our innovative digital marketing strategies help businesses connect
with their audience effectively.
</p>
</div>

<div>
<h3 className="font-bold text-primary mb-2">Passion</h3>
<p className="text-gray-600 text-sm">
We are passionate about delivering results that help our clients achieve
their goals.
</p>
</div>

<div>
<h3 className="font-bold text-primary mb-2">Quality</h3>
<p className="text-gray-600 text-sm">
Quality is a standard that defines everything we do for our clients.
</p>
</div>

<div>
<h3 className="font-bold text-primary mb-2">Transparency</h3>
<p className="text-gray-600 text-sm">
We keep clients informed about every strategy and action we take.
</p>
</div>

<div>
<h3 className="font-bold text-primary mb-2">Client = King</h3>
<p className="text-gray-600 text-sm">
Your needs become our priority when you collaborate with us.
</p>
</div>

</div>

</div>

</section>


<div id="testimonials">
<TestimonialsSection />
</div>

</div>
);
}







