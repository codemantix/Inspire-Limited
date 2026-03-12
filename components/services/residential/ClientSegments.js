import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "./ClientSegments.module.css";

export default function ClientSegments() {
  const segments = [
    "Busy professionals who need a reliable weekly cleaner",
    "Estate managers maintaining shared and common areas",
    "Families needing a thorough one-off deep clean",
    "Short-let and Airbnb property owners",
    "Landlords and tenants preparing for move-in or move-out",
    "New homeowners after construction or renovation"
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textCol}>
            <p className={styles.eyebrow}>WHO WE SERVE</p>
            <h2 className={styles.sectionTitle}>You'll Feel Right at Home With Us</h2>
            <p className={styles.sectionDesc}>
              Vetted, trained, and accountable — every time. Our residential teams are assigned specifically to your property and managed throughout.
            </p>
          </div>

          <div className={styles.segmentList}>
            {segments.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.segmentItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.iconBox}>
                  <CheckCircleOutlineIcon />
                </div>
                <span className={styles.segmentText}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
