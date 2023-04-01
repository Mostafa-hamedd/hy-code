import "../styles/app.scss";
import "../styles/app-rtl.scss";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "../components/common/Layout";
import { DefaultSeo } from "next-seo";
import { useState } from "react";
import localFont from "next/font/local"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { appWithTranslation, useTranslation } from "next-i18next"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
const myFontBold = localFont({
	src: "../public/fonts/HyundaiSansHeadOffice-Bold.ttf",
	display: "swap",
});
const myFontLight = localFont({
	src: "../public/fonts/HyundaiSansHeadOffice-Light.ttf",
	display: "swap",
});

function MyApp({ Component, pageProps }) {
	const [queryClient] = useState(() => new QueryClient());
	const { t } = useTranslation('common')
	return (
		<>
			<DefaultSeo
				title={t("headers.default_title")}
				titleTemplate={t("headers.default_title")}
				description={"Hyundai"}
				dangerouslySetAllPagesToNoIndex={true}
				dangerouslySetAllPagesToNoFollow={true}
			/>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<ReactQueryDevtools initialIsOpen={false} />
					<ToastContainer />
					<Layout>
						<style jsx global>
							{`
								:root {
									--font-bold: ${myFontBold.style.fontFamily};
									--font-light: ${myFontLight.style.fontFamily};
								}
							`}
						</style>
						<Component {...pageProps} />
					</Layout>
				</Hydrate>
			</QueryClientProvider>
		</>
	);
}

export default appWithTranslation(MyApp);
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
