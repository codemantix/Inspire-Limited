import { motion } from "framer-motion";
import styles from "./CoreValues.module.css";
// Icons
import HardwareIcon from "@mui/icons-material/Handyman"; // Excellence
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"; // Integrity
import GroupsIcon from "@mui/icons-material/Groups"; // People First
import GavelIcon from "@mui/icons-material/Gavel"; // Compliance/Accountability
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"; // Impact

const values = [
  {
    icon: <HardwareIcon fontSize="large" />,
    title: "Excellence",
    text: "We deliver exceptional quality in every service, exceeding expectations consistently."
  },
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: "Integrity",
    text: "We operate with honesty, transparency, and accountability in all our dealings."
  },
  {
    icon: <GroupsIcon fontSize="large" />,
    title: "People-First",
    text: "We invest in our people, believing their growth drives our success."
  },
  {
    icon: <GavelIcon fontSize="large" />,
    title: "Compliance",
    text: "We maintain the highest standards of regulatory and safety compliance."
  },
  {
     icon: <VolunteerActivismIcon fontSize="large" />,
     title: "Impact",
     text: "We create positive change in the lives of our staff and the spaces we manage."
  }
];

export default function CoreValues() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>OUR VALUES</p>
          <h2 className={styles.title}>What Guides Us Every Day</h2>
        </div>

        <div className={styles.grid}>
          {values.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
