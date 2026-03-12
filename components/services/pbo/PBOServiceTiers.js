import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./PBOServiceTiers.module.css";

const tiers = ["Essential", "Standard", "Premium"];

const features = [
  {
    label: "Vetted & trained personnel",
    values: [true, true, true],
  },
  {
    label: "Uniforms provided",
    values: [true, true, true],
  },
  {
    label: "Cleaning tools & consumables",
    values: ["Client-provided", true, true],
  },
  {
    label: "Dedicated field supervisor",
    values: [false, false, true],
  },
  {
    label: "Daily checklists & task tracking",
    values: [false, true, true],
  },
  {
    label: "Monthly performance review",
    values: [true, true, true],
  },
  {
    label: "48-hour replacement guarantee",
    values: [true, true, true],
  },
  {
    label: "Minimum contract term",
    values: ["6 months", "6 months", "6 months"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function CellValue({ value }) {
  if (value === true) return <CheckIcon className={styles.iconCheck} />;
  if (value === false) return <CloseIcon className={styles.iconClose} />;
  return <span className={styles.cellText}>{value}</span>;
}

export default function PBOServiceTiers() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>SERVICE TIERS</p>
          <h2 className={styles.sectionTitle}>Choose the Level That Fits Your Facility</h2>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureCol}></th>
                {tiers.map((tier, i) => (
                  <th key={tier} className={`${styles.tierCol} ${i === 2 ? styles.tierColHighlight : ""}`}>
                    {i === 2 && <span className={styles.popularBadge}>Most Popular</span>}
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className={i % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                  <td className={styles.featureLabel}>{feature.label}</td>
                  {feature.values.map((val, j) => (
                    <td key={j} className={`${styles.valueCell} ${j === 2 ? styles.valueCellHighlight : ""}`}>
                      <CellValue value={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.footnote}>
          Not sure which tier is right for you? We&apos;ll recommend based on your facility size and needs.
        </p>
      </motion.div>
    </section>
  );
}
