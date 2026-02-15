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
      title: "Trained Personnel",
      text: "Every team member undergoes comprehensive training in cleaning techniques, safety protocols, and professional conduct."
    },
    {
      icon: <VerifiedUserIcon fontSize="large" />,
      title: "Vetted & Verified",
      text: "Thorough background checks and verification processes ensure you receive trustworthy, reliable personnel."
    },
    {
      icon: <SupervisorAccountIcon fontSize="large" />,
      title: "Ongoing Supervision",
      text: "Dedicated supervisors monitor performance, ensuring consistent quality and addressing issues proactively."
    },
    {
      icon: <LoopIcon fontSize="large" />,
      title: "Reliable Replacement",
      text: "Seamless coverage with trained replacements ensures your operations never experience service gaps."
    },
    {
      icon: <AssessmentIcon fontSize="large" />,
      title: "Performance Monitoring",
      text: "Regular performance assessments and feedback loops maintain high standards across all deployments."
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: "Career Transition",
      text: "Our personnel have structured pathways to grow into supervisory and management roles within the industry."
    }
  ];

  return (
    <section className={styles.setsApartSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>BPO SERVICES</p>
          <h2 className={styles.sectionTitle}>What Sets Our Personnel Apart</h2>
          <p className={styles.sectionDesc}>
            We don't just supply cleaning staff – we deploy professionally developed team members 
            who represent an extension of your organization.
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
