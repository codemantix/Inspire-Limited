import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TimelineIcon from "@mui/icons-material/Timeline";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import styles from "./HeroSection.module.css";

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
			staggerChildren: 0.2,
			delayChildren: 0.3
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

export default function HeroSection() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	
	const backgroundImages = [
		"/images/services/bpo.jpg",
		"/images/services/residential.jpg",
		"/images/hero/hero3.webp",
		"/images/services/fumigation-hero.jpg",
	];
	
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => 
				(prevIndex + 1) % backgroundImages.length
			);
		}, 5000); // Change image every 5 seconds
		
		return () => clearInterval(interval);
	}, [backgroundImages.length]);
	
	const stats = [
		{ value: "12", label: "Months Career Transition", icon: TimelineIcon },
		{ value: "100%", label: "Trained personnel", icon: VerifiedIcon },
		{ value: "24/7", label: "Service Support", icon: SupportAgentIcon },
	];

	return (
		<section className={styles.heroSection}>
			{/* Background Image Slider */}
			<div className={styles.backgroundSlider}>
				{backgroundImages.map((image, index) => (
					<div
						key={index}
						className={`${styles.backgroundImage} ${
							index === currentImageIndex ? styles.backgroundImageActive : ""
						}`}
						style={{ backgroundImage: `url(${image})` }}
					/>
				))}
			</div>
			
			<div className={styles.heroOverlay} />
			<div className={styles.heroContent}>
				<motion.div
					className={styles.heroCenter}
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
				>
					<motion.div className={styles.badge} variants={fadeInUp}>
						<span className={styles.badgeDot} />
						Professional Facility Services
					</motion.div>
					
					<motion.h1 className={styles.heroTitle} variants={fadeInUp}>
						Transforming Spaces,<br />
						<span className={styles.heroTitleGreen}>Transforming People</span>
					</motion.h1>
					
					<motion.p className={styles.heroDescription} variants={fadeInUp}>
						Delivering reliable, compliant cleaning solutions while creating structured<br />
						pathways for workforce development and career transition across Africa.
					</motion.p>
					
					<motion.div className={styles.heroButtons} variants={fadeInUp}>
						<Link href="/contact" className={styles.primaryButton}>
							Request a Quote
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</Link>
						<Link href="/services" className={styles.secondaryButton}>
							Explore Our Services
						</Link>
					</motion.div>
				</motion.div>

				<motion.div 
					className={styles.statsContainer}
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
				>
					{stats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<motion.div
								key={index}
								className={styles.statItem}
								variants={staggerItem}
							>
								<div className={styles.statRow}>
									<div className={styles.statIcon}>
										<Icon sx={{fontSize: {xs: 16} }} style={{ fontSize: 32, color: "#02CE02" }} />
									</div>
									<div className={styles.statValue}>{stat.value}</div>
								</div>
								<div className={styles.statLabel}>{stat.label}</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
