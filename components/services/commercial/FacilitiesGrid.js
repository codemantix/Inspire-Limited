import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "./FacilitiesGrid.module.css";

export default function FacilitiesGrid() {
  const facilities = [
    "Corporate offices and open-plan workspaces",
    "Banks, finance houses, and insurance firms",
    "Industrial sites, warehouses, and manufacturing plants",
    "Government ministries and public institutions",
    "Schools, universities, and training centres",
    "Hospitals, clinics, and health facilities",
    "Event venues and conference centres",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.textCol}>
            <p className={styles.eyebrow}>WHO THIS IS FOR</p>
            <h2 className={styles.sectionTitle}>Built for Environments Where Hygiene Is Non-Negotiable</h2>
            <p className={styles.sectionDesc}>
              We work with organisations that cannot afford cleaning failures — where compliance, consistency, and professionalism are essential.
            </p>
          </div>

          <div className={styles.listCol}>
            {facilities.map((item, index) => (
              <motion.div
                key={index}
                className={styles.facilityItem}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <div className={styles.iconBox}>
                  <CheckCircleOutlineIcon />
                </div>
                <span className={styles.facilityText}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
