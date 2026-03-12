import ServicePageTemplate from '../../components/ServicePageTemplate'

const appProcess = [
  { title: 'Discovery', desc: 'Define app requirements, user journeys, and technical architecture.' },
  { title: 'UI/UX Design', desc: 'Create wireframes and pixel-perfect app designs.' },
  { title: 'Development', desc: 'Build with agile sprints and weekly progress demos.' },
  { title: 'QA & Launch', desc: 'Rigorous testing, app store submission, and launch support.' },
]

export function MobileAppDevelopment() {
  return (
    <ServicePageTemplate
      badge="Mobile App Development"
      heroEmoji="📱"
      title="Mobile App Development Services"
      subtitle="Custom iOS and Android mobile applications that engage users and drive business growth. From MVPs to enterprise-grade apps with millions of users."
      description={[
        "Mobile apps have become the primary way businesses interact with their customers. A well-designed, intuitive mobile app increases customer engagement, loyalty, and revenue. At Has Remote Solution, we build custom mobile applications that users love.",
        "Our mobile development team includes iOS developers, Android developers, and React Native/Flutter specialists. We work with you from concept to app store launch and beyond, ensuring your app delivers exceptional user experiences.",
        "Whether you need a simple utility app, a complex social platform, a marketplace, or an enterprise mobile solution, we have the expertise to build it right.",
      ]}
      benefits={[
        { icon: '🎨', title: 'Beautiful UI/UX', desc: 'Intuitive, platform-native designs users love.' },
        { icon: '⚡', title: 'High Performance', desc: 'Smooth animations and fast load times.' },
        { icon: '🔒', title: 'Secure', desc: 'Industry-standard security and data protection.' },
        { icon: '📊', title: 'Analytics Ready', desc: 'Built-in analytics to track user behavior.' },
        { icon: '🔔', title: 'Push Notifications', desc: 'Engage users with targeted push notifications.' },
        { icon: '💳', title: 'In-App Purchases', desc: 'Monetize with subscriptions and in-app purchases.' },
      ]}
      features={[
        'Native iOS & Android development', 'Cross-platform development', 'Custom UI/UX design',
        'Backend API development', 'Third-party SDK integration', 'Payment integration',
        'Push notification setup', 'Analytics integration', 'App Store & Play Store submission',
        'App maintenance & updates', 'Performance optimization', 'App security implementation',
      ]}
      process={appProcess}
      faqs={[
        { q: 'Should I build a native app or cross-platform app?', a: 'Native apps (Swift/Kotlin) offer the best performance and user experience for each platform. Cross-platform (React Native/Flutter) reduces cost and development time by sharing code between iOS and Android. We recommend based on your budget, timeline, and performance requirements.' },
        { q: 'How much does mobile app development cost?', a: 'A simple app starts from $10,000–$25,000. A medium-complexity app ranges from $25,000–$75,000. Complex apps with extensive features can cost $75,000+. We provide detailed estimates after understanding your requirements.' },
      ]}
      relatedServices={[
        { label: 'iOS Development', to: '/ios-development' },
        { label: 'Android Development', to: '/android-development' },
        { label: 'React Native Development', to: '/react-native-development' },
        { label: 'Flutter Development', to: '/flutter-development' },
      ]}
    />
  )
}

export function IOSDevelopment() {
  return (
    <ServicePageTemplate
      badge="iOS Development Services"
      heroEmoji="🍎"
      title="iOS App Development Services"
      subtitle="Premium iPhone and iPad applications built with Swift and SwiftUI. Native iOS development delivering exceptional performance and user experience on Apple devices."
      description={[
        "iOS applications represent the premium end of mobile development. Apple's platform has the most valuable user base, with iOS users spending significantly more on apps and in-app purchases than Android users. Building a great iOS app means following Apple's Human Interface Guidelines and leveraging the latest iOS capabilities.",
        "Our iOS developers are proficient in Swift, SwiftUI, and UIKit. We build apps that feel native, perform beautifully, and pass Apple's rigorous App Store review process. From simple utility apps to complex real-time applications, we deliver iOS excellence.",
        "We stay current with the latest iOS versions and Apple technologies including ARKit, Core ML, HealthKit, and StoreKit to help you build innovative apps that stand out in the App Store.",
      ]}
      benefits={[
        { icon: '🍎', title: 'Native Swift', desc: 'Built with Swift & SwiftUI for best iOS performance.' },
        { icon: '🎨', title: 'Apple HIG Compliant', desc: 'Follows Apple design guidelines for native feel.' },
        { icon: '🔒', title: 'App Store Ready', desc: 'Optimized to pass Apple\'s review process.' },
        { icon: '🤖', title: 'Core ML', desc: 'On-device machine learning with Apple\'s CoreML.' },
        { icon: '📍', title: 'Location Services', desc: 'Advanced GPS and location features.' },
        { icon: '💳', title: 'Apple Pay', desc: 'Seamless payment integration with Apple Pay.' },
      ]}
      features={[
        'Swift & SwiftUI development', 'UIKit development', 'iPhone & iPad support',
        'iOS App Store submission', 'Apple Watch app extension', 'Core Data integration',
        'CloudKit / iCloud sync', 'Push notifications (APNs)', 'ARKit augmented reality',
        'Core ML on-device AI', 'HealthKit integration', 'StoreKit (in-app purchases)',
      ]}
      process={appProcess}
      faqs={[
        { q: 'SwiftUI vs UIKit — which do you use?', a: 'SwiftUI is Apple\'s modern declarative UI framework and the future of iOS development. UIKit is the traditional approach with more maturity. We use SwiftUI for new projects and UIKit when supporting older iOS versions or working with existing codebases.' },
        { q: 'How long does iOS App Store approval take?', a: 'Apple\'s review process typically takes 1-3 days for initial submissions. Rejections require fixes and resubmission. We follow Apple\'s guidelines meticulously to minimize rejection risk.' },
      ]}
      relatedServices={[
        { label: 'Android Development', to: '/android-development' },
        { label: 'React Native Development', to: '/react-native-development' },
        { label: 'Flutter Development', to: '/flutter-development' },
      ]}
    />
  )
}

export function AndroidDevelopment() {
  return (
    <ServicePageTemplate
      badge="Android Development Services"
      heroEmoji="🤖"
      title="Android App Development Services"
      subtitle="Feature-rich Android applications built with Kotlin and Jetpack Compose. Reach billions of Android users with native, high-performance applications."
      description={[
        "Android is the world's most widely used mobile operating system, powering billions of devices across hundreds of manufacturers. Building a great Android app means reaching the largest possible mobile audience. Our Android developers specialize in building native, performant applications using Kotlin and Jetpack.",
        "We follow Google's Material Design guidelines and Android best practices to create apps that feel natural to Android users. Our team uses modern Android development patterns including MVVM architecture, LiveData, Coroutines, and Jetpack Compose.",
        "From consumer apps in the Play Store to enterprise mobility solutions, our Android development team delivers applications that work flawlessly across the diverse Android ecosystem.",
      ]}
      benefits={[
        { icon: '🤖', title: 'Native Kotlin', desc: 'Built with Kotlin & Jetpack Compose for best performance.' },
        { icon: '🌍', title: 'Massive Reach', desc: 'Access billions of users across all Android devices.' },
        { icon: '🎨', title: 'Material Design', desc: 'Beautiful UI following Google\'s Material Design.' },
        { icon: '🔔', title: 'Firebase Integration', desc: 'Push notifications, analytics, and crashlytics.' },
        { icon: '📊', title: 'Google Services', desc: 'Deep integration with Google Maps, Pay, and more.' },
        { icon: '🔧', title: 'Device Coverage', desc: 'Tested on multiple devices and Android versions.' },
      ]}
      features={[
        'Kotlin development', 'Jetpack Compose UI', 'MVVM Architecture',
        'Google Play Store submission', 'Firebase integration', 'Google Maps integration',
        'Push notifications (FCM)', 'Room database', 'Retrofit API integration',
        'Google Pay integration', 'Wear OS app extension', 'In-app purchases',
      ]}
      process={appProcess}
      faqs={[
        { q: 'Kotlin vs Java for Android — which do you use?', a: 'We exclusively use Kotlin for new Android projects. Kotlin is Google\'s preferred language for Android, offers null safety, coroutines for async code, and significantly reduces boilerplate compared to Java.' },
        { q: 'How do you handle Android fragmentation?', a: 'We test on a range of real devices and emulators covering various Android versions and screen sizes. We use the Android compatibility libraries and follow Material Design guidelines to ensure consistent behavior across devices.' },
      ]}
      relatedServices={[
        { label: 'iOS Development', to: '/ios-development' },
        { label: 'React Native Development', to: '/react-native-development' },
        { label: 'Flutter Development', to: '/flutter-development' },
      ]}
    />
  )
}

export function BlockchainDevelopment() {
  return (
    <ServicePageTemplate
      badge="Blockchain Development"
      heroEmoji="⛓️"
      title="Blockchain Development Services"
      subtitle="Secure, transparent, and decentralized blockchain solutions. Smart contracts, DeFi protocols, NFT platforms, and enterprise blockchain applications."
      description={[
        "Blockchain technology is transforming industries by enabling trustless, transparent, and immutable record-keeping. From DeFi protocols and NFT marketplaces to supply chain tracking and enterprise blockchain solutions, the possibilities are vast.",
        "Our blockchain developers are experienced in Ethereum, Solana, Binance Smart Chain, and other major blockchain platforms. We develop secure smart contracts, custom tokens, NFT platforms, DeFi protocols, and enterprise blockchain solutions.",
        "We audit smart contracts for security vulnerabilities, implement gas optimization strategies, and ensure your blockchain application is ready for production deployment.",
      ]}
      benefits={[
        { icon: '🔒', title: 'Immutable Security', desc: 'Blockchain data cannot be altered or tampered with.' },
        { icon: '🌐', title: 'Decentralized', desc: 'Remove intermediaries and reduce costs.' },
        { icon: '📋', title: 'Smart Contracts', desc: 'Self-executing contracts that automate processes.' },
        { icon: '💎', title: 'NFT Development', desc: 'Create and deploy NFT collections and marketplaces.' },
        { icon: '🏦', title: 'DeFi Solutions', desc: 'Decentralized finance protocols and applications.' },
        { icon: '🔍', title: 'Full Transparency', desc: 'All transactions publicly verifiable on chain.' },
      ]}
      features={[
        'Smart contract development (Solidity)', 'Ethereum DApp development', 'NFT minting platform',
        'NFT marketplace development', 'Token creation (ERC-20, ERC-721)', 'DeFi protocol development',
        'Smart contract auditing', 'Web3 frontend integration', 'Wallet integration (MetaMask)',
        'IPFS integration', 'Blockchain consulting', 'Cross-chain bridge development',
      ]}
      process={appProcess}
      faqs={[
        { q: 'Which blockchain do you develop on?', a: 'We primarily develop on Ethereum and EVM-compatible chains (Polygon, Binance Smart Chain, Avalanche). We also work with Solana for high-performance applications. We recommend the best chain based on your requirements and transaction costs.' },
        { q: 'How do you ensure smart contract security?', a: 'Smart contract security is critical. We follow best practices including formal verification, comprehensive testing, gas optimization, and external security audits before mainnet deployment.' },
      ]}
      relatedServices={[
        { label: 'React Native Development', to: '/react-native-development' },
        { label: 'NodeJS Development', to: '/nodejs-development' },
        { label: 'Python Development', to: '/python-development' },
      ]}
    />
  )
}

export function CrossPlatformDevelopment() {
  return (
    <ServicePageTemplate
      badge="Cross Platform Development"
      heroEmoji="🔀"
      title="Cross Platform App Development Services"
      subtitle="Build once, deploy everywhere. Cost-effective cross-platform mobile applications that run natively on both iOS and Android from a single codebase."
      description={[
        "Cross-platform development allows businesses to build one application that runs on both iOS and Android, reducing development cost and time-to-market by up to 50%. Modern frameworks like React Native and Flutter deliver near-native performance that users can't distinguish from fully native apps.",
        "Our cross-platform developers are experts in React Native and Flutter, the two leading cross-platform frameworks. We help you choose the right framework based on your technical requirements and business goals.",
        "Cross-platform development doesn't mean compromising on quality. With the right architecture and experienced developers, cross-platform apps deliver excellent performance, beautiful UI, and access to all native device features.",
      ]}
      benefits={[
        { icon: '💰', title: 'Cost Effective', desc: 'Up to 50% less cost than building two separate apps.' },
        { icon: '⚡', title: 'Faster Launch', desc: 'Ship to both platforms simultaneously.' },
        { icon: '🔄', title: 'Shared Codebase', desc: '60-90% code sharing between iOS and Android.' },
        { icon: '🎨', title: 'Native Feel', desc: 'Platform-specific UI components for native look.' },
        { icon: '🔧', title: 'Easy Maintenance', desc: 'One codebase means updates deploy to both platforms.' },
        { icon: '📱', title: 'Native APIs', desc: 'Full access to device APIs and native features.' },
      ]}
      features={[
        'React Native development', 'Flutter development', 'iOS & Android deployment',
        'Native module integration', 'Platform-specific UI adaptation', 'API integration',
        'State management (Redux/Riverpod)', 'Push notifications', 'Native navigation',
        'App Store & Play Store launch', 'Over-the-air updates', 'Performance optimization',
      ]}
      process={appProcess}
      faqs={[
        { q: 'React Native vs Flutter — which is better?', a: 'Both are excellent. React Native uses JavaScript/TypeScript and is great if your team already knows React. Flutter uses Dart and offers exceptional UI performance and consistency across platforms. We help you choose based on your team\'s skills and requirements.' },
        { q: 'Can cross-platform apps access all device features?', a: 'Yes. Modern frameworks like React Native and Flutter have access to all native device APIs including camera, GPS, biometrics, Bluetooth, and more through native modules and plugins.' },
      ]}
      relatedServices={[
        { label: 'React Native Development', to: '/react-native-development' },
        { label: 'Flutter Development', to: '/flutter-development' },
        { label: 'iOS Development', to: '/ios-development' },
        { label: 'Android Development', to: '/android-development' },
      ]}
    />
  )
}

export function ReactNativeDevelopment() {
  return (
    <ServicePageTemplate
      badge="React Native Development"
      heroEmoji="⚛️"
      title="React Native App Development Services"
      subtitle="Cross-platform mobile apps built with React Native. Share code between web and mobile, leverage your React knowledge, and ship to iOS and Android simultaneously."
      description={[
        "React Native is Facebook's cross-platform mobile framework that allows developers to build native iOS and Android apps using React and JavaScript. With React Native, you can share code between your web app and mobile app, reducing development time and cost significantly.",
        "Our React Native team builds beautiful, performant mobile applications that users can't distinguish from native apps. We use Expo for rapid prototyping and bare React Native with custom native modules for production-grade applications.",
        "React Native's 'write once, run anywhere' approach combined with our team's expertise in both JavaScript and native development ensures your app is performant, maintainable, and delivered on time.",
      ]}
      benefits={[
        { icon: '⚛️', title: 'React Familiarity', desc: 'Your web React team can build mobile apps.' },
        { icon: '🔄', title: 'Hot Reload', desc: 'See changes instantly without full rebuilds.' },
        { icon: '📦', title: 'Rich Ecosystem', desc: 'Thousands of React Native packages available.' },
        { icon: '💎', title: 'Near-Native Performance', desc: 'New Architecture (JSI) delivers true native performance.' },
        { icon: '🌐', title: 'Web Code Sharing', desc: 'Share business logic between React web and mobile.' },
        { icon: '☁️', title: 'OTA Updates', desc: 'Push updates to users without app store approval (CodePush).' },
      ]}
      features={[
        'React Native app development', 'Expo managed workflow', 'Custom native modules',
        'Navigation (React Navigation)', 'State management (Redux/Zustand)', 'REST/GraphQL API integration',
        'Push notifications (OneSignal/FCM)', 'Offline support', 'Camera & media handling',
        'Maps integration', 'Payment integration', 'iOS & Android deployment',
      ]}
      process={appProcess}
      faqs={[
        { q: 'Expo vs bare React Native?', a: 'Expo is great for getting started quickly and many common use cases. Bare React Native gives more control for custom native code. We typically start with Expo and eject to bare workflow only when we need custom native modules.' },
        { q: 'Is React Native performance as good as native?', a: 'With the New Architecture (JSI and Fabric), React Native performance is very close to native. For most apps, users cannot tell the difference. Performance-critical sections can use native modules for maximum speed.' },
      ]}
      relatedServices={[
        { label: 'Flutter Development', to: '/flutter-development' },
        { label: 'ReactJS Development', to: '/reactjs-development' },
        { label: 'iOS Development', to: '/ios-development' },
      ]}
    />
  )
}

export function FlutterDevelopment() {
  return (
    <ServicePageTemplate
      badge="Flutter Development Services"
      heroEmoji="🦋"
      title="Flutter App Development Services"
      subtitle="Beautiful, natively compiled cross-platform applications built with Flutter. One codebase for iOS, Android, web, and desktop with exceptional UI performance."
      description={[
        "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. With Flutter, we can build apps that run on iOS, Android, web, Windows, macOS, and Linux — all from one Dart codebase.",
        "Flutter's custom rendering engine (Skia/Impeller) means your UI looks pixel-perfect on every platform, not dependent on platform-specific widgets. This gives designers complete creative freedom and ensures a consistent brand experience everywhere.",
        "Our Flutter developers build everything from simple apps to complex, data-driven applications with stunning animations and smooth 60fps performance on all target platforms.",
      ]}
      benefits={[
        { icon: '🦋', title: 'Multi-Platform', desc: 'Deploy to iOS, Android, web, and desktop from one codebase.' },
        { icon: '🎨', title: 'Custom Rendering', desc: 'Pixel-perfect UI on every platform with custom rendering.' },
        { icon: '⚡', title: '60fps Performance', desc: 'Smooth animations at 60fps or 120fps on modern devices.' },
        { icon: '🔥', title: 'Hot Reload', desc: 'See changes instantly during development.' },
        { icon: '📦', title: 'Rich Widgets', desc: 'Extensive built-in widget library and pub.dev packages.' },
        { icon: '💰', title: 'Cost Efficient', desc: 'One team, one codebase, multiple platforms.' },
      ]}
      features={[
        'Flutter iOS & Android app', 'Flutter web app', 'Flutter desktop app (Windows/macOS)',
        'Custom widget development', 'Bloc/Cubit state management', 'Riverpod state management',
        'REST/GraphQL API integration', 'Firebase integration', 'Custom animations',
        'Platform-specific features', 'App Store & Play Store launch', 'Flutter upgrade & migration',
      ]}
      process={appProcess}
      faqs={[
        { q: 'Is Flutter good for production apps?', a: 'Absolutely! Flutter is used by Google, Alibaba, BMW, and thousands of other companies in production. The framework is mature, well-supported, and continues to improve with each release.' },
        { q: 'Can Flutter apps access native device features?', a: 'Yes. Flutter has a rich plugin ecosystem (pub.dev) covering virtually all device APIs. When no plugin exists, we write custom platform channels to access any native API directly.' },
      ]}
      relatedServices={[
        { label: 'React Native Development', to: '/react-native-development' },
        { label: 'iOS Development', to: '/ios-development' },
        { label: 'Android Development', to: '/android-development' },
      ]}
    />
  )
}
