import { motion } from "framer-motion";
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
	"Professionally trained and supervised personnel",
	"Consistent quality assurance and reporting",
	"Health, safety, and environmental compliance",
	"Embedded workforce development and impact",
	"Client-focused delivery and accountability",
];

const chips = [
	"ISO-aligned SOPs",
	"Transparent reporting",
	"Impact-first hiring",
	"Fast response teams",
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
						<p className={styles.eyebrow}>Intro</p>
						<h2 className={styles.title}>
							Reliable facility services with
							<span className={styles.titleAccent}> measurable social impact.</span>
						</h2>
						<p className={styles.body}>
							Inspire Limited delivers professional facility and environmental
							services across cleaning, outsourced personnel, and pest control.
							We combine rigorous operations with workforce development to keep
							spaces safe while creating real career pathways.
						</p>
						<div className={styles.chipRow}>
							{chips.map((chip) => (
								<span key={chip} className={styles.chip}>
									{chip}
								</span>
							))}
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
