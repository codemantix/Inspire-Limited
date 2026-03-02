import { useState } from "react";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "./ContactFormSection.module.css";

const contactDetails = [
  { icon: PhoneIcon, label: "Phone", value: "(+234) 813 567 8905", href: "tel:+2348135678905" },
  { icon: EmailIcon, label: "Email", value: "info@inspirelimited.com", href: "mailto:info@inspirelimited.com" },
  { icon: LocationOnIcon, label: "Address", value: "Lagos, Nigeria", href: null },
  { icon: AccessTimeIcon, label: "Business Hours", value: "Mon – Fri: 8am – 6pm", href: null },
];

const steps = [
  "Submit your inquiry via the form or contact us directly",
  "Our team schedules a consultation to understand your needs",
  "We provide a customised proposal and service agreement",
  "Service deployment begins with dedicated supervision",
];

const services = [
  "Select a Service",
  "Outsourced Cleaning Personnel (BPO)",
  "Commercial & Industrial Cleaning",
  "Residential Cleaning",
  "Fumigation & Pest Control",
  "Multiple Services",
];

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
<div className={styles.mainGrid}>

          {/* ── Contact Form ─────────────────────────────── */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.formTitle}>Get in Touch</h2>
            <p className={styles.formSub}>
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className={styles.successBox}>
                <CheckCircleOutlineIcon className={styles.successIcon} />
                <p className={styles.successText}>
                  Thank you! We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>First Name</label>
                    <input type="text" className={styles.input} placeholder="Mike" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Last Name</label>
                    <input type="text" className={styles.input} placeholder="Babashola" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input type="email" className={styles.input} placeholder="mike@company.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input type="tel" className={styles.input} placeholder="+234 XXX XXX XXXX" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Company / Organisation</label>
                  <input type="text" className={styles.input} placeholder="Your Company Name" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Service of Interest</label>
                  <select className={styles.select} defaultValue="">
                    {services.map((s) => (
                      <option
                        key={s}
                        value={s === "Select a Service" ? "" : s}
                        disabled={s === "Select a Service"}
                      >
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell us about your requirements…"
                    required
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Contact Info ─────────────────────────────── */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.infoTitle}>Contact Information</h2>
            <p className={styles.infoSub}>
              Reach out to us directly or visit our office. We&apos;re here to answer your questions.
            </p>

            <div className={styles.infoCards}>
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className={styles.infoCard}>
                  <div className={styles.infoIconWrap}>
                    <Icon className={styles.infoIcon} />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>{label}</p>
                    {href ? (
                      <a href={href} className={styles.infoValue}>{value}</a>
                    ) : (
                      <p className={styles.infoValue}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.stepsCard}>
              <h3 className={styles.stepsTitle}>How to Start a Partnership</h3>
              <ol className={styles.stepsList}>
                {steps.map((step, i) => (
                  <li key={i} className={styles.stepItem}>
                    <span className={styles.stepNumber}>{i + 1}</span>
                    <p className={styles.stepText}>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
