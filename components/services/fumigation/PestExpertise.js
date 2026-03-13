import { motion } from "framer-motion";
import styles from "./PestExpertise.module.css";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HotelIcon from "@mui/icons-material/Hotel";
import ConstructionIcon from "@mui/icons-material/Construction";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ScienceIcon from "@mui/icons-material/Science";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

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
  const environments = [
    { icon: <HomeIcon />, title: "Homes and apartments", desc: "Safe, discreet residential treatment" },
    { icon: <BusinessIcon />, title: "Offices and corporate facilities", desc: "Minimal disruption, full compliance" },
    { icon: <AccountBalanceIcon />, title: "Banks and financial institutions", desc: "Vetted technicians, documented service" },
    { icon: <WarehouseIcon />, title: "Warehouses and manufacturing plants", desc: "Industrial-grade programs" },
    { icon: <RestaurantIcon />, title: "Restaurants and food businesses", desc: "Regulatory-compliant pest management" },
    { icon: <LocalHospitalIcon />, title: "Hospitals and clinics", desc: "Infection-risk-aware treatment protocols" },
    { icon: <HotelIcon />, title: "Hotels and short-let properties", desc: "Fast turnaround, guest-safe chemicals" },
    { icon: <ConstructionIcon />, title: "New constructions", desc: "Pre-occupancy treatment and termite prevention" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Column: Environments We Protect */}
          <div className={styles.pestsCol}>
            <p className={styles.eyebrow}>WHO THIS IS FOR</p>
            <h2 className={styles.title}>We Protect Every Kind of Environment</h2>
            <p className={styles.desc}>
              Our certified pest control professionals are equipped to handle every environment type - residential, commercial, or industrial.
            </p>
            
            <div className={styles.pestGrid}>
              {environments.map((item, index) => (
                <motion.div 
                  key={index}
                  className={styles.pestCard}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={styles.pestIcon}>{item.icon}</div>
                  <div>
                    <span className={styles.pestName}>{item.title}</span>
                    <p style={{ fontSize: '0.75rem', color: '#666', margin: 0 }}>{item.desc}</p>
                  </div>
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
