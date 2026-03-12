import { motion } from "framer-motion";
import styles from "./AboutOurPeople.module.css";

export default function AboutOurPeople() {
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
          <p className={styles.eyebrow}>OUR PEOPLE</p>
          <h2 className={styles.title}>The Team Behind the Work</h2>
          <div className={styles.textBlock}>
            <p>
              Inspire Limited is built by people who take both sides of our mission seriously — the service
              side and the people side.
            </p>
            <p>
              Our operations team brings together experience in facility management, health and safety, quality
              assurance, and client service. Our development team designs and runs the training, mentorship, and
              career transition programs that make our workforce different from any other cleaning company&apos;s.
            </p>
            <p>
              Together, we run a business where excellence in delivery and investment in people are not in
              tension — they reinforce each other.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
