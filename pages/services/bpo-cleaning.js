import Layout from "../../components/Layout";
import ServiceHero from "../../components/services/ServiceHero";
import PBOSetsApart from "../../components/services/pbo/PBOSetsApart";
import PBOBenefits from "../../components/services/pbo/PBOBenefits";
import PBOServiceTiers from "../../components/services/pbo/PBOServiceTiers";
import PBOBestFor from "../../components/services/pbo/PBOBestFor";
import PBOHowItWorks from "../../components/services/pbo/PBOHowItWorks";
import PBOCallToAction from "../../components/services/pbo/PBOCallToAction";
import BPOForm from "../../components/services/pbo/BPOForm";

export default function BPO_Cleaning() {
  return (
    <Layout>
      <ServiceHero 
        title="Stop Managing Cleaners. Start Managing Your Business."
        subtitle="Recruiting, training, supervising, and replacing cleaning staff is a full-time job — and it's not yours. Inspire Limited takes that entire function off your plate, supplying vetted, trained, and supervised cleaning personnel directly to your organisation on a structured retainer contract. You get the cleaners. We handle everything else."
        backgroundImage="/images/services/bpo.jpg"
        ctaText="Request a Quote"
        ctaLink="#request-service"
        secondaryCtaText="Talk to Our Team"
        secondaryCtaLink="/contact"
      />
      <PBOBenefits />
      <PBOSetsApart />
      <PBOServiceTiers />
      <PBOBestFor />
      <PBOHowItWorks />
      <div id="request-service">
        <BPOForm />
      </div>
      <PBOCallToAction />
    </Layout>
  );
}