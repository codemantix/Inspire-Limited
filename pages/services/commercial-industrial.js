import Layout from "../../components/Layout";
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
      <ServiceHero
        title="Commercial and Industrial Cleaning That Passes Any Audit"
        subtitle="Your facility reflects your organisation. Dirty floors, neglected washrooms, and cluttered workspaces erode confidence — from staff, clients, and regulators alike. Inspire Limited delivers structured, supervised commercial and industrial cleaning services that meet the hygiene and compliance standards your environment demands."
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
