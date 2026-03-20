import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import ServiceHero from "../../components/services/ServiceHero";
import FacilitiesGrid from "../../components/services/commercial/FacilitiesGrid";
import CleaningSolutions from "../../components/services/commercial/CleaningSolutions";
import CommercialHowItWorks from "../../components/services/commercial/CommercialHowItWorks";
import CommercialStandards from "../../components/services/commercial/CommercialStandards";
import CommercialCallToAction from "../../components/services/commercial/CommercialCallToAction";
import CommercialForm from "../../components/services/commercial/CommercialForm";

export default function CommercialIndustrial() {
  return (
    <Layout>
      <SEO
        title="Commercial & Industrial Cleaning Services | Inspire Limited"
        description="Professional commercial and industrial cleaning services in Nigeria. Structured, supervised cleaning that meets hygiene and compliance standards for offices, warehouses, and facilities."
        canonical="/services/commercial-industrial"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Commercial & Industrial Cleaning",
          provider: {
            "@type": "Organization",
            name: "Inspire Limited",
          },
          description: "Structured, supervised commercial and industrial cleaning services meeting hygiene and compliance standards.",
          areaServed: "Nigeria",
        }}
      />
      <ServiceHero
        title="Commercial and Industrial Cleaning That Passes Any Audit"
        subtitle="Your facility reflects your organisation. Dirty floors, neglected washrooms, and cluttered workspaces erode confidence, from staff, clients, and regulators alike. Inspire Limited delivers structured, supervised commercial and industrial cleaning services that meet the hygiene and compliance standards your environment demands."
        backgroundImage="/images/services/commercial.jpg"
        ctaText="Request a Quote"
        ctaLink="#request-quote"
        secondaryCtaText="Talk to Our Team"
        secondaryCtaLink="/contact"
      />
      <FacilitiesGrid />
      <CleaningSolutions />
      <CommercialHowItWorks />
      <CommercialStandards />
      <CommercialForm />
      <CommercialCallToAction />
    </Layout>
  );
}
