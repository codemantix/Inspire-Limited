import { motion } from "framer-motion";
import VerifiedIcon from "@mui/icons-material/Verified";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BoltIcon from "@mui/icons-material/Bolt";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import styles from "./IntroSection.module.css";

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

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12
		}
	}
};

const staggerItem = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4 }
	}
};

const listItems = [
	"Recruitment, vetting, training, and supervision",
	"Instant staff replacement within 48 hours",
	"Health, safety, and environmental compliance",
	"Monthly performance reports and accountability",
	"Workforce development embedded in every contract",
];

const chips = [
	{ label: "ISO-Aligned SOPs", icon: VerifiedIcon },
	{ label: "Transparent Reporting", icon: AssessmentIcon },
	{ label: "Fast Response Teams", icon: BoltIcon },
	{ label: "Health & Safety Compliant", icon: HealthAndSafetyIcon },
];





export default function IntroSection() {
	return (
		<section className={styles.introSection}>
			<div className={styles.container}>
				<motion.div
					className={styles.gridlayer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={fadeInUp}
				>
					<motion.div className={styles.copy} variants={fadeInLeft}>
					<p className={styles.eyebrow}>WHO WE ARE</p>
					<h2 className={styles.title}>
						Reliable Facility Services.
						<span className={styles.titleAccent}> Zero HR Headaches.</span>
					</h2>
					<p className={styles.body}>
						Inspire Limited takes the burden of cleaning management off your organisation - completely. We handle recruitment, vetting, training, supervision, replacements, compliance reporting, and quality assurance, all under one contract.
					</p>
					<p className={styles.body}>
						Whether you need a dedicated team of outsourced cleaners deployed to your office, a deep clean of your facility, pest control for your property, or professional residential cleaning - we show up, we deliver, and we report back.
					</p>
					<p className={styles.body}>
						And because every member of our workforce is on a structured career development program, you don’t just get cleaners. You get motivated, growing professionals invested in doing excellent work.
						</p>
						<div className={styles.chipRow}>
							{chips.map((chip) => {
								const Icon = chip.icon;
								return (
									<span key={chip.label} className={styles.chip}>
										<Icon style={{ fontSize: 14 }} />
										{chip.label}
									</span>
								);
							})}
						</div>
						
						
					</motion.div>

					<motion.div
						className={styles.card}
						variants={fadeInRight}
						whileHover={{ y: -6 }}
						transition={{ duration: 0.3 }}
					>
						<div className={styles.cardHeader}>
							<p className={styles.cardEyebrow}>What you get</p>
							<span className={styles.sparkBadge}>Impact built in</span>
						</div>
						<motion.ul
							className={styles.list}
							variants={staggerContainer}
						>
							{listItems.map((item) => (
								<motion.li
									key={item}
									className={styles.listItem}
									variants={staggerItem}
									whileHover={{ x: 6 }}
									transition={{ duration: 0.2 }}
								>
									<span className={styles.listIcon}>
										<svg
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5 10.5L8.2 13.6L15 6.4"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
									<span>{item}</span>
								</motion.li>
							))}
						</motion.ul>
						<p className={styles.cardFooter}>
							Full-service reporting, transparent metrics, and always-on client
							support.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
