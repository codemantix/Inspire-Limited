import { motion } from "framer-motion";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import styles from "./ResidentialHowToBook.module.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ResidentialHowToBook() {
  const steps = [
    {
      number: "01",
      icon: <HomeWorkIcon fontSize="large" />,
      title: "Tell Us About Your Home",
      desc: "Fill in our short request form with your property type, size, service needed, and preferred schedule.",
    },
    {
      number: "02",
      icon: <RequestQuoteIcon fontSize="large" />,
      title: "We Confirm and Quote",
      desc: "We review your details and send a clear, no-obligation quote. For larger or complex spaces, we may schedule a brief call.",
    },
    {
      number: "03",
      icon: <CleaningServicesIcon fontSize="large" />,
      title: "We Show Up and Clean",
      desc: "Your assigned cleaner arrives on time, equipped, and ready to work. You get a clean home — no supervision needed from your end.",
    },
    {
      number: "04",
      icon: <EventRepeatIcon fontSize="large" />,
      title: "Ongoing Bookings",
      desc: "For regular clients, we schedule recurring visits automatically. Just let us know if anything changes.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>HOW TO BOOK</p>
          <h2 className={styles.sectionTitle}>Getting Started Is Simple</h2>
          <p className={styles.sectionDesc}>
            From your first request to your first clean — the whole process takes minutes to start.
          </p>
        </div>

        <motion.div
          className={styles.stepsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {steps.map((step) => (
            <motion.div key={step.number} className={styles.stepCard} variants={fadeInUp}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.iconWrapper}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
