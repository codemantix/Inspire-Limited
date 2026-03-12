import { motion } from "framer-motion";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import SearchIcon from "@mui/icons-material/Search";
import HandshakeIcon from "@mui/icons-material/Handshake";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import styles from "./PBOHowItWorks.module.css";

const steps = [
  {
    number: "01",
    icon: PhoneCallbackIcon,
    title: "Discovery Call",
    desc: "We learn about your facility, current cleaning challenges, staff count needed, and working hours.",
  },
  {
    number: "02",
    icon: SearchIcon,
    title: "Site Assessment",
    desc: "We visit your facility, assess the scope, and design a tailored deployment plan.",
  },
  {
    number: "03",
    icon: HandshakeIcon,
    title: "Contract & Onboarding",
    desc: "We agree on terms, tier, and start date. Our team handles all cleaner assignments and pre-deployment training.",
  },
  {
    number: "04",
    icon: RocketLaunchIcon,
    title: "Deployment",
    desc: "Your Inspire-assigned personnel arrive uniformed, briefed, and ready on day one.",
  },
  {
    number: "05",
    icon: ManageAccountsIcon,
    title: "Ongoing Management",
    desc: "Supervision, reporting, replacements, and quality checks run in the background — you focus on your core business.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PBOHowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>HOW IT WORKS</p>
          <h2 className={styles.sectionTitle}>From Sign-Off to First Day On-Site in 5 Steps</h2>
        </div>

        <motion.div
          className={styles.stepsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} className={styles.stepCard} variants={staggerItem}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.iconWrapper}>
                  <Icon style={{ fontSize: 30, color: "var(--brand-green)" }} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
