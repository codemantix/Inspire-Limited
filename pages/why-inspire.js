import Layout from "../components/Layout";
import ServiceHero from "../components/services/ServiceHero";
import SetsApart from "../components/why-inspire/SetsApart";
import WhyReasons from "../components/why-inspire/WhyReasons";
import StatsBanner from "../components/why-inspire/StatsBanner";
import CSRSection from "../components/why-inspire/CSRSection";
import WhyCallToAction from "../components/why-inspire/WhyCallToAction";

export default function WhyInspire() {
  return (
    <Layout>
      <ServiceHero
        title="Why Choose Inspire Limited"
        subtitle="We don't just send cleaners. We manage your facility - with trained teams, on-site supervisors, regular audits, and full accountability."
        backgroundImage="/images/hero/why-hero.jpg"
        ctaText="Request a Quote"
        ctaLink="/contact"
        secondaryCtaText="Talk to Our Team"
        secondaryCtaLink="/contact"
      />
      <SetsApart />
      <WhyReasons />
      <StatsBanner />
      <CSRSection />
      <WhyCallToAction />
    </Layout>
  );
}