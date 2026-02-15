import { motion } from "framer-motion";
import styles from "./ServiceScope.module.css";
// Icons
import CottageIcon from "@mui/icons-material/Cottage";
import ConstructionIcon from "@mui/icons-material/Construction";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

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

export default function ServiceScope() {
  const services = [
    {
      icon: <CottageIcon fontSize="large" />,
      title: "Routine Home Cleaning",
      text: "Regular cleaning tailored to your household needs, ensuring a consistently pristine environment."
    },
    {
      icon: <ConstructionIcon fontSize="large" />,
      title: "Post-Renovation Cleaning",
      text: "Specialized removal of dust and debris after construction or home improvement projects."
    },
    {
      icon: <LocalShippingIcon fontSize="large" />,
      title: "Move-In / Move-Out",
      text: "Deep cleaning for transitions to ensure spaces are spotless for new occupants."
    },
    {
      icon: <HolidayVillageIcon fontSize="large" />,
      title: "Estate-Wide Programs",
      text: "Coordinated cleaning services for gated communities and residential estates."
    },
    {
      icon: <EventAvailableIcon fontSize="large" />,
      title: "Scheduled & On-Demand",
      text: "Flexible service models offering both recurring schedules and one-off deep cleans."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>OUR SERVICES</p>
          <h2 className={styles.sectionTitle}>Comprehensive Home Care Solutions</h2>
          <p className={styles.sectionDesc}>
            From routine maintenance to specialized deep cleaning, we offer a complete range of 
            residential cleaning services designed to support healthy living environments.
          </p>
        </div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {services.map((item, index) => (
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
