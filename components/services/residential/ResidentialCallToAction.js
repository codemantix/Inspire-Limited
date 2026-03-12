import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./ResidentialCallToAction.module.css";

export default function ResidentialCallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.textCol}>
            <p className={styles.eyebrow}>READY TO GET STARTED?</p>
            <h2 className={styles.heading}>Book a Professional Home Clean Today</h2>
            <p className={styles.subtext}>
              Reliable, vetted, and trained. Your home deserves better than a gamble.
            </p>
            <div className={styles.buttonRow}>
              <Link href="#request-quote" className={styles.primaryButton}>
                Book a Cleaning
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Request a Quote
              </Link>
            </div>
          </div>

          <div className={styles.contactCol}>
            <p className={styles.contactLabel}>Or reach us directly</p>
            <div className={styles.contactItem}>
              <PhoneIcon className={styles.contactIcon} />
              <span>(+234) 913 273 6772</span>
            </div>
            <div className={styles.contactItem}>
              <EmailIcon className={styles.contactIcon} />
              <span>hello@inspireservicesltd.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
