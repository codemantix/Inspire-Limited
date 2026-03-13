import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AssessmentIcon from "@mui/icons-material/Assessment";
import styles from "./WhyInspireSection.module.css";

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
			staggerChildren: 0.1
		}
	}
};

const staggerItem = {
	hidden: { opacity: 0, x: -20 },
	visible: { 
		opacity: 1, 
		x: 0,
		transition: { duration: 0.5 }
	}
};

export default function WhyInspireSection() {
	const whyItems = [
		{
			title: "Reliable Service Delivery",
			desc: "Structured processes, dedicated supervisors, and a staff replacement guarantee mean your facility is never left uncovered.",
			icon: VerifiedIcon,
		},
		{
			title: "Professionally Trained Personnel",
			desc: "Every cleaner is vetted, trained, uniformed, and equipped before they enter your space, and continuously developed while on your contract.",
			icon: CheckCircleIcon,
		},
		{
			title: "Health & Safety Compliance",
			desc: "We operate to ISO-aligned SOPs and adhere to hygiene, safety, and environmental regulations across all service types.",
			icon: HealthAndSafetyIcon,
		},
		{
			title: "Clear Reporting and Accountability",
			desc: "Transparent performance tracking, monthly reports, and a dedicated client contact, you always know exactly what you’re getting.",
			icon: AssessmentIcon,
		},
		{
			title: "Embedded Social Value, At No Extra Cost",
			desc: "Choosing Inspire means your contract supports real workforce development. Our staff transition into better careers, so you always have motivated, purpose-driven professionals in your facility.",
			icon: VolunteerActivismIcon,
		},
	];

	const stats = [
		{ label: "Client Satisfaction", value: 98 },
		{ label: "SLA & Task Completion Rate", value: 97 },
		{ label: "Personnel Trained & Certified", value: 100 },
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
				<div className={styles.contentGrid}>
					<motion.div 
						className={styles.leftContent}
						variants={fadeInLeft}
					>
						<div className={styles.sectionHeader}>
							<p className={styles.eyebrow}>WHY CHOOSE US</p>
							<h2 className={styles.sectionTitle}>The Inspire Difference</h2>
							<p className={styles.sectionDesc}>
							Professional facility services, purpose-built for organisations that expect more.
							</p>
						</div>

						<motion.div 
							className={styles.whyList}
							variants={staggerContainer}
						>
							{whyItems.map((item) => {
								const Icon = item.icon;
								return (
									<motion.div
										key={item.title}
										className={styles.whyItem}
										variants={staggerItem}
										whileHover={{ x: 5, transition: { duration: 0.2 } }}
									>
										<div className={styles.iconWrapper}>
											<Icon style={{ fontSize: 28, color: "#228B22" }} />
										</div>
										<div className={styles.whyContent}>
											<h3 className={styles.whyTitle}>{item.title}</h3>
											<p className={styles.whyDesc}>{item.desc}</p>
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>

					<motion.div 
						className={styles.rightContent}
						variants={fadeInRight}
					>
						<motion.div 
							className={styles.commitmentCard}
							whileHover={{ y: -8, transition: { duration: 0.3 } }}
						>
							<div className={styles.commitmentIcon}>
								<CheckCircleOutlineIcon style={{ fontSize: 56, color: "#228B22", strokeWidth: 0.5 }} />
							</div>
<h3 className={styles.commitmentTitle}>Numbers That Speak for Themselves</h3>
						<p className={styles.commitmentDesc}>Results our clients count on, every contract.</p>

							<div className={styles.statsGrid}>
								{stats.map((stat) => (
									<div key={stat.label} className={styles.statItem}>
										<div className={styles.statHeader}>
											<span className={styles.statLabel}>{stat.label}</span>
											<span className={styles.statValue}>{stat.value}%</span>
										</div>
										<div className={styles.progressBar}>
											<motion.div 
												className={styles.progressFill}
												initial={{ width: 0 }}
												whileInView={{ width: `${stat.value}%` }}
												viewport={{ once: true }}
												transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
											/>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
