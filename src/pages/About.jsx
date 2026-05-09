// import { Link } from "react-router-dom";
// import TestimonialsSection from "../components/TestimonialsSection";
// import useScrollReveal from "../hooks/useScrollReveal";
// import { CheckCircle, Award, Users, Globe, Clock } from "lucide-react";

// export default function About() {

// const ref = useScrollReveal();

// return (
// <div ref={ref}>

// {/* HERO */}
// <section className="bg-primary py-16">
// <div className="container mx-auto px-4 text-center">

// <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
// About Has Remote Solution
// </p>

// <h1 className="text-4xl font-extrabold text-white mb-4">
// About Has Remote Solution
// </h1>

// <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
// Top-Notch Services for Digital Marketing that Boost Sales and Leads
// </p>

// <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
// <Link to="/" className="hover:text-accent">Home</Link>
// <span>›</span>
// <span className="text-white">About Has Remote Solution</span>
// </div>

// </div>
// </section>


// {/* DIGITAL MARKETING INTRO */}
// <section className="py-16 bg-white">

// <div className="container mx-auto px-4 max-w-4xl">

// <p className="text-gray-600 text-sm leading-relaxed mb-6">
// To deliver successful results with these contents and tactics for our clients,
// we are a digital marketing agency that believes in teamwork. Our professionals
// focus on building strong online brand presence including social media growth
// and ranking in search engines.
// </p>

// <div className="grid md:grid-cols-2 gap-4">

// {[
// "Consulting on Strategic Branding",
// "Agency of Design & Strategic Marketing",
// "Expand Your Enterprise",
// "Performance Driven by ROI",
// "Certified Professionals",
// "Top-Notch Services for Digital Marketing"
// ].map((item)=>(
// <div key={item} className="flex items-center gap-2">
// <CheckCircle size={16} className="text-accent"/>
// <span className="text-gray-700 text-sm">{item}</span>
// </div>
// ))}

// </div>

// </div>

// </section>


// {/* WHO WE ARE */}
// <section className="py-16 bg-gray-50">

// <div className="container mx-auto px-4 max-w-4xl">

// <h2 className="text-3xl font-bold text-primary mb-6">
// Who We Are?
// </h2>

// <p className="text-gray-600 text-sm leading-relaxed mb-4">
// We at Has Remote Solution Pvt. Ltd. believe that a company is only as
// successful as its workers. Our team of web developers uses the most recent
// web technology to create user-friendly interfaces for businesses.
// </p>

// <p className="text-gray-600 text-sm leading-relaxed mb-4">
// We are a group of digital pioneers who approach problems head-on and provide
// solutions that help global businesses grow faster and operate efficiently.
// </p>

// <p className="text-gray-600 text-sm leading-relaxed">
// Our staff is highly engaged and has strong knowledge of social media and
// digital marketing strategies that help companies achieve their goals.
// </p>

// </div>

// </section>


// {/* VISION */}
// <section className="py-16 bg-white">

// <div className="container mx-auto px-4 max-w-4xl">

// <h2 className="text-3xl font-bold text-primary mb-6">
// Our Vision
// </h2>

// <p className="text-gray-600 text-sm leading-relaxed">
// Has Remote Solution Pvt. Ltd. aims to become a major player in the digital
// marketing service industry. We help businesses expand and evolve their
// marketing using our expertise in branding, digital media, strategy and
// direct marketing.
// </p>

// </div>

// </section>


// {/* AIM */}
// <section className="py-16 bg-gray-50">

// <div className="container mx-auto px-4 max-w-4xl">

// <h2 className="text-3xl font-bold text-primary mb-6">
// Has Remote Solution Pvt. Ltd. Aiming For
// </h2>

// <p className="text-gray-600 text-sm leading-relaxed">
// The internet is full of conventional solutions for business challenges.
// We provide innovative digital solutions that help companies grow and
// stand out in competitive markets.
// </p>

// <p className="text-gray-600 text-sm leading-relaxed mt-4">
// Our experienced team creates customized strategies and enterprise
// solutions that deliver real measurable results for businesses across
// different industries.
// </p>

// </div>

// </section>


// {/* EXPERTISE */}
// <section className="py-16 bg-white">

// <div className="container mx-auto px-4">

// <h2 className="text-3xl font-bold text-primary mb-10 text-center">
// Our Expertise
// </h2>

// <div className="grid md:grid-cols-2 gap-8">

// <div>
// <h3 className="font-bold text-primary mb-2">
// Industry Insiders
// </h3>
// <p className="text-gray-600 text-sm">
// Our team consists of experienced digital marketing specialists who create
// goal-driven strategies and follow search engine guidelines.
// </p>
// </div>

// <div>
// <h3 className="font-bold text-primary mb-2">
// Data-Driven Digital Marketing
// </h3>
// <p className="text-gray-600 text-sm">
// We analyze research and SWOT data to deliver the right message on the
// right platform at the right time.
// </p>
// </div>

// <div>
// <h3 className="font-bold text-primary mb-2">
// Personalized Digital Marketing Framework
// </h3>
// <p className="text-gray-600 text-sm">
// We analyze your marketing strategy, brand values and KPIs to create
// custom digital marketing solutions.
// </p>
// </div>

// <div>
// <h3 className="font-bold text-primary mb-2">
// Campaign Monitoring And Evaluation
// </h3>
// <p className="text-gray-600 text-sm">
// We track campaign performance using analytics and continuously improve
// audience targeting and ROI.
// </p>
// </div>

// <div>
// <h3 className="font-bold text-primary mb-2">
// Reasonable Costs
// </h3>
// <p className="text-gray-600 text-sm">
// Our digital marketing services are designed according to your business
// needs and budget.
// </p>
// </div>

// </div>

// </div>

// </section>


// {/* PRINCIPLES */}
// <section className="py-16 bg-gray-50">

// <div className="container mx-auto px-4">

// <h2 className="text-3xl font-bold text-primary mb-10 text-center">
// Our Principles
// </h2>

// <div className="grid md:grid-cols-2 gap-6">

// <div>
// <h3 className="font-bold text-primary mb-2">Innovation</h3>
// <p className="text-gray-600 text-sm">
// Our innovative digital marketing strategies help businesses connect
// with their audience effectively.
// </p>
// </div>

// <div>
// <h3 className="font-bold text-primary mb-2">Passion</h3>
// <p className="text-gray-600 text-sm">
// We are passionate about delivering results that help our clients achieve
// their goals.
// </p>
// </div>

// <div>
// <h3 className="font-bold text-primary mb-2">Quality</h3>
// <p className="text-gray-600 text-sm">
// Quality is a standard that defines everything we do for our clients.
// </p>
// </div>

// <div>
// <h3 className="font-bold text-primary mb-2">Transparency</h3>
// <p className="text-gray-600 text-sm">
// We keep clients informed about every strategy and action we take.
// </p>
// </div>

// <div>
// <h3 className="font-bold text-primary mb-2">Client = King</h3>
// <p className="text-gray-600 text-sm">
// Your needs become our priority when you collaborate with us.
// </p>
// </div>

// </div>

// </div>

// </section>


// <div id="testimonials">
// <TestimonialsSection />
// </div>

// </div>
// );
// }



















import { Link } from "react-router-dom";
import TestimonialsSection from "../components/TestimonialsSection";
import useScrollReveal from "../hooks/useScrollReveal";
import { CheckCircle, Award, Users, Globe, Clock } from "lucide-react";

export default function About() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════
           ABOUT HERO — orange → purple gradient
        ══════════════════════════════════════ */
        .about-hero {
          background: linear-gradient(120deg,
            #E8541A 0%,
            #C94B2D 22%,
            #9B4F8E 55%,
            #6B5EA8 78%,
            #5057A6 100%
          );
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
        }

        /* Radial depth overlays */
        .about-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.09) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        /* Decorative blobs */
        .about-hero-blob-1 {
          position: absolute; top: -60px; right: 6%;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          z-index: 0;
        }
        .about-hero-blob-2 {
          position: absolute; bottom: -50px; left: 8%;
          width: 160px; height: 160px;
          border-radius: 50%;
          background: rgba(255,120,60,0.13);
          z-index: 0;
        }

        /* Hero inner content */
        .about-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        /* Eyebrow badge */
        .about-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 50px;
          padding: 6px 18px;
          margin-bottom: 20px;
          backdrop-filter: blur(8px);
        }
        .about-hero-eyebrow-dot {
          width: 7px; height: 7px;
          background: #FFD166;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .about-hero-eyebrow-text {
          color: #FFD166;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
        }

        /* Main heading */
        .about-hero-title {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 16px 0;
          line-height: 1.15;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 16px rgba(0,0,0,0.2);
          font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
        }

        /* Subtext */
        .about-hero-sub {
          color: rgba(255,255,255,0.88);
          font-size: clamp(13px, 2vw, 15px);
          line-height: 1.75;
          max-width: 560px;
          margin: 0 auto 22px auto;
          font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
        }

        /* Breadcrumb */
        .about-hero-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          font-size: 13px;
          font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
        }
        .about-hero-breadcrumb a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: color 0.2s;
        }
        .about-hero-breadcrumb a:hover {
          color: #FFD166;
        }
        .about-hero-breadcrumb-sep {
          color: rgba(255,255,255,0.45);
          font-size: 16px;
        }
        .about-hero-breadcrumb-current {
          color: #FFD166;
          font-weight: 600;
        }

        /* Wave bottom */
        .about-hero-wave {
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          z-index: 1;
          line-height: 0;
        }
        .about-hero-wave svg { display: block; width: 100%; }

        /* ════════════════════════════════════
           CONTENT SECTIONS — reusable tweaks
        ════════════════════════════════════ */
        .about-section-title {
          font-size: clamp(22px, 3.5vw, 30px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .about-section-text {
          color: #4b5563;
          font-size: clamp(13px, 1.8vw, 15px);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .about-expertise-card {
          padding: 20px;
          border-radius: 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .about-expertise-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .about-expertise-title {
          font-weight: 700;
          color: #0f172a;
          font-size: 15px;
          margin-bottom: 8px;
        }
        .about-expertise-text {
          color: #6b7280;
          font-size: 13.5px;
          line-height: 1.7;
        }
        .about-principle-card {
          padding: 20px;
          border-radius: 14px;
          border-left: 4px solid #E8541A;
          background: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .about-principle-title {
          font-weight: 700;
          color: #0f172a;
          font-size: 15px;
          margin-bottom: 6px;
        }
        .about-principle-text {
          color: #6b7280;
          font-size: 13.5px;
          line-height: 1.7;
        }

        /* ════════════════════════════
           TABLET  ≤ 1024px
        ════════════════════════════ */
        @media (max-width: 1024px) {
          .about-hero { padding: 64px 20px; }
        }

        /* ════════════════════════════
           MOBILE  ≤ 768px
        ════════════════════════════ */
        @media (max-width: 768px) {
          .about-hero { padding: 52px 16px 64px; }
          .about-hero-blob-1 { width: 130px; height: 130px; top: -30px; right: -10px; }
          .about-hero-blob-2 { width: 100px; height: 100px; }
          .about-hero-eyebrow { padding: 5px 14px; }
          .about-hero-eyebrow-text { font-size: 10px; letter-spacing: 0.8px; }
        }

        /* ════════════════════════════
           SMALL PHONES  ≤ 400px
        ════════════════════════════ */
        @media (max-width: 400px) {
          .about-hero { padding: 44px 14px 56px; }
          .about-hero-blob-1 { display: none; }
          .about-hero-blob-2 { display: none; }
        }
      `}</style>

      <div ref={ref}>

        {/* ══ HERO ══ */}
        <section className="about-hero">
          <div className="about-hero-blob-1" />
          <div className="about-hero-blob-2" />

          <div className="about-hero-inner">
            {/* Eyebrow badge */}
            <div className="about-hero-eyebrow">
              <span className="about-hero-eyebrow-dot" />
              <span className="about-hero-eyebrow-text">About Has Remote Solution</span>
            </div>

            {/* Main heading */}
            <h1 className="about-hero-title">
              About Has Remote Solution
            </h1>

            {/* Subtext */}
            <p className="about-hero-sub">
              Top-Notch Services for Digital Marketing that Boost Sales and Leads
            </p>

            {/* Breadcrumb */}
            <div className="about-hero-breadcrumb">
              <Link to="/">Home</Link>
              <span className="about-hero-breadcrumb-sep">›</span>
              <span className="about-hero-breadcrumb-current">About Has Remote Solution</span>
            </div>
          </div>

          {/* Wave divider */}
          <div className="about-hero-wave">
            <svg viewBox="0 0 1440 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 55 L0 28 Q360 0 720 28 Q1080 55 1440 18 L1440 55 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>


        {/* ══ DIGITAL MARKETING INTRO ══ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">

            <p className="about-section-text">
              To deliver successful results with these contents and tactics for our clients,
              we are a digital marketing agency that believes in teamwork. Our professionals
              focus on building strong online brand presence including social media growth
              and ranking in search engines.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                "Consulting on Strategic Branding",
                "Agency of Design & Strategic Marketing",
                "Expand Your Enterprise",
                "Performance Driven by ROI",
                "Certified Professionals",
                "Top-Notch Services for Digital Marketing",
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ══ WHO WE ARE ══ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">

            <h2 className="about-section-title">Who We Are?</h2>

            <p className="about-section-text">
              We at Has Remote Solution Pvt. Ltd. believe that a company is only as
              successful as its workers. Our team of web developers uses the most recent
              web technology to create user-friendly interfaces for businesses.
            </p>

            <p className="about-section-text">
              We are a group of digital pioneers who approach problems head-on and provide
              solutions that help global businesses grow faster and operate efficiently.
            </p>

            <p className="about-section-text" style={{ marginBottom: 0 }}>
              Our staff is highly engaged and has strong knowledge of social media and
              digital marketing strategies that help companies achieve their goals.
            </p>

          </div>
        </section>


        {/* ══ VISION ══ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">

            <h2 className="about-section-title">Our Vision</h2>

            <p className="about-section-text" style={{ marginBottom: 0 }}>
              Has Remote Solution Pvt. Ltd. aims to become a major player in the digital
              marketing service industry. We help businesses expand and evolve their
              marketing using our expertise in branding, digital media, strategy and
              direct marketing.
            </p>

          </div>
        </section>


        {/* ══ AIM ══ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">

            <h2 className="about-section-title">Has Remote Solution Pvt. Ltd. Aiming For</h2>

            <p className="about-section-text">
              The internet is full of conventional solutions for business challenges.
              We provide innovative digital solutions that help companies grow and
              stand out in competitive markets.
            </p>

            <p className="about-section-text" style={{ marginBottom: 0 }}>
              Our experienced team creates customized strategies and enterprise
              solutions that deliver real measurable results for businesses across
              different industries.
            </p>

          </div>
        </section>


        {/* ══ EXPERTISE ══ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">

            <h2 className="about-section-title text-center mb-10">Our Expertise</h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Industry Insiders",
                  text: "Our team consists of experienced digital marketing specialists who create goal-driven strategies and follow search engine guidelines.",
                },
                {
                  title: "Data-Driven Digital Marketing",
                  text: "We analyze research and SWOT data to deliver the right message on the right platform at the right time.",
                },
                {
                  title: "Personalized Digital Marketing Framework",
                  text: "We analyze your marketing strategy, brand values and KPIs to create custom digital marketing solutions.",
                },
                {
                  title: "Campaign Monitoring And Evaluation",
                  text: "We track campaign performance using analytics and continuously improve audience targeting and ROI.",
                },
                {
                  title: "Reasonable Costs",
                  text: "Our digital marketing services are designed according to your business needs and budget.",
                },
              ].map(card => (
                <div key={card.title} className="about-expertise-card">
                  <div className="about-expertise-title">{card.title}</div>
                  <div className="about-expertise-text">{card.text}</div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ══ PRINCIPLES ══ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">

            <h2 className="about-section-title text-center mb-10">Our Principles</h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Innovation",
                  text: "Our innovative digital marketing strategies help businesses connect with their audience effectively.",
                },
                {
                  title: "Passion",
                  text: "We are passionate about delivering results that help our clients achieve their goals.",
                },
                {
                  title: "Quality",
                  text: "Quality is a standard that defines everything we do for our clients.",
                },
                {
                  title: "Transparency",
                  text: "We keep clients informed about every strategy and action we take.",
                },
                {
                  title: "Client = King",
                  text: "Your needs become our priority when you collaborate with us.",
                },
              ].map(card => (
                <div key={card.title} className="about-principle-card">
                  <div className="about-principle-title">{card.title}</div>
                  <div className="about-principle-text">{card.text}</div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ══ TESTIMONIALS ══ */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>

      </div>
    </>
  );
}