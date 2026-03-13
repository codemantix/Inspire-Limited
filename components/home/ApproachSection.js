import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";
import AssessmentIcon from "@mui/icons-material/Assessment";
import styles from "./ApproachSection.module.css";

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

export default function ApproachSection() {
	const approaches = [
		{
			number: "01",
			icon: SearchIcon,
			title: "We Assess Your Facility",
			desc: "We conduct a site inspection to understand your space, headcount, usage patterns, and cleaning requirements. You get a tailored scope - not a generic package."
		},
		{
			number: "02",
			icon: GroupsIcon,
			title: "We Deploy and Supervise",
			desc: "We place vetted, uniformed personnel on-site, supported by our field supervisors. Daily checklists, attendance logs, and quality checks keep standards consistent from day one."
		},
		{
			number: "03",
			icon: AssessmentIcon,
			title: "We Report and Improve",
			desc: "Every client receives monthly performance reports with attendance records, task completion rates, and issue logs. We flag problems before you do - and fix them faster."
		},
	];

	return (
		<section className={styles.section}>
			<motion.div 
				className={styles.container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={fadeInUp}
			>
				<div className={styles.sectionHeader}>
					<p className={styles.eyebrow}>OUR APPROACH</p>
					<h2 className={styles.sectionTitle}>Simple, Supervised, and Accountable - Every Time</h2>
				</div>

				<motion.div 
					className={styles.approachGrid}
					variants={staggerContainer}
				>
					{approaches.map((approach) => {
						const Icon = approach.icon;
						return (
							<motion.div
								key={approach.number}
								className={styles.approachCard}
								variants={staggerItem}
								whileHover={{ y: -8, transition: { duration: 0.3 } }}
							>
								<div className={styles.cardNumber}>{approach.number}</div>
								<div className={styles.iconWrapper}>
									<Icon style={{ fontSize: 32, color: "#228B22" }} />
								</div>
								<h3 className={styles.cardTitle}>{approach.title}</h3>
								<p className={styles.cardDesc}>{approach.desc}</p>
							</motion.div>
						);
					})}
				</motion.div>

				<p className={styles.missionThread}>
					Every Inspire team member is enrolled in our career development program - so you&apos;re not just getting a cleaner, you&apos;re getting someone who shows up with purpose.
				</p>
			</motion.div>
		</section>
	);
}
