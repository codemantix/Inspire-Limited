import Link from "next/link";
import { motion } from "framer-motion";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import PestControlIcon from "@mui/icons-material/PestControl";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./ServicesSection.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function ServicesSection() {
  const services = [
    {
      category: "BPO Services",
      title: "Outsourced Cleaning Personnel",
      desc: "Trained, supervised cleaning personnel for organizations that prefer to outsource recruitment, training, and day-to-day management.",
      icon: CleaningServicesIcon,
      color: "#228B22",
      features: [
        "Trained and vetted personnel",
        "Ongoing supervision and monitoring",
        "Continuous training and development",
        "Reliable staff replacement",
      ],
      image: "/images/services/outsourced-personnel.jpg",
      link: "/services/bpo-cleaning",
    },
    {
      category: "Home Services",
      title: "Residential Cleaning",
      desc: "Professional cleaning services for homes, estates, and managed residential properties with reliability and attention to detail.",
      icon: HomeIcon,
      color: "#228B22",
      features: [
        "Home and apartment cleaning",
        "Estate maintenance services",
        "Discretion and reliability",
        "Detailed attention to care",
      ],
      image: "/images/services/residential-cleaning.jpg",
      link: "/services/residential-cleaning",
    },
    {
      category: "Facility Services",
      title: "Commercial & Industrial Cleaning",
      desc: "Structured cleaning services for offices, banks, industrial sites, and institutional facilities ensuring hygiene and compliance.",
      icon: ApartmentIcon,
      color: "#228B22",
      features: [
        "Office and corporate cleaning",
        "Industrial facility services",
        "Bank and institutional care",
        "Safety compliance standards",
      ],
      image: "/images/services/commercial-cleaning.jpg",
      link: "/services/commercial-industrial",
    },
    {
      category: "Environmental Services",
      title: "Fumigation & Pest Control",
      desc: "End-to-end fumigation and pest control services for all environments, delivered safely and in line with regulatory standards.",
      icon: PestControlIcon,
      color: "#228B22",
      features: [
        "Residential pest control",
        "Commercial fumigation",
        "Industrial pest management",
        "Regulatory compliance",
      ],
      image: "/images/services/fumigation-pest-control.jpg",
      link: "/services/fumigation",
    },
  ];

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>WHAT WE DO</p>
          <h2 className={styles.sectionTitle}>
            Comprehensive Facility Services
          </h2>
          <p className={styles.sectionDesc}>
            From personnel outsourcing to specialized cleaning and pest control,
            we deliver excellence across all facility service needs.
          </p>
        </div>
      </motion.div>

      {/* Service Cards with Alternating Layout */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={service.title}
            className={styles.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div
              className={`${styles.serviceCard} ${!isEven ? styles.serviceCardReverse : ""}`}
            >
              <motion.div
                className={styles.serviceImage}
                variants={isEven ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={service.image} alt={service.title} />
              </motion.div>
              <motion.div
                className={styles.serviceContent}
                variants={isEven ? fadeInRight : fadeInLeft}
              >
                <div className={styles.serviceIconWrapper}>
                  <div className={styles.serviceIconBadge}>
                    <Icon style={{ fontSize: 28, color: service.color }} />
                  </div>
                  <p className={styles.serviceCategory}>{service.category}</p>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <motion.ul
                  className={styles.featureList}
                  variants={staggerContainer}
                >
                  {service.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className={styles.featureItem}
                      variants={staggerItem}
                    >
                      <CheckCircleIcon
                        style={{
                          fontSize: 18,
                          color: service.color,
                          flexShrink: 0,
                        }}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <Link href={service.link} className={styles.ctaButton}>
                  <span>Learn More</span>
                  <ArrowForwardIcon className={styles.ctaIcon} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
