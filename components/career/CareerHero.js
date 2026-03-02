import styles from "./CareerHero.module.css";

export default function CareerIntro() {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Apply to Work With Inspire Limited (BPO Cleaner)</p>
        <p className={styles.body}>
          At Inspire Limited, we believe work should do more than help you earn a living.
          It should help you grow. We provide cleaning and facility services across Nigeria,
          but our work goes beyond spaces. We support people with training, mentorship, and
          real opportunities to move into better careers or businesses over time.
        </p>
        <p className={styles.body}>
          If you are willing to work honestly, learn, and grow, Inspire Limited can be a
          place where your journey begins.
        </p>
      </div>
    </section>
  );
}
