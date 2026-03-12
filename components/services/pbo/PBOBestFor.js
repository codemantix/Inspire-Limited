import { motion } from "framer-motion";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import WorkIcon from "@mui/icons-material/Work";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HotelIcon from "@mui/icons-material/Hotel";
import styles from "./PBOBestFor.module.css";

const clients = [
  { icon: BusinessIcon, label: "Corporate offices and headquarters" },
  { icon: AccountBalanceIcon, label: "Banks and financial institutions" },
  { icon: LocalHospitalIcon, label: "Clinics, hospitals, and health facilities" },
  { icon: SchoolIcon, label: "Schools and educational institutions" },
  { icon: PlaceIcon, label: "Churches and religious centres" },
  { icon: WorkIcon, label: "Co-working and serviced office spaces" },
  { icon: ApartmentIcon, label: "Residential estates and property managers" },
  { icon: HotelIcon, label: "Hotels, short-let apartments, and hospitality" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PBOBestFor() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>BEST FOR</p>
          <h2 className={styles.sectionTitle}>Organisations That Trust Us With Their Cleaning Function</h2>
        </div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div key={index} className={styles.card} variants={staggerItem}>
                <div className={styles.iconWrapper}>
                  <Icon style={{ fontSize: 28, color: "var(--brand-green)" }} />
                </div>
                <p className={styles.cardLabel}>{client.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
