import ServicePageTemplate from '../../components/ServicePageTemplate'

const devProcess = [
  { title: 'Requirements', desc: 'Gather and analyze all technical and business requirements.' },
  { title: 'Architecture', desc: 'Design scalable system architecture and tech stack.' },
  { title: 'Development', desc: 'Build with agile sprints and regular demo sessions.' },
  { title: 'Deploy & Support', desc: 'Deploy to production with CI/CD and ongoing support.' },
]

export function AngularDevelopment() {
  return (
    <ServicePageTemplate
      badge="Angular Development Services"
      heroEmoji="🅰️"
      title="Angular Development Services"
      subtitle="Enterprise-grade Angular applications built by certified experts. Scalable SPAs, progressive web apps, and complex frontend architectures using the latest Angular."
      description={[
        "Angular is Google's powerful TypeScript-based framework for building large-scale, enterprise-grade web applications. Its comprehensive feature set — including dependency injection, RxJS, and Angular Material — makes it ideal for complex frontend applications that need to scale.",
        "Our Angular developers are well-versed in the latest Angular versions and best practices including lazy loading, state management with NgRx, and building highly optimized applications with excellent performance.",
        "From customer-facing SPAs to complex admin dashboards and enterprise portals, our Angular team delivers maintainable, testable, and performant applications.",
      ]}
      benefits={[
        { icon: '🏢', title: 'Enterprise Ready', desc: 'Built for large-scale applications with complex requirements.' },
        { icon: '📐', title: 'TypeScript Based', desc: 'Type safety reduces bugs and improves code quality.' },
        { icon: '🔄', title: 'Reactive Programming', desc: 'RxJS for elegant async data flow management.' },
        { icon: '🧩', title: 'Component Architecture', desc: 'Reusable, modular components for faster development.' },
        { icon: '🧪', title: 'Testable by Design', desc: 'Angular\'s DI system makes unit testing straightforward.' },
        { icon: '⚡', title: 'Performance', desc: 'AOT compilation and lazy loading for optimal performance.' },
      ]}
      features={[
        'Custom Angular SPA development', 'Angular Material UI', 'NgRx state management',
        'Progressive Web App (PWA)', 'RESTful API integration', 'Angular Universal (SSR)',
        'Component library development', 'Angular upgrade & migration', 'Performance optimization',
        'Unit & E2E testing', 'Module federation (micro frontends)', 'CI/CD setup',
      ]}
      process={devProcess}
      faqs={[
        { q: 'Angular vs React — which should I choose?', a: 'Angular is a full framework with everything included, making it great for large enterprise teams and complex apps. React is a library offering more flexibility. We help you choose the right tool based on your team, timeline, and requirements.' },
        { q: 'Can you upgrade our old AngularJS (Angular 1) app?', a: 'Yes! We have experience migrating AngularJS (1.x) applications to modern Angular (2+). We provide a detailed migration plan and execute it incrementally to minimize disruption.' },
      ]}
      relatedServices={[
        { label: 'ReactJS Development', to: '/reactjs-development' },
        { label: 'NodeJS Development', to: '/nodejs-development' },
        { label: 'Mean Stack Development', to: '/mean-stack-development' },
      ]}
    />
  )
}

export function ReactJSDevelopment() {
  return (
    <ServicePageTemplate
      badge="ReactJS Development Services"
      heroEmoji="⚛️"
      title="ReactJS Development Services"
      subtitle="Dynamic, high-performance React applications and SPAs. Component-based architecture for modern web experiences that users love."
      description={[
        "React is the world's most popular JavaScript library for building user interfaces. Developed by Meta, React's component-based architecture, virtual DOM, and rich ecosystem make it the top choice for building modern web applications.",
        "Our React developers are experts in the complete React ecosystem including React Hooks, Context API, Redux, React Query, and Next.js for server-side rendering. We build React applications that are performant, accessible, and maintainable.",
        "From interactive dashboards and real-time applications to complex SPAs and e-commerce frontends, our React team delivers exceptional user experiences.",
      ]}
      benefits={[
        { icon: '⚛️', title: 'Component Reusability', desc: 'Build once, use everywhere — faster development.' },
        { icon: '🚀', title: 'Virtual DOM', desc: 'Highly optimized rendering for smooth user experience.' },
        { icon: '📦', title: 'Rich Ecosystem', desc: 'Thousands of libraries to solve any problem.' },
        { icon: '🔄', title: 'State Management', desc: 'Redux, Zustand, and Context API for complex state.' },
        { icon: '📱', title: 'React Native', desc: 'Share code between web and mobile apps.' },
        { icon: '🌐', title: 'Next.js / SSR', desc: 'Server-side rendering for SEO and performance.' },
      ]}
      features={[
        'Custom React SPA development', 'Next.js development', 'Redux/Zustand state management',
        'React Hooks implementation', 'REST/GraphQL API integration', 'React Native (mobile)',
        'Component library creation', 'Performance optimization', 'React migration from other frameworks',
        'Real-time features with WebSockets', 'Testing with Jest & React Testing Library', 'Storybook setup',
      ]}
      process={devProcess}
      faqs={[
        { q: 'When should I choose Next.js over plain React?', a: 'Choose Next.js when SEO is important (news sites, ecommerce), when you need server-side rendering, or when you want file-based routing and API routes. For internal dashboards or apps behind login, plain React/Create React App is often sufficient.' },
        { q: 'How long does it take to build a React application?', a: 'A simple React SPA can be built in 4-8 weeks. A complex application with many features could take 3-6 months. We break projects into sprints and deliver working features incrementally.' },
      ]}
      relatedServices={[
        { label: 'Angular Development', to: '/angular-development' },
        { label: 'NodeJS Development', to: '/nodejs-development' },
        { label: 'React Native Development', to: '/react-native-development' },
      ]}
    />
  )
}

export function PythonDevelopment() {
  return (
    <ServicePageTemplate
      badge="Python Development Services"
      heroEmoji="🐍"
      title="Python Development Services"
      subtitle="Versatile Python solutions including web applications, AI/ML systems, data processing pipelines, and automation tools built by experienced Python developers."
      description={[
        "Python's simplicity, readability, and vast ecosystem make it one of the most versatile programming languages available. From web development with Django and FastAPI to machine learning with TensorFlow and data science with Pandas, Python excels in almost every technical domain.",
        "Our Python developers bring deep expertise across the Python ecosystem. Whether you need a high-performance web API, a machine learning model, a data processing pipeline, or a automation script, we deliver clean, well-tested Python solutions.",
        "We follow Python best practices including PEP 8 style guidelines, type hints, virtual environments, and comprehensive testing to ensure your Python projects are maintainable and production-ready.",
      ]}
      benefits={[
        { icon: '🤖', title: 'AI & ML Ready', desc: 'Python is the language of AI — build intelligent applications.' },
        { icon: '📊', title: 'Data Processing', desc: 'Powerful data processing and analytics with Pandas/NumPy.' },
        { icon: '🚀', title: 'Rapid Development', desc: 'Python\'s simplicity means faster time-to-market.' },
        { icon: '🔌', title: 'Integration Friendly', desc: 'Easily integrate with any API, database, or service.' },
        { icon: '⚙️', title: 'Automation', desc: 'Automate repetitive tasks and business processes.' },
        { icon: '🌐', title: 'Web APIs', desc: 'Fast, scalable APIs with Django, Flask, or FastAPI.' },
      ]}
      features={[
        'Django web development', 'FastAPI/Flask API development', 'Machine learning solutions',
        'Data pipeline development', 'Web scraping', 'Automation scripts',
        'Python microservices', 'Computer vision solutions', 'NLP applications',
        'Python CLI tools', 'Data visualization', 'Database optimization',
      ]}
      process={devProcess}
      faqs={[
        { q: 'Django vs FastAPI vs Flask — which to choose?', a: 'Django is best for full-featured web applications with batteries included. FastAPI is best for high-performance APIs with automatic documentation. Flask is great for smaller applications or microservices. We recommend based on your specific needs.' },
        { q: 'Can Python handle high-traffic production applications?', a: 'Absolutely. With async frameworks like FastAPI, proper caching, database optimization, and horizontal scaling, Python applications can handle millions of requests. Instagram, Pinterest, and Dropbox are built on Python.' },
      ]}
      relatedServices={[
        { label: 'NodeJS Development', to: '/nodejs-development' },
        { label: 'ReactJS Development', to: '/reactjs-development' },
        { label: 'Angular Development', to: '/angular-development' },
      ]}
    />
  )
}

export function NodeJSDevelopment() {
  return (
    <ServicePageTemplate
      badge="NodeJS Development Services"
      heroEmoji="🟢"
      title="NodeJS Development Services"
      subtitle="Fast, scalable, and real-time Node.js applications. From REST APIs and microservices to real-time chat apps and streaming platforms built on Node.js and Express."
      description={[
        "Node.js revolutionized server-side development by bringing JavaScript to the backend. Its event-driven, non-blocking I/O model makes it ideal for building highly scalable, real-time applications. Our Node.js developers build everything from REST APIs to complex microservice architectures.",
        "We leverage the Node.js ecosystem including Express, Fastify, NestJS, Socket.io, and GraphQL to build production-ready backend solutions. Our APIs are designed for performance, security, and scalability.",
        "Whether you need a simple REST API or a complex distributed microservices architecture, our Node.js team delivers robust solutions that power your applications.",
      ]}
      benefits={[
        { icon: '⚡', title: 'High Performance', desc: 'Non-blocking I/O handles thousands of concurrent connections.' },
        { icon: '🔄', title: 'Real-Time Capable', desc: 'Built-in support for WebSockets and real-time features.' },
        { icon: '🌐', title: 'Full-Stack JS', desc: 'Unified JavaScript across frontend and backend.' },
        { icon: '📦', title: 'NPM Ecosystem', desc: 'Access to over 2 million packages via npm.' },
        { icon: '🏗️', title: 'Microservices', desc: 'Perfect for microservice and serverless architectures.' },
        { icon: '☁️', title: 'Cloud Native', desc: 'Excellent fit for AWS Lambda, Google Cloud Run, etc.' },
      ]}
      features={[
        'REST API development with Express/Fastify', 'GraphQL API development', 'NestJS enterprise apps',
        'Real-time apps with Socket.io', 'Microservices architecture', 'Serverless functions',
        'Database integration (MongoDB, PostgreSQL)', 'Authentication (JWT, OAuth2)', 'Message queue integration',
        'WebSocket applications', 'Performance optimization', 'API documentation',
      ]}
      process={devProcess}
      faqs={[
        { q: 'Is Node.js suitable for CPU-intensive tasks?', a: 'Node.js is ideal for I/O-intensive tasks. For CPU-intensive work, we use Worker Threads, cluster mode, or offload to separate services. For most API backends, this is rarely a limitation.' },
        { q: 'Node.js vs PHP for my backend — which should I choose?', a: 'Node.js excels at real-time applications, APIs serving many concurrent users, and when you want a unified JavaScript stack. PHP is excellent for traditional web applications with proven frameworks. We help you choose based on your team and requirements.' },
      ]}
      relatedServices={[
        { label: 'ReactJS Development', to: '/reactjs-development' },
        { label: 'Angular Development', to: '/angular-development' },
        { label: 'Mean Stack Development', to: '/mean-stack-development' },
      ]}
    />
  )
}

export function ASPDevelopment() {
  return (
    <ServicePageTemplate
      badge="ASP.NET Development Services"
      heroEmoji="🔷"
      title="ASP.NET Development Services"
      subtitle="Enterprise-grade web applications and APIs built with ASP.NET Core. Microsoft's powerful framework for building fast, cross-platform web solutions."
      description={[
        "ASP.NET Core is Microsoft's open-source, cross-platform successor to ASP.NET. It's one of the fastest web frameworks available, making it an excellent choice for enterprise applications that require high performance, strong typing, and excellent tooling.",
        "Our .NET developers specialize in building web APIs, MVC applications, Blazor applications, and microservices using ASP.NET Core. We follow SOLID principles and clean architecture patterns to build maintainable enterprise solutions.",
        "From integrating with Azure services and Microsoft SQL Server to building complex enterprise portals and internal tools, our ASP.NET team delivers reliable, high-performance solutions.",
      ]}
      benefits={[
        { icon: '🏢', title: 'Enterprise Grade', desc: 'Proven at scale by the world\'s largest companies.' },
        { icon: '🚀', title: 'High Performance', desc: 'One of the fastest web frameworks benchmarked.' },
        { icon: '☁️', title: 'Azure Integration', desc: 'Seamless integration with Azure cloud services.' },
        { icon: '🔒', title: 'Security', desc: 'Built-in security features and Microsoft support.' },
        { icon: '🔠', title: 'Strongly Typed', desc: 'C#\'s type system catches errors at compile time.' },
        { icon: '🌐', title: 'Cross Platform', desc: 'Runs on Windows, Linux, and macOS.' },
      ]}
      features={[
        'ASP.NET Core Web API', 'MVC application development', 'Blazor application development',
        'Entity Framework Core', 'SignalR real-time features', 'Azure deployment',
        'Identity & authentication', 'Microservices with .NET', 'SQL Server optimization',
        'Legacy .NET migration to Core', 'Unit testing with xUnit', 'Clean architecture implementation',
      ]}
      process={devProcess}
      faqs={[
        { q: 'Should I use ASP.NET Core or ASP.NET Framework?', a: 'For all new projects, we recommend ASP.NET Core — it\'s cross-platform, higher performance, and actively developed. ASP.NET Framework should only be used when maintaining legacy applications that can\'t be migrated.' },
        { q: 'Do you work with Azure?', a: 'Yes, we have Azure expertise and can deploy your ASP.NET applications to Azure App Service, Azure Kubernetes Service, or Azure Functions. We also leverage Azure services like CosmosDB, Azure Storage, and Azure AD.' },
      ]}
      relatedServices={[
        { label: 'NodeJS Development', to: '/nodejs-development' },
        { label: 'Angular Development', to: '/angular-development' },
        { label: 'Python Development', to: '/python-development' },
      ]}
    />
  )
}

export function MeanStackDevelopment() {
  return (
    <ServicePageTemplate
      badge="MEAN Stack Development"
      heroEmoji="🔗"
      title="MEAN Stack Development Services"
      subtitle="Full-stack JavaScript applications using MongoDB, Express.js, Angular, and Node.js. End-to-end development with a unified technology stack."
      description={[
        "MEAN Stack development uses MongoDB, Express.js, Angular, and Node.js — all JavaScript technologies — to build complete web applications. This unified tech stack enables faster development, code reuse between frontend and backend, and a cohesive team working in one language.",
        "Our MEAN stack developers build everything from MVPs and startups to enterprise applications using this powerful technology combination. The non-relational MongoDB database, Node.js backend, and Angular frontend work together seamlessly.",
        "The MEAN stack is particularly powerful for real-time applications, data-heavy dashboards, social platforms, and any application that benefits from JSON data flowing seamlessly from database to browser.",
      ]}
      benefits={[
        { icon: '🔗', title: 'Unified JavaScript', desc: 'One language across the entire stack — faster development.' },
        { icon: '📊', title: 'JSON Data Flow', desc: 'Native JSON from MongoDB all the way to Angular.' },
        { icon: '🚀', title: 'Rapid Development', desc: 'Reuse code and skills across frontend and backend.' },
        { icon: '⚡', title: 'Real-Time Ready', desc: 'Node.js enables real-time features with WebSockets.' },
        { icon: '☁️', title: 'Cloud Native', desc: 'Each layer deploys easily to cloud environments.' },
        { icon: '🔄', title: 'Flexible Schema', desc: 'MongoDB\'s schema-less design adapts to changing needs.' },
      ]}
      features={[
        'Full MEAN stack application', 'MongoDB schema design', 'Express.js API development',
        'Angular frontend development', 'Node.js backend services', 'RESTful & GraphQL APIs',
        'Real-time features (Socket.io)', 'User authentication (JWT)', 'Cloud deployment (AWS/GCP/Azure)',
        'CI/CD pipeline setup', 'Performance optimization', 'Full stack testing',
      ]}
      process={devProcess}
      faqs={[
        { q: 'MEAN vs MERN — what\'s the difference?', a: 'MEAN uses Angular for the frontend while MERN uses React. Angular is a full framework good for enterprise, while React is a library offering more flexibility. Both use MongoDB, Express, and Node for the backend.' },
        { q: 'Is MEAN stack good for enterprise applications?', a: 'Yes! With Angular\'s enterprise features, Node.js\'s scalability, and MongoDB\'s flexibility, MEAN stack is excellent for enterprise applications. Large companies use each component of the MEAN stack at massive scale.' },
      ]}
      relatedServices={[
        { label: 'NodeJS Development', to: '/nodejs-development' },
        { label: 'Angular Development', to: '/angular-development' },
        { label: 'ReactJS Development', to: '/reactjs-development' },
      ]}
    />
  )
}
