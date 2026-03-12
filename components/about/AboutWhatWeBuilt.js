import { motion } from "framer-motion";
import styles from "./AboutWhatWeBuilt.module.css";

export default function AboutWhatWeBuilt() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.eyebrow}>WHAT WE BUILT</p>
          <h2 className={styles.title}>
            A Facility Services Company With a Development Engine Inside It
          </h2>
          <div className={styles.textBlock}>
            <p>
              Inspire Limited delivers professional cleaning, outsourced facility personnel, and pest control
              services to organisations and homes across Nigeria. But beneath every contract is a structured
              workforce development system that changes what it means to be a cleaner in Nigeria.
            </p>
            <p>
              Every person we deploy goes through rigorous technical training, soft skills development, and a
              12-month career transition program designed to help them move into the career path they genuinely
              want — whether that is a trade, a business, a professional role, or a leadership track within
              Inspire itself.
            </p>
            <p>
              The result is a workforce that shows up with purpose. And clients who get a better, more reliable
              service because of it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
