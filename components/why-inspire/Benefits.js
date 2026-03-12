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
    text: "Quick deployment & 48hr replacement"
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "Fully Insured",
    text: "Complete peace of mind"
  },
  {
    icon: <GroupWorkIcon fontSize="large" />,
    title: "Dedicated Teams",
    text: "Supervised, consistent personnel"
  },
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: "Scalable",
    text: "Grows with your needs"
  }
];

const listBenefits = [
  "No hiring or HR management",
  "Consistent, supervised service quality",
  "Staff replacement within 48 hours",
  "Full health & safety compliance documentation",
  "Monthly performance reports",
  "Scale up or down as your needs change"
];

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left: Text & List */}
          <div className={styles.textCol}>
            <p className={styles.eyebrow}>WHAT YOU GET</p>
            <h2 className={styles.title}>What Working With Inspire Actually Means For You</h2>
            <p className={styles.description}>
              When you partner with Inspire Limited, facility management disappears from your to-do list.
              Here’s what that looks like in practice.
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
