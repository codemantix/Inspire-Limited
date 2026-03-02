import { useState } from "react";
import { motion } from "framer-motion";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styles from "./ContactHero.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function ContactHero() {
  const [activeIntent, setActiveIntent] = useState(null);

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <motion.p
          className={styles.heroBadge}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          Contact Us
        </motion.p>
        <motion.h1
          className={styles.heroTitle}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className={styles.heroSubtitle}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
        >
          Let&apos;s discuss how Inspire Limited can support your facility&apos;s needs.
        </motion.p>
        {/* <motion.div
          className={styles.heroCTAs}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={3}
        >
          <button
            className={`${styles.ctaBtn} ${activeIntent === "quote" ? styles.ctaBtnActive : ""}`}
            onClick={() => setActiveIntent("quote")}
            disabled
          >
            <RequestQuoteIcon fontSize="small" />
            Request a Quote
          </button>
          <button
            className={`${styles.ctaBtnOutline} ${activeIntent === "consult" ? styles.ctaBtnOutlineActive : ""}`}
            disabled
            onClick={() => setActiveIntent("consult")}
          >
            <CalendarMonthIcon fontSize="small" />
            Schedule a Consultation
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
