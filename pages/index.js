import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../components/common/Footer";
import FrequentlyQuestions from "../components/homepage/FrequentlyQuestions";
import HomeBanner from "../components/homepage/HomeBanner";
import HowItWorks from "../components/homepage/HowItWorks";
import HowToBuy from "../components/homepage/HowToBuy";
import PurchaseBrand from "../components/homepage/PurchaseBrand";
import ReadyToNext from "../components/homepage/ReadyToNext";

const Index = () => {
	return (
		<> 
			<HomeBanner />
			<PurchaseBrand />
			<HowToBuy />
			<HowItWorks />
			<FrequentlyQuestions />
			<ReadyToNext />
			<Footer/>
		</>
	)
}

export default Index;
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	}
}