import { motion } from "framer-motion";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import StarIcon from "@mui/icons-material/Star";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import styles from "./CoreValues.module.css";

const values = [
  {
    icon: <EmojiPeopleIcon fontSize="large" />,
    title: "Dignity of Work",
    text: "Every role in our organisation is treated with respect. A cleaner is not a lesser professional - they are a trained, supervised, accountable member of a service team. We build this into how we hire, train, pay, and develop our people.",
  },
  {
    icon: <StarIcon fontSize="large" />,
    title: "Excellence in Delivery",
    text: "We set high standards and we hold ourselves to them. Every deployment, every cleaning visit, every pest treatment is executed to a documented process with quality checks and accountability built in.",
  },
  {
    icon: <AssignmentTurnedInIcon fontSize="large" />,
    title: "Accountability",
    text: "We take ownership of outcomes. When something goes wrong, we fix it - not make excuses. Clients receive transparent reporting precisely because we believe in being held to what we promise.",
  },
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: "Integrity",
    text: "We act ethically in every relationship - with clients, with workers, with suppliers, and with the public. No shortcuts. No dishonesty. No looking the other way.",
  },
  {
    icon: <VolunteerActivismIcon fontSize="large" />,
    title: "Impact",
    text: "We measure ourselves not only by client satisfaction and revenue growth, but by how many people's lives we have meaningfully changed. Both metrics matter equally to us.",
  },
];

export default function CoreValues() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>OUR VALUES</p>
          <h2 className={styles.title}>What We Stand For</h2>
        </div>

        <div className={styles.grid}>
          {values.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}