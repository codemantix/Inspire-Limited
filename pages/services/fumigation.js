import Layout from "../../components/Layout";
import ServiceHero from "../../components/services/ServiceHero";
import MethodologySteps from "../../components/services/fumigation/MethodologySteps";
import PestExpertise from "../../components/services/fumigation/PestExpertise";
import CallToAction from "../../components/services/fumigation/CallToAction";
import PestControlForm from "../../components/services/fumigation/PestControlForm";
import BeforeAfterGallery from "@/components/services/BeforeAfterGallery";

export default function Fumigation() {
  return (
    <Layout>
      <ServiceHero 
        title="Fumigation & Pest Control"
        subtitle="Professional pest management with certified professionals using safe, approved treatment methods to protect your property and health."
        backgroundImage="/images/services/fumigation-hero.jpg"
        ctaText="Schedule an Inspection"
        ctaLink="#request-quote"
      />
      <MethodologySteps />
      <PestExpertise />
      <BeforeAfterGallery/>
      <CallToAction />
      <PestControlForm />
    </Layout>
  );
}
