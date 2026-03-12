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
      title: "Regular Home Cleaning",
      text: "Scheduled daily, weekly, or bi-weekly cleaning of your home — living areas, bedrooms, bathrooms, kitchen, and common spaces. Consistent, reliable, and always the same standard."
    },
    {
      icon: <ConstructionIcon fontSize="large" />,
      title: "One-Off Deep Cleaning",
      text: "A thorough, room-by-room intensive clean when your home needs a proper reset — after a gathering, before a move, or just because it's been a while. We go into every corner."
    },
    {
      icon: <LocalShippingIcon fontSize="large" />,
      title: "Move-In / Move-Out Cleaning",
      text: "Moving into a new property or leaving one? We clean the entire space — inside wardrobes, behind appliances, windows, floors, bathrooms — so it's fresh and ready."
    },
    {
      icon: <ConstructionIcon fontSize="large" />,
      title: "Post-Construction / Renovation Cleaning",
      text: "Dust, cement residue, paint marks, and debris don't belong in your new space. Our post-construction clean removes all traces of building work so you can settle in immediately."
    },
    {
      icon: <HolidayVillageIcon fontSize="large" />,
      title: "Estate & Managed Property Cleaning",
      text: "For property managers and estate developers, we provide cleaning teams for common areas, stairwells, lobbies, gyms, and outdoor spaces on scheduled or retainer contracts."
    },
    {
      icon: <EventAvailableIcon fontSize="large" />,
      title: "Short-Let & Airbnb Turnaround Cleaning",
      text: "Fast, thorough turnaround cleaning between guest check-outs and check-ins — restocking linens, sanitising surfaces, and leaving the property guest-ready every time."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>WHAT WE OFFER</p>
          <h2 className={styles.sectionTitle}>Residential Cleaning Services</h2>
          <p className={styles.sectionDesc}>
            From routine maintenance to specialized deep cleaning, every service is delivered by vetted, supervised professionals.
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
