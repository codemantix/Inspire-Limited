import Link from "next/link";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./PBOCallToAction.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PBOCallToAction() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
      >
        <div className={styles.card}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>Take Cleaning Off Your Org Chart</h2>
            <p className={styles.description}>
              Let Inspire manage your cleaning function end-to-end so your team never has to think about it again.
            </p>
            <div className={styles.buttonRow}>
              <Link href="#request-service" className={styles.primaryButton}>
                Request a Quote
                <ArrowForwardIcon style={{ fontSize: 20 }} />
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Talk to Our Team
              </Link>
            </div>
          </div>

          <div className={styles.rightContent}>
            <h3 className={styles.contactTitle}>Get in Touch</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <PhoneIcon style={{ fontSize: 22, color: "var(--brand-green)" }} />
                <a href="tel:+2348135678905" className={styles.contactText}>
                  (+234) 813 567 8905
                </a>
              </div>
              <div className={styles.contactItem}>
                <EmailIcon style={{ fontSize: 22, color: "var(--brand-green)" }} />
                <a href="mailto:hello@inspireservicesltd.com" className={styles.contactText}>
                  hello@inspireservicesltd.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
