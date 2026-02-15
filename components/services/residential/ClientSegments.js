import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "./ClientSegments.module.css";

export default function ClientSegments() {
  const segments = [
    "Individual Homeowners",
    "Residential Estates & Gated Communities",
    "Real Estate Developers",
    "Property & Facility Management Firms"
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>WHO WE SERVE</p>
          <h2 className={styles.sectionTitle}>Trusted by Homeowners & Managers</h2>
          <p className={styles.sectionDesc}>
            Our residential services emphasize discretion, reliability, and attention to detail, 
            delivered by vetted personnel under structured supervision.
          </p>
          
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
