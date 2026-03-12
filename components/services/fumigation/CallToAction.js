import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>TAKE ACTION NOW</p>
        <h2 className={styles.title}>Don&apos;t Wait for an Infestation to Get Worse</h2>
        <p className={styles.subtitle}>
          One inspection tells you everything you need to know. Book a site assessment today.
        </p>

        <div className={styles.buttons}>
          <Link href="#request-quote" className={styles.primaryBtn}>
            Request a Treatment
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
