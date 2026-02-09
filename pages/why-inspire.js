import Layout from "../components/Layout";
import styles from "./WhyInspire.module.css";

const highlights = [
  "End-to-end service management, not ad-hoc cleaning",
  "Trained and supervised personnel",
  "Consistent quality assurance and reporting",
  "Embedded workforce development model",
  "Trusted by organizations that value reliability",
];

export default function WhyInspire() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.splitGrid}`}>
          <div className={styles.stack}>
            <p className={styles.eyebrow}>What Sets Us Apart</p>
            <h1 className={styles.displayTitle}>Structure, accountability, and impact.</h1>
            <p className={styles.bodyText}>
              Inspire Limited is built on structure, accountability, and people-centered impact.
              We offer reliable, compliant facility services with clear reporting and measurable
              outcomes.
            </p>
          </div>
          <div className={styles.cardSurface}>
            <ul className={styles.list}>
              {highlights.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.listDotLime} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.stack}>
              <p className={styles.eyebrow}>Client Focus</p>
              <h2 className={`${styles.displayTitle} ${styles.displayTitleSm}`}>A partner you can trust.</h2>
              <p className={styles.bodyText}>
                We combine structured recruitment, rigorous supervision, and continuous quality
                audits to deliver reliable service and clear accountability.
              </p>
            </div>
            <div className={styles.ctaList}>
              {[
                "Clear documentation and service verification",
                "Continuous training and mentorship",
                "Health, safety, and environmental compliance",
              ].map((item) => (
                <div key={item} className={styles.listItem}>
                  <span className={styles.listDotGreen} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
