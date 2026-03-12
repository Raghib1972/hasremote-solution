import PackagePageTemplate from '../../components/PackagePageTemplate'

const yes = (text) => ({ text, included: true })
const no = (text) => ({ text, included: false })

// ─── SEO Packages ──────────────────────────────────────────────
export function SEOPackages() {
  return (
    <PackagePageTemplate
      badge="SEO Service Packages"
      title="SEO Service Packages & Pricing"
      subtitle="Transparent, results-driven SEO packages designed to improve your organic rankings and drive sustainable traffic growth."
      packages={[
        {
          name: 'Starter SEO',
          desc: 'Best for small businesses and startups',
          price: '$299',
          period: '/month',
          highlight: false,
          features: [
            yes('SEO Audit & Strategy'), yes('5 Target Keywords'), yes('On-Page Optimization'),
            yes('Google My Business Setup'), yes('Monthly Reporting'), yes('Technical SEO Fixes'),
            no('Link Building'), no('Content Writing'), no('Competitor Analysis'), no('Dedicated Manager'),
          ],
        },
        {
          name: 'Growth SEO',
          desc: 'Best for growing businesses',
          price: '$599',
          period: '/month',
          highlight: true,
          features: [
            yes('Everything in Starter'), yes('15 Target Keywords'), yes('Link Building (5 links/mo)'),
            yes('2 Blog Posts / Month'), yes('Competitor Analysis'), yes('Weekly Reporting'),
            yes('Google Analytics Setup'), yes('Technical SEO'), no('Dedicated Manager'), no('Social Signals'),
          ],
        },
        {
          name: 'Enterprise SEO',
          desc: 'Best for established businesses',
          price: '$1,199',
          period: '/month',
          highlight: false,
          features: [
            yes('Everything in Growth'), yes('Unlimited Keywords'), yes('Link Building (15 links/mo)'),
            yes('4 Blog Posts / Month'), yes('Dedicated Account Manager'), yes('Daily Monitoring'),
            yes('Social Signals'), yes('Press Release Monthly'), yes('Core Web Vitals Optimization'), yes('Priority Support'),
          ],
        },
      ]}
      faqs={[
        { q: 'How long before I see SEO results?', a: 'SEO is a long-term strategy. Most clients begin seeing improvements within 3-4 months, with significant results by 6-12 months depending on competition and current website status.' },
        { q: 'Do you offer custom SEO packages?', a: 'Yes! We can create a custom package tailored to your specific needs and budget. Contact us to discuss your requirements.' },
      ]}
    />
  )
}

// ─── ORM Packages ──────────────────────────────────────────────
export function ORMPackages() {
  return (
    <PackagePageTemplate
      badge="ORM Services Packages"
      title="Online Reputation Management Packages"
      subtitle="Protect and enhance your online reputation with our comprehensive ORM packages. Monitor, manage, and improve how your brand is perceived online."
      packages={[
        {
          name: 'ORM Basic',
          desc: 'For individuals and small businesses',
          price: '$399',
          period: '/month',
          highlight: false,
          features: [
            yes('Brand Monitoring Setup'), yes('Review Platform Monitoring'), yes('Review Response (up to 20/mo)'),
            yes('Google Autocomplete Monitoring'), yes('Monthly ORM Report'), no('Negative Suppression'),
            no('Content Creation'), no('Press Releases'), no('Social Monitoring'), no('Crisis Management'),
          ],
        },
        {
          name: 'ORM Professional',
          desc: 'For businesses with reputation concerns',
          price: '$799',
          period: '/month',
          highlight: true,
          features: [
            yes('Everything in Basic'), yes('Negative Content Suppression'), yes('Review Generation Strategy'),
            yes('2 Positive Articles/month'), yes('Social Media Monitoring'), yes('Weekly Reports'),
            yes('Review Response (unlimited)'), no('Press Releases'), no('Wikipedia Editing'), no('Crisis Management'),
          ],
        },
        {
          name: 'ORM Enterprise',
          desc: 'For enterprises and public figures',
          price: '$1,599',
          period: '/month',
          highlight: false,
          features: [
            yes('Everything in Professional'), yes('Crisis Management Plan'), yes('Press Release Distribution'),
            yes('Wikipedia Editing'), yes('Proactive Content Strategy'), yes('Executive Profiling'),
            yes('Sentiment Analysis Reports'), yes('Legal Coordination Support'), yes('24/7 Monitoring'), yes('Dedicated ORM Manager'),
          ],
        },
      ]}
      faqs={[
        { q: 'How long does ORM take to show results?', a: 'Basic monitoring and review management starts immediately. Suppressing negative search results typically takes 3-6 months. Significant reputation improvement is usually visible within 6-12 months.' },
        { q: 'Can you guarantee removal of negative content?', a: 'We cannot guarantee removal of legitimate reviews or articles, but our suppression strategies push them down in search results while amplifying positive content about your brand.' },
      ]}
    />
  )
}

// ─── SMO Packages ──────────────────────────────────────────────
export function SMOPackages() {
  return (
    <PackagePageTemplate
      badge="SMO Services Packages"
      title="Social Media Marketing Packages"
      subtitle="Build your brand presence, grow your followers, and drive engagement with our social media marketing packages."
      packages={[
        {
          name: 'SMO Starter',
          desc: 'For businesses new to social media',
          price: '$349',
          period: '/month',
          highlight: false,
          features: [
            yes('2 Platforms (FB + IG)'), yes('12 Posts per Month'), yes('Custom Graphics'),
            yes('Basic Analytics Report'), yes('Profile Optimization'), no('Video Content'),
            no('Paid Advertising'), no('Community Management'), no('Influencer Collaboration'), no('Hashtag Strategy'),
          ],
        },
        {
          name: 'SMO Growth',
          desc: 'For businesses ready to scale',
          price: '$699',
          period: '/month',
          highlight: true,
          features: [
            yes('4 Platforms'), yes('20 Posts per Month'), yes('Custom Graphics + 2 Videos'),
            yes('Community Management'), yes('Hashtag Strategy'), yes('Competitor Analysis'),
            yes('Monthly Analytics Report'), yes('Story Content'), no('Paid Advertising'), no('Influencer Marketing'),
          ],
        },
        {
          name: 'SMO Enterprise',
          desc: 'For brands that want to dominate',
          price: '$1,299',
          period: '/month',
          highlight: false,
          features: [
            yes('All Platforms'), yes('30+ Posts per Month'), yes('Custom Graphics + 5 Videos'),
            yes('Paid Social Advertising'), yes('Influencer Outreach'), yes('Weekly Analytics'),
            yes('Live Stream Support'), yes('UGC Strategy'), yes('Crisis Communication'), yes('Dedicated Social Manager'),
          ],
        },
      ]}
      faqs={[
        { q: 'Which social media platforms do you manage?', a: 'We manage Facebook, Instagram, Twitter/X, LinkedIn, YouTube, Pinterest, and TikTok. Package pricing covers the platforms included in each tier.' },
        { q: 'Do you create content or do I provide it?', a: 'We create all content — including graphic design, copywriting, and video editing — as part of our packages. You review and approve before publishing.' },
      ]}
    />
  )
}

// ─── Content Writing Packages ──────────────────────────────────
export function ContentWritingPackages() {
  return (
    <PackagePageTemplate
      badge="Content Writing Packages"
      title="Content Writing Packages & Pricing"
      subtitle="Professional, SEO-optimized content that engages your audience and ranks in search engines. From blog posts to website copy and whitepapers."
      packages={[
        {
          name: 'Content Basic',
          desc: 'For blogs and basic content needs',
          price: '$249',
          period: '/month',
          highlight: false,
          features: [
            yes('4 Blog Posts (800 words each)'), yes('SEO Keyword Integration'), yes('Meta Descriptions'),
            yes('1 Revision per Article'), yes('Plagiarism-Free Content'), no('Long-Form Content'),
            no('Infographic Copy'), no('Email Newsletter'), no('Product Descriptions'), no('Dedicated Writer'),
          ],
        },
        {
          name: 'Content Pro',
          desc: 'For serious content marketing',
          price: '$499',
          period: '/month',
          highlight: true,
          features: [
            yes('8 Blog Posts (1000 words each)'), yes('2 Long-Form Articles (2000+ words)'), yes('SEO-Optimized'),
            yes('Unlimited Revisions'), yes('Topic Research'), yes('Internal Linking Strategy'),
            yes('Email Newsletter (2/month)'), no('Product Descriptions'), no('Case Studies'), no('Whitepapers'),
          ],
        },
        {
          name: 'Content Enterprise',
          desc: 'Full content marketing solution',
          price: '$999',
          period: '/month',
          highlight: false,
          features: [
            yes('15+ Blog Posts'), yes('4 Long-Form Articles'), yes('2 Case Studies'),
            yes('Product Descriptions (20)'), yes('Email Newsletters (4)'), yes('Social Media Copy'),
            yes('Content Calendar'), yes('Topic Cluster Strategy'), yes('Dedicated Content Team'), yes('Content Performance Report'),
          ],
        },
      ]}
      faqs={[
        { q: 'What industries do you write for?', a: 'Our writers cover all industries including technology, healthcare, finance, legal, real estate, ecommerce, and more. We match you with writers experienced in your specific niche.' },
        { q: 'Do you write in other languages?', a: 'Yes! We offer content writing services in English, Hindi, Spanish, French, German, and several other languages. Contact us for multilingual content requirements.' },
      ]}
    />
  )
}

// ─── Local SEO Packages ────────────────────────────────────────
export function LocalSEOPackages() {
  return (
    <PackagePageTemplate
      badge="Local SEO Packages"
      title="Local SEO Packages & Pricing"
      subtitle="Dominate local search results and Google Maps with our specialized local SEO packages. Perfect for businesses serving customers in specific geographic areas."
      packages={[
        {
          name: 'Local SEO Basic',
          desc: 'Single location businesses',
          price: '$199',
          period: '/month',
          highlight: false,
          features: [
            yes('GMB Profile Optimization'), yes('5 Local Keywords'), yes('NAP Consistency Audit'),
            yes('10 Local Citations'), yes('Monthly Report'), yes('Bing Places Setup'),
            no('Review Management'), no('Local Content'), no('Link Building'), no('Multi-Location'),
          ],
        },
        {
          name: 'Local SEO Pro',
          desc: 'Growing local businesses',
          price: '$399',
          period: '/month',
          highlight: true,
          features: [
            yes('Everything in Basic'), yes('15 Local Keywords'), yes('30 Local Citations'),
            yes('Review Generation (10/mo)'), yes('1 Local Blog Post'), yes('Google Posts (4/mo)'),
            yes('Competitor Tracking'), no('Multi-Location'), no('Google Ads'), no('Dedicated Manager'),
          ],
        },
        {
          name: 'Local SEO Premium',
          desc: 'Multi-location businesses',
          price: '$799',
          period: '/month',
          highlight: false,
          features: [
            yes('Everything in Pro'), yes('Up to 5 Locations'), yes('Unlimited Citations'),
            yes('Review Management'), yes('4 Local Blog Posts'), yes('Local Link Building'),
            yes('Google Ads Management'), yes('Dedicated Manager'), yes('Weekly Reports'), yes('Franchise SEO Strategy'),
          ],
        },
      ]}
      faqs={[
        { q: 'How many locations can you handle?', a: 'Our Local SEO Pro covers 1 location, Premium covers up to 5 locations. For more locations, we offer custom enterprise local SEO pricing.' },
        { q: 'Is Google My Business optimization included?', a: 'Yes, all local SEO packages include Google My Business optimization. This is one of the most impactful local SEO activities and is prioritized in our strategy.' },
      ]}
    />
  )
}

// ─── PPC Packages ──────────────────────────────────────────────
export function PPCPackages() {
  return (
    <PackagePageTemplate
      badge="PPC Services Packages"
      title="PPC Services Packages & Pricing"
      subtitle="Maximize your advertising ROI with our expertly managed PPC packages. Transparent management fees and measurable results across Google Ads and social advertising."
      packages={[
        {
          name: 'PPC Starter',
          desc: 'For small ad budgets ($500-$2K/mo)',
          price: '$299',
          period: '/month mgmt.',
          highlight: false,
          features: [
            yes('Google Search Ads'), yes('Up to 1 Campaign'), yes('Ad Copy Creation'),
            yes('Keyword Research'), yes('Monthly Reporting'), yes('Conversion Tracking'),
            no('Display Ads'), no('Shopping Ads'), no('Social Ads'), no('Landing Page Optimization'),
          ],
        },
        {
          name: 'PPC Growth',
          desc: 'For growing budgets ($2K-$10K/mo)',
          price: '$599',
          period: '/month mgmt.',
          highlight: true,
          features: [
            yes('Google Search & Display Ads'), yes('Up to 5 Campaigns'), yes('Shopping Campaigns'),
            yes('Remarketing Campaigns'), yes('A/B Ad Testing'), yes('Weekly Optimization'),
            yes('Facebook/Instagram Ads'), yes('Landing Page Recommendations'), no('Dedicated Manager'), no('Call Tracking'),
          ],
        },
        {
          name: 'PPC Enterprise',
          desc: 'For large budgets ($10K+/mo)',
          price: '$999',
          period: '/month mgmt.',
          highlight: false,
          features: [
            yes('All Campaign Types'), yes('Unlimited Campaigns'), yes('LinkedIn & YouTube Ads'),
            yes('Call Tracking Setup'), yes('CRM Integration'), yes('Daily Optimization'),
            yes('Competitor Ad Analysis'), yes('Custom Landing Pages'), yes('Dedicated Manager'), yes('Real-Time Dashboard'),
          ],
        },
      ]}
      faqs={[
        { q: 'What is the minimum ad spend required?', a: 'We recommend a minimum monthly ad spend of $500 to see meaningful results. The management fee is separate from your ad spend, which goes directly to Google/Facebook.' },
        { q: 'How quickly can PPC campaigns start driving results?', a: 'PPC campaigns can start driving traffic the same day they launch. However, campaigns typically take 2-4 weeks to fully optimize and reach peak performance.' },
      ]}
    />
  )
}

// ─── Web Development Packages ──────────────────────────────────
export function WebDevPackages() {
  return (
    <PackagePageTemplate
      badge="Web Development Packages"
      title="Website Design & Development Packages"
      subtitle="Professional website packages for every business need and budget. From stunning landing pages to comprehensive ecommerce stores."
      packages={[
        {
          name: 'Starter Website',
          desc: 'Perfect for new businesses',
          price: '$999',
          period: 'one-time',
          highlight: false,
          features: [
            yes('Up to 5 Pages'), yes('Responsive Design'), yes('Contact Form'),
            yes('Basic SEO Setup'), yes('Google Analytics'), yes('SSL Certificate'),
            yes('1 Month Support'), no('CMS (WordPress)'), no('Blog Section'), no('Ecommerce'),
          ],
        },
        {
          name: 'Business Website',
          desc: 'Complete online presence',
          price: '$2,499',
          period: 'one-time',
          highlight: true,
          features: [
            yes('Up to 15 Pages'), yes('WordPress CMS'), yes('Custom Design'),
            yes('Blog Section'), yes('SEO Optimization'), yes('Speed Optimization'),
            yes('Social Integration'), yes('3 Months Support'), yes('Basic E-commerce (up to 20 products)'), no('Custom Development'),
          ],
        },
        {
          name: 'Enterprise Website',
          desc: 'For large, complex websites',
          price: '$5,999',
          period: 'one-time',
          highlight: false,
          features: [
            yes('Unlimited Pages'), yes('Custom CMS Development'), yes('Full Ecommerce Store'),
            yes('Payment Gateway Integration'), yes('Advanced SEO'), yes('Performance Optimization'),
            yes('Custom Features'), yes('API Integrations'), yes('6 Months Support'), yes('Dedicated Developer'),
          ],
        },
      ]}
      faqs={[
        { q: 'What is included in the support period?', a: 'Support includes bug fixes, minor content updates, and technical assistance. It does not include new feature development, which is billed separately.' },
        { q: 'Can I upgrade my package later?', a: 'Absolutely! You can upgrade your website with additional features, pages, or functionality at any time. We provide competitive pricing for upgrades.' },
      ]}
    />
  )
}

// ─── Ecommerce SEO Packages ────────────────────────────────────
export function EcommerceSEOPackages() {
  return (
    <PackagePageTemplate
      badge="E-commerce SEO Packages"
      title="E-commerce SEO Packages & Pricing"
      subtitle="Specialized SEO packages for online stores. Increase product visibility, drive qualified shoppers, and boost your ecommerce revenue with our proven strategies."
      packages={[
        {
          name: 'Ecom SEO Basic',
          desc: 'For small online stores',
          price: '$499',
          period: '/month',
          highlight: false,
          features: [
            yes('Store SEO Audit'), yes('Up to 20 Product Pages'), yes('10 Keywords'),
            yes('Technical SEO Fixes'), yes('Schema Markup'), yes('Monthly Report'),
            no('Category Optimization'), no('Link Building'), no('Content Creation'), no('CRO'),
          ],
        },
        {
          name: 'Ecom SEO Pro',
          desc: 'For growing online stores',
          price: '$999',
          period: '/month',
          highlight: true,
          features: [
            yes('Everything in Basic'), yes('Up to 100 Product Pages'), yes('30 Keywords'),
            yes('Category Page Optimization'), yes('Link Building (8/mo)'), yes('2 Blog Posts'),
            yes('Competitor Analysis'), yes('Conversion Optimization'), no('Full Store Audit Monthly'), no('Dedicated Manager'),
          ],
        },
        {
          name: 'Ecom SEO Enterprise',
          desc: 'For large ecommerce stores',
          price: '$1,999',
          period: '/month',
          highlight: false,
          features: [
            yes('Unlimited Products'), yes('100+ Keywords'), yes('Full Link Building (20/mo)'),
            yes('4 Blog Posts'), yes('Faceted Navigation SEO'), yes('Site Speed Optimization'),
            yes('International SEO'), yes('Full Conversion Audit'), yes('Dedicated Manager'), yes('Real-Time Rank Tracking'),
          ],
        },
      ]}
      faqs={[
        { q: 'Which ecommerce platforms do you work with?', a: 'We work with Shopify, WooCommerce, Magento, BigCommerce, PrestaShop, OpenCart, and custom ecommerce platforms.' },
        { q: 'How do you handle large product catalogs?', a: 'For large catalogs, we prioritize high-value product pages and use automation tools for bulk optimization. We focus on the 20% of products that drive 80% of revenue first.' },
      ]}
    />
  )
}

// ─── ASO Packages ──────────────────────────────────────────────
export function ASOPackages() {
  return (
    <PackagePageTemplate
      badge="ASO Packages"
      title="App Store Optimization (ASO) Packages"
      subtitle="Increase your app's visibility in the App Store and Google Play. Drive organic downloads with proven ASO strategies for both iOS and Android."
      packages={[
        {
          name: 'ASO Starter',
          desc: 'For new app launches',
          price: '$299',
          period: '/month',
          highlight: false,
          features: [
            yes('Keyword Research'), yes('Title & Description Optimization'), yes('Screenshot Optimization Guidelines'),
            yes('Monthly Keyword Report'), yes('1 App Store'), no('A/B Testing'), no('Review Management'),
            no('Ratings Improvement'), no('Competitor Analysis'), no('Custom Graphics'),
          ],
        },
        {
          name: 'ASO Pro',
          desc: 'For established apps',
          price: '$599',
          period: '/month',
          highlight: true,
          features: [
            yes('Both App Stores (iOS + Android)'), yes('A/B Test Setup'), yes('Screenshot Design'),
            yes('Review Response Management'), yes('Competitor Analysis'), yes('Localization (3 languages)'),
            yes('Weekly Monitoring'), yes('Conversion Rate Optimization'), no('Featured App Strategy'), no('Press Kit'),
          ],
        },
        {
          name: 'ASO Enterprise',
          desc: 'For top-ranking apps',
          price: '$999',
          period: '/month',
          highlight: false,
          features: [
            yes('Everything in Pro'), yes('Full Localization (10+ languages)'), yes('Featured App Outreach'),
            yes('Custom Marketing Graphics'), yes('Apple Search Ads Integration'), yes('Google UAC Integration'),
            yes('Ratings Improvement Strategy'), yes('Press Release'), yes('App Store Analytics Setup'), yes('Dedicated ASO Expert'),
          ],
        },
      ]}
      faqs={[
        { q: 'What is ASO and why is it important?', a: 'App Store Optimization (ASO) is the process of optimizing your app listing to rank higher in App Store and Google Play search results. Over 60% of apps are discovered through search, making ASO critical for organic growth.' },
        { q: 'How long does ASO take to show results?', a: 'Initial improvements from metadata optimization can be seen within 1-2 weeks. Sustained ranking improvements from reviews and ratings take 2-3 months of consistent optimization.' },
      ]}
    />
  )
}

// ─── Digital Marketing Packages ────────────────────────────────
export function DigitalMarketingPackages() {
  return (
    <PackagePageTemplate
      badge="Digital Marketing Packages"
      title="Digital Marketing & Branding Packages"
      subtitle="Complete digital marketing packages that combine SEO, social media, content marketing, and paid advertising for maximum brand growth and ROI."
      packages={[
        {
          name: 'DM Starter',
          desc: 'Essential digital marketing',
          price: '$799',
          period: '/month',
          highlight: false,
          features: [
            yes('SEO (5 keywords)'), yes('Social Media (2 platforms, 12 posts)'), yes('4 Blog Posts'),
            yes('Google Analytics'), yes('Monthly Report'), no('PPC Management'), no('Email Marketing'),
            no('Video Content'), no('Influencer Marketing'), no('Dedicated Manager'),
          ],
        },
        {
          name: 'DM Growth',
          desc: 'Comprehensive digital growth',
          price: '$1,599',
          period: '/month',
          highlight: true,
          features: [
            yes('SEO (15 keywords)'), yes('Social Media (4 platforms, 20 posts)'), yes('8 Blog Posts'),
            yes('PPC Management ($1K ad budget)'), yes('Email Marketing (2 campaigns)'), yes('Weekly Reports'),
            yes('Competitor Tracking'), yes('Link Building (8/mo)'), no('Video Marketing'), no('PR Services'),
          ],
        },
        {
          name: 'DM Enterprise',
          desc: 'Full digital marketing suite',
          price: '$3,499',
          period: '/month',
          highlight: false,
          features: [
            yes('Full SEO Campaign'), yes('All Social Media Platforms'), yes('15+ Blog Posts'),
            yes('PPC ($5K ad budget)'), yes('Email Marketing (8 campaigns)'), yes('Video Content (2/month)'),
            yes('PR & Link Building'), yes('Influencer Marketing'), yes('Dedicated Digital Manager'), yes('Real-Time Dashboard'),
          ],
        },
      ]}
      faqs={[
        { q: 'Can I choose which services to include in my package?', a: 'Yes! While our standard packages offer the best value, we can customize any package by adding or removing services to match your specific needs and budget.' },
        { q: 'Are ad spends included in the package prices?', a: 'Ad spends (Google Ads, Facebook Ads, etc.) are not included in our management fees. You pay ad platforms directly, and we manage the campaigns on your behalf.' },
      ]}
    />
  )
}

// ─── Website Maintenance Packages ─────────────────────────────
export function WebsiteMaintenancePackages() {
  return (
    <PackagePageTemplate
      badge="Website Maintenance Packages"
      title="Website Maintenance Packages"
      subtitle="Keep your website secure, updated, and performing at its best. Our maintenance packages ensure your site runs smoothly 24/7."
      packages={[
        {
          name: 'Basic Maintenance',
          desc: 'Essential website care',
          price: '$99',
          period: '/month',
          highlight: false,
          features: [
            yes('Weekly Backups'), yes('Plugin/CMS Updates'), yes('Security Scanning'),
            yes('Uptime Monitoring'), yes('Monthly Report'), yes('1 Hour Content Updates'),
            no('Speed Optimization'), no('Malware Removal'), no('Priority Support'), no('Emergency Response'),
          ],
        },
        {
          name: 'Pro Maintenance',
          desc: 'Complete website management',
          price: '$249',
          period: '/month',
          highlight: true,
          features: [
            yes('Daily Backups'), yes('All Updates & Patches'), yes('Advanced Security'),
            yes('Performance Monitoring'), yes('Malware Removal'), yes('3 Hours Content Updates'),
            yes('Speed Optimization'), yes('SSL Monitoring'), yes('Priority Email Support'), no('24/7 Phone Support'),
          ],
        },
        {
          name: 'Enterprise Maintenance',
          desc: 'Mission-critical website care',
          price: '$499',
          period: '/month',
          highlight: false,
          features: [
            yes('Real-Time Backups'), yes('Everything in Pro'), yes('5 Hours Content Updates'),
            yes('24/7 Emergency Support'), yes('Core Web Vitals Monitoring'), yes('A/B Testing'),
            yes('Monthly SEO Check'), yes('Database Optimization'), yes('CDN Management'), yes('Dedicated Tech Manager'),
          ],
        },
      ]}
      faqs={[
        { q: 'What happens if my website goes down?', a: 'Our Pro and Enterprise plans include uptime monitoring with immediate alerts. We investigate and resolve issues as quickly as possible, typically within 1-2 hours for critical issues.' },
        { q: 'Are website maintenance services only for WordPress sites?', a: 'No, we maintain all types of websites including custom PHP sites, Laravel, React, and other platforms. WordPress sites benefit from the most comprehensive maintenance as there are more moving parts to manage.' },
      ]}
    />
  )
}
