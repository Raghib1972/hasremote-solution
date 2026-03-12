import ServicePageTemplate from '../../components/ServicePageTemplate'

const webDevProcess = [
  { title: 'Discovery', desc: 'Understand your requirements, goals, and target users.' },
  { title: 'Design', desc: 'Create wireframes and UI designs for your approval.' },
  { title: 'Development', desc: 'Build your solution using best practices and clean code.' },
  { title: 'Launch & Support', desc: 'Deploy, test, and provide ongoing maintenance.' },
]

export function WebsiteDevelopment() {
  return (
    <ServicePageTemplate
      badge="Website Development"
      heroEmoji="💻"
      title="Website Development Services"
      subtitle="Custom, responsive, and high-performance websites that drive business growth. From landing pages to complex web applications, we build websites that convert."
      description={[
        "Your website is your most powerful sales tool. A well-designed, fast, and user-friendly website builds trust, captures leads, and converts visitors into customers. At Has Remote Solution, we build custom websites that are not just visually impressive but strategically designed to achieve your business goals.",
        "Our web development team specializes in creating responsive websites that look and perform perfectly on all devices. We use the latest technologies and best practices to ensure your website is secure, fast, and scalable.",
        "From simple brochure websites to complex web applications with custom functionality, our experienced developers deliver solutions tailored to your specific requirements.",
      ]}
      benefits={[
        { icon: '🎨', title: 'Custom Design', desc: 'Unique designs that reflect your brand identity.' },
        { icon: '📱', title: 'Fully Responsive', desc: 'Perfect performance on all devices and screen sizes.' },
        { icon: '⚡', title: 'Fast Loading', desc: 'Optimized for speed and Core Web Vitals.' },
        { icon: '🔒', title: 'Secure', desc: 'SSL, security hardening, and regular updates.' },
        { icon: '🔍', title: 'SEO Ready', desc: 'Built with SEO best practices from the ground up.' },
        { icon: '🛠️', title: 'Easy to Manage', desc: 'User-friendly CMS for easy content updates.' },
      ]}
      features={[
        'Custom website design', 'Responsive development', 'CMS integration',
        'Contact forms & lead capture', 'Google Analytics setup', 'SEO optimization',
        'Site speed optimization', 'SSL certificate setup', 'Browser compatibility',
        'Social media integration', 'Live chat integration', '3 months free support',
      ]}
      process={webDevProcess}
      faqs={[
        { q: 'How long does it take to build a website?', a: 'A simple brochure website typically takes 2-4 weeks. A more complex website with custom functionality can take 6-12 weeks. We provide a detailed timeline at the start of each project.' },
        { q: 'Will I be able to update my website myself?', a: 'Yes! We build websites with user-friendly content management systems (CMS) that allow you to update content without technical knowledge. We also provide training after launch.' },
      ]}
      relatedServices={[
        { label: 'WordPress Development', to: '/wordpress-development' },
        { label: 'Laravel Development', to: '/laravel-development' },
        { label: 'SEO Services', to: '/seo-services' },
      ]}
    />
  )
}

export function PHPDevelopment() {
  return (
    <ServicePageTemplate
      badge="PHP Development Services"
      heroEmoji="⚙️"
      title="PHP Development Services"
      subtitle="Robust, scalable, and secure PHP web applications developed by our expert team. Custom PHP solutions that power your business logic and deliver exceptional performance."
      description={[
        "PHP remains one of the most powerful and widely-used server-side programming languages. At Has Remote Solution, our PHP developers have deep expertise in building custom web applications, portals, CMS systems, and API integrations using PHP.",
        "We follow modern PHP development practices including MVC architecture, PSR standards, and object-oriented programming to build maintainable, scalable applications. Our team works with PHP 8.x and all major PHP frameworks.",
        "From custom CRMs and ERP systems to booking platforms and marketplace solutions, our PHP development team can bring any complex web application idea to life.",
      ]}
      benefits={[
        { icon: '💻', title: 'Custom Development', desc: 'Fully custom PHP applications built to your specifications.' },
        { icon: '🔌', title: 'API Integration', desc: 'Seamless integration with third-party APIs and services.' },
        { icon: '📈', title: 'Scalable Solutions', desc: 'Code built to scale as your business grows.' },
        { icon: '🔒', title: 'Secure Coding', desc: 'Security-first development preventing common vulnerabilities.' },
        { icon: '⚡', title: 'High Performance', desc: 'Optimized queries and caching for fast applications.' },
        { icon: '🛠️', title: 'Maintenance', desc: 'Ongoing support and maintenance of PHP applications.' },
      ]}
      features={[
        'Custom PHP application development', 'PHP 8.x development', 'MVC architecture',
        'REST API development', 'Database design & optimization', 'Payment gateway integration',
        'Third-party API integration', 'Custom admin panels', 'Legacy PHP modernization',
        'Code review & refactoring', 'Unit testing', 'Server configuration',
      ]}
      process={webDevProcess}
      faqs={[
        { q: 'Which PHP version do you use?', a: 'We develop on PHP 8.1+ and always recommend upgrading to the latest stable version for security and performance. We can also maintain and update legacy PHP applications.' },
        { q: 'Can you work with existing PHP codebases?', a: 'Yes, we regularly take on existing PHP projects. We start with a code audit to understand the existing architecture and then provide recommendations for improvements, bug fixes, or new features.' },
      ]}
      relatedServices={[
        { label: 'Laravel Development', to: '/laravel-development' },
        { label: 'Website Development', to: '/website-development' },
        { label: 'ReactJS Development', to: '/reactjs-development' },
      ]}
    />
  )
}

export function LaravelDevelopment() {
  return (
    <ServicePageTemplate
      badge="Laravel Development Services"
      heroEmoji="🔴"
      title="Laravel Development Services"
      subtitle="Elegant, scalable web applications built with Laravel — PHP's most popular framework. Clean architecture, rapid development, and enterprise-grade solutions."
      description={[
        "Laravel is the most popular PHP framework, known for its elegant syntax, powerful features, and excellent developer ecosystem. At Has Remote Solution, our Laravel specialists build sophisticated web applications that are maintainable, scalable, and secure.",
        "We leverage Laravel's built-in features including Eloquent ORM, Blade templating, Laravel Sanctum/Passport for API authentication, and the extensive package ecosystem to accelerate development without sacrificing quality.",
        "From SaaS applications and APIs to enterprise management systems and ecommerce platforms, our Laravel team has the experience to handle projects of any size and complexity.",
      ]}
      benefits={[
        { icon: '🚀', title: 'Rapid Development', desc: 'Laravel\'s ecosystem accelerates development significantly.' },
        { icon: '🏗️', title: 'Clean Architecture', desc: 'Well-structured, maintainable codebases with MVC.' },
        { icon: '🔒', title: 'Built-in Security', desc: 'CSRF protection, encryption, and secure authentication.' },
        { icon: '🔌', title: 'RESTful APIs', desc: 'Robust API development with Laravel Sanctum/Passport.' },
        { icon: '📊', title: 'Queue & Events', desc: 'Async processing with queues for better performance.' },
        { icon: '🧪', title: 'Testable Code', desc: 'Built with testing in mind — PHPUnit integration.' },
      ]}
      features={[
        'Custom Laravel application development', 'Laravel API development', 'SaaS application development',
        'Database architecture & migrations', 'Eloquent ORM optimization', 'Real-time features with Pusher',
        'Queue worker implementation', 'Laravel Livewire development', 'Package development',
        'Admin panel with Nova or Filament', 'Multi-tenancy architecture', 'Upgrade & migration',
      ]}
      process={webDevProcess}
      faqs={[
        { q: 'What types of applications are best suited for Laravel?', a: 'Laravel excels at SaaS applications, REST APIs, CRM/ERP systems, ecommerce platforms, booking systems, and any complex web application requiring a solid architectural foundation.' },
        { q: 'Can Laravel handle high-traffic applications?', a: 'Yes! With proper optimization — including caching (Redis), queue workers, CDN integration, and load balancing — Laravel applications can handle millions of requests. We architect solutions for your expected scale from day one.' },
      ]}
      relatedServices={[
        { label: 'PHP Development', to: '/php-development' },
        { label: 'ReactJS Development', to: '/reactjs-development' },
        { label: 'NodeJS Development', to: '/nodejs-development' },
      ]}
    />
  )
}

export function WordPressDevelopment() {
  return (
    <ServicePageTemplate
      badge="WordPress Development"
      heroEmoji="🌐"
      title="WordPress Web Development Services"
      subtitle="Custom WordPress websites, themes, and plugins built for performance and ease of management. From blogs to complex WooCommerce stores and membership sites."
      description={[
        "WordPress powers over 40% of all websites on the internet — and for good reason. Its flexibility, extensive ecosystem, and user-friendly interface make it the ideal platform for businesses of all sizes. At Has Remote Solution, we go beyond standard WordPress templates to create custom, high-performance WordPress solutions.",
        "Our WordPress developers create custom themes from scratch, develop bespoke plugins, integrate third-party services, and optimize existing WordPress sites for speed and security. We build WordPress solutions that are unique to your brand and scale with your business.",
        "Whether you need a simple business website, a feature-rich WooCommerce store, a membership platform, or an enterprise multisite installation, our WordPress team delivers exceptional results.",
      ]}
      benefits={[
        { icon: '🎨', title: 'Custom Themes', desc: 'Unique, pixel-perfect WordPress themes built from scratch.' },
        { icon: '🔌', title: 'Custom Plugins', desc: 'Custom functionality developed as maintainable plugins.' },
        { icon: '🛒', title: 'WooCommerce', desc: 'Full-featured ecommerce stores with WooCommerce.' },
        { icon: '⚡', title: 'Performance', desc: 'Optimized WordPress for sub-2-second load times.' },
        { icon: '🔒', title: 'Security', desc: 'WordPress security hardening and monitoring.' },
        { icon: '📱', title: 'Responsive', desc: 'Mobile-first responsive design for all devices.' },
      ]}
      features={[
        'Custom WordPress theme development', 'Custom plugin development', 'WooCommerce store setup',
        'WordPress migration', 'Speed optimization', 'Security hardening',
        'Multisite configuration', 'Membership site setup', 'LMS development with LearnDash',
        'Page builder customization', 'REST API development', 'Ongoing WordPress maintenance',
      ]}
      process={webDevProcess}
      faqs={[
        { q: 'Should I use WordPress or a custom-built website?', a: 'WordPress is excellent for most business websites, blogs, and ecommerce stores. It offers easy content management and a huge ecosystem. Custom development makes more sense for complex applications with very specific requirements.' },
        { q: 'How do you ensure WordPress site security?', a: 'We implement multiple security layers including strong password policies, limited login attempts, security plugins, regular backups, SSL certificates, file permission hardening, and keeping all themes, plugins, and core updated.' },
      ]}
      relatedServices={[
        { label: 'Website Development', to: '/website-development' },
        { label: 'Magento Development', to: '/magento-development' },
        { label: 'SEO Services', to: '/seo-services' },
      ]}
    />
  )
}

export function MagentoDevelopment() {
  return (
    <ServicePageTemplate
      badge="Magento Development Services"
      heroEmoji="🛍️"
      title="Magento Development Services"
      subtitle="Enterprise-grade ecommerce solutions built on Magento/Adobe Commerce. Complex catalog management, custom checkout flows, and scalable ecommerce architecture."
      description={[
        "Magento (now Adobe Commerce) is the world's leading ecommerce platform for enterprise and mid-market businesses. It offers unmatched flexibility, scalability, and a rich feature set for complex ecommerce requirements. Our Magento certified developers build and optimize high-performance ecommerce stores.",
        "Whether you need a new Magento store, a migration from another platform, or optimization of an existing store, our team has the deep Magento expertise to deliver results. We specialize in both Magento Open Source and Adobe Commerce (formerly Magento Commerce).",
        "From custom module development and theme creation to performance optimization and third-party integrations, we handle every aspect of your Magento project.",
      ]}
      benefits={[
        { icon: '🏢', title: 'Enterprise Scale', desc: 'Handle massive product catalogs and high traffic volumes.' },
        { icon: '🎨', title: 'Custom Themes', desc: 'Unique, conversion-optimized Magento store designs.' },
        { icon: '🔌', title: 'Custom Modules', desc: 'Custom functionality through well-architected modules.' },
        { icon: '⚡', title: 'Performance', desc: 'Magento performance optimization for fast load times.' },
        { icon: '🌐', title: 'Multi-Store', desc: 'Manage multiple stores from a single Magento installation.' },
        { icon: '🔗', title: 'Integrations', desc: 'ERP, CRM, shipping, and payment gateway integrations.' },
      ]}
      features={[
        'Custom Magento theme development', 'Custom module development', 'Adobe Commerce setup',
        'Magento 1 to 2 migration', 'Platform migration to Magento', 'Performance optimization',
        'Multi-store configuration', 'Payment gateway integration', 'Shipping module integration',
        'ERP/CRM integration', 'Magento SEO optimization', 'Magento support & maintenance',
      ]}
      process={webDevProcess}
      faqs={[
        { q: 'Magento 1 vs Magento 2 — which should I use?', a: 'Magento 1 reached end-of-life in 2020, meaning no more security updates. All new projects should be built on Magento 2 (Adobe Commerce). If you\'re still on Magento 1, we strongly recommend migrating.' },
        { q: 'How does Magento compare to Shopify?', a: 'Magento offers more flexibility and customization for complex requirements, while Shopify is easier to manage for simpler stores. Magento is ideal for businesses with complex catalog structures, custom workflows, or enterprise requirements.' },
      ]}
      relatedServices={[
        { label: 'WordPress Development', to: '/wordpress-development' },
        { label: 'Website Development', to: '/website-development' },
        { label: 'Ecommerce SEO', to: '/ecommerce-seo' },
      ]}
    />
  )
}

export function CodeigniterDevelopment() {
  return (
    <ServicePageTemplate
      badge="Codeigniter Development"
      heroEmoji="🔥"
      title="Codeigniter Web Development Services"
      subtitle="Lightweight, fast, and powerful web applications built with the CodeIgniter PHP framework. Ideal for small to medium applications requiring speed and simplicity."
      description={[
        "CodeIgniter is a lightweight PHP framework known for its exceptional performance, small footprint, and straightforward approach to web development. It's an excellent choice for projects requiring a simple, elegant toolkit without configuration overhead.",
        "Our CodeIgniter developers have extensive experience building custom web applications, CRM systems, inventory management tools, and APIs using this framework. We follow best practices to ensure clean, maintainable code.",
        "From greenfield CodeIgniter projects to maintaining and upgrading existing applications, our team delivers reliable solutions on time and within budget.",
      ]}
      benefits={[
        { icon: '⚡', title: 'Lightweight & Fast', desc: 'CodeIgniter\'s minimal footprint means exceptional performance.' },
        { icon: '🚀', title: 'Rapid Development', desc: 'Get to market faster with CodeIgniter\'s simplicity.' },
        { icon: '🔧', title: 'Easy Maintenance', desc: 'Simple code structure makes ongoing maintenance easier.' },
        { icon: '📚', title: 'Excellent Docs', desc: 'Well-documented framework with a large community.' },
        { icon: '🔒', title: 'Secure', desc: 'Built-in security features for safe applications.' },
        { icon: '💰', title: 'Cost Effective', desc: 'Faster development means lower project costs.' },
      ]}
      features={[
        'Custom CodeIgniter application', 'REST API development', 'Database integration',
        'Authentication system', 'Admin panel development', 'CRUD operations',
        'File upload management', 'Email integration', 'Payment gateway integration',
        'CodeIgniter upgrade', 'Performance optimization', 'Bug fixing & support',
      ]}
      process={webDevProcess}
      faqs={[
        { q: 'Is CodeIgniter still relevant in 2025?', a: 'Yes! CodeIgniter 4 is actively maintained and excellent for many project types. Its simplicity, performance, and small learning curve make it a solid choice, especially for smaller to medium-sized web applications.' },
        { q: 'Can you migrate from CodeIgniter 3 to CodeIgniter 4?', a: 'Yes, we offer CodeIgniter 3 to 4 migration services. CI4 is a complete rewrite with significant improvements, and we carefully migrate your application while preserving all functionality.' },
      ]}
      relatedServices={[
        { label: 'PHP Development', to: '/php-development' },
        { label: 'Laravel Development', to: '/laravel-development' },
        { label: 'Website Development', to: '/website-development' },
      ]}
    />
  )
}

export function CakePHPDevelopment() {
  return (
    <ServicePageTemplate
      badge="CakePHP Development Services"
      heroEmoji="🎂"
      title="CakePHP Development Services"
      subtitle="Rapid, convention-over-configuration web applications built with CakePHP. A robust, developer-friendly framework for building reliable PHP applications."
      description={[
        "CakePHP is a mature PHP framework that follows the convention-over-configuration principle, allowing developers to build web applications rapidly without sacrificing structure or flexibility. Our CakePHP developers have years of experience building enterprise applications with this framework.",
        "CakePHP's built-in security, ORM, and scaffolding make it an excellent choice for data-heavy applications like CRMs, booking systems, and custom business applications. Its strict conventions ensure consistent, maintainable codebases.",
        "We deliver CakePHP applications that are secure, well-tested, and built to last, whether it's a new project or maintaining an existing CakePHP application.",
      ]}
      benefits={[
        { icon: '🔧', title: 'Convention-Based', desc: 'Consistent, predictable code structure across teams.' },
        { icon: '🛡️', title: 'Security First', desc: 'Built-in CSRF protection, SQL injection prevention.' },
        { icon: '🗃️', title: 'Powerful ORM', desc: 'CakePHP\'s ORM makes database work elegant and efficient.' },
        { icon: '🚀', title: 'Rapid Scaffolding', desc: 'Generate CRUD operations in minutes with Bake.' },
        { icon: '🧪', title: 'Testing Support', desc: 'Excellent built-in testing utilities.' },
        { icon: '📌', title: 'Mature Framework', desc: 'Battle-tested framework with a long track record.' },
      ]}
      features={[
        'Custom CakePHP application', 'CakePHP API development', 'CakePHP ORM optimization',
        'Authentication & authorization', 'Admin panel development', 'Plugin development',
        'CakePHP 2 to 4 upgrade', 'Legacy CakePHP maintenance', 'Database design',
        'Unit & integration testing', 'Performance tuning', 'Third-party integrations',
      ]}
      process={webDevProcess}
      faqs={[
        { q: 'What is CakePHP best suited for?', a: 'CakePHP excels at data-heavy web applications, enterprise portals, CRM systems, booking platforms, and any application where strict conventions and built-in security are priorities.' },
        { q: 'Do you provide CakePHP upgrade services?', a: 'Yes, we provide upgrades from older CakePHP versions (2.x, 3.x) to the latest CakePHP 4.x or 5.x. We carefully migrate your application while ensuring all functionality works correctly.' },
      ]}
      relatedServices={[
        { label: 'PHP Development', to: '/php-development' },
        { label: 'Laravel Development', to: '/laravel-development' },
        { label: 'CodeIgniter Development', to: '/codeigniter-development' },
      ]}
    />
  )
}
