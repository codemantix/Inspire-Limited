import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import ServicesSection from "../components/home/ServicesSection";
import ApproachSection from "../components/home/ApproachSection";
import ValuesSection from "../components/home/ValuesSection";
import WhyInspireSection from "../components/home/WhyInspireSection";
import WhoWeServeSection from "../components/home/WhoWeServeSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
	return (
		<Layout>
			<SEO
				title="Inspire Limited | Professional Facility Services in Nigeria"
				description="Inspire Limited delivers professional cleaning, outsourced personnel, pest control, and facility management services across Nigeria. Transform spaces, transform people."
				canonical="/"
				jsonLd={{
					"@context": "https://schema.org",
					"@type": "Organization",
					name: "Inspire Limited",
					url: "https://inspireservicesltd.com",
					logo: "https://inspireservicesltd.com/InspireLogo.svg",
					description: "Professional facility services company in Nigeria delivering cleaning, outsourced personnel, pest control, and workforce development.",
					address: {
						"@type": "PostalAddress",
						addressCountry: "NG",
					},
					sameAs: [],
					serviceType: [
						"Commercial Cleaning",
						"Residential Cleaning",
						"Outsourced Cleaning Personnel",
						"Fumigation & Pest Control",
					],
				}}
			/>
			<HeroSection />

			<IntroSection />

			<ServicesSection />

			<WhoWeServeSection />

			<ApproachSection />

			<WhyInspireSection />

			<ValuesSection />

			<CTASection />
		</Layout>
	);
}
