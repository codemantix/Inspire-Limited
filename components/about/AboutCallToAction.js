import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./AboutCallToAction.module.css";

export default function AboutCallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>GET IN TOUCH</p>
        <h2 className={styles.title}>Want to Know More About How We Work?</h2>
        <p className={styles.subtitle}>
          Explore our services, meet our team, or reach out directly - we&apos;d love to tell you more about
          what Inspire can do for your organisation.
        </p>

        <div className={styles.buttons}>
          <Link href="/services" className={styles.primaryBtn}>
            Explore Our Services
            <ArrowForwardIcon fontSize="small" />
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Talk to Our Team
          </Link>
        </div>

        <div className={styles.contact}>
          <a href="tel:+2349132736772" className={styles.contactItem}>
            <PhoneIcon fontSize="small" />
            <span>(+234) 913 273 6772</span>
          </a>
          <a href="mailto:hello@inspireservicesltd.com" className={styles.contactItem}>
            <EmailIcon fontSize="small" />
            <span>hello@inspireservicesltd.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
