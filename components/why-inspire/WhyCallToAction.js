import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./WhyCallToAction.module.css";

export default function WhyCallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>GET STARTED</p>
        <h2 className={styles.title}>Ready to Experience the Inspire Difference?</h2>
        <p className={styles.subtitle}>
          Let&apos;s start with a conversation about your facility, your current challenges, and what a properly
          managed cleaning solution would look like for your organisation.
        </p>
        <div className={styles.buttons}>
          <Link href="/contact" className={styles.primaryBtn}>
            Request a Quote
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