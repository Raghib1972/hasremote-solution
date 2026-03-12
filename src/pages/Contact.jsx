// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

// const services = [
//   'SEO Services', 'Social Media Marketing', 'Pay Per Click', 'Reputation Management',
//   'Web Development', 'App Development', 'Content Marketing', 'Remote Staffing', 'Other',
// ]

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitted(true)
//   }

//   return (
//     <div>
//       {/* Hero */}
//       <section className="bg-primary py-16">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Contact Us</p>
//           <h1 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h1>
//           <p className="text-gray-300 max-w-2xl mx-auto text-sm">
//             Let's discuss how we can help your business grow. Book a free discovery call or send us a message.
//           </p>
//           <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
//             <Link to="/" className="hover:text-accent transition-colors">Home</Link>
//             <span>›</span>
//             <span className="text-white">Contact</span>
//           </div>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {[
//               { icon: Phone, title: 'Call Us', info: '+91 6378400775', sub: 'Mon–Sat, 9AM–7PM IST', href: 'tel:+916378400775' },
//               { icon: Mail, title: 'Email Us', info: 'contact@hasremotesolution.in', sub: 'Reply within 24 hours', href: 'mailto:contact@hasremotesolution.in' },
//               { icon: MapPin, title: 'Our Office', info: 'J-3/31B Khirki Extn.', sub: 'Malviya Nagar, New Delhi 110017', href: '#' },
//               { icon: Clock, title: 'Working Hours', info: 'Mon – Sat', sub: '9:00 AM – 7:00 PM IST', href: '#' },
//             ].map((card) => {
//               const Icon = card.icon
//               return (
//                 <a
//                   key={card.title}
//                   href={card.href}
//                   className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent transition-all duration-300 group block"
//                 >
//                   <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent transition-colors">
//                     <Icon size={22} className="text-accent group-hover:text-white transition-colors" />
//                   </div>
//                   <h3 className="font-bold text-primary text-sm mb-1">{card.title}</h3>
//                   <p className="text-gray-800 text-sm font-medium">{card.info}</p>
//                   <p className="text-gray-400 text-xs">{card.sub}</p>
//                 </a>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Form Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
//             {/* Left */}
//             <div>
//               <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Let's Talk</p>
//               <h2 className="text-3xl font-bold text-primary mb-3">Book a Free Discovery Call</h2>
//               <div className="w-12 h-1 bg-accent rounded mb-5" />
//               <p className="text-gray-500 text-sm leading-relaxed mb-6">
//                 Ready to scale your business with top-tier remote professionals? Fill out the form and we'll get back to you within 24 hours to schedule your free consultation.
//               </p>

//               <div className="space-y-4 mb-6">
//                 {[
//                   '🎯 Free 30-minute discovery call',
//                   '📊 Custom strategy for your business',
//                   '💰 No obligation, no pressure',
//                   '⚡ Get started within 48 hours',
//                 ].map((item) => (
//                   <div key={item} className="flex items-center gap-2">
//                     <span className="text-sm text-gray-700">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Google Map Placeholder */}
//               <div className="bg-gray-100 rounded-xl overflow-hidden h-48 flex items-center justify-center border border-gray-200">
//                 <div className="text-center">
//                   <MapPin size={32} className="text-accent mx-auto mb-2" />
//                   <p className="text-sm text-gray-500 font-medium">New Delhi, India</p>
//                   <p className="text-xs text-gray-400">J-3/31B Khirki Extn. Malviya Nagar</p>
//                   <a
//                     href="https://maps.google.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-xs text-accent hover:underline mt-1 block"
//                   >
//                     View on Google Maps →
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
//               {submitted ? (
//                 <div className="text-center py-12">
//                   <CheckCircle size={56} className="text-accent mx-auto mb-4" />
//                   <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
//                   <p className="text-gray-500 mb-6">
//                     Thank you for reaching out. Our team will contact you within 24 hours.
//                   </p>
//                   <button
//                     onClick={() => setSubmitted(false)}
//                     className="btn-primary"
//                   >
//                     Send Another Message
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <h3 className="text-lg font-bold text-primary mb-5">Send Us a Message</h3>
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="grid sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="text-xs font-semibold text-gray-600 block mb-1">Full Name *</label>
//                         <input
//                           type="text" name="name" required
//                           value={form.name} onChange={handleChange}
//                           placeholder="John Smith"
//                           className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
//                         />
//                       </div>
//                       <div>
//                         <label className="text-xs font-semibold text-gray-600 block mb-1">Email Address *</label>
//                         <input
//                           type="email" name="email" required
//                           value={form.email} onChange={handleChange}
//                           placeholder="john@company.com"
//                           className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="text-xs font-semibold text-gray-600 block mb-1">Phone Number</label>
//                         <input
//                           type="tel" name="phone"
//                           value={form.phone} onChange={handleChange}
//                           placeholder="+1 (555) 000-0000"
//                           className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
//                         />
//                       </div>
//                       <div>
//                         <label className="text-xs font-semibold text-gray-600 block mb-1">Company Name</label>
//                         <input
//                           type="text" name="company"
//                           value={form.company} onChange={handleChange}
//                           placeholder="Your Company"
//                           className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="text-xs font-semibold text-gray-600 block mb-1">Service Required</label>
//                       <select
//                         name="service"
//                         value={form.service} onChange={handleChange}
//                         className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors bg-white text-gray-700"
//                       >
//                         <option value="">Select a Service</option>
//                         {services.map((s) => <option key={s} value={s}>{s}</option>)}
//                       </select>
//                     </div>
//                     <div>
//                       <label className="text-xs font-semibold text-gray-600 block mb-1">Monthly Budget</label>
//                       <select
//                         name="budget"
//                         value={form.budget} onChange={handleChange}
//                         className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors bg-white text-gray-700"
//                       >
//                         <option value="">Select Budget Range</option>
//                         <option>Under $500/month</option>
//                         <option>$500 - $1,000/month</option>
//                         <option>$1,000 - $5,000/month</option>
//                         <option>$5,000+/month</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="text-xs font-semibold text-gray-600 block mb-1">Message *</label>
//                       <textarea
//                         name="message" required rows={4}
//                         value={form.message} onChange={handleChange}
//                         placeholder="Tell us about your project and requirements..."
//                         className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-sm"
//                     >
//                       <Send size={16} /> Send Message
//                     </button>
//                     <p className="text-xs text-gray-400 text-center">
//                       By submitting, you agree to our Privacy Policy. We'll never spam you.
//                     </p>
//                   </form>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }












import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Target, BarChart3, DollarSign, Zap } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa"

const services = [
  'SEO Services',
  'Social Media Marketing',
  'Pay Per Click',
  'Reputation Management',
  'Web Development',
  'App Development',
  'Content Marketing',
  'Remote Staffing',
  'Other',
]

export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const cards = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 6378400775',
      sub: 'Mon–Sat, 9AM–7PM IST',
      href: 'tel:+916378400775',
      color: 'text-accent'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      info: '+91 6378400775',
      sub: 'Chat With Us',
      href: 'https://wa.me/916378400775',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'contact@hasremotesolution.in',
      sub: 'Reply within 24 hours',
      href: 'mailto:contact@hasremotesolution.in',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      title: 'Our Office',
      info: 'J-3/31B Khirki Extn.',
      sub: 'Malviya Nagar, New Delhi 110017',
      href: '#',
      color: 'text-accent'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: 'Mon – Sat',
      sub: '9:00 AM – 7:00 PM IST',
      href: '#',
      color: 'text-accent'
    }
  ]

  return (
    <div>

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">

          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Contact Us
          </p>

          <h1 className="text-4xl font-extrabold text-white mb-4">
            Get In Touch
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Let's discuss how we can help your business grow.
            Book a free discovery call or send us a message.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-white">Contact</span>
          </div>

        </div>
      </section>


      {/* Contact Cards */}

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {cards.map((card) => {

              const Icon = card.icon

              return (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent transition-all duration-300 group block"
                >

                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent transition-colors">

                    <Icon
                      size={22}
                      className={`${card.color} group-hover:text-white transition-colors`}
                    />

                  </div>

                  <h3 className="font-bold text-primary text-sm mb-1">
                    {card.title}
                  </h3>

                  <p className="text-gray-800 text-sm font-medium">
                    {card.info}
                  </p>

                  <p className="text-gray-400 text-xs">
                    {card.sub}
                  </p>

                </a>
              )

            })}

          </div>

        </div>
      </section>


      {/* Contact Form Section */}

      <section className="py-16 bg-white">

        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">


            {/* Left Side */}

            <div>

              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Let's Talk
              </p>

              <h2 className="text-3xl font-bold text-primary mb-3">
                Book a Free Discovery Call
              </h2>

              <div className="w-12 h-1 bg-accent rounded mb-5" />

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Ready to scale your business with top-tier remote professionals?
                Fill out the form and we'll get back to you within 24 hours
                to schedule your free consultation.
              </p>


              {/* Features with Real Icons */}

              <div className="space-y-4 mb-6">

                <div className="flex items-center gap-3">
                  <Target size={18} className="text-accent" />
                  <span className="text-sm text-gray-700">
                    Free 30-minute discovery call
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <BarChart3 size={18} className="text-accent" />
                  <span className="text-sm text-gray-700">
                    Custom strategy for your business
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <DollarSign size={18} className="text-accent" />
                  <span className="text-sm text-gray-700">
                    No obligation, no pressure
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Zap size={18} className="text-accent" />
                  <span className="text-sm text-gray-700">
                    Get started within 48 hours
                  </span>
                </div>

              </div>


              {/* Map */}

              <div className="bg-gray-100 rounded-xl overflow-hidden h-48 flex items-center justify-center border border-gray-200">

                <div className="text-center">

                  <MapPin size={32} className="text-accent mx-auto mb-2" />

                  <p className="text-sm text-gray-500 font-medium">
                    New Delhi, India
                  </p>

                  <p className="text-xs text-gray-400">
                    J-3/31B Khirki Extn. Malviya Nagar
                  </p>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline mt-1 block"
                  >
                    View on Google Maps →
                  </a>

                </div>

              </div>

            </div>


            {/* Form */}

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

              {submitted ? (

                <div className="text-center py-12">

                  <CheckCircle size={56} className="text-accent mx-auto mb-4" />

                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Message Sent!
                  </h3>

                  <p className="text-gray-500 mb-6">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                <>
                  <h3 className="text-lg font-bold text-primary mb-5">
                    Send Us a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid sm:grid-cols-2 gap-4">

                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
                      />

                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
                      />

                    </div>

                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
                    />

                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
                    >
                      <Send size={16} />
                      Send Message
                    </button>

                  </form>
                </>

              )}

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}