import Layout from "../../components/Layout";
import ServiceHero from "../../components/services/ServiceHero";
import PBOSetsApart from "../../components/services/pbo/PBOSetsApart";
import PBOBenefits from "../../components/services/pbo/PBOBenefits";
import BeforeAfterGallery from "@/components/services/BeforeAfterGallery";

export default function BPO_Cleaning() {
  return (
    <Layout>
      <ServiceHero 
        title="Outsourced Cleaning Personnel"
        subtitle="Our core differentiator: professionally trained, vetted, and supervised cleaning personnel with embedded workforce development and structured career transition programs."
        backgroundImage="/images/services/bpo.jpg"
      />
      <PBOSetsApart />
      <BeforeAfterGallery/>
      <PBOBenefits />
    </Layout>
  );
}