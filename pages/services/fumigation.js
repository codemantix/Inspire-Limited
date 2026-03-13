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
        title="Pest Problems Don't Wait. Neither Do We."
        subtitle="Whether it's cockroaches in your kitchen, rodents in your warehouse, termites in your walls, or bedbugs in your rooms - pest infestations escalate fast and damage more than just property. Inspire Limited delivers professional, inspection-first fumigation and pest control services for residential, commercial, and industrial environments - safely, thoroughly, and with full documentation."
        backgroundImage="/images/services/fumigation-hero.jpg"
        ctaText="Request a Treatment"
        ctaLink="#request-quote"
        secondaryCtaText="Talk to Our Team"
        secondaryCtaLink="/contact"
      />
      <MethodologySteps />
      <PestExpertise />
      {/* <BeforeAfterGallery/> */}
      <PestControlForm />
      <CallToAction />
    </Layout>
  );
}
