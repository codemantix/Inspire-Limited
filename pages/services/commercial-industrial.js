import Layout from "../../components/Layout";
import ServiceHero from "../../components/services/ServiceHero";
import FacilitiesGrid from "../../components/services/commercial/FacilitiesGrid";
import CleaningSolutions from "../../components/services/commercial/CleaningSolutions";
import CommercialForm from "../../components/services/commercial/CommercialForm";
import BeforeAfterGallery from "@/components/services/BeforeAfterGallery";

export default function CommercialIndustrial() {
  return (
    <Layout>
      <ServiceHero 
        title="Commercial & Industrial Facility Cleaning"
        subtitle="Professional cleaning services for offices, financial institutions, industrial sites, and public facilities. Tailored to each site’s usage, risk profile, and operational requirements."
        backgroundImage="/images/services/commercial.jpg"
        ctaText="Request a Quote"
        ctaLink="#request-quote"
      />
      <FacilitiesGrid />
      <CleaningSolutions />
      <BeforeAfterGallery/>
      <CommercialForm />
    </Layout>
  );
}
