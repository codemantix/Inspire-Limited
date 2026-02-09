import Layout from "../components/Layout";
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
			<HeroSection />

			<IntroSection />

			<ServicesSection />

			<ApproachSection />

			<ValuesSection />

			<WhyInspireSection />

			<WhoWeServeSection />

			<CTASection />
		</Layout>
	);
}
