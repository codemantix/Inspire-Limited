import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/services", label: "Service", hasDropdown: true },
  { href: "/about", label: "About" },
  { href: "/why-inspire", label: "Why Inspire" },
  { href: "/contact", label: "Career" },
];

const serviceDropdownItems = [
  { href: "/services", label: "All Services" },
  { href: "/services/pbo-cleaning", label: "PBO Cleaning Personnel" },
  { href: "/services/commercial-industrial", label: "Commercial & Industrial" },
  { href: "/services/residential", label: "Residential Cleaning" },
  { href: "/services/fumigation", label: "Fumigation & Pest Control" },
];

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logo}>
            <img src="/InspireLogo.svg" alt="Inspire" className={styles.logoImage} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <div 
              key={link.href} 
              className={styles.navItemWrapper}
              onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
            >
              <Link href={link.href} className={styles.navLink}>
                {link.label}
                {link.hasDropdown && <KeyboardArrowDownIcon style={{ fontSize: 18, marginLeft: 4 }} />}
              </Link>
              
              {link.hasDropdown && (
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className={styles.dropdown}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {serviceDropdownItems.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href} 
                          className={styles.dropdownItem}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className={styles.primaryButton}>
              Fast Booking
            </Link>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <div key={link.href} className={styles.mobileNavItem}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        className={styles.mobileNavLink}
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      >
                        {link.label}
                        <KeyboardArrowDownIcon 
                          style={{ 
                            fontSize: 18, 
                            marginLeft: 4,
                            transform: isMobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.2s'
                          }} 
                        />
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            className={styles.mobileDropdown}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {serviceDropdownItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={styles.mobileDropdownItem}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      href={link.href} 
                      className={styles.mobileNavLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
