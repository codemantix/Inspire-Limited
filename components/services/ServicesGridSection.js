import { motion } from "framer-motion";
import Link from "next/link";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import PestControlIcon from "@mui/icons-material/PestControl";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./ServicesGridSection.module.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function ServicesGridSection() {
  const servicesList = [
    {
      icon: CleaningServicesIcon,
      title: "Outsourced Cleaning Personnel",
      description: "Trained, supervised cleaning staff for organizations that prefer to outsource recruitment and management.",
      features: ["Vetted personnel", "Ongoing supervision", "Staff replacement"],
      image: "/images/services/outsourced-personnel.jpg",
      link: "/services/bpo-cleaning",
      reverse: false
    },
    {
      icon: ApartmentIcon,
      title: "Commercial & Industrial Cleaning",
      description: "Professional cleaning for offices, banks, industrial sites and institutional facilities.",
      features: ["Quality standards", "Safety compliance", "Detailed reporting"],
      image: "/images/services/commercial-cleaning.jpg",
      link: "/services/commercial-industrial",
      reverse: true
    },
    {
      icon: HomeIcon,
      title: "Residential Cleaning",
      description: "Reliable cleaning services for homes, estates, and managed residential properties.",
      features: ["Discreet service", "Attention to detail", "Flexible scheduling"],
      image: "/images/services/residential-cleaning.jpg",
      link: "/services/residential",
      reverse: false
    },
    {
      icon: PestControlIcon,
      title: "Fumigation & Pest Control",
      description: "End-to-end fumigation and pest control for residential, commercial, and industrial environments.",
      features: ["Approved methods", "Service reports", "Preventive programs"],
      image: "/images/services/fumigation-pest-control.jpg",
      link: "/services/fumigation",
      reverse: true
    }
  ];

  return (
    <section className={styles.servicesGridSection}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className={styles.servicesGrid}
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`${styles.serviceCard} ${service.reverse ? styles.serviceCardReverse : ''}`}
            >
              <div className={styles.serviceContent}>
                <div className={styles.serviceIconWrapper}>
                  <service.icon className={styles.serviceIcon} />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={styles.serviceFeature}>
                      <CheckCircleIcon className={styles.checkIcon} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.link} className={styles.ctaButton}>
                  <span>Learn More</span>
                  <ArrowForwardIcon className={styles.ctaIcon} />
                </Link>
              </div>
              <div className={styles.serviceImageWrapper}>
                <div 
                  className={styles.serviceImage}
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
