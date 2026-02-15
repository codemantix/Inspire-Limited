import Layout from "../components/Layout";
import ServiceHero from "../components/services/ServiceHero";
import CompanyOverview from "../components/about/CompanyOverview";
import VisionMission from "../components/about/VisionMission";
import CoreValues from "../components/about/CoreValues";

export default function About() {
  return (
    <Layout>
      <ServiceHero 
        title="About Inspire Limited"
        subtitle="Redefining facility and environmental services in Africa through professional excellence and meaningful workforce development."
        backgroundImage="/images/hero/about-hero.jpg" // You might need to check if this image exists or use a generic one
        ctaText="Talk to Our Team"
        ctaLink="/contact"
      />
      
      {/* 
        Note: The UI/UX image had "VisionMission" part of the hero logic visually, 
        but implementation wise, separating them is cleaner. 
        However, to match the darker hero transitioning to light sections:
      */}
      
      <CompanyOverview />
      <VisionMission />
      <CoreValues />
    </Layout>
  );
}
