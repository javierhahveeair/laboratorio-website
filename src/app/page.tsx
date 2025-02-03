import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutSection from "@/components/home/AboutSection";
import LocationsPreview from "@/components/home/LocationsPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
      <>
        <Hero />
        <ServicesOverview />
        <AboutSection />
        <LocationsPreview />
        <ContactCTA />
      </>
  )
}
