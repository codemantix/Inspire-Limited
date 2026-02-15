import { motion } from "framer-motion";
import styles from "./PestExpertise.module.css";
// Icons
import BugReportIcon from "@mui/icons-material/BugReport"; // General/Cockroach
import PestControlIcon from "@mui/icons-material/PestControl"; // Rodents/Termites
import CoronavirusIcon from "@mui/icons-material/Coronavirus"; // Virus/Mosquito?
import GrassIcon from "@mui/icons-material/Grass"; // Ants
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ScienceIcon from "@mui/icons-material/Science";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

// Reusing icons or picking best matches
const pests = [
  { name: "Cockroaches", icon: <BugReportIcon /> },
  { name: "Rodents", icon: <PestControlIcon /> },
  { name: "Termites", icon: <BugReportIcon /> }, // Placeholder
  { name: "Bed Bugs", icon: <BugReportIcon /> }, // Placeholder
  { name: "Mosquitoes", icon: <CoronavirusIcon /> },
  { name: "Ants", icon: <GrassIcon /> },
  { name: "Flies", icon: <BugReportIcon /> }, // Placeholder
  { name: "Stored Product Pests", icon: <PestControlIcon /> },
];

const features = [
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: "Certified Professionals",
    desc: "Our pest control technicians are fully certified and regularly trained on the latest treatment methods and safety protocols."
  },
  {
    icon: <ScienceIcon fontSize="large" />,
    title: "Safe & Approved Methods",
    desc: "We use only government-approved treatment chemicals and methods that are effective yet safe for people and the environment."
  },
  {
    icon: <AssignmentTurnedInIcon fontSize="large" />,
    title: "Detailed Reporting",
    desc: "Comprehensive documentation of all inspections, treatments, and recommendations for your records and compliance needs."
  }
];

export default function PestExpertise() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Column: Pests We Handle */}
          <div className={styles.pestsCol}>
            <p className={styles.eyebrow}>EXPERTISE</p>
            <h2 className={styles.title}>Pests We Handle</h2>
            <p className={styles.desc}>
              Our certified professionals are trained to handle a wide range of pest infestations, 
              using targeted treatment methods appropriate for each pest type.
            </p>
            
            <div className={styles.pestGrid}>
              {pests.map((pest, index) => (
                <motion.div 
                  key={index}
                  className={styles.pestCard}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={styles.pestIcon}>{pest.icon}</div>
                  <span className={styles.pestName}>{pest.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Features */}
          <div className={styles.featuresCol}>
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
