import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PublicIcon from "@mui/icons-material/Public";
import styles from "./ValuesSection.module.css";

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

const commitmentStats = [
	{ icon: SchoolIcon, value: "85%", label: "Career Transition Success Rate" },
	{ icon: AssignmentTurnedInIcon, value: "100%", label: "Staff Training Completion" },
	{ icon: PublicIcon, value: null, label: "Building Africa's most professional facility workforce" },
];

export default function ValuesSection() {
	return (
		<section className={styles.section}>
			<motion.div 
				className={styles.container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={fadeInUp}
			>
				<div className={styles.commitmentGrid}>
					<motion.div className={styles.commitmentText} variants={fadeInLeft}>
						<p className={styles.eyebrow}>OUR COMMITMENT</p>
						<h2 className={styles.sectionTitle}>Redefining What a Cleaning Company Can Be</h2>
						<p className={styles.bodyText}>
							At Inspire Limited, we believe the facility services industry can do more than clean spaces, it can change lives. Every cleaner in our workforce is enrolled in a structured 12-month career development and transition program, designed to help them build skills, shift their mindset, and move into the career paths they&apos;ve always wanted.
						</p>
						<p className={styles.bodyText}>
							This isn&apos;t charity. It&apos;s strategy. Motivated, growing workers deliver better service. Clients get more engaged professionals. And the industry gets a new standard.
						</p>
						<p className={styles.bodyText}>
							When you partner with Inspire, you&apos;re not just outsourcing a cleaning problem, you&apos;re contributing to something bigger.
						</p>
					</motion.div>

					<motion.div
						className={styles.statsCol}
						variants={staggerContainer}
					>
					{commitmentStats.map((stat, index) => {
						const Icon = stat.icon;
						return (
						<motion.div
							key={index}
							className={styles.statBadge}
							variants={staggerItem}
							whileHover={{ y: -4, transition: { duration: 0.2 } }}
						>
							<div className={styles.statIconWrapper}>
								<Icon style={{ fontSize: 28, color: "#02CE02" }} />
							</div>
								<div className={styles.statTextBlock}>
									{stat.value && <span className={styles.statValue}>{stat.value}</span>}
									<span className={styles.statLabel}>{stat.label}</span>
								</div>
							</motion.div>
						);
					})}
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
