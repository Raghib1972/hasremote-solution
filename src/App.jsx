import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

// Main Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import Portfolio from './pages/Portfolio'
import SEOResults from './pages/SEOResults'
import Careers from './pages/Careers'
import Blog from './pages/Blog'

// SEO Service Pages
import LocalSEO from './pages/services/LocalSEO'
import EcommerceSEO from './pages/services/EcommerceSEO'
import EnterpriseSEO from './pages/services/EnterpriseSEO'
import GoogleMapsMarketing from './pages/services/GoogleMapsMarketing'
import AEOServices from './pages/services/AEOServices'
import { InternationalSEO, MultilingualSEO, SmallBusinessSEO, MobileSEO } from './pages/services/MoreSEOPages'

// Digital Marketing Pages
import {
  SocialMediaMarketing, PPCServices, ReputationManagement,
  InfluencerMarketing, PublicRelations, ContentMarketing,
} from './pages/services/DigitalMarketingPages'

// Package Pages
import {
  SEOPackages, ORMPackages, SMOPackages, ContentWritingPackages,
  LocalSEOPackages, PPCPackages, WebDevPackages, EcommerceSEOPackages,
  ASOPackages, DigitalMarketingPackages, WebsiteMaintenancePackages,
} from './pages/packages/PackagePages'

// Web Development Pages
import {
  WebsiteDevelopment, PHPDevelopment, LaravelDevelopment, WordPressDevelopment,
  MagentoDevelopment, CodeigniterDevelopment, CakePHPDevelopment,
} from './pages/webdev/WebDevPages'

// Full Stack Pages
import {
  AngularDevelopment, ReactJSDevelopment, PythonDevelopment,
  NodeJSDevelopment, ASPDevelopment, MeanStackDevelopment,
} from './pages/fullstack/FullStackPages'

// App Development Pages
import {
  MobileAppDevelopment, IOSDevelopment, AndroidDevelopment, BlockchainDevelopment,
  CrossPlatformDevelopment, ReactNativeDevelopment, FlutterDevelopment,
} from './pages/appdev/AppDevPages'

// Legal Pages
import { PrivacyPolicy, TermsAndConditions, RefundPolicy } from './pages/LegalPages'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white text-center px-4">
      <div className="text-8xl font-extrabold text-primary mb-2">404</div>
      <div className="w-16 h-1 bg-accent rounded mx-auto mb-5" />
      <h1 className="text-2xl font-bold text-primary mb-3">Page Not Found</h1>
      <p className="text-gray-500 text-sm mb-6 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-xl transition-all duration-300">
        Back to Home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* ── Core Pages ─────────────────────────── */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/seo-results" element={<SEOResults />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />

            {/* ── SEO Services ───────────────────────── */}
            <Route path="/seo-services" element={<Services />} />
            <Route path="/local-seo-services" element={<LocalSEO />} />
            <Route path="/ecommerce-seo-services" element={<EcommerceSEO />} />
            <Route path="/enterprise-seo-services" element={<EnterpriseSEO />} />
            <Route path="/google-maps-marketing" element={<GoogleMapsMarketing />} />
            <Route path="/aeo-services" element={<AEOServices />} />
            <Route path="/international-seo-services" element={<InternationalSEO />} />
            <Route path="/multilingual-seo-services" element={<MultilingualSEO />} />
            <Route path="/small-business-seo-services" element={<SmallBusinessSEO />} />
            <Route path="/mobile-seo-services" element={<MobileSEO />} />

            {/* ── Digital Marketing ──────────────────── */}
            <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/ppc-services" element={<PPCServices />} />
            <Route path="/reputation-management" element={<ReputationManagement />} />
            <Route path="/influencer-marketing" element={<InfluencerMarketing />} />
            <Route path="/public-relations-services" element={<PublicRelations />} />
            <Route path="/content-marketing" element={<ContentMarketing />} />

            {/* ── Packages ───────────────────────────── */}
            <Route path="/seo-packages" element={<SEOPackages />} />
            <Route path="/orm-packages" element={<ORMPackages />} />
            <Route path="/smo-packages" element={<SMOPackages />} />
            <Route path="/content-writing-packages" element={<ContentWritingPackages />} />
            <Route path="/local-seo-packages" element={<LocalSEOPackages />} />
            <Route path="/ppc-packages" element={<PPCPackages />} />
            <Route path="/web-development-packages" element={<WebDevPackages />} />
            <Route path="/ecommerce-seo-packages" element={<EcommerceSEOPackages />} />
            <Route path="/aso-packages" element={<ASOPackages />} />
            <Route path="/digital-marketing-packages" element={<DigitalMarketingPackages />} />
            <Route path="/website-maintenance-packages" element={<WebsiteMaintenancePackages />} />

            {/* ── Web Development ────────────────────── */}
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/php-development" element={<PHPDevelopment />} />
            <Route path="/laravel-development" element={<LaravelDevelopment />} />
            <Route path="/wordpress-development" element={<WordPressDevelopment />} />
            <Route path="/magento-development" element={<MagentoDevelopment />} />
            <Route path="/codeigniter-development" element={<CodeigniterDevelopment />} />
            <Route path="/cakephp-development" element={<CakePHPDevelopment />} />

            {/* ── Full Stack ─────────────────────────── */}
            <Route path="/angular-development" element={<AngularDevelopment />} />
            <Route path="/reactjs-development" element={<ReactJSDevelopment />} />
            <Route path="/python-development" element={<PythonDevelopment />} />
            <Route path="/nodejs-development" element={<NodeJSDevelopment />} />
            <Route path="/asp-development" element={<ASPDevelopment />} />
            <Route path="/mean-stack-development" element={<MeanStackDevelopment />} />

            {/* ── App Development ────────────────────── */}
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/ios-development" element={<IOSDevelopment />} />
            <Route path="/android-development" element={<AndroidDevelopment />} />
            <Route path="/blockchain-development" element={<BlockchainDevelopment />} />
            <Route path="/cross-platform-development" element={<CrossPlatformDevelopment />} />
            <Route path="/react-native-development" element={<ReactNativeDevelopment />} />
            <Route path="/flutter-development" element={<FlutterDevelopment />} />

            {/* ── Legal Pages ────────────────────────── */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />

            {/* ── 404 ────────────────────────────────── */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  )
}
