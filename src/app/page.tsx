import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import WhyChooseUs from '../components/WhyChooseUs'
import LocationSection from '../components/LocationSection'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <LocationSection />
      <CTASection />
    </>
  )
}