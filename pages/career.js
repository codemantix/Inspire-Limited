import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ServiceHero from "../components/services/ServiceHero";
import CareerIntro from "../components/career/CareerHero";
import CareerForm from "../components/career/CareerForm";

export default function Career() {
  return (
    <Layout>
      <SEO
        title="Careers at Inspire Limited | Join Our Team in Nigeria"
        description="Join Inspire Limited and build a future while you work. We offer real training, mentorship, and career transition support for every team member."
        canonical="/career"
      />
      <ServiceHero
        title="Build a Future While You Work"
        subtitle="Join Inspire Limited, where honest work comes with real training, mentorship, and the chance to grow into something more."
        backgroundImage="/images/hero/why-hero.jpg"
        ctaText="Start Your Application"
        ctaLink="#application-form"
      />
      <CareerIntro />
      <CareerForm />
    </Layout>
  );
}
