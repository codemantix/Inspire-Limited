import { motion } from "framer-motion";
import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Vision & Mission Text */}
          <motion.div 
            className={styles.textCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.block}>
              <div className={styles.iconHeading}>
                <span className={styles.icon}>Our Vision</span>
              </div>
              <h2 className={styles.heading}>Transforming the Facility Services Industry</h2>
              <p className={styles.text}>
                To be the leading facility and environmental services company in Africa, 
                recognized for professional excellence, workforce development, and creating 
                lasting social impact in the communities we serve.
              </p>
            </div>

            <div className={styles.block}>
              <div className={styles.iconHeading}>
                 <span className={styles.icon}>Our Mission</span>
              </div>
              <h2 className={styles.heading}>Excellence Through People</h2>
              <p className={styles.text}>
                To deliver professional, compliant, and reliable facility and environmental 
                services while investing in the dignity of work and structured career 
                transitions for our workforce.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Element / Image */}
          <motion.div 
            className={styles.visualCol}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/images/about-1.jpg" 
                alt="About Inspire Limited" 
                className={styles.aboutImage} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
