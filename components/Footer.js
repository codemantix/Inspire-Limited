import Link from "next/link";
import styles from "./Footer.module.css";

const serviceLinks = [
  { href: "/services/outsourced-personnel", label: "Outsourced Personnel" },
  { href: "/services/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/services/residential-cleaning", label: "Residential Cleaning" },
  { href: "/services/pest-control", label: "Pest Control" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandColumn}>
          <div className={styles.logoWrapper}>
            <img src="/InspireLogoWhite.svg" alt="Inspire" className={styles.logoImage} />
          </div>
          <p className={styles.brandCopy}>
            Transforming spaces, transforming people. Professional facility services with a focus on workforce development and career transition.
          </p>
          <p className={styles.quote}>
            "Redefining facility services in Africa"
          </p>
        </div>
        
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Services</h3>
          <ul className={styles.linkList}>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.linkItem}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Company</h3>
          <ul className={styles.linkList}>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.linkItem}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className={styles.divider} />
      
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Inspire Limited. All rights reserved.
        </p>
        <div className={styles.legalLinks}>
          <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
