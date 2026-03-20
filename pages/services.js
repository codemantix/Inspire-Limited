import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ServicesHeroSection from "../components/services/ServicesHeroSection";
import ServicesGridSection from "../components/services/ServicesGridSection";
import BeforeAfterGallery from "../components/services/BeforeAfterGallery";
import SocialProofSection from "../components/services/SocialProofSection";
import FAQSection from "../components/services/FAQSection";

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Our Services | Cleaning, Facility Management & Pest Control — Inspire Limited"
        description="Explore Inspire Limited's professional services: BPO cleaning, commercial & industrial cleaning, residential cleaning, and fumigation & pest control in Nigeria."
        canonical="/services"
      />
      <ServicesHeroSection />
      <ServicesGridSection />
      {/* <BeforeAfterGallery />
      <SocialProofSection /> */}
      <FAQSection />
    </Layout>
  );
}
