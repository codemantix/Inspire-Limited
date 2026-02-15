import Layout from "../../components/Layout";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceScope from "../../components/services/residential/ServiceScope";
import ClientSegments from "../../components/services/residential/ClientSegments";
import ResidentialForm from "../../components/services/residential/ResidentialForm";
import BeforeAfterGallery from "@/components/services/BeforeAfterGallery";

export default function ResidentialCleaning() {
  return (
    <Layout>
      <ServiceHero 
        title="Residential Cleaning Services"
        subtitle="We provide reliable, discreet, and detail-oriented cleaning services for homes, estates, and managed residential properties. Our teams are vetted, supervised, and trained to deliver high-quality service."
        backgroundImage="/images/services/residential.jpg"
        ctaText="Request a Quote"
        ctaLink="#request-quote"
      />
      <ServiceScope />
      <ClientSegments />
      <BeforeAfterGallery/>
      <ResidentialForm />
    </Layout>
  );
}
