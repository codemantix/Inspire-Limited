import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import styles from "./CommercialHowItWorks.module.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CommercialHowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <SearchIcon fontSize="large" />,
      title: "Facility Assessment",
      desc: "We visit your site, assess the areas, usage level, risk profile, and cleaning frequency required. No guesswork - we scope it precisely.",
    },
    {
      number: "02",
      icon: <DescriptionIcon fontSize="large" />,
      title: "Tailored Cleaning Plan",
      desc: "We develop a written cleaning plan with task schedules, personnel assignment, chemical and equipment list, and safety notes specific to your facility.",
    },
    {
      number: "03",
      icon: <SupervisedUserCircleIcon fontSize="large" />,
      title: "Supervised Execution",
      desc: "Our trained cleaning teams execute to the plan, supervised by a field lead who checks standards and signs off task sheets on every visit.",
    },
    {
      number: "04",
      icon: <AssignmentTurnedInIcon fontSize="large" />,
      title: "Quality Sign-Off & Reporting",
      desc: "Every service is followed by a completion report. For retainer clients, we provide monthly summaries with task logs, visits, and any observations noted.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>HOW WE WORK</p>
          <h2 className={styles.sectionTitle}>Our Structured Cleaning Process</h2>
          <p className={styles.sectionDesc}>
            Every engagement follows a documented process - from first visit to ongoing reporting.
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
