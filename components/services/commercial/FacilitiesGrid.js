import { motion } from "framer-motion";
import styles from "./FacilitiesGrid.module.css";

// Icons
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FactoryIcon from "@mui/icons-material/Factory";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import StorefrontIcon from "@mui/icons-material/Storefront";

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

export default function FacilitiesGrid() {
  const facilities = [
    {
      icon: <BusinessIcon fontSize="large" />,
      title: "Corporate Offices",
      text: "Business premises and headquarters."
    },
    {
      icon: <AccountBalanceIcon fontSize="large" />,
      title: "Financial Institutions",
      text: "Banks and secure financial facilities."
    },
    {
      icon: <FactoryIcon fontSize="large" />,
      title: "Industrial",
      text: "Manufacturing plants and factories."
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: "Education",
      text: "Schools, universities, and institutions."
    },
    {
      icon: <LocalHospitalIcon fontSize="large" />,
      title: "Healthcare",
      text: "Hospitals and allied medical facilities."
    },
    {
      icon: <StorefrontIcon fontSize="large" />,
      title: "Retail & Mixed-Use",
      text: "Malls, shops, and hospitality venues."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>FACILITY TYPES</p>
          <h2 className={styles.sectionTitle}>Facilities We Serve</h2>
          <p className={styles.sectionDesc}>
            We deliver comprehensive cleaning services for a wide range of facilities, 
            ensuring hygiene, safety, and compliance across operational environments.
          </p>
        </div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {facilities.map((item, index) => (
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
