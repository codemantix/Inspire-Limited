import { motion } from "framer-motion";
import styles from "./MethodologySteps.module.css";
// Icons
import SearchIcon from "@mui/icons-material/Search";
import PestControlIcon from "@mui/icons-material/PestControl";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ScienceIcon from "@mui/icons-material/Science";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SecurityIcon from "@mui/icons-material/Security";

export default function MethodologySteps() {
  const steps = [
    {
      icon: <SearchIcon fontSize="large" />,
      title: "Site Inspection",
      desc: "Comprehensive site inspection and pest risk assessment."
    },
    {
      icon: <PestControlIcon fontSize="large" />,
      title: "Identification",
      desc: "Identification of pest types, infestation levels, and environmental factors."
    },
    {
      icon: <PlaylistAddCheckIcon fontSize="large" />,
      title: "Treatment Plan",
      desc: "Development of treatment plans aligned with health, safety, and environmental standards."
    },
    {
      icon: <ScienceIcon fontSize="large" />,
      title: "Chemical Application",
      desc: "Application of approved chemicals and methods using industry‑standard equipment."
    },
    {
      icon: <EngineeringIcon fontSize="large" />,
      title: "Expert Execution",
      desc: "Execution by trained and certified professionals with strict site safety controls."
    },
    {
      icon: <FactCheckIcon fontSize="large" />,
      title: "Evaluation",
      desc: "Post‑treatment evaluation to verify effectiveness."
    },
    {
      icon: <AssignmentIcon fontSize="large" />,
      title: "Reporting",
      desc: "Issuance of service reports, clearance documentation, and compliance records."
    },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: "Prevention",
      desc: "Preventive maintenance programs and periodic monitoring."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>OUR METHODOLOGY</p>
          <h2 className={styles.title}>The Inspire 8-Step Process</h2>
          <p className={styles.desc}>
            Our approach prioritizes human safety, asset protection, regulatory compliance, 
            and long‑term pest management effectiveness.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.number}>0{index + 1}</div>
              <div className={styles.iconWrapper}>{step.icon}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
