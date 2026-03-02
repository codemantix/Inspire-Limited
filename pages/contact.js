import Layout from "../components/Layout";
import ContactHero from "../components/contact/ContactHero";
import ContactClients from "../components/contact/ContactClients";
import ContactFormSection from "../components/contact/ContactFormSection";

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <ContactClients />
      <ContactFormSection />
    </Layout>
  );
}
