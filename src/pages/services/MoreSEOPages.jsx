import ServicePageTemplate from '../../components/ServicePageTemplate'

export function InternationalSEO() {
  return (
    <ServicePageTemplate
      badge="International SEO Services"
      heroEmoji="🌍"
      title="International SEO Services Company"
      subtitle="Expand your business globally with our expert international SEO strategies. We help you rank in multiple countries and languages to capture global market share."
      description={[
        "International SEO involves optimizing your website to rank in search engines across multiple countries and languages. This requires a specialized approach including hreflang implementation, country-specific keyword research, and localized content strategies.",
        "At Has Remote Solution, our international SEO team has experience helping businesses expand into new markets worldwide. We understand the nuances of different search engines (Google, Baidu, Yandex, Naver) and regional search behaviors.",
        "Our international SEO services cover everything from technical setup (hreflang, international URL structures) to localized content creation and link building in target markets.",
      ]}
      benefits={[
        { icon: '🌍', title: 'Global Reach', desc: 'Reach customers in any country or language.' },
        { icon: '🌐', title: 'Multi-Country Rankings', desc: 'Rank on country-specific Google domains.' },
        { icon: '🗣️', title: 'Language Targeting', desc: 'Proper hreflang implementation for language targeting.' },
        { icon: '📊', title: 'Market Analysis', desc: 'Deep analysis of target market search behavior.' },
        { icon: '🔗', title: 'Local Link Building', desc: 'Build authority with region-specific backlinks.' },
        { icon: '📝', title: 'Localized Content', desc: 'Content created for local culture and search intent.' },
      ]}
      features={[
        'Hreflang tag implementation', 'International URL structure', 'Country targeting in Google Search Console',
        'Multilingual keyword research', 'Localized content strategy', 'International link building',
        'CDN setup for global speed', 'Competitor analysis per market', 'Translation SEO review',
        'Local search engine optimization', 'International reporting', 'Market entry SEO strategy',
      ]}
      process={[
        { title: 'Market Research', desc: 'Analyze target markets and identify SEO opportunities.' },
        { title: 'Technical Setup', desc: 'Implement hreflang and international URL structures.' },
        { title: 'Content Localization', desc: 'Create or optimize content for each target market.' },
        { title: 'Build & Monitor', desc: 'Build local authority and track international rankings.' },
      ]}
      faqs={[
        { q: 'What is hreflang and why is it important?', a: 'Hreflang is an HTML attribute that tells search engines which language and country a page is intended for. It prevents duplicate content issues and ensures users see the correct version of your site for their region.' },
        { q: 'Should I use subdirectories, subdomains, or country-code TLDs?', a: 'Each approach has pros and cons. ccTLDs (e.g., .co.uk) send the strongest geographic signal but require building authority separately. Subdirectories (e.g., /uk/) are easiest to maintain. We recommend the best approach based on your situation.' },
      ]}
      relatedServices={[
        { label: 'Multilingual SEO', to: '/multilingual-seo' },
        { label: 'Enterprise SEO', to: '/enterprise-seo' },
        { label: 'Content Marketing', to: '/content-marketing' },
      ]}
    />
  )
}

export function MultilingualSEO() {
  return (
    <ServicePageTemplate
      badge="Multilingual SEO Services"
      heroEmoji="🗺️"
      title="Multilingual SEO Services Company"
      subtitle="Reach audiences in their native language with our multilingual SEO services. We optimize your content for multiple languages to maximize global organic traffic."
      description={[
        "Multilingual SEO goes beyond simple translation. It requires understanding how people search in different languages, cultural nuances, and the technical implementation needed to serve the right content to the right audience.",
        "Our multilingual SEO specialists are native speakers and SEO experts in their respective languages, ensuring your content resonates naturally with local audiences rather than feeling like a translation.",
        "We handle the complete multilingual SEO process from keyword research in each language to technical hreflang implementation and ongoing optimization.",
      ]}
      benefits={[
        { icon: '🌐', title: 'Native Language Content', desc: 'Content optimized by native speakers for each target language.' },
        { icon: '🎯', title: 'Culturally Relevant', desc: 'SEO that respects cultural nuances and search behaviors.' },
        { icon: '📈', title: 'Increased Reach', desc: 'Access millions of potential customers in new language markets.' },
        { icon: '🔍', title: 'Language-Specific Keywords', desc: 'Research keywords as locals actually search, not direct translations.' },
        { icon: '🛠️', title: 'Technical Implementation', desc: 'Proper hreflang and URL structure for multilingual sites.' },
        { icon: '📊', title: 'Per-Language Reporting', desc: 'Track performance separately for each language version.' },
      ]}
      features={[
        'Native language keyword research', 'Hreflang implementation', 'Translated meta tags optimization',
        'Culturally adapted content', 'Language-specific link building', 'URL structure planning',
        'Alternate language sitemaps', 'Language detection and routing', 'Multilingual schema markup',
        'Per-language analytics setup', 'Translation quality review', 'Content localization strategy',
      ]}
      process={[
        { title: 'Language Audit', desc: 'Assess current multilingual setup and identify gaps.' },
        { title: 'Keyword Research', desc: 'Research keywords in each target language natively.' },
        { title: 'Content & Technical', desc: 'Optimize content and implement technical multilingual SEO.' },
        { title: 'Track Per Language', desc: 'Monitor rankings and traffic for each language version.' },
      ]}
      faqs={[
        { q: 'Is multilingual SEO the same as international SEO?', a: 'They are related but different. International SEO focuses on different countries while multilingual SEO focuses on different languages. You can have multilingual SEO within one country (e.g., English and French in Canada).' },
        { q: 'Should I use machine translation for multilingual SEO?', a: 'We strongly recommend against machine translation for SEO content. Search engines can detect low-quality translated content, and it often misses cultural nuances that affect user engagement and conversions.' },
      ]}
      relatedServices={[
        { label: 'International SEO', to: '/international-seo' },
        { label: 'Content Marketing', to: '/content-marketing' },
        { label: 'Enterprise SEO', to: '/enterprise-seo' },
      ]}
    />
  )
}

export function SmallBusinessSEO() {
  return (
    <ServicePageTemplate
      badge="Small Business SEO Services"
      heroEmoji="🏪"
      title="Small Business SEO Services"
      subtitle="Affordable, results-driven SEO services designed specifically for small businesses. Compete with larger companies and grow your online presence on any budget."
      description={[
        "Small businesses face unique SEO challenges — limited budgets, time constraints, and the need to compete with larger, more established companies. At Has Remote Solution, we understand these challenges and have developed SEO packages specifically tailored for small businesses.",
        "Our small business SEO services focus on high-impact, cost-effective strategies that deliver measurable results. We prioritize the activities that will have the greatest impact on your bottom line, ensuring you get maximum value from your SEO investment.",
        "Whether you're a local shop, a service-based business, or an online boutique, our expert team will help you build a strong online presence that attracts your ideal customers.",
      ]}
      benefits={[
        { icon: '💰', title: 'Affordable Pricing', desc: 'SEO packages designed for small business budgets.' },
        { icon: '🚀', title: 'Quick Wins', desc: 'Focus on high-impact activities that deliver fast results.' },
        { icon: '🎯', title: 'Local Focus', desc: 'Dominate your local market and outrank nearby competitors.' },
        { icon: '📊', title: 'Clear Reporting', desc: 'Simple, easy-to-understand monthly reports.' },
        { icon: '🤝', title: 'Personal Service', desc: 'Dedicated support and direct communication with your SEO team.' },
        { icon: '⚡', title: 'Flexible Plans', desc: 'Scale your SEO investment as your business grows.' },
      ]}
      features={[
        'Website SEO audit', 'Local keyword targeting', 'Google My Business optimization',
        'On-page SEO', 'Content optimization', 'Basic link building',
        'Monthly reporting', 'Competitor analysis', 'Meta tag optimization',
        'Image optimization', 'Site speed improvements', 'Social profile setup',
      ]}
      process={[
        { title: 'Free Consultation', desc: 'Discuss your goals and assess your current online presence.' },
        { title: 'Strategy Plan', desc: 'Create an affordable SEO plan tailored to your business.' },
        { title: 'Implementation', desc: 'Execute SEO improvements efficiently for your budget.' },
        { title: 'Report & Grow', desc: 'Monthly reports with clear results and next steps.' },
      ]}
      faqs={[
        { q: 'How much does Small Business SEO cost?', a: 'Our small business SEO packages start from $299/month. The exact cost depends on your goals, industry competitiveness, and current website status. We offer flexible plans to fit any budget.' },
        { q: 'Can small businesses compete with large companies in SEO?', a: 'Yes! Small businesses can actually have advantages in SEO by focusing on niche keywords, local search, and building genuine community connections. We help you find and dominate the opportunities where you can win.' },
      ]}
      relatedServices={[
        { label: 'Local SEO', to: '/local-seo' },
        { label: 'Google Maps Marketing', to: '/google-maps-marketing' },
        { label: 'Social Media Marketing', to: '/social-media-marketing' },
      ]}
    />
  )
}

export function MobileSEO() {
  return (
    <ServicePageTemplate
      badge="Mobile SEO Services"
      heroEmoji="📱"
      title="Mobile SEO Services Company"
      subtitle="Optimize your website for mobile users and Google's mobile-first indexing. Ensure your site delivers exceptional experience on all mobile devices."
      description={[
        "With over 60% of all searches now happening on mobile devices, mobile SEO is no longer optional — it's essential. Google uses mobile-first indexing, meaning it primarily uses the mobile version of your website for ranking and indexing.",
        "Our mobile SEO specialists ensure your website provides an exceptional experience for mobile users, which directly impacts both your search rankings and conversion rates. From responsive design to page speed optimization, we cover every aspect of mobile SEO.",
        "We test your site across hundreds of device types and screen sizes to ensure perfect performance. Our mobile SEO audits identify and fix issues that are costing you rankings and customers.",
      ]}
      benefits={[
        { icon: '📱', title: 'Mobile-First Ready', desc: 'Fully optimized for Google\'s mobile-first indexing.' },
        { icon: '⚡', title: 'Fast Loading', desc: 'Optimized page speed for mobile users on any connection.' },
        { icon: '👆', title: 'Touch Friendly', desc: 'Properly sized buttons and elements for touch interaction.' },
        { icon: '🔍', title: 'Mobile Rankings', desc: 'Improve rankings in mobile search results.' },
        { icon: '💎', title: 'Core Web Vitals', desc: 'Meet Google\'s Core Web Vitals standards for mobile.' },
        { icon: '📊', title: 'Mobile Analytics', desc: 'Track and optimize for mobile user behavior.' },
      ]}
      features={[
        'Mobile responsiveness audit', 'Core Web Vitals optimization', 'Page speed optimization',
        'Accelerated Mobile Pages (AMP)', 'Mobile usability fixes', 'Touch element optimization',
        'Mobile keyword research', 'Mobile-first content strategy', 'Viewport configuration',
        'Image lazy loading', 'Mobile sitemap', 'App indexing (if applicable)',
      ]}
      process={[
        { title: 'Mobile Audit', desc: 'Comprehensive audit of your mobile site performance.' },
        { title: 'Fix Issues', desc: 'Address all mobile usability and speed issues.' },
        { title: 'Optimize Content', desc: 'Adapt content and UX for mobile users.' },
        { title: 'Test & Monitor', desc: 'Continuously test across devices and monitor rankings.' },
      ]}
      faqs={[
        { q: 'What is mobile-first indexing?', a: 'Mobile-first indexing means Google primarily uses the mobile version of your content for indexing and ranking. If your mobile site has less content or different content than desktop, it can negatively impact your rankings.' },
        { q: 'What are Core Web Vitals?', a: 'Core Web Vitals are Google\'s metrics for measuring user experience: Largest Contentful Paint (loading), First Input Delay (interactivity), and Cumulative Layout Shift (visual stability). They are ranking factors.' },
      ]}
      relatedServices={[
        { label: 'SEO Services', to: '/seo-services' },
        { label: 'Web Development', to: '/website-development' },
        { label: 'Enterprise SEO', to: '/enterprise-seo' },
      ]}
    />
  )
}
