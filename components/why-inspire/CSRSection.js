import { motion } from "framer-motion";
import Link from "next/link";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import styles from "./CSRSection.module.css";

export default function CSRSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Text Content */}
          <div className={styles.content}>
            <p className={styles.eyebrow}>WORKFORCE DEVELOPMENT</p>
            <h2 className={styles.title}>Structured Career Transition for Our People</h2>
            <p className={styles.text}>
              We believe in the dignity of work and the potential within every individual. 
              Our BPO cleaning personnel undergo comprehensive training and structured career 
              development programs, enabling them to transition into supervisory and management 
              roles within the industry.
            </p>
            
            <Link href="/career" className={styles.button}>
              Partner With Us
            </Link>
          </div>

          {/* Right Column: Before/After Slider */}
          <div className={styles.visualCol}>
            <div className={styles.imageWrapper}>
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="/images/about-before.jpg" alt="Before Cleaning" />}
                itemTwo={<ReactCompareSliderImage src="/images/about-after.jpg" alt="After Cleaning" />}
                className={styles.sliderContainer}
              />
              <div className={styles.badgesContainer}>
                <span className={styles.badge}>Before</span>
                <span className={`${styles.badge} ${styles.badgeAfter}`}>After</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
