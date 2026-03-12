import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function GoogleMapsMarketing() {
  return (
    <ServicePageTemplate
      badge="Google Maps Marketing"
      heroEmoji="🗺️"
      title="Google Maps Marketing Services"
      subtitle="Get your business to the top of Google Maps and capture local customers actively searching for your products and services in your area."
      description={[
        "Google Maps Marketing is one of the most powerful ways to attract local customers. When someone searches for a business near them, Google displays a map pack with the top 3 local businesses. Appearing in this coveted spot can dramatically increase your calls, website visits, and foot traffic.",
        "At Has Remote Solution, our Google Maps marketing specialists use proven strategies to optimize your Google My Business profile and improve your local map rankings. We focus on all the key ranking factors including relevance, distance, and prominence.",
        "Our comprehensive approach combines GMB optimization, review management, local citation building, and location-based content to ensure your business dominates the local map pack.",
      ]}
      benefits={[
        { icon: '🥇', title: 'Map Pack Rankings', desc: 'Appear in the top 3 spots of the Google Maps local pack.' },
        { icon: '📞', title: 'More Calls', desc: 'Customers can call you directly from your Google Maps listing.' },
        { icon: '🚗', title: 'More Directions', desc: 'Drive more foot traffic with prominent map placement.' },
        { icon: '⭐', title: 'Review Strategy', desc: 'Build a 5-star reputation that attracts more customers.' },
        { icon: '📸', title: 'Profile Optimization', desc: 'Compelling photos and descriptions that convert viewers.' },
        { icon: '📊', title: 'Insights Tracking', desc: 'Track how customers find and interact with your listing.' },
      ]}
      features={[
        'Google My Business setup & verification', 'Profile optimization', 'Category & attribute optimization',
        'Photo & video management', 'Google Posts strategy', 'Q&A management',
        'Review generation campaigns', 'Review response management', 'Local citation building',
        'Competitor map analysis', 'Monthly GMB reporting', 'Service area optimization',
      ]}
      process={[
        { title: 'Claim & Verify', desc: 'Claim and verify your Google My Business listing.' },
        { title: 'Optimize Profile', desc: 'Fully optimize every aspect of your GMB profile.' },
        { title: 'Build Authority', desc: 'Build citations and reviews to boost prominence.' },
        { title: 'Monitor & Improve', desc: 'Track performance and continually optimize.' },
      ]}
      faqs={[
        { q: 'How do I appear in the Google Maps 3-pack?', a: 'Appearing in the Google Maps 3-pack requires optimizing your Google My Business profile, building local citations, generating positive reviews, and ensuring your website has strong local SEO signals.' },
        { q: 'How important are reviews for Google Maps rankings?', a: 'Reviews are one of the most important factors for Google Maps rankings. Both the quantity and quality of reviews impact your position in local search results.' },
      ]}
      relatedServices={[
        { label: 'Local SEO', to: '/local-seo' },
        { label: 'SEO Services', to: '/seo-services' },
        { label: 'Reputation Management', to: '/reputation-management' },
      ]}
    />
  )
}
