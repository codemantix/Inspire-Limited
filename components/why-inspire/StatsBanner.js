import styles from "./StatsBanner.module.css";

const stats = [
  { value: "30+", label: "Trained Personnel" },
  { value: "20+", label: "Corporate Clients" },
  { value: "99%", label: "Retention Rate" },
  { value: "100%", label: "Compliance Record" }
];

export default function StatsBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
