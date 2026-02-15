import styles from "./Benefits.module.css";
// Icons
import BoltIcon from "@mui/icons-material/Bolt"; // Fast Response
import VerifiedIcon from "@mui/icons-material/Verified"; // Fully Insured
import GroupWorkIcon from "@mui/icons-material/GroupWork"; // Dedicated Teams
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Scalable
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // List checks

const mainBenefits = [
  {
    icon: <BoltIcon fontSize="large" />,
    title: "Fast Response",
    text: "Quick deployment & support"
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "Fully Insured",
    text: "Complete peace of mind"
  },
  {
    icon: <GroupWorkIcon fontSize="large" />,
    title: "Dedicated Teams",
    text: "Consistent personnel"
  },
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: "Scalable",
    text: "Grows with your needs"
  }
];

const listBenefits = [
  "Reduced hiring and training costs",
  "Consistent service quality",
  "Reliable backup and continuity",
  "Regulatory compliance assurance",
  "Positive social impact partnership",
  "Flexible scaling options"
];

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left: Text & List */}
          <div className={styles.textCol}>
            <p className={styles.eyebrow}>BENEFITS</p>
            <h2 className={styles.title}>What You Gain With Inspire</h2>
            <p className={styles.description}>
              Partnering with Inspire Limited means more than just contracting a service – 
              it means aligning with a company that values excellence, compliance, and positive social impact.
            </p>
            <ul className={styles.list}>
              {listBenefits.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <CheckCircleIcon className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Grid of Cards */}
          <div className={styles.gridCol}>
            <div className={styles.grid}>
              {mainBenefits.map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.iconWrapper}>{item.icon}</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
