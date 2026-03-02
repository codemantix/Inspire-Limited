import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./BeforeAfterGallery.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

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
    transition: { duration: 0.5 }
  }
};

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function BeforeAfterCard({ before, after, title, category }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let count = 0;
    function onLoad() {
      count += 1;
      if (count === 2) setLoaded(true);
    }

    const imgs = [before, after].map((src) => {
      const img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad; // don't block forever on broken images
      img.src = src;
      // already cached — readyState is "complete"
      if (img.complete) onLoad();
      return img;
    });

    return () => {
      imgs.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [before, after]);

  return (
    <motion.div
      variants={staggerItem}
      className={styles.galleryCard}
    >
      {/* Skeleton overlay — removed once both images are ready */}
      {!loaded && (
        <div className={styles.skeleton}>
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonBadge} />
            <div className={styles.skeletonTitle} />
          </div>
        </div>
      )}

      {/* Real card content — invisible until loaded */}
      <div className={loaded ? styles.cardVisible : styles.cardHidden}>
        <div className={styles.imageContainer}>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={before} alt="Before" />}
            itemTwo={<ReactCompareSliderImage src={after} alt="After" />}
            className={styles.sliderContainer}
          />
          <div className={styles.badgesContainer}>
            <span className={styles.badge}>Before</span>
            <span className={`${styles.badge} ${styles.badgeAfter}`}>After</span>
          </div>
        </div>
        <div className={styles.cardContent}>
          <span className={styles.category}>{category}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function BeforeAfterGallery() {
  const projects = [
    {
      before: "/images/gallery/before-office-1.jpg",
      after: "/images/gallery/after-office-1.jpg",
      title: "Corporate Office Deep Cleaning",
      category: "Commercial"
    },
    {
      before: "/images/gallery/before-residential-1.jpg",
      after: "/images/gallery/after-residential-1.jpg",
      title: "Luxury Apartment Transformation",
      category: "Residential"
    },
    {
      before: "/images/gallery/before-industrial-1.jpg",
      after: "/images/gallery/after-industrial-1.jpg",
      title: "Manufacturing Floor Restoration",
      category: "Industrial"
    },
    {
      before: "/images/gallery/before-kitchen-1.jpg",
      after: "/images/gallery/after-kitchen-1.jpg",
      title: "Restaurant Kitchen Sanitization",
      category: "Commercial"
    },
    {
      before: "/images/gallery/before-bathroom-1.jpg",
      after: "/images/gallery/after-bathroom-1.jpg",
      title: "Bathroom Deep Clean & Polish",
      category: "Residential"
    },
    {
      before: "/images/gallery/before-warehouse-1.jpg",
      after: "/images/gallery/after-warehouse-1.jpg",
      title: "Warehouse Post-Construction Clean",
      category: "Industrial"
    }
  ];

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className={styles.sectionHeader}
        >
          <p className={styles.eyebrow}>Our Work Speaks</p>
          <h2 className={styles.sectionTitle}>
            See the <span className={styles.titleAccent}>transformation</span>
          </h2>
          <p className={styles.sectionDescription}>
            Use the slider to compare the before and after states.
            Real results from real projects across Nigeria.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className={styles.galleryGrid}
        >
          {projects.map((project, index) => (
            <BeforeAfterCard
              key={index}
              before={project.before}
              after={project.after}
              title={project.title}
              category={project.category}
            />
          ))}
        </motion.div>

        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className={styles.ctaNote}
        >
          <p>Want to see more? Visit our portfolio or contact us for a free site assessment.</p>
        </motion.div> */}
      </div>
    </section>
  );
}
