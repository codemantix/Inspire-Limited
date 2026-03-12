import Layout from "../components/Layout";
import ServiceHero from "../components/services/ServiceHero";
import CompanyOverview from "../components/about/CompanyOverview";
import AboutWhatWeBuilt from "../components/about/AboutWhatWeBuilt";
import VisionMission from "../components/about/VisionMission";
import AboutOurPeople from "../components/about/AboutOurPeople";
import CoreValues from "../components/about/CoreValues";
import AboutCommitment from "../components/about/AboutCommitment";
import AboutCallToAction from "../components/about/AboutCallToAction";

export default function About() {
  return (
    <Layout>
      <ServiceHero
        title="About Inspire Limited"
        subtitle="We deliver professional facility services to organisations across Nigeria - and invest in the development of every person on our team."
        backgroundImage="/images/hero/about-hero.jpg"
        ctaText="Explore Our Services"
        ctaLink="/services"
        secondaryCtaText="Talk to Our Team"
        secondaryCtaLink="/contact"
      />
      <CompanyOverview />
      <AboutWhatWeBuilt />
      <VisionMission />
      <AboutOurPeople />
      <CoreValues />
      <AboutCommitment />
      <AboutCallToAction />
    </Layout>
  );
}