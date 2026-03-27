// import { useState, useEffect, useRef } from "react";
// import { X, Send, Phone, ChevronDown } from "lucide-react";
// import emailjs from "@emailjs/browser";

// // ─── CONFIG ──────────────────────────────────────────────
// const NAV_PAGES = [
//   { label: "Home", path: "/" },
//   { label: "Products", path: "/products" },
//   { label: "Company", path: "/company" },
//   { label: "Digital Marketing", path: "/digital-marketing" },
//   { label: "Packages", path: "/packages" },
//   { label: "Web Development", path: "/web-development" },
//   { label: "Full Stack", path: "/full-stack" },
//   { label: "App Development", path: "/app-development" },
//   { label: "Portfolio", path: "/portfolio" },
//   { label: "Client Results", path: "/client-results" },
//   { label: "Careers", path: "/careers" },
//   { label: "Blog", path: "/blog" },
//   { label: "About Us", path: "/about-us" },
// ];

// const COMPANY_URL   = "https://hasremote-solution.vercel.app";
// const PHONE_NUMBER  = "+916378400775";
// const WHATSAPP_NUMBER = "916378400775";

// // ── EmailJS credentials (replace with your own from emailjs.com) ──
// const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
// const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz456"
// const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "abcDEFghiJKL"
// // ─────────────────────────────────────────────────────────

// export default function FloatingContact() {
//   const [open, setOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [form, setForm] = useState({ name: "", phone: "", email: "", companyUrl: "", message: "" });
//   const [status, setStatus] = useState("idle"); // idle | sending | sent | error
//   const [currentPage, setCurrentPage] = useState("");
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const path = window.location.pathname;
//     const matched = NAV_PAGES.find((p) => p.path === path);
//     setCurrentPage(matched ? matched.label : "Home");
//   }, []);

//   useEffect(() => {
//     const handler = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const resetForm = () => {
//     setForm({ name: "", phone: "", email: "", companyUrl: "", message: "" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const templateParams = {
//       from_name:   form.name,
//       from_phone:  form.phone,
//       from_email:  form.email,
//       company_url: form.companyUrl || "Not provided",
//       message:     form.message,
//       page_visited: currentPage,
//     };

//     // 1️⃣ Send via EmailJS
//     try {
//       await emailjs.send(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         templateParams,
//         EMAILJS_PUBLIC_KEY
//       );
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       setStatus("error");
//       return;
//     }

//     // 2️⃣ Open WhatsApp with pre-filled message
//     const waText = encodeURIComponent(
//       `📩 *New Lead - Has Remote Solution*\n\n` +
//       `👤 Name: ${form.name}\n` +
//       `📞 Phone: ${form.phone}\n` +
//       `📧 Email: ${form.email}\n` +
//       `🌐 Company URL: ${form.companyUrl || "Not provided"}\n` +
//       `📄 Page: ${currentPage}\n` +
//       `💬 Message: ${form.message}`
//     );
//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, "_blank");

//     setStatus("sent");
//     setTimeout(() => {
//       setStatus("idle");
//       setOpen(false);
//       resetForm();
//     }, 3000);
//   };

//   const handleNavClick = (page) => {
//     setCurrentPage(page.label);
//     setDropdownOpen(false);
//     window.location.href = COMPANY_URL + page.path;
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

//       {/* Contact Popup */}
//       {open && (
//         <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-gray-100">

//           {/* Header */}
//           <div className="bg-orange-500 px-4 py-3 flex items-center justify-between">
//             <div>
//               <p className="text-white font-bold text-sm">Has Remote Solution</p>
//               <p className="text-orange-100 text-xs">Send us a message</p>
//             </div>
//             <button onClick={() => setOpen(false)} className="text-white hover:opacity-80">
//               <X size={18} />
//             </button>
//           </div>

//           {/* Page Dropdown */}
//           <div className="px-4 pt-3" ref={dropdownRef}>
//             <label className="text-xs text-gray-500 mb-1 block font-medium">📍 You are on:</label>
//             <div className="relative">
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 transition-colors"
//               >
//                 <span className="font-medium text-gray-700">{currentPage}</span>
//                 <ChevronDown
//                   size={16}
//                   className={`text-gray-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
//                 />
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
//                   {NAV_PAGES.map((page) => (
//                     <button
//                       key={page.path}
//                       onClick={() => handleNavClick(page)}
//                       className={`w-full text-left px-3 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors ${
//                         currentPage === page.label
//                           ? "bg-orange-50 text-orange-600 font-semibold"
//                           : "text-gray-700"
//                       }`}
//                     >
//                       {page.label}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Form / Status */}
//           {status === "sent" ? (
//             <div className="p-6 text-center">
//               <div className="text-4xl mb-2">✅</div>
//               <p className="font-semibold text-green-600">Message Sent!</p>
//               <p className="text-sm text-gray-500 mt-1">Email bhej diya + WhatsApp pe bhi message gaya!</p>
//             </div>
//           ) : status === "error" ? (
//             <div className="p-6 text-center">
//               <div className="text-4xl mb-2">❌</div>
//               <p className="font-semibold text-red-500">Kuch gadbad hui!</p>
//               <p className="text-sm text-gray-500 mt-1">EmailJS config check karein.</p>
//               <button
//                 onClick={() => setStatus("idle")}
//                 className="mt-3 text-xs text-orange-500 underline"
//               >
//                 Try Again
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="px-4 pb-4 pt-2 space-y-2">
//               <input
//                 type="text"
//                 placeholder="Your name *"
//                 required
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
//               />
//               <input
//                 type="tel"
//                 placeholder="Your phone number *"
//                 required
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
//               />
//               <input
//                 type="email"
//                 placeholder="Your e-mail address *"
//                 required
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
//               />
//               <input
//                 type="url"
//                 placeholder="Your company URL (e.g. https://yoursite.com)"
//                 value={form.companyUrl}
//                 onChange={(e) => setForm({ ...form, companyUrl: e.target.value })}
//                 className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
//               />
//               <textarea
//                 placeholder="Message *"
//                 rows={3}
//                 required
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400 resize-none"
//               />
//               <button
//                 type="submit"
//                 disabled={status === "sending"}
//                 className="w-full bg-gray-900 hover:bg-gray-800 disabled:opacity-60 text-white font-semibold py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
//               >
//                 <Send size={13} />
//                 {status === "sending" ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           )}
//         </div>
//       )}

//       {/* Bottom Buttons */}
//       <div className="flex items-center gap-3">
//         <a
//           href={`https://wa.me/${WHATSAPP_NUMBER}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
//           title="Chat on WhatsApp"
//         >
//           <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
//             <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.342L4 29l7.865-2.062A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.6c-2.01 0-3.88-.57-5.47-1.55l-.39-.23-4.67 1.22 1.25-4.56-.25-.4A9.56 9.56 0 016.4 15c0-5.29 4.31-9.6 9.6-9.6s9.6 4.31 9.6 9.6-4.31 9.6-9.6 9.6zm5.26-7.19c-.29-.14-1.7-.84-1.96-.93-.27-.1-.46-.14-.65.14-.19.28-.74.93-.91 1.12-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.56c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39 0 1.41 1.03 2.77 1.17 2.96.14.19 2.02 3.09 4.9 4.33.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
//           </svg>
//         </a>
//         <button
//           onClick={() => setOpen(!open)}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold transition-all hover:scale-105"
//         >
//           {open ? <X size={16} /> : <Phone size={16} />}
//           {open ? "Close" : "Let's Connect"}
//         </button>
//       </div>
//     </div>
//   );
// }






































import { useState, useEffect, useRef } from "react";
import { X, Send, Phone, ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── CONFIG ──────────────────────────────────────────────
const NAV_PAGES = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Company", path: "/company" },
  { label: "Digital Marketing", path: "/digital-marketing" },
  { label: "Packages", path: "/packages" },
  { label: "Web Development", path: "/web-development" },
  { label: "Full Stack", path: "/full-stack" },
  { label: "App Development", path: "/app-development" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Client Results", path: "/client-results" },
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
  { label: "About Us", path: "/about-us" },
];

const COMPANY_URL   = "https://hasremote-solution.vercel.app";
const PHONE_NUMBER  = "+916378400775";
const WHATSAPP_NUMBER = "916378400775";

// ── EmailJS credentials (replace with your own from emailjs.com) ──
const EMAILJS_SERVICE_ID  = "service_dizt2yh";
const EMAILJS_TEMPLATE_ID = "template_hqwrwt3";
const EMAILJS_PUBLIC_KEY  = "FaPxIV_OmNx3qpQ5G";
// ─────────────────────────────────────────────────────────

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", companyUrl: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [currentPage, setCurrentPage] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const path = window.location.pathname;
    const matched = NAV_PAGES.find((p) => p.path === path);
    setCurrentPage(matched ? matched.label : "Home");
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const resetForm = () => {
    setForm({ name: "", phone: "", email: "", companyUrl: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      from_name:   form.name,
      from_phone:  form.phone,
      from_email:  form.email,
      company_url: form.companyUrl || "Not provided",
      message:     form.message,
      page_visited: currentPage,
    };

    // 1️⃣ Send via EmailJS
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      return;
    }

    // 2️⃣ Open WhatsApp with pre-filled message
    const waText = encodeURIComponent(
      `📩 *New Lead - Has Remote Solution*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `📧 Email: ${form.email}\n` +
      `🌐 Company URL: ${form.companyUrl || "Not provided"}\n` +
      `📄 Page: ${currentPage}\n` +
      `💬 Message: ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, "_blank");

    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setOpen(false);
      resetForm();
    }, 3000);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page.label);
    setDropdownOpen(false);
    window.location.href = COMPANY_URL + page.path;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Contact Popup */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-gray-100">

          {/* Header */}
          <div className="bg-orange-500 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-sm">Has Remote Solution</p>
              <p className="text-orange-100 text-xs">Send us a message</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white hover:opacity-80">
              <X size={18} />
            </button>
          </div>

          {/* Page Dropdown */}
          <div className="px-4 pt-3" ref={dropdownRef}>
            <label className="text-xs text-gray-500 mb-1 block font-medium">📍 You are on:</label>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-gray-700">{currentPage}</span>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {NAV_PAGES.map((page) => (
                    <button
                      key={page.path}
                      onClick={() => handleNavClick(page)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                        currentPage === page.label
                          ? "bg-orange-50 text-orange-600 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {page.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Form / Status */}
          {status === "sent" ? (
            <div className="p-6 text-center">
              <div className="text-4xl mb-2">✅</div>
              <p className="font-semibold text-green-600">Message Sent!</p>
              <p className="text-sm text-gray-500 mt-1">Email bhej diya + WhatsApp pe bhi message gaya!</p>
            </div>
          ) : status === "error" ? (
            <div className="p-6 text-center">
              <div className="text-4xl mb-2">❌</div>
              <p className="font-semibold text-red-500">Kuch gadbad hui!</p>
              <p className="text-sm text-gray-500 mt-1">EmailJS config check karein.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-3 text-xs text-orange-500 underline"
              >
                Try Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-4 pb-4 pt-2 space-y-2">
              <input
                type="text"
                placeholder="Your name *"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
              />
              <input
                type="tel"
                placeholder="Your phone number *"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
              />
              <input
                type="email"
                placeholder="Your e-mail address *"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
              />
              <input
                type="url"
                placeholder="Your company URL (e.g. https://yoursite.com)"
                value={form.companyUrl}
                onChange={(e) => setForm({ ...form, companyUrl: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
              />
              <textarea
                placeholder="Message *"
                rows={3}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400 resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gray-900 hover:bg-gray-800 disabled:opacity-60 text-white font-semibold py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={13} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      )}

      {/* Bottom Buttons */}
      <div className="flex items-center gap-3">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.342L4 29l7.865-2.062A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.6c-2.01 0-3.88-.57-5.47-1.55l-.39-.23-4.67 1.22 1.25-4.56-.25-.4A9.56 9.56 0 016.4 15c0-5.29 4.31-9.6 9.6-9.6s9.6 4.31 9.6 9.6-4.31 9.6-9.6 9.6zm5.26-7.19c-.29-.14-1.7-.84-1.96-.93-.27-.1-.46-.14-.65.14-.19.28-.74.93-.91 1.12-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.56c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39 0 1.41 1.03 2.77 1.17 2.96.14.19 2.02 3.09 4.9 4.33.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
          </svg>
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold transition-all hover:scale-105"
        >
          {open ? <X size={16} /> : <Phone size={16} />}
          {open ? "Close" : "Let's Connect"}
        </button>
      </div>
    </div>
  );
}