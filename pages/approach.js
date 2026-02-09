import Layout from "../components/Layout";
import styles from "./Approach.module.css";

const pillars = [
  {
    title: "Transform Spaces",
    desc: "Deliver high-quality cleaning and facility services that provide immediate value to clients.",
  },
  {
    title: "Be Transformed",
    desc: "Provide structured training, mentorship, and life skills support that strengthen employability.",
  },
  {
    title: "Transition",
    desc: "Support a clearly defined exit to a career or business within 12 months of engagement.",
  },
];

export default function Approach() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.sectionStack}`}>
          <div className={styles.stack}>
            <p className={styles.eyebrow}>How We Work</p>
            <h1 className={styles.displayTitle}>Our disciplined operational framework.</h1>
            <p className={styles.bodyText}>
              Our operations are guided by a simple but disciplined framework that ensures
              service excellence while creating lasting social impact.
            </p>
          </div>
          <div className={styles.gridThree}>
            {pillars.map((pillar) => (
              <div key={pillar.title} className={styles.cardSurface}>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardCopy}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.splitGrid}`}>
          <div className={styles.stack}>
            <p className={styles.eyebrow}>People and Social Impact</p>
            <h2 className={`${styles.displayTitle} ${styles.displayTitleSm}`}>
              Workforce development embedded in every engagement.
            </h2>
            <p className={styles.bodyText}>
              Our CSR program is not a separate charity activity. It is embedded into our BPO
              cleaning service model so that operational excellence, workforce development, and
              social impact are co-delivered. This strengthens service reliability, reduces staff
              turnover, and creates a talent pipeline for clients seeking trained entry-level
              employees.
            </p>
          </div>
          <div className={`${styles.cardSurface} ${styles.stack}`}>
            <p className={styles.eyebrow}>CSR Focus</p>
            <ul className={styles.list}>
              {[
                "Individual development plans reviewed monthly",
                "Structured mentorship with experienced staff",
                "Accredited training modules and certifications",
                "Placement and entrepreneurship support",
                "Progress monitoring and outcome reporting",
              ].map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.listDot} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
