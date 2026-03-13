import { motion } from "framer-motion";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>OUR MISSION</p>
          <h2 className={styles.sectionTitle}>Why We Exist and Where We&apos;re Going</h2>
        </div>
        <div className={styles.grid}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.iconWrapper}>
              <TrackChangesIcon fontSize="large" />
            </div>
            <p className={styles.cardLabel}>Mission</p>
            <p className={styles.cardText}>
              To deliver excellent facility and environmental services while creating structured, dignified pathways
              for workforce development and career transition across Africa.
            </p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className={styles.iconWrapper}>
              <VisibilityIcon fontSize="large" />
            </div>
            <p className={styles.cardLabel}>Vision</p>
            <p className={styles.cardText}>
              To be Africa&apos;s most trusted facility services company - known equally for operational excellence
              and the transformative impact we create in the people who power our work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}