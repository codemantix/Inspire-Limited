import styles from "./CompanyOverview.module.css";
import { motion } from "framer-motion";

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
          <p className={styles.eyebrow}>WHO WE ARE</p>
          <h2 className={styles.title}>Redefining facility services in Africa</h2>
          <div className={styles.textBlock}>
            <p>
              Inspire Limited was established to raise the standard of facility and environmental services 
              while creating dignified work and clear career pathways for service professionals.
            </p>
            <p>
              We operate with the belief that clean, well-managed spaces enhance clarity, productivity, 
              safety, and overall well-being, and that structured employment can serve as a bridge to 
              long-term opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
