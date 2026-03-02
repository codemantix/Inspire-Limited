import { motion } from "framer-motion";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import styles from "./ContactClients.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const clients = [
  { icon: BusinessIcon, label: "Corporate Offices" },
  { icon: FactoryIcon, label: "Industrial Facilities" },
  { icon: HomeWorkIcon, label: "Residential Properties" },
  { icon: AccountBalanceIcon, label: "Institutions" },
];

export default function ContactClients() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.p
          className={styles.eyebrow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          Our Clients
        </motion.p>
        <motion.h2
          className={styles.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          Who We Work With
        </motion.h2>
        <div className={styles.clientsGrid}>
          {clients.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i * 0.8}
            >
              <div className={styles.iconWrap}>
                <Icon className={styles.icon} />
              </div>
              <p className={styles.label}>{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
