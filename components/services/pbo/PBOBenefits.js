import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "./PBOBenefits.module.css";

export default function PBOBenefits() {
  const benefits = [
    "Inconsistent attendance and no-shows with no backup plan",
    "High cleaner turnover, requiring constant re-hiring",
    "No structured training — standards slip over time",
    "HR and payroll burden for non-core staff",
    "No one to call when a cleaner underperforms or disappears",
    "Compliance gaps — no documentation, no safety protocols"
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <div className={styles.benefitsContainer}>
          {/* Benefits List */}
          <div>
            <p className={styles.eyebrow}>THE PROBLEM WE SOLVE</p>
            <h2 className={styles.sectionTitle}>What Organisations Deal With When They Manage Cleaners In-House</h2>
            <p className={styles.sectionDesc}>
              Inspire eliminates every one of these problems under one monthly contract.
            </p>
            <ul className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className={styles.benefitItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircleOutlineIcon className={styles.checkIcon} />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
