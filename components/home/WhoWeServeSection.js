import { motion } from "framer-motion";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FactoryIcon from "@mui/icons-material/Factory";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import styles from "./WhoWeServeSection.module.css";

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
	hidden: { opacity: 0, y: 20 },
	visible: { 
		opacity: 1, 
		y: 0,
		transition: { duration: 0.4 }
	}
};

export default function WhoWeServeSection() {
	const clients = [
		{
			title: "Corporate Organizations",
			desc: "Office spaces and headquarters",
			icon: BusinessIcon,
		},
		{
			title: "Banks & Financial Institutions",
			desc: "Secure financial environments",
			icon: AccountBalanceIcon,
		},
		{
			title: "Real Estate & Property Managers",
			desc: "Managed properties and developments",
			icon: ApartmentIcon,
		},
		{
			title: "Industrial & Manufacturing",
			desc: "Production facilities and plants",
			icon: FactoryIcon,
		},
		{
			title: "Residential Estates",
			desc: "Homes and residential communities",
			icon: HomeWorkIcon,
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
				<div className={styles.contentGrid}>
					<motion.div 
						className={styles.leftContent}
						variants={fadeInLeft}
					>
						<div className={styles.sectionHeader}>
							<p className={styles.eyebrow}>WHO WE SERVE</p>
							<h2 className={styles.sectionTitle}>Target Clients</h2>
						</div>

						<motion.div 
							className={styles.clientsGrid}
							variants={staggerContainer}
						>
							{clients.map((client) => {
								const Icon = client.icon;
								return (
									<motion.div
										key={client.title}
										className={styles.clientCard}
										variants={staggerItem}
										whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
									>
										<div className={styles.iconWrapper}>
											<Icon style={{ fontSize: 28, color: "#228B22" }} />
										</div>
										<div className={styles.clientContent}>
											<h3 className={styles.clientTitle}>{client.title}</h3>
											<p className={styles.clientDesc}>{client.desc}</p>
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
						<div className={styles.imageWrapper}>
							<img 
								src="/images/hero/about-hero.jpg" 
								alt="Modern office building and corporate spaces" 
								className={styles.image}
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
