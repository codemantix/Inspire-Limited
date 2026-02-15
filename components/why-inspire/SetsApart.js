import { motion } from "framer-motion";
import styles from "./SetsApart.module.css";
// Icons
import BadgeIcon from "@mui/icons-material/Badge"; // Professionally Trained
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount"; // Supervised
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"; // Compliance
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"; // Social Impact

const features = [
  {
    icon: <BadgeIcon fontSize="large" />,
    title: "Professionally Trained Personnel",
    text: "Every team member undergoes comprehensive training in cleaning techniques, safety protocols, customer service, and professional conduct before deployment."
  },
  {
    icon: <SupervisorAccountIcon fontSize="large" />,
    title: "Supervised Service Delivery",
    text: "Dedicated supervisors ensure consistent quality through regular inspections, performance monitoring, and proactive issue resolution."
  },
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: "Compliance & Accountability",
    text: "We maintain rigorous health, safety, and environmental compliance with documented quality checks, audits, and transparent reporting."
  },
  {
    icon: <VolunteerActivismIcon fontSize="large" />,
    title: "Embedded Social Impact",
    text: "Our workforce development model provides structured career transitions, creating lasting positive impact in the communities we serve."
  }
];

export default function SetsApart() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>OUR DIFFERENCE</p>
          <h2 className={styles.title}>What Sets Us Apart</h2>
        </div>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
