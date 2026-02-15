import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/404.module.css"; // We'll create this

export default function Custom404() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Page Not Found</h2>
          <p className={styles.description}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primaryButton}>
              Go Home
            </Link>
            <Link href="/services" className={styles.secondaryButton}>
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
