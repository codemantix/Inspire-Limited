import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "./PBOBenefits.module.css";
import BPOForm from "./BPOForm";

export default function PBOBenefits() {
  const benefits = [
    "Reduce hiring, training, and management overhead",
    "Access professionally trained cleaning staff on demand",
    "Flexible scaling based on your operational needs",
    "Maintain compliance with local and safety regulations",
    "Benefit from our workforce development investment",
    "Reliable backup and continuity assurance"
  ];

  return (
    <section className={styles.benefitsSection} id="request-service">
      <div className={styles.container}>
        <div className={styles.benefitsContainer}>
          {/* Benefits List */}
          <div>
            <p className={styles.eyebrow}>WHY OUTSOURCE</p>
            <h2 className={styles.sectionTitle}>Benefits for Your Organization</h2>
            <p className={styles.sectionDesc}>
              By partnering with Inspire Limited for your cleaning personnel needs, 
              you gain more than just staff – you gain a committed partner invested 
              in excellence and workforce development.
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

          {/* Service Request Form */}
          <BPOForm />
        </div>
      </div>
    </section>
  );
}
