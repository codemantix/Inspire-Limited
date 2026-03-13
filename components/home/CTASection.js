import Link from "next/link";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import styles from "./CTASection.module.css";

const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: { 
		opacity: 1, 
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" }
	}
};

const fadeInLeft = {
	hidden: { opacity: 0, x: -30 },
	visible: { 
		opacity: 1, 
		x: 0,
		transition: { duration: 0.6, ease: "easeOut" }
	}
};

const fadeInRight = {
	hidden: { opacity: 0, x: 30 },
	visible: { 
		opacity: 1, 
		x: 0,
		transition: { duration: 0.6, ease: "easeOut" }
	}
};

export default function CTASection() {
	return (
		<section className={styles.section}>
			<motion.div 
				className={styles.container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={fadeInUp}
			>
				<motion.div 
					className={styles.ctaCard}
					variants={fadeInUp}
				>
					<motion.div 
						className={styles.leftContent}
						variants={fadeInLeft}
					>
<h2 className={styles.title}>Ready to Remove Facility Management From Your To-Do List?</h2>
					<p className={styles.description}>
						Let’s talk about your space, your team size, and what reliable, fully managed facility services would look like for your organisation.
						</p>
						
						<div className={styles.buttonGroup}>
							<motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
							<Link href="/contact" className={styles.primaryButton}>
								Request a Quote
									<ArrowForwardIcon style={{ fontSize: 20, marginLeft: 8 }} />
								</Link>
							</motion.div>
							<motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
								<Link href="/contact" className={styles.secondaryButton}>
									Talk to Our Team
								</Link>
							</motion.div>
						</div>
					</motion.div>

					<motion.div 
						className={styles.rightContent}
						variants={fadeInRight}
					>
						<h3 className={styles.contactTitle}>Get in Touch</h3>
						
						<div className={styles.contactList}>
							<motion.div 
								className={styles.contactItem}
								whileHover={{ x: 5, transition: { duration: 0.2 } }}
							>
								<div className={styles.contactIcon}>
									<PhoneIcon style={{ fontSize: 24, color: "#228B22" }} />
								</div>
								<a href="tel:+2349132736772" className={styles.contactText}>
									(+234) 913 273 6772
								</a>
							</motion.div>

							<motion.div 
								className={styles.contactItem}
								whileHover={{ x: 5, transition: { duration: 0.2 } }}
							>
								<div className={styles.contactIcon}>
									<EmailIcon style={{ fontSize: 24, color: "#228B22" }} />
								</div>
								<a href="mailto:hello@inspireservicesltd.com" className={styles.contactText}>
									hello@inspireservicesltd.com
								</a>
							</motion.div>
						</div>
					</motion.div>
					</motion.div>
				</motion.div>
		</section>
	);
}
