import Layout from "../../components/Layout";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceScope from "../../components/services/residential/ServiceScope";
import ClientSegments from "../../components/services/residential/ClientSegments";
import ResidentialTrust from "../../components/services/residential/ResidentialTrust";
import ResidentialHowToBook from "../../components/services/residential/ResidentialHowToBook";
import ResidentialCallToAction from "../../components/services/residential/ResidentialCallToAction";
import ResidentialForm from "../../components/services/residential/ResidentialForm";

export default function ResidentialCleaning() {
  return (
    <Layout>
      <ServiceHero
        title="A Spotless Home, Without the Stress of Finding Someone You Can Trust"
        subtitle="Finding a reliable, honest, and thorough house cleaner is one of the most frustrating household tasks. Inspire Limited removes that frustration entirely — providing professional, vetted cleaning personnel for homes, apartments, and residential estates with the same standards we apply to corporate facilities."
        backgroundImage="/images/services/residential.jpg"
        ctaText="Book a Cleaning"
        ctaLink="#request-quote"
        secondaryCtaText="Request a Quote"
        secondaryCtaLink="#request-quote"
      />
      <ServiceScope />
      <ClientSegments />
      <ResidentialTrust />
      <ResidentialHowToBook />
      <ResidentialForm />
      <ResidentialCallToAction />
    </Layout>
  );
}
