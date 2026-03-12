import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./CommercialCallToAction.module.css";

export default function CommercialCallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.textCol}>
            <p className={styles.eyebrow}>READY TO GET STARTED?</p>
            <h2 className={styles.heading}>
              Let&apos;s Keep Your Facility Compliant, Clean, and Client-Ready
            </h2>
            <p className={styles.subtext}>
              Whether you need a one-off deep clean or a long-term facility cleaning partner, we&apos;ll scope the right solution for your environment.
            </p>
            <div className={styles.buttonRow}>
              <Link href="#request-quote" className={styles.primaryButton}>
                Request a Quote
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Talk to Our Team
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
