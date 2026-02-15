import { motion } from "framer-motion";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./FAQSection.module.css";

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
      staggerChildren: 0.1
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

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <motion.div
      variants={staggerItem}
      className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
      onClick={onClick}
    >
      <div className={styles.faqQuestion}>
        <h3 className={styles.questionText}>{question}</h3>
        <div className={styles.iconWrapper}>
          {isOpen ? (
            <RemoveIcon className={styles.icon} />
          ) : (
            <AddIcon className={styles.icon} />
          )}
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={styles.faqAnswer}
      >
        <div className={styles.answerContent}>
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What areas do you cover?",
      answer: "We provide services across Lagos, Abuja, Port Harcourt, and surrounding areas. For locations outside these regions, please contact us to discuss availability and logistics."
    },
    {
      question: "Are your staff vetted and trained?",
      answer: "Yes. All our personnel undergo thorough background checks, reference verification, and professional training before deployment. We also provide ongoing supervision and skills development."
    },
    {
      question: "How quickly can you deploy cleaning personnel?",
      answer: "For BPO cleaning personnel, we typically deploy within 48-72 hours for urgent requests. For planned contracts, we recommend 1-2 weeks notice to ensure proper matching and orientation."
    },
    {
      question: "Do you provide cleaning equipment and supplies?",
      answer: "This depends on your service package. For BPO personnel, clients typically provide equipment. For one-time or contract cleaning, we can provide all necessary equipment and eco-friendly cleaning supplies."
    },
    {
      question: "What if I'm not satisfied with a staff member?",
      answer: "We offer immediate replacement at no extra cost. Simply contact your account manager, and we'll arrange a suitable replacement within 24-48 hours."
    },
    {
      question: "Are you insured and licensed?",
      answer: "Yes. Inspire Limited is fully licensed and insured. We carry comprehensive liability insurance to protect both our clients and our workforce."
    },
    {
      question: "How do you handle quality control?",
      answer: "We conduct regular site inspections, client feedback sessions, and performance reviews. Each service includes a quality checklist and reporting system to ensure consistent standards."
    },
    {
      question: "Can I get a customized service package?",
      answer: "Absolutely. We understand that every facility has unique needs. Contact us for a free consultation and we'll design a service package tailored to your requirements and budget."
    }
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className={styles.sectionHeader}
        >
          <p className={styles.eyebrow}>Frequently Asked Questions</p>
          <h2 className={styles.sectionTitle}>
            Got questions? <span className={styles.titleAccent}>We've got answers</span>
          </h2>
          <p className={styles.sectionDescription}>
            Find answers to common questions about our services, pricing, and processes.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className={styles.faqList}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className={styles.ctaBox}
        >
          <h3 className={styles.ctaTitle}>Still have questions?</h3>
          <p className={styles.ctaText}>
            Our team is ready to help. Contact us for personalized assistance.
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:+2348012345678" className={styles.primaryButton}>
              Call Us Now
            </a>
            <a href="https://wa.me/2348012345678" className={styles.secondaryButton}>
              WhatsApp Chat
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
