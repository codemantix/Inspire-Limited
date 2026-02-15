import Layout from "../components/Layout";
import ServicesHeroSection from "../components/services/ServicesHeroSection";
import ServicesGridSection from "../components/services/ServicesGridSection";
import BeforeAfterGallery from "../components/services/BeforeAfterGallery";
import SocialProofSection from "../components/services/SocialProofSection";
import FAQSection from "../components/services/FAQSection";

export default function Services() {
  return (
    <Layout>
      <ServicesHeroSection />
      <ServicesGridSection />
      <BeforeAfterGallery />
      <SocialProofSection />
      <FAQSection />
    </Layout>
  );
}
