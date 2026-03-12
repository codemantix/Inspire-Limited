import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./CommercialStandards.module.css";

export default function CommercialStandards() {
  const standards = [
    "ISO-aligned standard operating procedures for all cleaning tasks",
    "Correct chemical handling, labelling, and storage",
    "Colour-coded equipment to prevent cross-contamination",
    "PPE requirements are enforced for all personnel on-site",
    "Health and safety briefing before every industrial site deployment",
    "Full documentation available for audit purposes",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.textCol}>
            <p className={styles.eyebrow}>STANDARDS WE UPHOLD</p>
            <h2 className={styles.sectionTitle}>Compliance Built Into Every Service</h2>
            <p className={styles.sectionDesc}>
              Our procedures are designed for environments where documentation, safety, and accountability are non-negotiable.
            </p>
          </div>

          <div className={styles.standardsList}>
            {standards.map((item, index) => (
              <motion.div
                key={index}
                className={styles.standardItem}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <CheckCircleIcon className={styles.checkIcon} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
