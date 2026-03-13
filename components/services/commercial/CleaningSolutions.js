import { motion } from "framer-motion";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ConstructionIcon from "@mui/icons-material/Construction";
import FactoryIcon from "@mui/icons-material/Factory";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import styles from "./CleaningSolutions.module.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CleaningSolutions() {
  const services = [
    {
      icon: <CleaningServicesIcon fontSize="large" />,
      title: "Routine Office Cleaning",
      text: "Daily or weekly scheduled cleaning of workspaces, boardrooms, lobbies, kitchens, and washrooms, maintaining a consistently clean and professional environment.",
    },
    {
      icon: <AutoFixHighIcon fontSize="large" />,
      title: "Deep Cleaning & Periodic Cleaning",
      text: "Thorough, room-by-room intensive cleaning for quarterly refreshes, post-event restoration, or pre-inspection preparation. We go beyond surface level.",
    },
    {
      icon: <ConstructionIcon fontSize="large" />,
      title: "Post-Construction & Renovation Cleaning",
      text: "Dust, debris, paint residue, and construction waste removed from all surfaces, fixtures, floors, and fittings, leaving the space ready for handover or occupation.",
    },
    {
      icon: <FactoryIcon fontSize="large" />,
      title: "Industrial & Warehouse Facility Cleaning",
      text: "High-dust, high-traffic, and high-risk environments require specialist cleaning. We handle industrial floors, loading bays, equipment areas, and production zones safely.",
    },
    {
      icon: <AccountBalanceIcon fontSize="large" />,
      title: "Bank & Institutional Cleaning",
      text: "Cleaning within secure financial environments calls for vetted personnel, strict access protocols, and documented procedures. We are experienced in exactly this environment.",
    },
    {
      icon: <SquareFootIcon fontSize="large" />,
      title: "Floor Care & Maintenance",
      text: "Scrubbing, polishing, waxing, and mopping of tiled, vinyl, and concrete floors to maintain appearance, safety, and longevity.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>WHAT WE OFFER</p>
          <h2 className={styles.sectionTitle}>Our Commercial & Industrial Cleaning Services</h2>
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