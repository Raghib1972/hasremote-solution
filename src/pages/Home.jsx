import { useEffect, useRef } from 'react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/ServicesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'
import IndustriesSection from '../components/IndustriesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Home() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  )
}
