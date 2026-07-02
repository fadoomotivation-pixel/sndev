import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FounderVision from "@/components/sections/FounderVision";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import LocationMap from "@/components/sections/LocationMap";
import ROICalculator from "@/components/sections/ROICalculator";
import Timeline from "@/components/sections/Timeline";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import AIAssistant from "@/components/sections/AIAssistant";
import Blog from "@/components/sections/Blog";
import Awards from "@/components/sections/Awards";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <FounderVision />
      <FeaturedProjects />
      <LocationMap />
      <ROICalculator />
      <Timeline />
      <Testimonials />
      <AIAssistant />
      <Awards />
      <FAQ />
      <Blog />
      <StickyCTA />
    </main>
  );
}
