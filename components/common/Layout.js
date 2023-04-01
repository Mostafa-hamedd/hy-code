import { motion } from "framer-motion"
import IsMobileProvider from "../../contexts/isMobileContext"
import { PageAnimate } from "./Animations"
import { useRouter } from "next/router"
import Navbar from "./Navbar"

export default function Layout({ children }) {
	const router = useRouter()
	return (
		<>
			<IsMobileProvider>
				<motion.main
					initial="hidden"
					animate="enter"
					exit="exit"
					transition={{ type: "linear" }}
					variants={PageAnimate}
				>
					<Navbar/>
					{children}
				</motion.main>
			</IsMobileProvider>
		</>
	)
}
