import { NextSeo } from "next-seo"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page404 = ({ locale }) => {
	return (
		<div className="not-found-container">
			<NextSeo title={"404"} />
		</div>
	)
}
export default Page404
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	}
}