import Layout from "../components/Layout";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.splitGrid}`}>
          <div className={styles.stack}>
            <p className={styles.eyebrow}>Get in Touch</p>
            <h1 className={styles.displayTitle}>Let's discuss your facility needs.</h1>
            <p className={styles.bodyText}>
              Tell us about your service requirements and we will respond in 24 hours with a
              tailored recommendation.
            </p>
            <div className={`${styles.cardSurface} ${styles.cardStack}`}>
              <p className={styles.ctaTitle}>CTA Options</p>
              <ul className={styles.ctaList}>
                <li>Request a Quote</li>
                <li>Schedule a Consultation</li>
              </ul>
            </div>
          </div>
          <form className={`${styles.form} ${styles.formStack}`}>
            <div>
              <label className={styles.label}>
                Full Name
              </label>
              <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} placeholder="Your name" />
            </div>
            <div>
              <label className={styles.label}>
                Email Address
              </label>
              <input type="email" className={`${styles.inputField} ${styles.fieldSpacing}`} placeholder="you@email.com" />
            </div>
            <div>
              <label className={styles.label}>
                Phone Number
              </label>
              <input type="tel" className={`${styles.inputField} ${styles.fieldSpacing}`} placeholder="+234" />
            </div>
            <div>
              <label className={styles.label}>
                How can we help?
              </label>
              <textarea
                className={`${styles.inputField} ${styles.textareaField} ${styles.fieldSpacing}`}
                placeholder="Describe your facility needs"
              />
            </div>
            <button type="submit" className={styles.primaryButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
