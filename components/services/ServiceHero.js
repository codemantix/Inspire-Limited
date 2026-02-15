import { motion } from "framer-motion";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./ServiceHero.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ServiceHero({ 
  title, 
  subtitle,
  backgroundImage,
  ctaText = "Request a Quote",
  ctaLink = "#request-service"
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
          <Link href={ctaLink} className={styles.primaryButton}>
            <span>{ctaText}</span>
            <ArrowForwardIcon className={styles.btnIcon} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
