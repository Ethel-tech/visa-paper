import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import TrustPilot from "../components/TrustPilot/TrustPilot";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import PopularDestination from "../components/PopularDestination/PopularDestination";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Ratings from "../components/Ratings/Ratings";
import Testrate from "../components/Testrate";
import FooterSection from "../components/Footer/Footer";

function Dashboard() {
	return (
		<div>
			<Navigation />
			<Hero />
			<TrustPilot />
			<WhyChooseUs />
			<PopularDestination />
			<TrustedBy />
			<HowItWorks />
			<Ratings />
			<FooterSection />
		</div>
	);
}

export default Dashboard;
