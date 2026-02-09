import Layout from "../components/Layout";
import styles from "./About.module.css";

const values = [
  {
    title: "Dignity of Work",
    desc: "Every role deserves respect, fair treatment, and opportunity.",
  },
  {
    title: "Excellence in Delivery",
    desc: "We uphold high standards in service quality, safety, and compliance.",
  },
  {
    title: "Accountability",
    desc: "We take ownership of performance and outcomes.",
  },
  {
    title: "Impact",
    desc: "We create measurable value in the spaces we manage and in the lives of our people.",
  },
  {
    title: "Integrity",
    desc: "We act ethically, transparently, and responsibly.",
  },
];

export default function About() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.splitGrid}`}>
          <div className={styles.stack}>
            <p className={styles.eyebrow}>About Inspire Limited</p>
            <h1 className={styles.displayTitle}>Raising the standard of facility services.</h1>
            <p className={styles.bodyText}>
              Inspire Limited was established to raise the standard of facility and
              environmental services while creating dignified work and clear career
              pathways for service professionals. We believe clean, well-managed spaces
              enhance clarity, productivity, safety, and overall well-being, and that
              structured employment can serve as a bridge to long-term opportunities.
            </p>
          </div>
          <div className={`${styles.cardSurface} ${styles.cardStack}`}>
            <div>
              <p className={styles.cardSectionTitle}>Vision</p>
              <p className={styles.cardCopyTop}>
                To redefine facility services in Africa by delivering world-class
                environments while creating clear pathways from work to meaningful careers.
              </p>
            </div>
            <div>
              <p className={styles.cardSectionTitle}>Mission</p>
              <p className={styles.cardCopyTop}>
                To provide professional cleaning, facility, and environmental services through
                trained and supervised personnel, while equipping every BPO cleaner with the
                skills, support, and opportunity to transition into their chosen career or
                business within 12 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.sectionStack}`}>
          <div className={styles.stack}>
            <p className={styles.eyebrow}>Our Values</p>
            <h2 className={`${styles.displayTitle} ${styles.displayTitleSm}`}>What we stand for</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueCopy}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.twoColGrid}`}>
          <div className={styles.stack}>
            <p className={styles.eyebrow}>Value Proposition</p>
            <h2 className={`${styles.displayTitle} ${styles.displayTitleSm}`}>Structured, compliant, and people-centered.</h2>
            <p className={styles.bodyText}>
              Inspire Limited differentiates itself through professionally trained and
              supervised service personnel, structured recruitment and performance management,
              compliance with health and safety standards, and clear documentation and reporting.
              Our model blends operational excellence with workforce development, delivering
              reliable service and measurable social impact.
            </p>
          </div>
          <div className={`${styles.listCard} ${styles.stack}`}>
            {[
              "Structured recruitment, onboarding, and supervision",
              "Compliance with health, safety, and environmental standards",
              "Quality inspections, service reporting, and corrective action",
              "Continuous training, mentorship, and impact tracking",
            ].map((item) => (
              <div key={item} className={styles.listItem}>
                <span className={styles.listDot} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
