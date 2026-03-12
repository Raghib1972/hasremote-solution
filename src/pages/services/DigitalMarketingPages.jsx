import ServicePageTemplate from '../../components/ServicePageTemplate'

export function SocialMediaMarketing() {
  return (
    <ServicePageTemplate
      badge="Social Media Marketing"
      heroEmoji="📱"
      title="Social Media Marketing Services"
      subtitle="Build brand awareness, engage your audience, and drive sales through strategic social media marketing across all major platforms."
      description={[
        "Social Media Marketing (SMM) involves creating and sharing content on social media networks to achieve your marketing and branding goals. With billions of active users across platforms like Facebook, Instagram, Twitter, LinkedIn, and TikTok, social media is an indispensable marketing channel.",
        "Our social media marketing team develops customized strategies for each platform, creating content that resonates with your target audience and drives meaningful engagement. We combine organic social media management with paid social advertising for maximum impact.",
        "From content creation and community management to influencer partnerships and social media advertising, we handle every aspect of your social media presence to help you build a loyal, engaged following that converts into customers.",
      ]}
      benefits={[
        { icon: '📈', title: 'Brand Awareness', desc: 'Build a recognizable brand across all social platforms.' },
        { icon: '💬', title: 'Community Building', desc: 'Foster an engaged community around your brand.' },
        { icon: '🎯', title: 'Targeted Reach', desc: 'Reach your exact target audience with precision targeting.' },
        { icon: '🛒', title: 'Social Commerce', desc: 'Drive direct sales through social media shopping features.' },
        { icon: '📊', title: 'Analytics & Insights', desc: 'Detailed reporting on reach, engagement, and conversions.' },
        { icon: '🚀', title: 'Viral Potential', desc: 'Content strategies designed for shares and organic reach.' },
      ]}
      features={[
        'Social media strategy development', 'Content calendar creation', 'Custom graphic design',
        'Video content creation', 'Community management', 'Hashtag research & strategy',
        'Competitor analysis', 'Social media advertising', 'Influencer collaboration',
        'Monthly analytics reports', 'Profile optimization', 'Crisis management',
      ]}
      process={[
        { title: 'Audit & Strategy', desc: 'Analyze your current social presence and develop a strategy.' },
        { title: 'Content Creation', desc: 'Create engaging, branded content for each platform.' },
        { title: 'Publish & Engage', desc: 'Post consistently and actively engage with your audience.' },
        { title: 'Analyze & Optimize', desc: 'Review performance data and optimize for better results.' },
      ]}
      faqs={[
        { q: 'Which social media platforms should my business be on?', a: 'The right platforms depend on your target audience and business type. B2B businesses often do well on LinkedIn, while B2C brands may focus on Instagram and Facebook. We help identify the best platforms for your specific business.' },
        { q: 'How often should I post on social media?', a: 'Consistency is key. We generally recommend posting daily on Instagram, 3-5 times per week on Facebook, and multiple times daily on Twitter. We develop a posting schedule tailored to each platform and your audience.' },
      ]}
      relatedServices={[
        { label: 'Influencer Marketing', to: '/influencer-marketing' },
        { label: 'PPC Services', to: '/ppc-services' },
        { label: 'Content Marketing', to: '/content-marketing' },
        { label: 'Reputation Management', to: '/reputation-management' },
      ]}
    />
  )
}

export function PPCServices() {
  return (
    <ServicePageTemplate
      badge="Pay Per Click Services"
      heroEmoji="💰"
      title="Pay Per Click (PPC) Services"
      subtitle="Drive immediate, qualified traffic and maximize your advertising ROI with expertly managed PPC campaigns on Google, Bing, Facebook, and more."
      description={[
        "Pay-Per-Click (PPC) advertising is one of the most effective ways to drive targeted traffic to your website quickly. Unlike SEO which takes time, PPC campaigns can start generating clicks and leads the same day they launch.",
        "Our PPC specialists are certified experts in Google Ads, Microsoft Advertising, Facebook Ads, and other major advertising platforms. We use data-driven strategies to maximize your ad spend and deliver the best possible return on investment.",
        "From keyword research and ad copywriting to bid management and conversion tracking, our comprehensive PPC management service handles every aspect of your paid advertising campaigns.",
      ]}
      benefits={[
        { icon: '⚡', title: 'Instant Traffic', desc: 'Get targeted website visitors from day one of your campaign.' },
        { icon: '🎯', title: 'Precise Targeting', desc: 'Reach your exact audience by demographics, interests, and behavior.' },
        { icon: '💡', title: 'Full Control', desc: 'Complete control over budget, targeting, and ad messaging.' },
        { icon: '📊', title: 'Measurable ROI', desc: 'Track every click, conversion, and dollar spent.' },
        { icon: '🔄', title: 'A/B Testing', desc: 'Continuously test and optimize ads for better performance.' },
        { icon: '🌐', title: 'Multi-Platform', desc: 'Reach customers across Google, Facebook, Instagram, and more.' },
      ]}
      features={[
        'Google Ads management', 'Microsoft Ads management', 'Facebook & Instagram Ads',
        'LinkedIn Ads', 'Keyword research & bidding', 'Ad copywriting',
        'Landing page optimization', 'Conversion tracking setup', 'Remarketing campaigns',
        'Shopping campaigns', 'Display advertising', 'Monthly PPC reports',
      ]}
      process={[
        { title: 'Account Audit', desc: 'Review existing campaigns or set up fresh accounts.' },
        { title: 'Campaign Build', desc: 'Create targeted campaigns with compelling ad copy.' },
        { title: 'Launch & Optimize', desc: 'Launch campaigns and optimize based on data.' },
        { title: 'Scale Winners', desc: 'Scale top-performing campaigns for maximum ROI.' },
      ]}
      faqs={[
        { q: 'How much should I budget for PPC advertising?', a: 'PPC budgets vary widely based on industry, competition, and goals. We work with budgets starting from $500/month. We\'ll recommend an appropriate budget based on your industry and objectives.' },
        { q: 'What is a good click-through rate (CTR) for PPC ads?', a: 'Average CTR varies by industry and ad type. Search ads average 2-5% CTR, while display ads average 0.1-0.5%. We optimize your campaigns to achieve above-average CTR for your industry.' },
      ]}
      relatedServices={[
        { label: 'Social Media Marketing', to: '/social-media-marketing' },
        { label: 'SEO Services', to: '/seo-services' },
        { label: 'Content Marketing', to: '/content-marketing' },
      ]}
    />
  )
}

export function ReputationManagement() {
  return (
    <ServicePageTemplate
      badge="Reputation Management"
      heroEmoji="⭐"
      title="Online Reputation Management (ORM) Services"
      subtitle="Protect and enhance your brand's online reputation. Build trust, suppress negative content, and showcase the positive aspects of your business."
      description={[
        "Your online reputation is one of your most valuable business assets. In today's digital world, potential customers research businesses online before making decisions. A strong, positive online reputation builds trust and drives more conversions.",
        "At Has Remote Solution, our ORM specialists use a comprehensive approach to monitor, manage, and improve your online reputation. We track mentions across the web, respond to reviews, suppress negative content, and amplify positive content.",
        "Whether you're dealing with negative reviews, damaging articles, or simply want to build a stronger positive presence, our reputation management services deliver measurable results.",
      ]}
      benefits={[
        { icon: '🛡️', title: 'Reputation Protection', desc: 'Monitor and protect your brand from negative content.' },
        { icon: '⭐', title: 'Review Management', desc: 'Build positive reviews across all major platforms.' },
        { icon: '📰', title: 'Content Suppression', desc: 'Push down negative search results with positive content.' },
        { icon: '🔍', title: '24/7 Monitoring', desc: 'Constant monitoring of brand mentions across the web.' },
        { icon: '💬', title: 'Response Strategy', desc: 'Professional responses to all reviews and mentions.' },
        { icon: '📈', title: 'Sentiment Analysis', desc: 'Track brand sentiment and improve customer perception.' },
      ]}
      features={[
        'Brand monitoring setup', 'Review platform management', 'Negative content suppression',
        'Positive content creation', 'Social media monitoring', 'Crisis management plan',
        'Google autocomplete management', 'Wikipedia editing', 'Press release distribution',
        'Review generation campaigns', 'Competitor reputation analysis', 'Monthly ORM reports',
      ]}
      process={[
        { title: 'Reputation Audit', desc: 'Assess your current online reputation across all platforms.' },
        { title: 'Strategy Development', desc: 'Create a custom ORM strategy for your specific situation.' },
        { title: 'Active Management', desc: 'Monitor, respond, and build positive presence daily.' },
        { title: 'Report & Improve', desc: 'Track sentiment improvement and adjust strategies.' },
      ]}
      faqs={[
        { q: 'How long does reputation management take to see results?', a: 'ORM is an ongoing process. Some improvements like Google autocomplete changes can take 2-4 months. Suppressing negative search results can take 6-12 months depending on the strength of the negative content.' },
        { q: 'Can you remove negative reviews?', a: 'We cannot guarantee removal of legitimate reviews, but we can help flag policy-violating reviews for removal, build a strong positive review profile, and craft professional responses that mitigate the impact of negative reviews.' },
      ]}
      relatedServices={[
        { label: 'Social Media Marketing', to: '/social-media-marketing' },
        { label: 'Content Marketing', to: '/content-marketing' },
        { label: 'PR Services', to: '/public-relations' },
      ]}
    />
  )
}

export function InfluencerMarketing() {
  return (
    <ServicePageTemplate
      badge="Influencer Marketing Services"
      heroEmoji="🌟"
      title="Influencer Marketing Services"
      subtitle="Connect with the right influencers to amplify your brand message, reach new audiences, and drive authentic engagement and sales."
      description={[
        "Influencer marketing has become one of the most powerful forms of digital marketing. Consumers trust recommendations from people they follow more than traditional advertising. Our influencer marketing services connect your brand with the perfect influencers for your target audience.",
        "We manage the entire influencer marketing process — from identifying and vetting influencers to campaign management, content approval, and performance tracking. Our database of influencers spans all niches and follower sizes, from nano-influencers to mega-influencers.",
        "Our data-driven approach ensures you partner with influencers whose audiences genuinely align with your brand, delivering authentic content that resonates and drives real business results.",
      ]}
      benefits={[
        { icon: '🤝', title: 'Authentic Content', desc: 'Real, authentic content that audiences trust more than ads.' },
        { icon: '🎯', title: 'Targeted Reach', desc: 'Access highly engaged audiences in your exact niche.' },
        { icon: '💡', title: 'Brand Awareness', desc: 'Massive exposure to new, relevant audiences.' },
        { icon: '📊', title: 'Measurable Results', desc: 'Track reach, engagement, clicks, and conversions.' },
        { icon: '🛒', title: 'Drive Sales', desc: 'Affiliate codes and direct links that convert followers.' },
        { icon: '🌐', title: 'Content Library', desc: 'Gain a library of UGC content for your marketing.' },
      ]}
      features={[
        'Influencer discovery & vetting', 'Campaign strategy development', 'Contract negotiation',
        'Brief & content guidelines', 'Content approval process', 'Campaign management',
        'Performance tracking', 'Authentic storytelling guidance', 'Multi-platform campaigns',
        'Long-term ambassador programs', 'Affiliate campaign setup', 'ROI reporting',
      ]}
      process={[
        { title: 'Campaign Brief', desc: 'Define goals, target audience, and campaign messaging.' },
        { title: 'Influencer Matching', desc: 'Identify and vet the perfect influencers for your brand.' },
        { title: 'Campaign Execution', desc: 'Manage content creation, approvals, and publishing.' },
        { title: 'Measure & Report', desc: 'Track all KPIs and report on campaign performance.' },
      ]}
      faqs={[
        { q: 'What types of influencers do you work with?', a: 'We work with nano-influencers (1K-10K followers), micro-influencers (10K-100K), macro-influencers (100K-1M), and mega-influencers (1M+). The right tier depends on your budget and campaign goals.' },
        { q: 'How do you measure influencer campaign ROI?', a: 'We track metrics including reach, impressions, engagement rate, link clicks, promo code usage, conversion rate, and direct sales attributed to the campaign through UTM parameters and affiliate tracking.' },
      ]}
      relatedServices={[
        { label: 'Social Media Marketing', to: '/social-media-marketing' },
        { label: 'Content Marketing', to: '/content-marketing' },
        { label: 'PR Services', to: '/public-relations' },
      ]}
    />
  )
}

export function PublicRelations() {
  return (
    <ServicePageTemplate
      badge="Public Relations Services"
      heroEmoji="📰"
      title="Public Relations (PR) Services"
      subtitle="Build credibility, increase brand visibility, and shape your public narrative with our strategic public relations and media outreach services."
      description={[
        "Public Relations is the strategic management of how your brand communicates with the public and media. Effective PR builds credibility that paid advertising simply cannot buy. When respected media outlets and publications cover your business, it creates powerful social proof.",
        "Our PR team has established relationships with journalists, editors, and bloggers across hundreds of publications. We craft compelling stories about your brand and secure placements in relevant media outlets that your target audience reads.",
        "From press releases and media pitches to crisis communications and executive thought leadership, our comprehensive PR services position your brand as an authority in your industry.",
      ]}
      benefits={[
        { icon: '📰', title: 'Media Coverage', desc: 'Get featured in top publications in your industry.' },
        { icon: '🏆', title: 'Brand Authority', desc: 'Build credibility through third-party endorsements.' },
        { icon: '🔗', title: 'Quality Backlinks', desc: 'Earn high-authority backlinks that boost SEO.' },
        { icon: '💬', title: 'Thought Leadership', desc: 'Position your executives as industry experts.' },
        { icon: '🛡️', title: 'Crisis Management', desc: 'Professional handling of reputation crises.' },
        { icon: '🌐', title: 'Brand Awareness', desc: 'Reach massive new audiences through media coverage.' },
      ]}
      features={[
        'Press release writing & distribution', 'Media outreach campaigns', 'Journalist relationship building',
        'Thought leadership articles', 'Executive profiling', 'Product launch PR',
        'Crisis communication management', 'Award submission management', 'Podcast booking',
        'Speaking opportunity sourcing', 'Interview coaching', 'Media monitoring & reporting',
      ]}
      process={[
        { title: 'Story Development', desc: 'Identify compelling brand stories worth covering.' },
        { title: 'Media Targeting', desc: 'Select the right publications and journalists for your story.' },
        { title: 'Outreach & Pitching', desc: 'Craft personalized pitches and execute media outreach.' },
        { title: 'Coverage & Monitor', desc: 'Secure coverage and track media mentions.' },
      ]}
      faqs={[
        { q: 'Can you guarantee media placements?', a: 'No ethical PR agency can guarantee specific placements, as editorial decisions are made independently by journalists. However, our strong media relationships and compelling storytelling approach give your stories the best possible chance of coverage.' },
        { q: 'How is PR different from advertising?', a: 'Advertising is paid media you control, while PR is earned media — coverage that others choose to give you. PR coverage is generally more trusted by audiences because it comes from independent third parties.' },
      ]}
      relatedServices={[
        { label: 'Reputation Management', to: '/reputation-management' },
        { label: 'Content Marketing', to: '/content-marketing' },
        { label: 'Social Media Marketing', to: '/social-media-marketing' },
      ]}
    />
  )
}

export function ContentMarketing() {
  return (
    <ServicePageTemplate
      badge="Content Marketing Services"
      heroEmoji="✍️"
      title="Content Marketing Services"
      subtitle="Attract, engage, and convert your target audience with strategic content marketing. Build authority, drive organic traffic, and generate leads through compelling content."
      description={[
        "Content marketing is the strategic approach of creating and distributing valuable, relevant, and consistent content to attract and engage a clearly defined audience — with the ultimate goal of driving profitable customer action.",
        "At Has Remote Solution, our content marketing team develops comprehensive content strategies that align with your business goals. From SEO-optimized blog posts and whitepapers to infographics, videos, and case studies, we create content that educates, entertains, and converts.",
        "Our content is not just well-written — it's strategically designed to rank in search engines, earn backlinks, and guide prospects through every stage of the buyer's journey.",
      ]}
      benefits={[
        { icon: '📈', title: 'Organic Traffic Growth', desc: 'SEO-optimized content that ranks and drives sustained traffic.' },
        { icon: '🏆', title: 'Industry Authority', desc: 'Position your brand as the trusted expert in your niche.' },
        { icon: '🔗', title: 'Link Earning', desc: 'High-quality content that naturally earns backlinks.' },
        { icon: '🎯', title: 'Lead Generation', desc: 'Gated content and CTAs that capture qualified leads.' },
        { icon: '💬', title: 'Brand Engagement', desc: 'Content that people share, comment on, and remember.' },
        { icon: '📊', title: 'Content Analytics', desc: 'Track which content drives traffic, leads, and revenue.' },
      ]}
      features={[
        'Content strategy development', 'SEO blog post writing', 'Long-form content creation',
        'Infographic design', 'Video script writing', 'Case study creation',
        'Whitepaper & ebook writing', 'Email newsletter content', 'Social media content',
        'Content calendar management', 'Content promotion strategy', 'Content performance tracking',
      ]}
      process={[
        { title: 'Research & Strategy', desc: 'Develop a data-driven content strategy for your business.' },
        { title: 'Content Creation', desc: 'Create high-quality, SEO-optimized content at scale.' },
        { title: 'Publish & Promote', desc: 'Distribute content across the right channels.' },
        { title: 'Analyze & Refine', desc: 'Measure performance and continuously improve.' },
      ]}
      faqs={[
        { q: 'How long does content marketing take to show results?', a: 'Content marketing is a long-term strategy. You can expect to see traffic improvements within 3-6 months, with significant results typically appearing after 6-12 months of consistent effort.' },
        { q: 'How many blog posts do I need per month?', a: 'For most businesses, we recommend publishing 4-8 blog posts per month. Quality is more important than quantity — one exceptional, comprehensive piece performs better than multiple thin articles.' },
      ]}
      relatedServices={[
        { label: 'SEO Services', to: '/seo-services' },
        { label: 'Social Media Marketing', to: '/social-media-marketing' },
        { label: 'PR Services', to: '/public-relations' },
      ]}
    />
  )
}
