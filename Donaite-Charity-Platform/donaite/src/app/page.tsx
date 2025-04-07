import { MainLayout } from "@/components/layout/main-layout";
import { HeroSection } from "@/components/layout/hero-section";
import { FeatureSection } from "@/components/layout/feature-section";
import { MapPreviewSection } from "@/components/layout/map-preview-section";
import { CharitySpotlightSection } from "@/components/layout/charity-spotlight-section";
import { AIAssistantSection } from "@/components/layout/ai-assistant-section";
import { ImpactStatsSection } from "@/components/layout/impact-stats-section";
import { CTASection } from "@/components/layout/cta-section";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeatureSection />
      <MapPreviewSection />
      <CharitySpotlightSection />
      <AIAssistantSection />
      <ImpactStatsSection />
      <CTASection />
    </MainLayout>
  );
}
