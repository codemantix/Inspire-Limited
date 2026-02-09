import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../Home.module.css";

export default function PBOCleaning() {
  return (
    <Layout>
      <section className={styles.section}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <div className={styles.sectionStack}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Service</p>
              <h1 className={`${styles.displayTitle} ${styles.displayTitleSm}`}>
                PBO Cleaning Personnel
              </h1>
              <p className={styles.bodyText}>
                Trained and supervised cleaners deployed to meet your organization's operational needs.
              </p>
            </div>
            <Link href="/contact" className={styles.primaryButton}>
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}