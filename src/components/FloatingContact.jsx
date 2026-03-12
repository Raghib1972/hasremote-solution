// import { useState } from 'react'
// import { MessageCircle, X, Send } from 'lucide-react'

// export default function FloatingContact() {
//   const [open, setOpen] = useState(false)
//   const [form, setForm] = useState({ name: '', email: '', message: '' })
//   const [sent, setSent] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSent(true)
//     setTimeout(() => { setSent(false); setOpen(false); setForm({ name: '', email: '', message: '' }) }, 2500)
//   }

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
//       {open && (
//         <div className="bg-white rounded-xl shadow-2xl w-80 overflow-hidden border border-gray-100 animate-fade-in-up">
//           <div className="bg-primary px-4 py-3 flex items-center justify-between">
//             <div>
//               <p className="text-white font-semibold text-sm">Let's Connect</p>
//               <p className="text-gray-300 text-xs">Send us a message</p>
//             </div>
//             <button onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">
//               <X size={18} />
//             </button>
//           </div>
//           {sent ? (
//             <div className="p-6 text-center">
//               <div className="text-4xl mb-2">✅</div>
//               <p className="font-semibold text-primary">Message Sent!</p>
//               <p className="text-sm text-gray-500">We'll get back to you soon.</p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="p-4 space-y-3">
//               <input
//                 type="text" placeholder="Your Name" required
//                 value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
//                 className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
//               />
//               <input
//                 type="email" placeholder="Your Email" required
//                 value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
//                 className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
//               />
//               <textarea
//                 placeholder="Your Message" rows={3} required
//                 value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
//                 className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
//               />
//               <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-2 rounded text-sm flex items-center justify-center gap-2 transition-colors">
//                 <Send size={14} /> Send Message
//               </button>
//             </form>
//           )}
//         </div>
//       )}
//       <button
//         onClick={() => setOpen(!open)}
//         className="bg-accent hover:bg-accent-dark text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
//       >
//         {open ? <X size={22} /> : <MessageCircle size={22} />}
//       </button>
//     </div>
//   )
// }













import { useState } from "react";
import { X, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
      setOpen(false);
      setForm({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {open && (
        <div className="bg-white rounded-xl shadow-2xl w-80 overflow-hidden border border-gray-100">

          <div className="bg-green-500 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">Let's Connect</p>
              <p className="text-green-100 text-xs">Send us a message</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white hover:opacity-80"
            >
              <X size={18} />
            </button>
          </div>

          {sent ? (
            <div className="p-6 text-center">
              <div className="text-4xl mb-2">✅</div>
              <p className="font-semibold text-green-600">Message Sent!</p>
              <p className="text-sm text-gray-500">
                We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-4 space-y-3">

              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-500"
              />

              <textarea
                placeholder="Your Message"
                rows={3}
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={14} />
                Send Message
              </button>

            </form>
          )}
        </div>
      )}

      {/* WhatsApp Floating Button */}

      <a
        href="https://wa.me/916378400775"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>

    </div>
  );
}