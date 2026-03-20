import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ContactHero from "../components/contact/ContactHero";
import ContactClients from "../components/contact/ContactClients";
import ContactFormSection from "../components/contact/ContactFormSection";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Inspire Limited | Get a Free Quote"
        description="Get in touch with Inspire Limited for professional cleaning, facility management, and pest control services in Nigeria. Request a free quote today."
        canonical="/contact"
      />
      <ContactHero />
      <ContactClients />
      <ContactFormSection />
    </Layout>
  );
}
