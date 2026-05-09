// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Target, BarChart3, DollarSign, Zap } from 'lucide-react'
// import { FaWhatsapp } from "react-icons/fa"

// const services = [
//   'SEO Services',
//   'Social Media Marketing',
//   'Pay Per Click',
//   'Reputation Management',
//   'Web Development',
//   'App Development',
//   'Content Marketing',
//   'Remote Staffing',
//   'Other',
// ]

// export default function Contact() {

//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     service: '',
//     budget: '',
//     message: '',
//   })

//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitted(true)
//   }

//   const cards = [
//     {
//       icon: Phone,
//       title: 'Call Us',
//       info: '+91 6378400775',
//       sub: 'Mon–Sat, 9AM–7PM IST',
//       href: 'tel:+916378400775',
//       color: 'text-accent'
//     },
//     {
//       icon: FaWhatsapp,
//       title: 'WhatsApp',
//       info: '+91 6378400775',
//       sub: 'Chat With Us',
//       href: 'https://wa.me/916378400775',
//       color: 'text-green-500'
//     },
//     {
//       icon: Mail,
//       title: 'Email Us',
//       info: 'contact@hasremotesolution.in',
//       sub: 'Reply within 24 hours',
//       href: 'mailto:contact@hasremotesolution.in',
//       color: 'text-accent'
//     },
//     {
//       icon: MapPin,
//       title: 'Our Office',
//       info: 'J-3/31B Khirki Extn.',
//       sub: 'Malviya Nagar, New Delhi 110017',
//       href: '#',
//       color: 'text-accent'
//     },
//     {
//       icon: Clock,
//       title: 'Working Hours',
//       info: 'Mon – Sat',
//       sub: '9:00 AM – 7:00 PM IST',
//       href: '#',
//       color: 'text-accent'
//     }
//   ]

//   return (
//     <div>

//       {/* Hero */}
//       <section className="bg-primary py-16">
//         <div className="container mx-auto px-4 text-center">

//           <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
//             Contact Us
//           </p>

//           <h1 className="text-4xl font-extrabold text-white mb-4">
//             Get In Touch
//           </h1>

//           <p className="text-gray-300 max-w-2xl mx-auto text-sm">
//             Let's discuss how we can help your business grow.
//             Book a free discovery call or send us a message.
//           </p>

//           <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
//             <Link to="/" className="hover:text-accent transition-colors">
//               Home
//             </Link>
//             <span>›</span>
//             <span className="text-white">Contact</span>
//           </div>

//         </div>
//       </section>


//       {/* Contact Cards */}

//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

//             {cards.map((card) => {

//               const Icon = card.icon

//               return (
//                 <a
//                   key={card.title}
//                   href={card.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent transition-all duration-300 group block"
//                 >

//                   <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent transition-colors">

//                     <Icon
//                       size={22}
//                       className={`${card.color} group-hover:text-white transition-colors`}
//                     />

//                   </div>

//                   <h3 className="font-bold text-primary text-sm mb-1">
//                     {card.title}
//                   </h3>

//                   <p className="text-gray-800 text-sm font-medium">
//                     {card.info}
//                   </p>

//                   <p className="text-gray-400 text-xs">
//                     {card.sub}
//                   </p>

//                 </a>
//               )

//             })}

//           </div>

//         </div>
//       </section>


//       {/* Contact Form Section */}

//       <section className="py-16 bg-white">

//         <div className="container mx-auto px-4">

//           <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">


//             {/* Left Side */}

//             <div>

//               <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
//                 Let's Talk
//               </p>

//               <h2 className="text-3xl font-bold text-primary mb-3">
//                 Book a Free Discovery Call
//               </h2>

//               <div className="w-12 h-1 bg-accent rounded mb-5" />

//               <p className="text-gray-500 text-sm leading-relaxed mb-6">
//                 Ready to scale your business with top-tier remote professionals?
//                 Fill out the form and we'll get back to you within 24 hours
//                 to schedule your free consultation.
//               </p>


//               {/* Features with Real Icons */}

//               <div className="space-y-4 mb-6">

//                 <div className="flex items-center gap-3">
//                   <Target size={18} className="text-accent" />
//                   <span className="text-sm text-gray-700">
//                     Free 30-minute discovery call
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <BarChart3 size={18} className="text-accent" />
//                   <span className="text-sm text-gray-700">
//                     Custom strategy for your business
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <DollarSign size={18} className="text-accent" />
//                   <span className="text-sm text-gray-700">
//                     No obligation, no pressure
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Zap size={18} className="text-accent" />
//                   <span className="text-sm text-gray-700">
//                     Get started within 48 hours
//                   </span>
//                 </div>

//               </div>


//               {/* Map */}

//               <div className="bg-gray-100 rounded-xl overflow-hidden h-48 flex items-center justify-center border border-gray-200">

//                 <div className="text-center">

//                   <MapPin size={32} className="text-accent mx-auto mb-2" />

//                   <p className="text-sm text-gray-500 font-medium">
//                     New Delhi, India
//                   </p>

//                   <p className="text-xs text-gray-400">
//                     J-3/31B Khirki Extn. Malviya Nagar
//                   </p>

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

//                   <h3 className="text-2xl font-bold text-primary mb-2">
//                     Message Sent!
//                   </h3>

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
//                   <h3 className="text-lg font-bold text-primary mb-5">
//                     Send Us a Message
//                   </h3>

//                   <form onSubmit={handleSubmit} className="space-y-4">

//                     <div className="grid sm:grid-cols-2 gap-4">

//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         value={form.name}
//                         onChange={handleChange}
//                         placeholder="Full Name"
//                         className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
//                       />

//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         value={form.email}
//                         onChange={handleChange}
//                         placeholder="Email Address"
//                         className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
//                       />

//                     </div>

//                     <textarea
//                       name="message"
//                       required
//                       rows={4}
//                       value={form.message}
//                       onChange={handleChange}
//                       placeholder="Tell us about your project..."
//                       className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
//                     />

//                     <button
//                       type="submit"
//                       className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
//                     >
//                       <Send size={16} />
//                       Send Message
//                     </button>

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
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  Target, BarChart3, DollarSign, Zap, ChevronDown
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
  'SEO Services',
  'Social Media Marketing',
  'Pay Per Click (PPC)',
  'Reputation Management',
  'Web Development',
  'App Development',
  'Content Marketing',
  'Remote Staffing',
  'Virtual Assistant',
  'Full Stack Development',
  'UI/UX Design',
  'Email Marketing',
  'Other',
]

const budgets = [
  'Less than $500/month',
  '$500 – $1,000/month',
  '$1,000 – $2,500/month',
  '$2,500 – $5,000/month',
  '$5,000+/month',
  'Not Sure Yet',
]

const cards = [
  {
    icon: Phone,
    title: 'Call Us',
    info: '+91 6378400775',
    sub: 'Mon–Sat, 9AM–7PM IST',
    href: 'tel:+916378400775',
    color: 'text-accent',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    info: '+91 6378400775',
    sub: 'Chat With Us Anytime',
    href: 'https://wa.me/916378400775',
    color: 'text-green-500',
  },
  {
    icon: Mail,
    title: 'Email Us',
    info: 'contact@hasremotesolution.in',
    sub: 'Reply within 24 hours',
    href: 'mailto:contact@hasremotesolution.in',
    color: 'text-accent',
  },
  {
    icon: MapPin,
    title: 'Our Office',
    info: 'J-3/31B Khirki Extn.',
    sub: 'Malviya Nagar, New Delhi 110017',
    href: 'https://maps.google.com/?q=Malviya+Nagar+New+Delhi',
    color: 'text-accent',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    info: 'Mon – Sat',
    sub: '9:00 AM – 7:00 PM IST',
    href: '#',
    color: 'text-accent',
  },
]

const inputClass =
  'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-gray-50 focus:bg-white'

const SelectField = ({ name, value, onChange, options, placeholder, required }) => (
  <div className="relative">
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`${inputClass} appearance-none pr-8 cursor-pointer ${!value ? 'text-gray-400' : 'text-gray-800'}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="text-gray-800">
          {opt}
        </option>
      ))}
    </select>
    <ChevronDown
      size={16}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
    />
  </div>
)

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
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate a short delay for UX polish
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  const handleReset = () => {
    setSubmitted(false)
    setForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    })
  }

  return (
    <div>
      {/* ── Hero ────────────────────────────────────── */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Contact Us
          </p>
          <h1 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Let's discuss how we can help your business grow. Book a free discovery call or
            send us a message — we reply within 24 hours.
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

      {/* ── Contact Cards ────────────────────────────── */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent transition-all duration-300 group block"
                >
                  <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent transition-colors">
                    <Icon
                      size={20}
                      className={`${card.color} group-hover:text-white transition-colors`}
                    />
                  </div>
                  <h3 className="font-bold text-primary text-xs mb-1">{card.title}</h3>
                  <p className="text-gray-800 text-xs font-medium break-all">{card.info}</p>
                  <p className="text-gray-400 text-xs">{card.sub}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Main Section ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Left */}
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                Let's Talk
              </p>
              <h2 className="text-3xl font-bold text-primary mb-3">
                Book a Free Discovery Call
              </h2>
              <div className="w-12 h-1 bg-accent rounded mb-5" />
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Ready to scale your business with top-tier remote professionals? Fill out the
                form and we'll get back to you within 24 hours to schedule your free
                consultation.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { Icon: Target, text: 'Free 30-minute discovery call' },
                  { Icon: BarChart3, text: 'Custom strategy for your business' },
                  { Icon: DollarSign, text: 'No obligation, no pressure' },
                  { Icon: Zap, text: 'Get started within 48 hours' },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-accent" />
                    </div>
                    <span className="text-sm text-gray-700">{text}</span>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-xl overflow-hidden h-48 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <MapPin size={32} className="text-accent mx-auto mb-2" />
                  <p className="text-sm text-gray-600 font-medium">New Delhi, India</p>
                  <p className="text-xs text-gray-400">J-3/31B Khirki Extn. Malviya Nagar</p>
                  <a
                    href="https://maps.google.com/?q=Malviya+Nagar+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline mt-1 block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* ── Form Card ──────────────────────────── */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

              {submitted ? (
                /* ── Thank You Screen ─────────────────── */
                <div className="text-center py-8">
                  {/* Animated success circle */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-accent/10 rounded-full animate-ping opacity-60" />
                    <div className="relative w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
                      <CheckCircle size={48} className="text-accent" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-primary mb-2">
                    🎉 Thank You, {form.name || 'there'}!
                  </h3>

                  <p className="text-gray-500 text-sm mb-1">
                    Your message has been received successfully.
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    Our team will reach out to you at{' '}
                    <span className="font-semibold text-primary">{form.email}</span> within{' '}
                    <span className="font-semibold text-accent">24 hours</span>.
                  </p>

                  {/* Summary card */}
                  {(form.service || form.budget) && (
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-left mb-6 text-sm space-y-2">
                      <p className="font-semibold text-primary text-xs uppercase tracking-wide mb-2">
                        Your Enquiry Summary
                      </p>
                      {form.service && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Service</span>
                          <span className="text-gray-700 font-medium">{form.service}</span>
                        </div>
                      )}
                      {form.budget && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Budget</span>
                          <span className="text-gray-700 font-medium">{form.budget}</span>
                        </div>
                      )}
                      {form.company && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Company</span>
                          <span className="text-gray-700 font-medium">{form.company}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/916378400775"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
                    >
                      <FaWhatsapp size={16} />
                      Chat on WhatsApp
                    </a>
                    <button
                      onClick={handleReset}
                      className="flex-1 border border-gray-200 text-gray-600 hover:border-accent hover:text-accent font-semibold py-3 rounded-xl text-sm transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>

              ) : (
                /* ── The Form ────────────────────────── */
                <>
                  <h3 className="text-lg font-bold text-primary mb-5">Send Us a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className={inputClass}
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        className={inputClass}
                      />
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className={inputClass}
                      />
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className={inputClass}
                      />
                    </div>

                    {/* Row 3: Service */}
                    <SelectField
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      options={services}
                      placeholder="Select a Service *"
                      required
                    />

                    {/* Row 4: Budget */}
                    <SelectField
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      options={budgets}
                      placeholder="Monthly Budget (Optional)"
                    />

                    {/* Message */}
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or requirements... *"
                      className={inputClass}
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-accent hover:bg-accent-dark disabled:opacity-70 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm transition-all"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      🔒 Your information is secure. We never spam or share your data.
                    </p>
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