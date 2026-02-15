import Layout from "../components/Layout";
import ServiceHero from "../components/services/ServiceHero";
import SetsApart from "../components/why-inspire/SetsApart";
import StatsBanner from "../components/why-inspire/StatsBanner";
import OurApproach from "../components/why-inspire/OurApproach";
import CSRSection from "../components/why-inspire/CSRSection";
import Benefits from "../components/why-inspire/Benefits";
import CallToAction from "../components/services/fumigation/CallToAction"; // Reuse generic CTA styling or create new? Let's reuse or use ServiceHero CTA.

export default function WhyInspire() {
  return (
    <Layout>
      <ServiceHero 
        title="Why Choose Inspire Limited"
        subtitle="We’re not just a service provider – we’re a partner committed to excellence, compliance, and meaningful workforce development that creates lasting impact."
        backgroundImage="/images/hero/why-hero.jpg" // Need to check if this exists or use generic
        ctaText="Partner With Us"
        ctaLink="/contact"
      />
      
      <SetsApart />
      <StatsBanner />
      <Benefits />
      <OurApproach />
      <CSRSection />

      {/* Bottom CTA */}
      <div style={{ padding: '4rem 2rem', background: '#ffffff', textAlign: 'center' }}>
         <h2 className=" text-2xl" style={{ fontWeight: '800', color: 'var(--brand-ink)', marginBottom: '1rem' }}>
           Ready to Experience the Inspire Difference?
         </h2>
         <p style={{ color: 'var(--brand-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
           Join organizations across Africa who trust Inspire Limited for their facility and environmental services needs.
         </p>
         <a href="/contact" style={{
           display: 'inline-block',
           backgroundColor: 'var(--brand-green)',
           color: 'white',
           padding: '1rem 2.5rem',
           borderRadius: '9999px',
           fontWeight: '700',
           textDecoration: 'none'
         }}>
           Partner With Inspire Limited →
         </a>
      </div>

    </Layout>
  );
}
