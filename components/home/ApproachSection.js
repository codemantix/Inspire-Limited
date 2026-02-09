import { motion } from "framer-motion";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
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
			icon: AutorenewIcon,
			title: "Transform Spaces",
			desc: "Trained, supervised cleaning personnel for organizations that prefer to outsource recruitment, training, and day-to-day management."
		},
		{
			number: "02",
			icon: SchoolIcon,
			title: "Be Transformed",
			desc: "We provide structured training, mentorship, and supervision for our workforce, ensuring continuous growth and skill development."
		},
		{
			number: "03",
			icon: TrendingUpIcon,
			title: "Transition",
			desc: "We provide structured training, mentorship, and supervision for our workforce, ensuring continuous growth and skill development."
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
					<h2 className={styles.sectionTitle}>Transform. Be Transformed. Transition.</h2>
					<p className={styles.sectionDesc}>
						This operational philosophy guides how we work, creating value for both spaces and people.
					</p>
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
			</motion.div>
		</section>
	);
}
