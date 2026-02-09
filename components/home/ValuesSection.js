import { motion } from "framer-motion";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import DiamondIcon from "@mui/icons-material/Diamond";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import styles from "./ValuesSection.module.css";

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

export default function ValuesSection() {
	const values = [
		{
			title: "Dignity of Work",
			desc: "Every role deserves respect and opportunity.",
			icon: WorkspacePremiumIcon,
			color: "#228B22"
		},
		{
			title: "Excellence in Delivery",
			desc: "We uphold high service and safety standards.",
			icon: DiamondIcon,
			color: "#02CE02"
		},
		{
			title: "Accountability",
			desc: "We take ownership of outcomes and performance.",
			icon: VerifiedIcon,
			color: "#228B22"
		},
		{
			title: "Impact",
			desc: "We create measurable value in spaces and in people.",
			icon: TrendingUpIcon,
			color: "#02CE02"
		},
		{
			title: "Integrity",
			desc: "We act ethically and transparently.",
			icon: SecurityIcon,
			color: "#228B22"
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
					<p className={styles.eyebrow}>OUR VALUES</p>
					<h2 className={styles.sectionTitle}>What Drives Us Forward</h2>
					<p className={styles.sectionDesc}>
						Our core values shape every interaction, decision, and outcome we deliver.
					</p>
				</div>

				<motion.div 
					className={styles.valuesGrid}
					variants={staggerContainer}
				>
				{values.map((value, index) => {
					const Icon = value.icon;
					return (
						<motion.div
							key={value.title}
							className={styles.valueCard}
							variants={staggerItem}
							whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
						>
							<motion.div 
								className={styles.iconWrapper}
								whileHover={{ scale: 1.1, rotate: 5 }}
								transition={{ duration: 0.3 }}
							>
								<Icon style={{ fontSize: 24, color: value.color }} />
							</motion.div>
							<h3 className={styles.cardTitle}>{value.title}</h3>
							<p className={styles.cardDesc}>{value.desc}</p>
							<div className={styles.cardGlow} style={{ background: `radial-gradient(circle at center, ${value.color}20 0%, transparent 70%)` }} />
						</motion.div>
					);
				})}
				</motion.div>
			</motion.div>
		</section>
	);
}
