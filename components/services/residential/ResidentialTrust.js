import { motion } from "framer-motion";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SchoolIcon from "@mui/icons-material/School";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import StarRateIcon from "@mui/icons-material/StarRate";
import styles from "./ResidentialTrust.module.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ResidentialTrust() {
  const points = [
    {
      icon: <VerifiedUserIcon fontSize="large" />,
      title: "Background-Checked Personnel",
      text: "Every cleaner is screened, reference-verified, and background-checked before they enter any home. Your safety and peace of mind matter.",
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: "Trained to Professional Standards",
      text: "Our residential cleaners are trained in correct cleaning techniques, product use, surface care, and respectful conduct in private homes.",
    },
    {
      icon: <SelfImprovementIcon fontSize="large" />,
      title: "Discreet and Respectful",
      text: "We understand that your home is private. Our teams are trained to work quietly, efficiently, and with complete respect for your space and belongings.",
    },
    {
      icon: <PersonPinIcon fontSize="large" />,
      title: "Consistent Assigned Cleaner",
      text: "For regular bookings, we assign the same cleaner to your home wherever possible, so you build familiarity and comfort over time.",
    },
    {
      icon: <StarRateIcon fontSize="large" />,
      title: "Supervised and Accountable",
      text: "Our field supervisors conduct quality check visits, and every service can be rated and reviewed so we maintain and improve our standard for you.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>WHY TRUST US IN YOUR HOME</p>
          <h2 className={styles.sectionTitle}>Vetted, Trained, and Accountable, Every Time</h2>
          <p className={styles.sectionDesc}>
            We take the responsibility of being in your home seriously. Every precaution is taken so you can feel comfortable from day one.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {points.map((item, index) => (
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
