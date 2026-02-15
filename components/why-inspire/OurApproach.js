import styles from "./OurApproach.module.css";

const steps = [
  {
    number: "01",
    title: "Transform Spaces",
    text: "We deliver clean, safe, and functional environments that support productivity and well-being."
  },
  {
    number: "02",
    title: "Be Transformed",
    text: "We invest in training, mentorship, and supervision to build capable, professional service teams."
  },
  {
    number: "03",
    title: "Transition",
    text: "We support clear career or business transitions for BPO cleaners within 12 months of engagement."
  }
];

export default function OurApproach() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>OUR APPROACH</p>
          <h2 className={styles.title}>How We Work</h2>
          <p className={styles.subtitle}>Our operations are guided by a simple but disciplined framework.</p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
