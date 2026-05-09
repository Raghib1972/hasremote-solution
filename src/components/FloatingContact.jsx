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
// const EMAILJS_SERVICE_ID  = "service_i8palok";
// const EMAILJS_TEMPLATE_ID = "template_hqwrwt3";
// const EMAILJS_PUBLIC_KEY  = "FaPxIV_OmNx3qpQ5G";
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
//               <p className="text-sm text-gray-500 mt-1">Email has been sent + Message also sent on WhatsApp!</p>
//             </div>
//           ) : status === "error" ? (
//             <div className="p-6 text-center">
//               <div className="text-4xl mb-2">❌</div>
//               <p className="font-semibold text-red-500">Something went wrong!</p>
//               <p className="text-sm text-gray-500 mt-1">Please check your EmailJS configuration.</p>
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
  { label: "Texora AI", path: "/texora-ai" },
  { label: "ILM ORA (LMS)", path: "/ilm-ora" },
  { label: "TaskOrbit", path: "/task-orbit" },
  { label: "Job Portal", path: "/job-portal" },
  { label: "Tora CX", path: "/tora-cx" },
  { label: "Unified CRM", path: "/unified-crm" },
  { label: "Innovora AI", path: "/innovora-ai" },
  { label: "Company", path: "/company" },
  { label: "About hasremotesolution", path: "/about" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Digital Marketing", path: "/digital-marketing" },
  { label: "SEO Services", path: "/seo-services" },
  { label: "Local SEO Services", path: "/local-seo-services" },
  { label: "Ecommerce SEO Services", path: "/ecommerce-seo-services" },
  { label: "Enterprise SEO Services", path: "/enterprise-seo-services" },
  { label: "Google Maps Marketing", path: "/google-maps-marketing" },
  { label: "AEO Services", path: "/aeo-services" },
  { label: "International SEO", path: "/international-seo-services" },
  { label: "Multilingual SEO", path: "/multilingual-seo-services" },
  { label: "Small Business SEO", path: "/small-business-seo-services" },
  { label: "Mobile SEO Services", path: "/mobile-seo-services" },
  { label: "Influencer Marketing", path: "/influencer-marketing" },
  { label: "Social Media Marketing", path: "/social-media-marketing" },
  { label: "Pay Per Click Services", path: "/ppc-services" },
  { label: "Reputation Management", path: "/reputation-management" },
  { label: "Public Relations", path: "/public-relations-services" },
  { label: "Content Marketing", path: "/content-marketing" },
  { label: "Packages", path: "/packages" },
  { label: "SEO Service Packages", path: "/seo-packages" },
  { label: "ORM Services Packages", path: "/orm-packages" },
  { label: "SMO Services Packages", path: "/smo-packages" },
  { label: "Content Writing Packages", path: "/content-writing-packages" },
  { label: "Local SEO Packages", path: "/local-seo-packages" },
  { label: "PPC Services Packages", path: "/ppc-packages" },
  { label: "Web Development Packages", path: "/web-development-packages" },
  { label: "E-commerce SEO Packages", path: "/ecommerce-seo-packages" },
  { label: "ASO Packages", path: "/aso-packages" },
  { label: "Digital Marketing Packages", path: "/digital-marketing-packages" },
  { label: "Website Maintenance Packages", path: "/website-maintenance-packages" },
  { label: "Web Development", path: "/web-development" },
  { label: "Website Development", path: "/website-development" },
  { label: "PHP Development", path: "/php-development" },
  { label: "Codeigniter Development", path: "/codeigniter-development" },
  { label: "CakePHP Development", path: "/cakephp-development" },
  { label: "Laravel Development", path: "/laravel-development" },
  { label: "WordPress Development", path: "/wordpress-development" },
  { label: "Magento Development", path: "/magento-development" },
  { label: "Full Stack", path: "/full-stack" },
  { label: "Angular Development", path: "/angular-development" },
  { label: "ReactJS Development", path: "/reactjs-development" },
  { label: "Python Development", path: "/python-development" },
  { label: "NodeJS Development", path: "/nodejs-development" },
  { label: "ASP .net Development", path: "/asp-development" },
  { label: "Mean Stack Development", path: "/mean-stack-development" },
  { label: "App Development", path: "/app-development" },
  { label: "Mobile Apps Development", path: "/mobile-app-development" },
  { label: "IOS Development", path: "/ios-development" },
  { label: "Android Development", path: "/android-development" },
  { label: "Blockchain Development", path: "/blockchain-development" },
  { label: "Cross Platform Development", path: "/cross-platform-development" },
  { label: "React Native Development", path: "/react-native-development" },
  { label: "Flutter Development", path: "/flutter-development" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Web Portfolio", path: "/portfolio" },
  { label: "Mobile Portfolio", path: "/portfolio" },
  { label: "SEO Results", path: "/seo-results" },
  { label: "Client Results", path: "/client-results" },
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
  { label: "About Us", path: "/about-us" },
];

const WHATSAPP_NUMBER = "916378400775";

// ── EmailJS Config ──────────────────────────────────────
// Step 1: EmailJS dashboard → Email Services → aapka service
// Step 2: Email Templates mein 2 templates banao:
//   (A) Owner template  — existing "template_hqwrwt3" use karo
//   (B) Client template — naya banao "Auto Reply", To Email: {{client_email}}
//       Phir niche EMAILJS_CLIENT_TEMPLATE_ID mein woh ID daalo
const EMAILJS_SERVICE_ID         = "service_i8palok";
const EMAILJS_OWNER_TEMPLATE_ID  = "template_hqwrwt3";  // Owner ko jaata hai
const EMAILJS_CLIENT_TEMPLATE_ID = "template_hqwrwt3";  // ← Client auto-reply template ID yahan daalo
const EMAILJS_PUBLIC_KEY         = "FaPxIV_OmNx3qpQ5G";
// ─────────────────────────────────────────────────────────

// ── Reusable SVG Icons ──────────────────────────────────
const IconEnvelope = ({ color = "#FF6B2C", size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const IconWA = ({ size = 18, color = "#25D366" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.342L4 29l7.865-2.062A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.6c-2.01 0-3.88-.57-5.47-1.55l-.39-.23-4.67 1.22 1.25-4.56-.25-.4A9.56 9.56 0 016.4 15c0-5.29 4.31-9.6 9.6-9.6s9.6 4.31 9.6 9.6-4.31 9.6-9.6 9.6zm5.26-7.19c-.29-.14-1.7-.84-1.96-.93-.27-.1-.46-.14-.65.14-.19.28-.74.93-.91 1.12-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.56c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39 0 1.41 1.03 2.77 1.17 2.96.14.19 2.02 3.09 4.9 4.33.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
  </svg>
);

const IconPhoneSVG = ({ color = "#FF6B2C", size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
// ─────────────────────────────────────────────────────────

export default function FloatingContact() {
  const [open, setOpen]                 = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch]             = useState("");
  const [form, setForm]                 = useState({ name: "", phone: "", email: "", companyUrl: "", message: "" });
  const [status, setStatus]             = useState("idle"); // idle | sending | sent | error
  const [currentPage, setCurrentPage]   = useState("");
  const dropdownRef                     = useRef(null);

  useEffect(() => {
    const path    = window.location.pathname;
    const matched = NAV_PAGES.find((p) => p.path === path);
    setCurrentPage(matched ? matched.label : "Home");
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const resetForm = () => setForm({ name: "", phone: "", email: "", companyUrl: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ── 1️⃣  Owner ko email ──────────────────────────────
    const ownerParams = {
      from_name:    form.name,
      from_phone:   form.phone,
      from_email:   form.email,
      company_url:  form.companyUrl || "Not provided",
      message:      form.message,
      page_visited: currentPage,
    };

    // ── 2️⃣  Client ko auto-reply ────────────────────────
    // EmailJS template mein "To Email" field mein {{client_email}} likho
    const clientParams = {
      to_name:      form.name,
      client_email: form.email,        // Client ka email
      from_name:    "Has Remote Solution",
      reply_to:     "info@hasremotesolution.in",
      client_phone: form.phone,
      message:      form.message,
      page_visited: currentPage,
    };

    try {
      // Owner email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_OWNER_TEMPLATE_ID,
        ownerParams,
        EMAILJS_PUBLIC_KEY
      );

      // Client confirmation email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CLIENT_TEMPLATE_ID,
        clientParams,
        EMAILJS_PUBLIC_KEY
      );
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      return;
    }

    // ── 3️⃣  WhatsApp message owner ko ──────────────────
    const waText = encodeURIComponent(
      `📩 *New Lead - Has Remote Solution*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `📧 Email: ${form.email}\n` +
      `🌐 Company URL: ${form.companyUrl || "Not provided"}\n` +
      `📄 Page Visited: ${currentPage}\n` +
      `💬 Message: ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, "_blank");

    setStatus("sent");
  };

  const handleNavClick = (page) => {
    setCurrentPage(page.label);
    setDropdownOpen(false);
    setSearch("");
    // ✅ Form open rahega — navigate nahi karega
  };

  const filteredPages = NAV_PAGES.filter((p) =>
    p.label.toLowerCase().includes(search.toLowerCase())
  );

  // ── Thank You Screen ────────────────────────────────────
  const ThankYouScreen = () => (
    <div style={{ padding: "28px 20px 24px", textAlign: "center", background: "linear-gradient(160deg,#fff7f3 0%,#fff 60%)" }}>

      {/* Animated check */}
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: "linear-gradient(135deg,#FF6B2C,#ff9a6c)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 16px",
        boxShadow: "0 8px 24px rgba(255,107,44,0.30)",
        animation: "popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275) both",
      }}>
        <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
          <path d="M8 18.5L14.5 25.5L28 11"
            stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1e293b", margin: "0 0 6px" }}>
        Thank You, {form.name.split(" ")[0]}! 🎉
      </h3>
      <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 18px", lineHeight: 1.6 }}>
        Your message has been received. Our team will get back to you within{" "}
        <strong style={{ color: "#FF6B2C" }}>24 hours</strong>.
      </p>

      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,#f1d5c8,transparent)", margin: "0 0 18px" }} />

      {/* Steps */}
      <div style={{ background: "#fff", border: "1px solid #ffe4d4", borderRadius: 12, padding: "14px 16px", textAlign: "left", marginBottom: 18 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: "#FF6B2C", textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 12px" }}>
          What happens next?
        </p>

        {/* Owner email */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,107,44,0.09)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconEnvelope />
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#374151", margin: 0 }}>Email sent to our team</p>
            <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>info@hasremotesolution.in</p>
          </div>
        </div>

        {/* Client email */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,107,44,0.09)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconEnvelope />
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#374151", margin: 0 }}>Confirmation sent to you</p>
            <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>{form.email}</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(37,211,102,0.10)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconWA />
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#374151", margin: 0 }}>WhatsApp notified</p>
            <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>Message sent to owner</p>
          </div>
        </div>

        {/* Call back */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,107,44,0.09)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconPhoneSVG />
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#374151", margin: 0 }}>We'll call you back</p>
            <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>Within 24 hours</p>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          background: "#25D366", color: "#fff",
          fontSize: 13, fontWeight: 700,
          padding: "11px 16px", borderRadius: 50,
          textDecoration: "none", width: "100%",
          boxShadow: "0 4px 14px rgba(37,211,102,0.35)",
          boxSizing: "border-box",
        }}
      >
        <IconWA size={20} color="white" />
        Chat with us on WhatsApp
      </a>

      <button
        onClick={() => { setStatus("idle"); setOpen(false); resetForm(); }}
        style={{ marginTop: 10, background: "none", border: "none", fontSize: 12, color: "#94a3b8", cursor: "pointer", textDecoration: "underline" }}
      >
        Close
      </button>

      <style>{`@keyframes popIn{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}`}</style>
    </div>
  );

  // ── Main Render ─────────────────────────────────────────
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {open && (
        <div style={{ background: "#fff", borderRadius: 18, boxShadow: "0 20px 60px rgba(0,0,0,0.15),0 4px 20px rgba(255,107,44,0.10)", width: 320, overflow: "hidden", border: "1px solid #f1e8e3" }}>

          {/* Header */}
          <div style={{ background: "linear-gradient(135deg,#FF6B2C,#e05520)", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🏢</div>
              <div>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: 0 }}>Has Remote Solution</p>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 11, margin: 0 }}>● Online — Send us a message</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "rgba(255,255,255,0.18)", border: "none", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}>
              <X size={14} />
            </button>
          </div>

          {/* Content */}
          {status === "sent" ? (
            <ThankYouScreen />
          ) : status === "error" ? (
            <div style={{ padding: "28px 24px", textAlign: "center" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#fff0f0", border: "2px solid #fca5a5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: 26 }}>❌</div>
              <p style={{ fontWeight: 700, color: "#ef4444", margin: "0 0 6px", fontSize: 15 }}>Something went wrong!</p>
              <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 16px" }}>Please try again or contact us on WhatsApp.</p>
              <button onClick={() => setStatus("idle")} style={{ background: "#fff4ef", border: "1px solid #ffd5c0", color: "#FF6B2C", fontSize: 13, fontWeight: 600, padding: "9px 22px", borderRadius: 50, cursor: "pointer" }}>
                Try Again
              </button>
            </div>
          ) : (
            <div style={{ padding: "14px 16px 16px" }}>

              {/* Dropdown */}
              <div ref={dropdownRef} style={{ marginBottom: 10 }}>
                <label style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, display: "block", marginBottom: 4, letterSpacing: "0.4px" }}>📍 YOU ARE ON</label>
                <div style={{ position: "relative" }}>
                  <button
                    onClick={() => { setDropdownOpen(!dropdownOpen); setSearch(""); }}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", border: "1.5px solid #ffe4d4", borderRadius: 10, padding: "9px 12px", fontSize: 13, background: "#fff8f5", cursor: "pointer" }}
                  >
                    <span style={{ fontWeight: 600, color: "#374151" }}>{currentPage}</span>
                    <ChevronDown size={15} style={{ color: "#FF6B2C", transform: dropdownOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                  </button>

                  {dropdownOpen && (
                    <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, background: "#fff", border: "1.5px solid #ffe4d4", borderRadius: 12, boxShadow: "0 12px 36px rgba(0,0,0,0.12)", zIndex: 100, overflow: "hidden" }}>
                      <div style={{ padding: "8px 10px", borderBottom: "1px solid #f1f5f9" }}>
                        <input
                          type="text" placeholder="🔍  Search page..."
                          value={search} onChange={(e) => setSearch(e.target.value)} autoFocus
                          style={{ width: "100%", border: "1px solid #f1e8e3", borderRadius: 8, padding: "7px 10px", fontSize: 12, outline: "none", background: "#fafafa", boxSizing: "border-box" }}
                        />
                      </div>
                      <div style={{ maxHeight: 200, overflowY: "auto" }}>
                        {filteredPages.length === 0 ? (
                          <p style={{ fontSize: 12, color: "#94a3b8", textAlign: "center", padding: 14 }}>No pages found</p>
                        ) : filteredPages.map((page) => (
                          <button
                            key={page.path + page.label}
                            onClick={() => handleNavClick(page)}
                            style={{ width: "100%", textAlign: "left", padding: "9px 14px", fontSize: 13, fontWeight: currentPage === page.label ? 700 : 500, color: currentPage === page.label ? "#FF6B2C" : "#374151", background: currentPage === page.label ? "#fff4ef" : "transparent", border: "none", borderBottom: "1px solid #f8fafc", cursor: "pointer" }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "#fff4ef"; e.currentTarget.style.color = "#FF6B2C"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = currentPage === page.label ? "#fff4ef" : "transparent"; e.currentTarget.style.color = currentPage === page.label ? "#FF6B2C" : "#374151"; }}
                          >
                            {page.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { field: "name",       placeholder: "Your name *",            type: "text",  required: true },
                  { field: "phone",      placeholder: "Your phone number *",    type: "tel",   required: true },
                  { field: "email",      placeholder: "Your e-mail address *",  type: "email", required: true },
                  { field: "companyUrl", placeholder: "Company URL (optional)", type: "url",   required: false },
                ].map(({ field, placeholder, type, required }) => (
                  <input key={field} type={type} placeholder={placeholder} required={required}
                    value={form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    style={{ border: "1.5px solid #f1e8e3", borderRadius: 10, padding: "9px 12px", fontSize: 13, outline: "none", fontFamily: "inherit" }}
                    onFocus={(e) => (e.target.style.borderColor = "#FF6B2C")}
                    onBlur={(e) => (e.target.style.borderColor = "#f1e8e3")}
                  />
                ))}
                <textarea placeholder="Your message *" rows={3} required
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ border: "1.5px solid #f1e8e3", borderRadius: 10, padding: "9px 12px", fontSize: 13, outline: "none", resize: "none", fontFamily: "inherit" }}
                  onFocus={(e) => (e.target.style.borderColor = "#FF6B2C")}
                  onBlur={(e) => (e.target.style.borderColor = "#f1e8e3")}
                />
                <button type="submit" disabled={status === "sending"}
                  style={{ background: status === "sending" ? "#999" : "linear-gradient(135deg,#1e293b,#334155)", color: "#fff", fontWeight: 700, fontSize: 13, padding: 11, borderRadius: 50, border: "none", cursor: status === "sending" ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "0 4px 14px rgba(30,41,59,0.25)", transition: "transform 0.15s" }}
                  onMouseEnter={(e) => { if (status !== "sending") e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
                >
                  <Send size={13} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Bottom Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp"
          style={{ background: "#25D366", width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 20px rgba(37,211,102,0.40)", transition: "transform 0.2s,box-shadow 0.2s", textDecoration: "none" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.10)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.50)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,211,102,0.40)"; }}
        >
          <IconWA size={26} color="white" />
        </a>

        <button onClick={() => setOpen(!open)}
          style={{ background: open ? "#334155" : "linear-gradient(135deg,#FF6B2C,#e05520)", color: "#fff", padding: "12px 20px", borderRadius: 50, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, boxShadow: open ? "0 6px 20px rgba(51,65,85,0.30)" : "0 6px 20px rgba(255,107,44,0.40)", transition: "all 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
        >
          {open ? <X size={15} /> : <Phone size={15} />}
          {open ? "Close" : "Let's Connect"}
        </button>
      </div>
    </div>
  );
}