import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function EcommerceSEO() {
  return (
    <ServicePageTemplate
      badge="Ecommerce SEO Services"
      heroEmoji="🛒"
      title="Ecommerce SEO Services Company"
      subtitle="Increase your online store's visibility, drive targeted traffic, and boost sales with our specialized ecommerce SEO strategies tailored for online retailers."
      description={[
        "Ecommerce SEO is a specialized form of search engine optimization focused on helping online stores rank higher in search engine results pages. At Has Remote Solution, we understand the unique challenges of ecommerce SEO, including optimizing product pages, category pages, and dealing with duplicate content issues.",
        "Our ecommerce SEO experts have experience working with all major ecommerce platforms including Shopify, WooCommerce, Magento, and more. We develop comprehensive strategies that drive organic traffic and increase conversion rates.",
        "From technical SEO audits to product page optimization and link building, our holistic approach ensures your online store attracts qualified shoppers who are ready to buy.",
      ]}
      benefits={[
        { icon: '📈', title: 'Increased Sales', desc: 'Higher rankings lead to more qualified traffic and increased revenue.' },
        { icon: '🏆', title: 'Product Rankings', desc: 'Get your products ranking on the first page for buyer-intent keywords.' },
        { icon: '🔍', title: 'Category Optimization', desc: 'Optimize category pages to capture high-volume search traffic.' },
        { icon: '💻', title: 'Technical SEO', desc: 'Fix crawl issues, improve site speed, and optimize site architecture.' },
        { icon: '🔗', title: 'Link Building', desc: 'Build high-quality backlinks to improve domain authority.' },
        { icon: '📝', title: 'Content Strategy', desc: 'Create SEO-optimized product descriptions and blog content.' },
      ]}
      features={[
        'Product page SEO optimization', 'Category page optimization', 'Technical SEO audit',
        'Site speed optimization', 'Schema markup for products', 'Duplicate content resolution',
        'Keyword research for products', 'Competitor analysis', 'Link building campaigns',
        'Image optimization', 'Internal linking strategy', 'Conversion rate optimization',
      ]}
      process={[
        { title: 'Store Audit', desc: 'Comprehensive audit of your ecommerce store\'s SEO health.' },
        { title: 'Keyword Mapping', desc: 'Map buyer-intent keywords to relevant product and category pages.' },
        { title: 'On-Page Optimization', desc: 'Optimize all product pages, categories, and meta data.' },
        { title: 'Scale & Measure', desc: 'Build authority and track revenue impact of SEO improvements.' },
      ]}
      faqs={[
        { q: 'How is Ecommerce SEO different from regular SEO?', a: 'Ecommerce SEO focuses on product pages, category pages, and handling unique challenges like duplicate content, faceted navigation, and thousands of product URLs. It requires a specialized approach compared to regular SEO.' },
        { q: 'Which ecommerce platforms do you work with?', a: 'We work with all major ecommerce platforms including Shopify, WooCommerce, Magento, BigCommerce, OpenCart, and custom-built ecommerce websites.' },
        { q: 'How do you handle duplicate content in ecommerce sites?', a: 'We use canonical tags, proper URL structure, and content optimization strategies to address duplicate content issues common in ecommerce sites with product variations.' },
      ]}
      relatedServices={[
        { label: 'Local SEO', to: '/local-seo' },
        { label: 'Enterprise SEO', to: '/enterprise-seo' },
        { label: 'PPC Services', to: '/ppc-services' },
        { label: 'Web Development', to: '/website-development' },
      ]}
    />
  )
}
