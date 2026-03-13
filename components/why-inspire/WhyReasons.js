import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "./WhyReasons.module.css";

const reasons = [
  {
    number: "01",
    title: "You Never Have to Chase Us",
    paragraphs: [
      "The most common complaint organisations have about cleaning service providers is inconsistency, staff who don't show up, supervisors who don't respond, and standards that slip after the first month.",
      "At Inspire, we are structured to prevent exactly this. Every deployment runs on documented daily checklists, attended by field supervisors who check in on-site regularly. If a cleaner is absent, we replace them within 48 hours, without you having to ask. If something is wrong, our client contact team reaches out before you do.",
      "You get a cleaning partner that manages itself.",
    ],
    bullets: null,
  },
  {
    number: "02",
    title: "Every Person We Deploy Has Been Trained, Vetted, and Certified",
    paragraphs: [
      "We do not send strangers into your facility. Every cleaning personnel member deployed by Inspire has gone through:",
    ],
    bullets: [
      "Background checks and reference verification",
      "Technical cleaning training covering correct techniques, chemical handling, equipment use, and surface care",
      "Health and safety certification",
      "Workplace conduct and professional etiquette training",
      "Ongoing development through our internal career program",
    ],
    closer: "You get a professional, not just a person with a mop.",
  },
  {
    number: "03",
    title: "We Are Compliance-Ready, So You Are Too",
    paragraphs: [
      "Whether your facility is a bank, a manufacturing plant, a clinic, or a corporate headquarters, compliance is not optional. Inspire operates to ISO-aligned Standard Operating Procedures across all service lines. Our documentation covers:",
    ],
    bullets: [
      "Chemical safety data and usage records",
      "Attendance and task completion logs",
      "Supervisor visit reports",
      "Post-treatment certificates for fumigation services",
      "Monthly performance summaries for all retainer clients",
    ],
    closer: "Every document is available for internal audit or regulatory inspection, because we keep records even when no one is asking.",
  },
  {
    number: "04",
    title: "You Always Know What You Are Getting, and What You Are Paying For",
    paragraphs: [
      "Pricing surprises and vague deliverables are the norm in this industry. We work differently.",
      "Every Inspire contract specifies exactly what is included: the number of personnel, working hours, task frequency, supervision schedule, and reporting structure. Our monthly reports give you attendance data, task completion rates, and a log of every issue raised and resolved.",
      "No ambiguity. No inflated invoices. No wondering if you got what you paid for.",
    ],
    bullets: null,
  },
  {
    number: "05",
    title: "You Get a More Motivated Workforce, Because We Invest in Ours",
    paragraphs: [
      "Staff turnover is one of the biggest hidden costs in outsourced cleaning, every time a cleaner leaves, there is disruption, retraining, and a dip in quality. We reduce turnover by doing something most cleaning companies never do: we invest in our people.",
      "Every Inspire employee is enrolled in a 12-month structured career development and transition program. They have goals, mentors, and a roadmap. They are not just counting down to the end of a shift, they are building toward something. That motivation shows up in the quality of their work, in their conduct on your premises, and in the care they bring to your space.",
      "When you partner with Inspire, you are not just outsourcing a cleaning problem. You are getting a team of people who have a reason to show up and do their best work, every day.",
    ],
    bullets: null,
  },
  {
    number: "06",
    title: "We Cover Everything Under One Roof",
    paragraphs: [
      "Most facilities need more than one type of service. You should not need three different vendors, three different contacts, and three different contracts to keep your space clean and pest-free. Inspire covers:",
    ],
    bullets: [
      "BPO Outsourced Cleaners, for organisations that want a permanent, managed cleaning team",
      "Commercial & Industrial Cleaning, for deep cleaning, post-construction, and institutional facilities",
      "Residential Cleaning, for homes, estates, and short-let properties",
      "Fumigation & Pest Control, for residential, commercial, and industrial environments",
    ],
    closer: "One call. One contract. One accountable partner.",
  },
];

export default function WhyReasons() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className={`${styles.reason} ${index % 2 !== 0 ? styles.reasonAlt : ""}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.numberCol}>
              <span className={styles.number}>{reason.number}</span>
            </div>
            <div className={styles.contentCol}>
              <h3 className={styles.title}>{reason.title}</h3>
              {reason.paragraphs.map((p, i) => (
                <p key={i} className={styles.para}>{p}</p>
              ))}
              {reason.bullets && (
                <ul className={styles.bulletList}>
                  {reason.bullets.map((b, i) => (
                    <li key={i} className={styles.bulletItem}>
                      <CheckCircleOutlineIcon className={styles.bulletIcon} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {reason.closer && (
                <p className={styles.closer}>{reason.closer}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}