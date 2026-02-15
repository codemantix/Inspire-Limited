import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "./CleaningSolutions.module.css";

export default function CleaningSolutions() {
  const solutions = [
    "Daily, periodic, and deep cleaning programs",
    "Hard and soft surface cleaning",
    "Restroom sanitation and hygiene management",
    "Waste handling and disposal coordination",
    "Use of appropriate cleaning chemicals and equipment",
    "Compliance with site-specific health & safety protocols",
    "Quality inspections and service reporting",
    "Corrective action management"
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>OPERATIONAL COVERAGE</p>
          <h2 className={styles.sectionTitle}>Comprehensive Cleaning Programs</h2>
          <p className={styles.sectionDesc}>
            Services are delivered using standardized operating procedures adapted 
            to each facility’s risk profile and usage patterns.
          </p>
          
          <ul className={styles.solutionList}>
            {solutions.map((item, index) => (
              <motion.li 
                key={index} 
                className={styles.solutionItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircleOutlineIcon className={styles.checkIcon} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
