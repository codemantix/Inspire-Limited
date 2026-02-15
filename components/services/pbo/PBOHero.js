import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./PBOHero.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function PBOHero({ 
  title = "Outsourced Cleaning Personnel", 
  subtitle = "Our core differentiator: professionally trained, vetted, and supervised cleaning personnel with embedded workforce development and structured career transition programs.",
  backgroundImage = "/images/services/bpo.jpg" // Default fallback
}) {
  return (
    <section 
      className={styles.heroSection} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
          <Link href="#request-service" className={styles.primaryButton}>
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
