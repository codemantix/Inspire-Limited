import Link from "next/link";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <WarningAmberIcon style={{ fontSize: 40 }} />
          </div>
          <div>
            <h2 className={styles.title}>Don't Let Pests Take Over</h2>
            <p className={styles.text}>
              Early intervention prevents costly damage and health risks. Schedule an inspection today.
            </p>
          </div>
        </div>
        
        <Link href="#request-quote" className={styles.button}>
          Schedule an Inspection
          <ArrowForwardIcon fontSize="small" />
        </Link>
      </div>
    </section>
  );
}
