import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function LocalSEO() {
  return (
    <ServicePageTemplate
      badge="Local SEO Services"
      heroEmoji="📍"
      title="Local SEO Services Company"
      subtitle="Dominate local search results and drive more foot traffic to your business with our proven local SEO strategies. We help you rank #1 in Google Maps and local searches."
      description={[
        "Local SEO is the process of optimizing your online presence to attract more business from relevant local searches. These searches take place on Google and other search engines. At Has Remote Solution, we specialize in helping businesses improve their visibility in local search results.",
        "Our local SEO services are designed to help small and medium-sized businesses compete with larger companies by focusing on hyper-local targeting. We ensure your business appears prominently when potential customers search for services in your area.",
        "From Google My Business optimization to local citation building, our comprehensive approach ensures your business dominates local search results and drives more qualified leads to your doorstep.",
      ]}
      benefits={[
        { icon: '📍', title: 'Google Maps Ranking', desc: 'Appear in the top 3 of Google Maps for relevant local searches.' },
        { icon: '📞', title: 'More Phone Calls', desc: 'Increased visibility leads to more direct calls from potential customers.' },
        { icon: '🏪', title: 'More Foot Traffic', desc: 'Drive more customers to your physical location with local visibility.' },
        { icon: '⭐', title: 'Review Management', desc: 'Build and manage your online reputation with positive reviews.' },
        { icon: '📊', title: 'Local Analytics', desc: 'Track local search performance with detailed reporting.' },
        { icon: '🎯', title: 'Targeted Traffic', desc: 'Attract customers who are actively searching for your services nearby.' },
      ]}
      features={[
        'Google My Business optimization', 'Local keyword research', 'NAP consistency audit',
        'Local citation building', 'Review generation strategy', 'Local link building',
        'On-page local SEO', 'Schema markup implementation', 'Competitor analysis',
        'Monthly performance reports', 'Google Maps optimization', 'Local content creation',
      ]}
      process={[
        { title: 'Audit & Analysis', desc: 'We audit your current local presence and identify opportunities.' },
        { title: 'Strategy Development', desc: 'Custom local SEO strategy tailored to your business and location.' },
        { title: 'Implementation', desc: 'Execute optimization across all local platforms and directories.' },
        { title: 'Monitor & Grow', desc: 'Track rankings and continuously optimize for better results.' },
      ]}
      faqs={[
        { q: 'How long does Local SEO take to show results?', a: 'Local SEO typically shows results within 3-6 months. However, some improvements like Google My Business optimization can show results within weeks.' },
        { q: 'What is Google My Business and why is it important?', a: 'Google My Business is a free tool that allows businesses to manage their online presence on Google Search and Maps. It is crucial for local SEO as it directly impacts your visibility in local search results.' },
        { q: 'How do reviews impact Local SEO?', a: 'Online reviews are a major ranking factor for local SEO. Businesses with more positive reviews tend to rank higher in local search results. We help you develop a strategy to generate and manage reviews.' },
        { q: 'What are local citations?', a: 'Local citations are online mentions of your business name, address, and phone number (NAP). They help search engines verify your business information and improve local rankings.' },
      ]}
      relatedServices={[
        { label: 'SEO Services', to: '/seo-services' },
        { label: 'Ecommerce SEO', to: '/ecommerce-seo' },
        { label: 'Google Maps Marketing', to: '/google-maps-marketing' },
        { label: 'Content Marketing', to: '/content-marketing' },
      ]}
    />
  )
}
