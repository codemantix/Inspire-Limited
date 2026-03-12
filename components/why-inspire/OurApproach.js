import styles from "./OurApproach.module.css";

const steps = [
  {
    number: "01",
    title: "We Assess Your Facility",
    text: "We visit your site, understand your requirements, and design a service plan that fits your facility, schedule, and compliance needs."
  },
  {
    number: "02",
    title: "We Deploy and Supervise",
    text: "We assign trained, vetted staff and place a supervisor on-site to oversee quality, attendance, and performance — so you don’t have to."
  },
  {
    number: "03",
    title: "We Report and Improve",
    text: "You receive regular performance reports, and we resolve any issues proactively. Your facility standard only improves over time."
  }
];

export default function OurApproach() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>HOW WE WORK</p>
          <h2 className={styles.title}>Simple, Supervised, and Accountable — Every Time</h2>
          <p className={styles.subtitle}>Our operations follow a structured process that keeps your facility running smoothly.</p>
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
