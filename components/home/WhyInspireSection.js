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
			title: "Professionally Trained Personnel",
			desc: "All staff undergo rigorous training and vetting processes.",
			icon: CheckCircleIcon,
		},
		{
			title: "Reliable Service Delivery",
			desc: "Consistent quality assurance and service standards.",
			icon: VerifiedIcon,
		},
		{
			title: "Health & Safety Compliance",
			desc: "Full compliance with environmental and safety regulations.",
			icon: HealthAndSafetyIcon,
		},
		{
			title: "Social Impact Focus",
			desc: "Embedded workforce development creating real change.",
			icon: VolunteerActivismIcon,
		},
		{
			title: "Clear Reporting",
			desc: "Transparent client accountability and performance tracking.",
			icon: AssessmentIcon,
		},
	];

	const stats = [
		{ label: "Staff Training Completion", value: 100 },
		{ label: "Client Satisfaction", value: 98 },
		{ label: "Career Transition Success", value: 85 },
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
								We combine professional excellence with social impact, delivering world-class facility services while empowering our workforce to build meaningful careers.
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
							<h3 className={styles.commitmentTitle}>Our Commitment</h3>
							<p className={styles.commitmentDesc}>Redefining facility services in Africa</p>

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
