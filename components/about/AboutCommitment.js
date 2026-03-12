import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import styles from "./AboutCommitment.module.css";

const stats = [
  {
    icon: <SchoolIcon fontSize="large" />,
    value: "85%",
    label: "Career Transition Success Rate",
  },
  {
    icon: <AssignmentIcon fontSize="large" />,
    value: "100%",
    label: "Staff Training Completion",
  },
  {
    icon: <ThumbUpIcon fontSize="large" />,
    value: "98%",
    label: "Client Satisfaction Rate",
  },
];

export default function AboutCommitment() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.eyebrow}>OUR COMMITMENT TO AFRICA</p>
            <h2 className={styles.title}>
              Redefining What a Cleaning Company Can Be in Africa
            </h2>
            <div className={styles.textBlock}>
              <p>
                The facility services industry in Africa employs millions of people — and most of them are
                trapped in a cycle of low pay, no development, and no pathway forward. We are building a model
                that breaks that cycle.
              </p>
              <p>
                We demonstrate that a cleaning company can deliver excellent, reliable, professional services
                and transform the lives of the people on its payroll.
              </p>
            </div>
          </motion.div>

          <div className={styles.statsCol}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
