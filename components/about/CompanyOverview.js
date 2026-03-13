import { motion } from "framer-motion";
import styles from "./CompanyOverview.module.css";

export default function CompanyOverview() {
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
          <p className={styles.eyebrow}>OUR STORY</p>
          <h2 className={styles.title}>We Started With a Simple but Powerful Question</h2>
          <p className={styles.pullquote}>
            &ldquo;What if a cleaning company could do more than clean?&rdquo;
          </p>
          <div className={styles.textBlock}>
            <p>
              Inspire Limited was founded on the belief that the facility services industry, one of the largest
              employers of entry-level and informal labour in Africa, could be structured differently. Not just as
              a business that cleans spaces, but as a platform that transforms the people doing the cleaning.
            </p>
            <p>
              We saw an industry where cleaners were treated as interchangeable, underpaid, and invisible. Where
              organisations struggled to find reliable cleaning staff. Where quality was inconsistent, turnover was
              high, and nobody was winning, not the client, not the worker.
            </p>
            <p>So we built something different.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}