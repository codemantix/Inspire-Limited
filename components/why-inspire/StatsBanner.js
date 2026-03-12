import { motion } from "framer-motion";
import styles from "./StatsBanner.module.css";

const metrics = [
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "97%", label: "SLA & Task Completion Rate" },
  { value: "100%", label: "Personnel Vetted & Certified" },
  { value: "48hrs", label: "Staff Replacement Turnaround" },
  { value: "85%", label: "Career Transition Success Rate" },
];

export default function StatsBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>WHAT OUR NUMBERS SAY</p>
          <h2 className={styles.title}>Results That Speak for Themselves</h2>
        </div>
        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className={styles.value}>{metric.value}</span>
              <span className={styles.label}>{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}