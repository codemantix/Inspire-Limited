import { motion } from "framer-motion";
import styles from "./ServicesHeroSection.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ServicesHeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay} />
      <motion.div 
        className={styles.heroContent}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.div variants={fadeInUp} className={styles.badge}>
          <span className={styles.badgeDot} />
          Our Services
        </motion.div>
        <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
          Structured facility and <span className={styles.heroTitleGreen}>environmental services</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className={styles.heroDescription}>
          We provide structured facility and environmental services designed to meet
          operational needs while ensuring quality, safety, and reliability.
        </motion.p>
      </motion.div>
    </section>
  );
}
