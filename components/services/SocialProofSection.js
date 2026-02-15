import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from "./SocialProofSection.module.css";
import React, { useRef } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
      staggerChildren: 0.2
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

export default function SocialProofSection() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      name: "Adebayo Okonkwo",
      role: "Facilities Manager",
      company: "First Bank Nigeria",
      text: "Inspire Limited has been managing our cleaning personnel for over 2 years. Their supervision, training, and replacement system ensures we never experience service disruption. Highly professional.",
      rating: 5
    },
    {
      name: "Mrs. Chidinma Eze",
      role: "Homeowner",
      company: "Lekki Phase 1",
      text: "Their residential cleaning service is exceptional. The team is discreet, thorough, and reliable. I've recommended them to several friends in the estate.",
      rating: 5
    },
    {
      name: "Engr. Tunde Bakare",
      role: "Operations Manager",
      company: "Industrial Manufacturing Ltd",
      text: "We contracted Inspire for our factory deep cleaning and fumigation. The result exceeded expectations. Their team understood the safety protocols and delivered on time.",
      rating: 5
    },
    {
      name: "Mr. Oluwaseun Adeyemi",
      role: "Property Manager",
      company: "Lagos Real Estate",
      text: "We manage over 50 properties and Inspire is our go-to for all cleaning needs. Responsive, reliable, and always professional. They handle everything from routine maintenance to emergency cleanups.",
      rating: 5
    },
    {
      name: "Dr. Amina Hassan",
      role: "Medical Director",
      company: "Premier Healthcare Center",
      text: "Hygiene is critical in healthcare. Inspire's attention to detail and understanding of medical facility protocols is outstanding. They've been our trusted partner for 3 years.",
      rating: 5
    }
  ];

  const stats = [
    { value: "50+", label: "Happy Clients" },
    { value: "3+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "98%", label: "Client Retention" }
  ];

  return (
    <section className={styles.socialProofSection}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className={styles.sectionHeader}
        >
          <p className={styles.eyebrow}>Client Testimonials</p>
          <h2 className={styles.sectionTitle}>
            Trusted by <span className={styles.titleAccent}>businesses and homes</span> across Nigeria
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className={styles.statsGrid}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={staggerItem} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className={styles.carouselContainer}>
          <button 
            onClick={() => swiperRef.current?.slidePrev()} 
            className={styles.carouselButton}
            aria-label="Previous testimonial"
          >
            <ArrowBackIosIcon className={styles.arrowIcon} />
          </button>

          <div className={styles.carouselWrapper}>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ 
                clickable: true,
                el: '.custom-swiper-pagination',
                bulletClass: styles.indicator,
                bulletActiveClass: styles.indicatorActive
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              className={styles.swiperContainer}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.testimonialCard}>
                    <FormatQuoteIcon className={styles.quoteIcon} />
                    <div className={styles.rating}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className={styles.starIcon} />
                      ))}
                    </div>
                    <p className={styles.testimonialText}>{testimonial.text}</p>
                    <div className={styles.testimonialAuthor}>
                      <div className={styles.authorAvatar}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className={styles.authorName}>{testimonial.name}</div>
                        <div className={styles.authorRole}>
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button 
            onClick={() => swiperRef.current?.slideNext()} 
            className={styles.carouselButton}
            aria-label="Next testimonial"
          >
            <ArrowForwardIosIcon className={styles.arrowIcon} />
          </button>
        </div>

        {/* Carousel Indicators - Custom Pagination Target */}
        <div className={`custom-swiper-pagination ${styles.carouselIndicators}`}></div>
      </div>
    </section>
  );
}
