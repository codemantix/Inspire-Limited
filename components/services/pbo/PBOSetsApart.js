import { motion } from "framer-motion";
import styles from "./PBOSetsApart.module.css";

// Icons
import BadgeIcon from "@mui/icons-material/Badge";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LoopIcon from "@mui/icons-material/Loop";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PBOSetsApart() {
  const setsApart = [
    {
      icon: <BadgeIcon fontSize="large" />,
      title: "Recruitment & Vetting",
      text: "We source, screen, background-check, and reference-verify every cleaner before they step into your facility. You never interview a cleaner again."
    },
    {
      icon: <VerifiedUserIcon fontSize="large" />,
      title: "Training & Certification",
      text: "Every personnel member completes our structured cleaning, hygiene, health & safety, and workplace etiquette training before deployment. They arrive ready."
    },
    {
      icon: <SupervisorAccountIcon fontSize="large" />,
      title: "On-Site Supervision",
      text: "Our field supervisors conduct regular on-site checks, review daily task checklists, and ensure standards are maintained consistently."
    },
    {
      icon: <LoopIcon fontSize="large" />,
      title: "Instant Replacement Guarantee",
      text: "If a cleaner is absent, sick, or underperforming, we replace them within 48 hours — no disruption to your operations, no chasing from your end."
    },
    {
      icon: <AssessmentIcon fontSize="large" />,
      title: "Monthly Reporting",
      text: "You receive a monthly report covering attendance logs, task completion records, supervisor visit notes, and any issues raised and resolved."
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: "Uniforms & Equipment",
      text: "Personnel are uniformed, equipped, and presented professionally — representing your facility’s standards, not undercutting them."
    }
  ];

  return (
    <section className={styles.setsApartSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>BPO SERVICES</p>
          <h2 className={styles.sectionTitle}>Everything Included in Your BPO Contract</h2>
          <p className={styles.sectionDesc}>
            Stop managing cleaners in-house. Under one contract, you get fully managed personnel — recruited, trained, supervised, and replaced by us.
          </p>
        </div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {setsApart.map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
