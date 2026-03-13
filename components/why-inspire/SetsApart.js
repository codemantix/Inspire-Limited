import { motion } from "framer-motion";
import styles from "./SetsApart.module.css";

export default function SetsApart() {
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
          <p className={styles.eyebrow}>THE INSPIRE DIFFERENCE</p>
          <h2 className={styles.title}>
            Most Cleaning Companies Sell Mops and Labour. We Sell Outcomes.
          </h2>
          <div className={styles.textBlock}>
            <p>
              There is no shortage of cleaning companies in Nigeria. What is rare is a company that shows up
              consistently, reports transparently, replaces staff proactively, and treats your facility like it
              matters beyond the invoice. That is the standard we have built Inspire around.
            </p>
            <p className={styles.lead}>
              Here is why organisations choose us, and stay with us.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}