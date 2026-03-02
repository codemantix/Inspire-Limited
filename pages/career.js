import Layout from "../components/Layout";
import ServiceHero from "../components/services/ServiceHero";
import CareerIntro from "../components/career/CareerHero";
import CareerForm from "../components/career/CareerForm";

export default function Career() {
  return (
    <Layout>
      <ServiceHero
        title="Build a Future While You Work"
        subtitle="Join Inspire Limited — where honest work comes with real training, mentorship, and the chance to grow into something more."
        backgroundImage="/images/hero/why-hero.jpg"
        ctaText="Start Your Application"
        ctaLink="#application-form"
      />
      <CareerIntro />
      <CareerForm />
    </Layout>
  );
}
